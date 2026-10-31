# Modelo de conteúdo

Cada tipo de conteúdo vira um arquivo de dados (Markdown com cabeçalho YAML, ou YAML/JSON). Esse modelo serve ao site agora e ao futuro painel `/admin`, que vai gerar um formulário para cada tipo.

## Regras gerais

- Inglês é obrigatório em todo campo de texto. Português é opcional, e o site mostra o inglês quando faltar a tradução.
- Dados de pessoas reais (nome, foto, contatos) só entram com a concordância da própria pessoa. Enquanto isso, usar placeholders.
- Textos copiados da página do LAMIFE no gov.br não devem ser reaproveitados, porque a licença do portal não permite derivações. Os textos finais vêm do professor.

## Tipos

| Tipo | Campos principais |
|---|---|
| Member | nome, função (supervisor, pesquisador, tecnologista, pós-doc, doutorado, mestrado, iniciação científica, colaborador externo), foto, instituição, tema de pesquisa, links (Lattes, ORCID, LinkedIn, GitHub), situação (ativo ou egresso) |
| Research line | título, resumo simples, resumo técnico, métodos, imagem, projetos relacionados |
| Project | título, linha de pesquisa, resumo, parceiros, situação, logo ou imagem, links |
| Publication | título, autores, ano, veículo, DOI, link de preprint, tipo (artigo, pôster, tese ou dissertação), linha de pesquisa, projeto |
| News | título, data, categoria, imagem, resumo, texto, destaque (sim ou não) |
| Tool | nome, descrição, repositório, licença, artigos relacionados |
| Opportunity | nível (mestrado, doutorado, iniciação científica), descrição, requisitos, link de como se candidatar |
| Partner | nome, logo, país, link |

## Relações

Publicações, projetos, ferramentas e pessoas apontam para uma linha de pesquisa. Assim a página de cada linha lista automaticamente o que está ligado a ela, sem edição manual.

Para publicações, guardar título, autores, DOI e link. Evitar subir o PDF da editora para o repositório, por causa de direitos autorais e de tamanho de arquivo.
