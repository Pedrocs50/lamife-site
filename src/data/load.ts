// Reads the YAML files in this folder and checks them, so a typo fails the build with a clear message
// instead of showing a broken page.
import { load } from 'js-yaml';

export type Links = { lattes?: string; linkedin?: string; orcid?: string; github?: string; email?: string };
export type Member = { name: string; role: string; unit: string; links?: Links };
export type Project = { title: { en: string; pt?: string }; line: string; status: string; href: string; summary: { en: string; pt?: string } };

const ROLES = ['supervisor', 'researcher', 'postdoc', 'phd', 'masters', 'undergrad', 'external'];
const LINK_KEYS = ['lattes', 'linkedin', 'orcid', 'github', 'email'];
const STATUSES = ['active', 'finished'];

function read(file: string, text: string): unknown[] {
  const data = load(text);
  if (!Array.isArray(data)) throw new Error(`${file}: o arquivo precisa ser uma lista (cada item começa com "- ").`);
  return data;
}
const fail = (file: string, i: number, who: string, msg: string): never => {
  throw new Error(`${file}, item ${i + 1}${who ? ` (${who})` : ''}: ${msg}`);
};
const isText = (v: unknown) => typeof v === 'string' && v.trim() !== '';
const isL = (v: any) => v && isText(v.en) && (v.pt === undefined || typeof v.pt === 'string');

export function loadTeam(file: string, text: string): Member[] {
  return read(file, text).map((raw: any, i) => {
    const who = raw?.name ?? '';
    if (!isText(raw?.name)) fail(file, i, who, 'falta "name".');
    if (!ROLES.includes(raw.role)) fail(file, i, who, `"role" deve ser uma destas: ${ROLES.join(', ')}.`);
    if (!isText(raw.unit)) fail(file, i, who, 'falta "unit".');
    for (const [k, v] of Object.entries(raw.links ?? {})) {
      if (!LINK_KEYS.includes(k)) fail(file, i, who, `link "${k}" não existe. Use: ${LINK_KEYS.join(', ')}.`);
      if (v && typeof v !== 'string') fail(file, i, who, `o link "${k}" precisa ser texto.`);
    }
    return raw as Member;
  });
}

export function loadProjects(file: string, text: string, lines: string[]): Project[] {
  return read(file, text).map((raw: any, i) => {
    const who = raw?.title?.en ?? '';
    if (!isL(raw?.title)) fail(file, i, who, '"title" precisa ter "en".');
    if (!isL(raw?.summary)) fail(file, i, who, '"summary" precisa ter "en".');
    if (raw.line !== '' && !lines.includes(raw.line)) fail(file, i, who, `"line" deve ser "" ou uma destas: ${lines.join(', ')}.`);
    if (!STATUSES.includes(raw.status)) fail(file, i, who, `"status" deve ser: ${STATUSES.join(' ou ')}.`);
    if (raw.href !== undefined && typeof raw.href !== 'string') fail(file, i, who, '"href" precisa ser texto.');
    return { href: '', ...raw } as Project;
  });
}
