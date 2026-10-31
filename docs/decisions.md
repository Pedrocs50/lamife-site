# Registro de decisões

## 2026-10-31

- O site terá várias páginas, não uma página única com âncoras. Menu com 6 itens.
- Inglês como idioma padrão e português como segundo idioma, com botão EN | PT.
- Primeiro o básico: site estático que apresenta o laboratório, as linhas de pesquisa, projetos, publicações, notícias, equipe e vagas. O painel `/admin` fica para depois.
- O painel `/admin`, quando vier, será um CMS baseado em Git (Decap CMS ou Sveltia CMS), com login pela conta do GitHub, só para pessoas com permissão no repositório. Para o login funcionar fora do Netlify, é preciso um pequeno proxy de OAuth (por exemplo, em um Cloudflare Worker).
- Hospedagem final: GitHub Pages, publicado apenas quando a primeira versão estiver pronta. O Cloudflare Pages fica como opção para quando o painel de administração entrar.
- Enquanto o professor e a equipe não aprovarem, só placeholders. Nenhum dado pessoal real no repositório público.
- Paleta Observatório (fundo claro, índigo e magenta) e tipografia Space Grotesk, Inter e IBM Plex Mono.
- Efeitos: nível 1 no site inteiro primeiro. Nível 2 só no topo e no bloco explicativo, depois.
- Wireframes de baixa fidelidade feitos em 31/10/2026 (home desktop e celular, Research, Projects, Publications, News, Team, Join us).
- Hyperframes avaliado como ferramenta opcional para vídeos, e não como base do site.
- Licença do repositório: indefinida por enquanto, a combinar com o professor.
- Framework: Astro (site estático). Pedro liberou seguir em 31/10/2026.
- Base criada: layout, cabeçalho com menu de 6 itens e botão EN | PT, rodapé, Home curta com placeholders e páginas vazias para os outros 5 itens. Textos em `src/i18n/ui.ts`.

## Pendências

- Encurtar a Home e desenhar a página de detalhe de uma linha de pesquisa.
- Confirmar com o professor o nome do laboratório em inglês, logo ou orientações visuais do INPE, e a licença.
- Pedir ao professor a equipe atualizada e os textos das linhas de pesquisa.
