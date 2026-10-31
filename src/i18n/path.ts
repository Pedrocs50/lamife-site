import type { Lang } from './ui';
export const prefixFor = (lang: Lang) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return lang === 'pt' ? `${base}/pt` : base;
};
export const fmtDate = (iso: string, lang: Lang) =>
  new Date(iso + 'T12:00:00').toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
