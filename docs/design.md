# Design

## Direção visual: Observatório

Fundo claro e acadêmico. A leitura de textos longos vem primeiro, e o clima de espaço aparece nos detalhes e na animação do topo.

| Papel | Nome | Hex |
|---|---|---|
| Fundo | Branco | #FFFFFF |
| Superfície | Lavanda | #ECEBFA |
| Cor da marca, botões e links | Índigo | #3B2FA0 |
| Destaque pontual | Magenta | #D6336C |
| Texto | Tinta | #12122B |
| Texto secundário | Roxo acinzentado | #4D4A7A |

Notas de contraste (calculadas à mão, a confirmar com um verificador antes de publicar):

- Índigo sobre branco passa com folga.
- Magenta sobre branco fica perto do mínimo de 4,5:1. Usar como fundo de selo com texto branco ou em elementos grandes, e não em texto pequeno sobre lavanda.
- Texto secundário sobre lavanda passa.

### Cores de apoio das linhas de pesquisa

Cada linha de pesquisa tem uma cor própria, usada no ícone, na borda do card e nas etiquetas. Todas passam de 4,5:1 sobre branco (calculado à mão, confirmar com verificador antes de publicar).

| Linha | Variável | Hex |
|---|---|---|
| A, Física Espacial | `--line-space` | #6D28D9 |
| B, Física Ambiental | `--line-env` | #0F766E |
| C, Energia | `--line-energy` | #C2410C |
| D, Saúde | `--line-health` | #1D4ED8 |

Alternativas consideradas e deixadas de lado: Violeta sideral (topo escuro, seções claras) e Noite solar (tema escuro inteiro). Dá para retomar depois, porque as cores ficam como variáveis.

## Tipografia

| Uso | Fonte |
|---|---|
| Títulos | Newsreader (serifa) |
| Corpo do texto | IBM Plex Sans |
| Etiquetas, tags e código | IBM Plex Mono |

Todas gratuitas no Google Fonts, com licença aberta. Corpo de texto entre 17 e 18 px, linhas de 65 a 75 caracteres. Se for preciso um tom mais acadêmico, trocar os títulos por uma fonte com serifa.

## Efeitos

Decisão: começar simples.

1. Nível 1, no site inteiro: elementos que surgem com fade e pequeno deslizamento ao rolar, reação ao passar o mouse, menu com contorno ao descer a página, transições suaves em links. CSS mais um trecho curto de JavaScript (IntersectionObserver), sem biblioteca.
2. Nível 2, mais adiante e só em dois pontos: paralaxe de estrelas no topo e uma narrativa que avança com o scroll no bloco "What do we do?". Opções: GSAP com ScrollTrigger (a página do GSAP diz que agora é gratuito, conferir a licença) ou CSS scroll-driven animations (no fim de 2026 o Firefox ainda mantinha o recurso desligado por padrão, então só como melhoria progressiva).
3. Nível 3 (3D ou WebGL): fora do escopo por enquanto.

Regras para qualquer efeito:

- Respeitar `prefers-reduced-motion`.
- O conteúdo deve aparecer corretamente mesmo sem JavaScript ou sem suporte ao efeito.
- Nada de sequestrar a rolagem da página.
- Animação do topo leve: vídeo curto, mudo e em loop, com imagem de capa, ou animação direto na página. Testar as duas no protótipo.

## Estado dos efeitos (31/10/2026)

- Nível 1 feito: surgimento ao rolar com atraso escalonado nos cards, hover nos cards e botões, cabeçalho que encolhe e ganha sombra ao rolar.
- Topo da Home animado (`HeroVisual.astro`): estrelas, constelações e uma série temporal que se desenha, com a anomalia destacada em magenta e a região que a "explica". SVG e CSS, sem JavaScript, e sem animação quando `prefers-reduced-motion` está ligado.
- Diagrama "Dados + Física → XAI → Detectar, Compreender, Explicar, Prever" (`Pipeline.astro`): entra em sequência ao rolar.
- Ícones das quatro linhas (`LineIcon.astro`), em SVG.
- Ainda sem logo, imagens ou fotos da equipe, por decisão do Pedro. Entram quando houver logo oficial e consentimento.

## Hyperframes

Framework de código aberto (Apache 2.0) que gera vídeo MP4 a partir de HTML, CSS e animações. Entra como ferramenta opcional para vídeos explicativos, resumos de artigos e cards para redes sociais, e não como base do site.


## Ajuste de 10/11/2026

- Fontes trocadas para Newsreader (títulos) e IBM Plex Sans (corpo).
- Cantos quase retos (2 px) em botões, cartões, etiquetas e quadro do gráfico; linhas finas no lugar de sombras.
- Degradê do topo removido; o topo e os cabeçalhos de página usam fundo branco e uma linha fina.
- Segundo botão do topo virou link sublinhado.
- Rótulos sem caixa-alta e sem fonte mono; revelação ao rolar só com fade.
- Constelação do topo mantida.
