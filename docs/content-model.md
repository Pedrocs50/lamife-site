# Modelo de conteúdo

Cada tipo de conteúdo vira um arquivo de dados (Markdown com cabeçalho YAML, ou YAML/JSON). Hoje a equipe fica em `src/data/team.yaml` e os projetos em `src/data/projects.yaml`. Esse modelo serve ao site agora e ao futuro painel `/admin`, que vai gerar um formulário para cada tipo.

## Regras gerais

- Inglês é obrigatório em todo campo de texto. Português é opcional, e o site mostra o inglês quando faltar a tradução.
- Nome, função e unidade de quem já aparece nas páginas públicas do INPE podem entrar. Foto, contatos e links pessoais só entram com a concordância da própria pessoa.
- Textos copiados ou traduzidos da página do LAMIFE no gov.br não devem ser reaproveitados, porque a licença do portal (CC BY-ND 3.0) não permite derivações. Os textos são escritos a partir dos fatos e revisados pelo professor.

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

## Como adicionar

- **Pessoa:** abra `src/data/team.yaml`, copie um bloco `- name:` e preencha nome, função (`role`), unidade e, se a pessoa concordar, os links.
- **Projeto:** abra `src/data/projects.yaml`, copie um bloco `- title:` e preencha título e resumo (inglês obrigatório, português opcional), linha de pesquisa, situação e link.
- Os comentários no começo de cada arquivo listam os valores aceitos. Se algo estiver errado, o build para e diz o arquivo, o item e o motivo.
