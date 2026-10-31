# Mapa do site

O site tem várias páginas, em vez de uma única página longa com âncoras. Motivos: cada página tem seu próprio link (útil para mandar a quem não conhece o laboratório), cada linha de pesquisa pode ser explicada em profundidade, e cada tipo de conteúdo vira uma lista gerada a partir de dados.

## Menu principal (6 itens)

Research, Projects, Publications, News, Team, Join us.

O contato fica dentro de Join us e no rodapé. O idioma troca por um botão EN | PT no topo (inglês é o padrão).

## Páginas

| Página | Conteúdo | Status |
|---|---|---|
| Home | Frase do laboratório, animação do espaço no topo, bloco "What do we do?", resumo das linhas de pesquisa, colaborações, últimas notícias, ferramentas e convite para participar. Deve ser curta e apontar para as outras páginas | Implementada com placeholders |
| Research | O que é um evento extremo, como a IA interpretável ajuda, métodos e linhas de pesquisa | Implementada com placeholders |
| Research line (detalhe) | Resumo simples, resumo técnico, métodos, projetos, artigos e pessoas ligados à linha | Implementada com placeholders |
| Projects and tools | Projetos e colaborações com filtro, instituições parceiras e ferramentas de código aberto | Implementada com placeholders |
| Publications | Artigos, pôsteres e teses, com busca e filtros | Implementada com placeholders |
| News | Notícia em destaque e lista | Implementada com placeholders |
| Team | Supervisão, pesquisadores, pós-doutorandos e estudantes, colaboradores externos | Implementada com placeholders |
| Join us and contact | Mestrado, doutorado, iniciação científica, como se candidatar, colaboração e formulário de contato | Implementada com placeholders |

Páginas de detalhe de projeto e de notícia ainda não foram desenhadas.

Os dados de exemplo ficam em `src/data/content.ts` e os textos das páginas em `src/i18n/pages.ts`.

## Regras de usabilidade

- Só criar uma página quando houver conteúdo para ela. Página quase vazia passa a impressão de abandono.
- Páginas longas ganham um índice de seções no topo ou na lateral, que traz de volta a vantagem do sumário em uma página só.
- Todo texto técnico tem um resumo em linguagem simples antes.
