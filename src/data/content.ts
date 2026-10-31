// Lab content. Sources are listed in docs/content-sources.md.
// English is required in every text field; Portuguese is optional and falls back to English.
// Texts are written for this site from facts published by INPE and from the lab poster; they are drafts until the supervisor approves them.
import type { Lang } from '../i18n/ui';

export type L = { en: string; pt?: string };
export const tr = (v: L, lang: Lang) => v[lang] ?? v.en;

export const researchLines = [
  {
    slug: 'space-physics',
    accent: 'var(--line-space)',
    letter: 'A',
    title: { en: 'Space Physics under Extreme Regimes', pt: 'Física Espacial em Regimes Extremos' },
    tagline: { en: 'From the Sun to the Universe', pt: 'Do Sol ao Universo' },
    topics: { en: ['Space weather', 'Radio astronomy', 'Astrophysics', 'Cosmology'], pt: ['Clima espacial', 'Radioastronomia', 'Astrofísica', 'Cosmologia'] },
    simple: {
      en: 'We look for rare and sudden events in space data, such as solar disturbances and transient astronomical signals, and try to explain what causes them.',
      pt: 'Procuramos eventos raros e repentinos em dados do espaço, como perturbações solares e sinais astronômicos transientes, e tentamos explicar o que os causa.',
    },
    technical: {
      en: 'Anomaly detection and forecasting on space-weather and astronomical time series and images, with interpretable deep learning (LSTM, LSTM-Autoencoder and Gradient Pattern Analysis). Applications include space-weather monitoring (EMBRACE), brokers for astrophysical transients in the LSST science collaboration, and radio astronomy.',
      pt: 'Detecção de anomalias e previsão em séries temporais e imagens de clima espacial e astronomia, com aprendizado profundo interpretável (LSTM, LSTM-Autoencoder e Análise de Padrões de Gradiente). As aplicações incluem o monitoramento do clima espacial (EMBRACE), brokers de transientes astrofísicos na colaboração científica do LSST e a radioastronomia.',
    },
    methods: ['Explainable AI', 'LSTM', 'LSTM-Autoencoder', 'Gradient Pattern Analysis', 'CyMorph'],
  },
  {
    slug: 'environmental-physics',
    accent: 'var(--line-env)',
    letter: 'B',
    title: { en: 'Environmental Physics under Extreme Regimes', pt: 'Física Ambiental em Regimes Extremos' },
    tagline: { en: 'A more resilient Earth through data, physics and AI', pt: 'Um planeta mais resiliente com dados, física e IA' },
    topics: { en: ['Climate systems', 'Extreme events', 'Vegetation dynamics', 'Environmental forensics'], pt: ['Sistemas climáticos', 'Eventos extremos', 'Dinâmica da vegetação', 'Perícia ambiental'] },
    simple: {
      en: 'We study climate extremes and environmental disasters, natural or caused by people, to detect them earlier and understand how they unfold.',
      pt: 'Estudamos extremos climáticos e desastres ambientais, naturais ou causados pelo ser humano, para detectá-los mais cedo e entender como eles evoluem.',
    },
    technical: {
      en: 'Detection and modeling of anomalies in climate and environmental data, combining data-driven models with physics-informed approaches.',
      pt: 'Detecção e modelagem de anomalias em dados climáticos e ambientais, combinando modelos orientados por dados com abordagens orientadas pela física.',
    },
    methods: ['Explainable AI', 'Physics-informed models', 'Time series'],
  },
  {
    slug: 'energy',
    accent: 'var(--line-energy)',
    letter: 'C',
    title: { en: 'Energy under Extreme Regimes', pt: 'Energia em Regimes Extremos' },
    tagline: { en: 'From plasma instability to sustainable energy', pt: 'Da instabilidade de plasma à energia sustentável' },
    topics: { en: ['Tokamak disruptions', 'Plasma dynamics', 'Quantum sensors', 'Advanced materials'], pt: ['Disrupções em tokamaks', 'Dinâmica de plasmas', 'Sensores quânticos', 'Materiais avançados'] },
    simple: {
      en: 'We try to anticipate sudden losses of control in fusion plasmas, a key step toward clean and sustainable energy.',
      pt: 'Tentamos antecipar perdas repentinas de controle em plasmas de fusão, um passo importante rumo a uma energia limpa e sustentável.',
    },
    technical: {
      en: 'Modeling and prediction of plasma disruptions in tokamaks, in the context of the ITER programme, with the AEDeep prototype (Anomaly Explorer with Deep Learning), validated on nonlinear models such as Ginzburg–Landau and coupled map lattices.',
      pt: 'Modelagem e previsão de disrupções de plasma em tokamaks, no contexto do programa ITER, com o protótipo AEDeep (Anomaly Explorer with Deep Learning), validado em modelos não lineares como Ginzburg–Landau e redes de mapas acoplados.',
    },
    methods: ['AEDeep', 'LSTM-Autoencoder', 'Ginzburg–Landau', 'Coupled map lattices'],
  },
  {
    slug: 'health',
    accent: 'var(--line-health)',
    letter: 'D',
    title: { en: 'Health under Extreme Regimes', pt: 'Saúde em Regimes Extremos' },
    tagline: { en: 'Human health in extreme environments for a better future', pt: 'Saúde humana em ambientes extremos para um futuro melhor' },
    topics: { en: ['Aerospace medicine', 'Disease diagnosis', 'Biomaterials', 'Tissue regeneration'], pt: ['Medicina aeroespacial', 'Diagnóstico de doenças', 'Biomateriais', 'Regeneração de tecidos'] },
    simple: {
      en: 'We explore how the same interpretable-AI tools can support human health, from aerospace medicine to diagnosis and tissue regeneration.',
      pt: 'Exploramos como as mesmas ferramentas de IA interpretável podem apoiar a saúde humana, da medicina aeroespacial ao diagnóstico e à regeneração de tecidos.',
    },
    technical: {
      en: '[Technical summary to be provided by the supervisor.]',
      pt: '[Resumo técnico a ser fornecido pelo orientador.]',
    },
    methods: ['Explainable AI', 'Deep learning'],
  },
];

export const projects = [
  {
    title: { en: 'Space-weather monitoring and forecasting (EMBRACE)', pt: 'Monitoramento e previsão do clima espacial (EMBRACE)' },
    line: 'space-physics', status: 'active', href: 'https://www2.inpe.br/climaespacial/portal/pt/',
    summary: { en: 'Interpretable anomaly detection that supports the Brazilian Space Weather Study and Monitoring Program run by INPE.', pt: 'Detecção interpretável de anomalias que apoia o Programa de Estudo e Monitoramento Brasileiro de Clima Espacial, do INPE.' },
  },
  {
    title: { en: 'Brokers for astrophysical transients (ISSC-LSST)', pt: 'Brokers para transientes astrofísicos (ISSC-LSST)' },
    line: 'space-physics', status: 'active', href: 'https://issc.science.lsst.org/',
    summary: { en: 'Development of brokers for transient astrophysical events, with active participation in the ISSC-LSST consortium.', pt: 'Desenvolvimento de brokers para eventos astrofísicos transientes, com participação ativa no consórcio ISSC-LSST.' },
  },
  {
    title: { en: 'Radio astronomy (DIAST-INPE and BRICS-Astronomy)', pt: 'Radioastronomia (DIAST-INPE e BRICS-Astronomy)' },
    line: 'space-physics', status: 'active', href: 'https://www.bricsastronomy.org/',
    summary: { en: 'Participation in radio-astronomy initiatives of INPE\'s Astrophysics Division and of the BRICS Astronomy collaboration.', pt: 'Participação em iniciativas de radioastronomia da Divisão de Astrofísica do INPE e da colaboração BRICS-Astronomy.' },
  },
  {
    title: { en: 'Plasma disruption modeling (ITER context)', pt: 'Modelagem de disrupções de plasma (contexto ITER)' },
    line: 'energy', status: 'active', href: 'https://www.iter.org/',
    summary: { en: 'Prediction of disruptions in tokamak plasmas in the context of the international ITER programme.', pt: 'Previsão de disrupções em plasmas de tokamak no contexto do programa internacional ITER.' },
  },
  {
    title: { en: 'FAPESP Thematic Projects', pt: 'Projetos Temáticos da FAPESP' },
    line: '', status: 'active', href: '',
    summary: { en: 'The lab takes part in two FAPESP Thematic Projects (processes 2025/03076-5 and 2025/11753-7).', pt: 'O laboratório integra dois Projetos Temáticos da FAPESP (processos 2025/03076-5 e 2025/11753-7).' },
  },
];

export const funding = ['FAPESP', 'CNPq', 'FINEP'];

export const partners = [
  'IP&D-UNIVAP', 'USP', 'UnB', 'CBPF', 'UFRJ', 'UFF', 'UERJ', 'ICTP',
  'Universidad de Chile', 'University of Oxford', 'Nordita', 'Free University of Bozen-Bolzano', 'ITER Organization',
];

export const networks = [
  { name: 'BPG-LSST', href: 'https://bpg-lsst.linea.org.br/o-que-e-o-bpg/' },
  { name: 'INCT e-Universe (LIneA)', href: 'https://www.linea.org.br/' },
  { name: 'INCT Complex Systems (CBPF)', href: 'https://www.gov.br/cbpf/pt-br/inct-sc' },
];

export const tools = [
  { name: 'AEDeep', href: 'https://github.com/Desduh/AEDeep-Disruption-Prediction',
    description: { en: 'Anomaly Explorer with Deep Learning, a prototype for predicting plasma disruptions.', pt: 'Anomaly Explorer with Deep Learning, protótipo para prever disrupções de plasma.' } },
  { name: 'CyMorph', href: 'https://github.com/paulobarchi/CyMorph',
    description: { en: 'Prototype for galaxy-morphology analysis, developed with the group\'s methods.', pt: 'Protótipo para análise de morfologia de galáxias, desenvolvido com os métodos do grupo.' } },
];

// Only verified lab publications. Titles, authors and years were checked against the publisher or proceedings pages.
export const publications = [
  { title: 'Gradient pattern analysis applied to galaxy morphology', authors: 'R. R. Rosa, R. R. de Carvalho, R. A. Sautter, P. H. Barchi, D. H. Stalder, T. C. Moura, S. B. Rembold, D. R. F. Morell, N. C. Ferreira',
    year: 2018, venue: 'Monthly Notices of the Royal Astronomical Society: Letters', type: 'article', line: 'space-physics',
    href: 'https://doi.org/10.1093/mnrasl/sly054' },
  { title: 'Gradient Pattern Analysis of Coupled Map Lattices: Insights into Transient and Long-Term Behaviors', authors: 'R. A. Sautter, R. R. Rosa, L. O. Baraúna',
    year: 2023, venue: 'SBMAC proceedings', type: 'article', line: '',
    href: 'https://proceedings.sbmac.org.br/sbmac/article/view/4172' },
];

// Background reading cited on the lab's INPE page. These are NOT lab publications.
export const reading = [
  { title: 'Extreme events in biological, societal, and earth sciences: A systematic review of the literature', authors: 'M. Stewart, W. C. Carleton, H. S. Groucutt', year: 2022, venue: 'Frontiers in Earth Science', href: 'https://doi.org/10.3389/feart.2022.786829' },
  { title: 'Explainable Artificial Intelligence (XAI): What we know and what is left to attain Trustworthy Artificial Intelligence', authors: 'S. Ali et al.', year: 2023, venue: 'Information Fusion', href: 'https://doi.org/10.1016/j.inffus.2023.101805' },
];

export const news = [
  { date: '2026-09-23', category: 'events', title: { en: 'LAMIFE at WorCAP 2026', pt: 'LAMIFE no WorCAP 2026' },
    summary: { en: '[To confirm: LAMIFE presence at WorCAP 2026, Espaço Labs, INPE, São José dos Campos, 23–25 September 2026.]', pt: '[A confirmar: presença do LAMIFE no WorCAP 2026, Espaço Labs, INPE, São José dos Campos, 23 a 25 de setembro de 2026.]' }, featured: true },
  { date: '2026-08-03', category: 'papers', title: { en: '[News headline]', pt: '[Título da notícia]' },
    summary: { en: '[Short summary.]', pt: '[Resumo curto.]' }, featured: false },
  { date: '2026-06-20', category: 'lab', title: { en: '[News headline]', pt: '[Título da notícia]' },
    summary: { en: '[Short summary.]', pt: '[Resumo curto.]' }, featured: false },
];

// Names and roles come from INPE's public lab page and the lab poster. No photos, contacts or personal links.
export const team = [
  { name: 'Reinaldo Roberto Rosa', role: 'supervisor', unit: 'INPE / COPDT' },
  { name: 'Eduardo dos Santos Pereira', role: 'researcher', unit: 'COPDT' },
  { name: 'Stephan Stephany', role: 'researcher', unit: 'COPDT' },
  { name: 'André Martinon', role: 'researcher', unit: 'COPDT' },
  { name: 'Nilson Sant\'Anna', role: 'researcher', unit: 'COPDT' },
  { name: 'Francisco Carlos Rocha Fernandes', role: 'researcher', unit: 'DIAST' },
  { name: 'José Roberto Cecatto', role: 'researcher', unit: 'DIAST' },
  { name: 'Luan Orion Baraúna', role: 'postdoc', unit: 'DIAST' },
  { name: 'Mariana Rubet', role: 'postdoc', unit: 'COPDT' },
  { name: 'Fernando de Oliveira Pereira', role: 'phd', unit: 'CAP' },
  { name: 'Carlos Falandes', role: 'masters', unit: 'CAP' },
  { name: 'Salatiel Jordão', role: 'masters', unit: 'CAP' },
  { name: 'Andressa Ferreira', role: 'undergrad', unit: 'PIBIC-INPE' },
];

export const opportunities = [
  { level: 'masters', description: { en: 'Master\'s research through INPE\'s Applied Computing graduate programme (CAP). [Details on openings to be provided.]', pt: 'Pesquisa de mestrado pelo Programa de Pós-Graduação em Computação Aplicada do INPE (CAP). [Detalhes sobre vagas a serem fornecidos.]' } },
  { level: 'phd', description: { en: 'Doctoral research through INPE\'s Applied Computing graduate programme (CAP). [Details on openings to be provided.]', pt: 'Pesquisa de doutorado pelo Programa de Pós-Graduação em Computação Aplicada do INPE (CAP). [Detalhes sobre vagas a serem fornecidos.]' } },
  { level: 'postdoc', description: { en: 'Postdoctoral research on interpretable AI for extreme events. [Details to be provided.]', pt: 'Pesquisa de pós-doutorado em IA interpretável para eventos extremos. [Detalhes a serem fornecidos.]' } },
  { level: 'undergrad', description: { en: 'Undergraduate research (PIBIC). [Details on openings to be provided.]', pt: 'Iniciação científica (PIBIC). [Detalhes sobre vagas a serem fornecidos.]' } },
];

export const capHref = 'https://www.gov.br/inpe/pt-br/area-conhecimento/posgraduacao/cap';
