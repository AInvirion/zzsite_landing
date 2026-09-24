# zzsites_landing

Design work for ZapZapSites, kept outside the product repo. The product source lives in `../zzsites` (read-only from here). Relative paths such as `src/...` and `docs/...` in these files refer to that repo.

## What is here

| Path | Holds |
|---|---|
| `PRODUCT.md` | Product truth: users, purpose, positioning, constraints, evidence, principles, accessibility (WCAG 2.2 AA). |
| `DESIGN.md` | The adopted visual system, "Labelled" (embossed label-maker tape), recorded from the shipped mockup. Governs brand and marketing surfaces only. |
| `.impeccable/design.json` | Machine-readable sidecar of `DESIGN.md` (tokens, scope, retired identity). |
| `UI-PROPOSAL.md` | Instructions for producing the next UI proposal: surfaces, process, binding constraints, deliverable format, acceptance checklist, open decisions. |
| `mockups/landing/02-labelled/` | Landing, **adopted**. Static HTML, CSS, JS, self-hosted fonts in `fonts/`, tape texture in `img/`, `?v=` cache-busting, no-JS fallbacks, EN/ES. |
| `.impeccable/surfaces/*.md` | One direction contract per mockup (THESIS, OWN-WORLD, STORY, FIRST VIEWPORT, FORM, FINISH). |
| `.impeccable/review/` | Screenshots of mockup 02, in `02/`. |
| `.impeccable/questions/` | Decision-page state. Ignorable. |

## Adopted direction

`mockups/landing/02-labelled/`, documented in `DESIGN.md`. The old violet (`#5b4bf5`) and bolt identity is retired for brand surfaces. Note: the live builder console (`../zzsites/src/zzsites/web/static/console.css`) still uses `--accent: #5b4bf5` and `_bolt.html`; whether it follows the rebrand is the first decision in `UI-PROPOSAL.md`.

## Preview

Serve a mockup over HTTP (font preloads use `crossorigin`, so `file://` is not reliable):

```
cd mockups/landing/02-labelled && python3 -m http.server 8080
```

Then open `http://localhost:8080/`. Add `?lang=es` for Spanish.
