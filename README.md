# lamife-site

Website of **LAMIFE**, the Interpretable Machine Learning Laboratory for Physics of Extreme Events at INPE (Brazil's National Institute for Space Research).

> Status: first version built (Astro). Content is a draft until the lab supervisor approves it. Photos, contacts and personal links are added only with each person's agreement.

## About the project

The goal is a clear, bilingual site that lets people who have never heard of the lab understand what it researches, and lets people already in the field find projects, papers, tools and the team. The visual reference for scope is the LIAREA site (also at INPE), but LAMIFE will have its own identity and a multi-page structure, so each research line can be explained in depth.

## Planned stack

- Static, multi-page site. English by default, Portuguese as a second language.
- Content kept in data files (Markdown, YAML or JSON), so adding a person, paper or news item does not require touching layout code.
- Hosting: GitHub Pages, published only when the first version is ready.
- Likely framework: Astro (to be confirmed).
- Effects: subtle scroll reveals everywhere first; richer scroll-linked animation only in the hero and the explainer section, later.

## Repository layout

```
docs/            planning documents (site map, content model, design, decisions, references)
src/data/team.yaml      team members (edit this to add a person)
src/data/projects.yaml  projects (edit this to add a project)
```

Source code will be added once the framework is confirmed.

## Documentation

- [Site map](docs/sitemap.md)
- [Content model](docs/content-model.md)
- [Design: colors, typography, effects](docs/design.md)
- [Decisions log](docs/decisions.md)
- [References](docs/references.md)

## Roadmap

- [x] Site map and content model
- [x] Low-fidelity wireframes (desktop pages and mobile home)
- [x] Visual direction: Observatório palette
- [ ] Confirm framework
- [ ] Build the static version with placeholder data
- [ ] Review with the lab supervisor
- [ ] Publish on GitHub Pages
- [ ] Later: `/admin` panel so lab members can add content without commits

## Em português

Site do **LAMIFE**, o Laboratório de Aprendizagem de Máquina Interpretável em Física de Eventos Extremos do INPE. O projeto está em fase de planejamento e wireframes. Todo o conteúdo é provisório, e nenhum dado pessoal real é publicado aqui sem a concordância das pessoas envolvidas. Os documentos de planejamento estão em `docs/`.

## License

No license yet. It will be defined together with the lab supervisor.

Maintained by [@Pedrocs50](https://github.com/Pedrocs50).
