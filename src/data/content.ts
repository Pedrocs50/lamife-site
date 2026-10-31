// Placeholder content. Replace with real data once the supervisor and team approve.
// English is required in every text field; Portuguese is optional and falls back to English.
import type { Lang } from '../i18n/ui';

export type L = { en: string; pt?: string };
export const tr = (v: L, lang: Lang) => v[lang] ?? v.en;

export const researchLines = [
  { slug: 'line-1', title: { en: '[Research line 1]', pt: '[Linha de pesquisa 1]' },
    simple: { en: '[Plain-language summary of this research line.]', pt: '[Resumo em linguagem simples desta linha.]' },
    technical: { en: '[Technical summary: data, models and open questions.]', pt: '[Resumo técnico: dados, modelos e questões em aberto.]' },
    methods: ['Explainable AI', 'Time series', 'Deep learning'] },
  { slug: 'line-2', title: { en: '[Research line 2]', pt: '[Linha de pesquisa 2]' },
    simple: { en: '[Plain-language summary of this research line.]', pt: '[Resumo em linguagem simples desta linha.]' },
    technical: { en: '[Technical summary: data, models and open questions.]', pt: '[Resumo técnico: dados, modelos e questões em aberto.]' },
    methods: ['Causal inference', 'Physics-informed models'] },
  { slug: 'line-3', title: { en: '[Research line 3]', pt: '[Linha de pesquisa 3]' },
    simple: { en: '[Plain-language summary of this research line.]', pt: '[Resumo em linguagem simples desta linha.]' },
    technical: { en: '[Technical summary: data, models and open questions.]', pt: '[Resumo técnico: dados, modelos e questões em aberto.]' },
    methods: ['Feature attribution', 'Anomaly detection'] },
];

export const projects = [
  { title: { en: '[Project title A]', pt: '[Título do projeto A]' }, line: 'line-1', status: 'active',
    summary: { en: '[One-paragraph project summary.]', pt: '[Resumo do projeto em um parágrafo.]' }, partners: ['[Partner institution]'] },
  { title: { en: '[Project title B]', pt: '[Título do projeto B]' }, line: 'line-2', status: 'active',
    summary: { en: '[One-paragraph project summary.]', pt: '[Resumo do projeto em um parágrafo.]' }, partners: ['[Partner institution]', '[Partner institution]'] },
  { title: { en: '[Project title C]', pt: '[Título do projeto C]' }, line: 'line-3', status: 'finished',
    summary: { en: '[One-paragraph project summary.]', pt: '[Resumo do projeto em um parágrafo.]' }, partners: [] },
] as const;

export const partners = ['[Partner 1]', '[Partner 2]', '[Partner 3]', '[Partner 4]'];

export const tools = [
  { name: '[tool-name]', description: { en: '[What the tool does.]', pt: '[O que a ferramenta faz.]' }, license: '[License]' },
  { name: '[other-tool]', description: { en: '[What the tool does.]', pt: '[O que a ferramenta faz.]' }, license: '[License]' },
];

export const publications = [
  { title: '[Publication title 1]', authors: '[Author A], [Author B]', year: 2026, venue: '[Journal or conference]', type: 'article', line: 'line-1' },
  { title: '[Publication title 2]', authors: '[Author A], [Author C]', year: 2026, venue: '[Conference]', type: 'poster', line: 'line-2' },
  { title: '[Publication title 3]', authors: '[Author B], [Author D]', year: 2025, venue: '[Journal or conference]', type: 'article', line: 'line-1' },
  { title: '[Publication title 4]', authors: '[Author E]', year: 2025, venue: '[University]', type: 'thesis', line: 'line-3' },
  { title: '[Publication title 5]', authors: '[Author A], [Author F]', year: 2024, venue: '[Journal or conference]', type: 'article', line: 'line-3' },
];

export const news = [
  { date: '2026-10-01', category: 'lab', title: { en: '[Featured news headline]', pt: '[Título da notícia em destaque]' },
    summary: { en: '[Two-line summary of the featured story.]', pt: '[Resumo em duas linhas da notícia em destaque.]' }, featured: true },
  { date: '2026-09-12', category: 'events', title: { en: '[News headline]', pt: '[Título da notícia]' },
    summary: { en: '[Short summary.]', pt: '[Resumo curto.]' }, featured: false },
  { date: '2026-08-03', category: 'papers', title: { en: '[News headline]', pt: '[Título da notícia]' },
    summary: { en: '[Short summary.]', pt: '[Resumo curto.]' }, featured: false },
  { date: '2026-06-20', category: 'lab', title: { en: '[News headline]', pt: '[Título da notícia]' },
    summary: { en: '[Short summary.]', pt: '[Resumo curto.]' }, featured: false },
];

// Fictional people only. Real names, photos and contacts enter with each person's consent.
export const team = [
  { name: '[Name Surname]', role: 'supervisor', topic: { en: '[Research topic]', pt: '[Tema de pesquisa]' } },
  { name: '[Name Surname]', role: 'researcher', topic: { en: '[Research topic]', pt: '[Tema de pesquisa]' } },
  { name: '[Name Surname]', role: 'researcher', topic: { en: '[Research topic]', pt: '[Tema de pesquisa]' } },
  { name: '[Name Surname]', role: 'postdoc', topic: { en: '[Research topic]', pt: '[Tema de pesquisa]' } },
  { name: '[Name Surname]', role: 'phd', topic: { en: '[Research topic]', pt: '[Tema de pesquisa]' } },
  { name: '[Name Surname]', role: 'phd', topic: { en: '[Research topic]', pt: '[Tema de pesquisa]' } },
  { name: '[Name Surname]', role: 'masters', topic: { en: '[Research topic]', pt: '[Tema de pesquisa]' } },
  { name: '[Name Surname]', role: 'masters', topic: { en: '[Research topic]', pt: '[Tema de pesquisa]' } },
  { name: '[Name Surname]', role: 'undergrad', topic: { en: '[Research topic]', pt: '[Tema de pesquisa]' } },
  { name: '[Name Surname]', role: 'external', topic: { en: '[Institution]', pt: '[Instituição]' } },
];

export const opportunities = [
  { level: 'masters', description: { en: '[Description of master\'s openings.]', pt: '[Descrição das vagas de mestrado.]' } },
  { level: 'phd', description: { en: '[Description of PhD openings.]', pt: '[Descrição das vagas de doutorado.]' } },
  { level: 'undergrad', description: { en: '[Description of undergraduate research openings.]', pt: '[Descrição das vagas de iniciação científica.]' } },
];
