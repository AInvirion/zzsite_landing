# UI proposal: instructions

How a designer or agent produces the next UI proposal for ZapZapSites (zzsites). Read `PRODUCT.md` and `DESIGN.md` in this folder first. Paths starting `src/` or `docs/` are in `../zzsites`, which is read-only: a proposal never edits the product repo.

---

## 1. Goal and scope

The landing is done: `mockups/landing/02-labelled/` was adopted and recorded as `DESIGN.md` ("Labelled"). The goal now is to extend that world, or deliberately not extend it, to the product surfaces a customer uses after the landing. Output is static HTML mockups plus a direction contract per surface. Nothing here is production code.

Today `DESIGN.md` scopes itself out of the console: it "does not govern ... The builder console (`src/zzsites/web/static/console.css`)". Section 2 decides whether that changes.

### 1.1 The real surfaces

Every screen renders through `render()` in `src/zzsites/web/ui.py` from a Jinja template in `src/zzsites/web/templates/`. Routes and templates verified by reading the route modules.

| # | Surface | Template(s) | Route module, paths |
|---|---|---|---|
| 0 | Landing / apex (done) | `apex.html`, `_waitlist_form.html` | `pages.py`: `GET /` on the apex host, `POST /waitlist` |
| 1 | Sign-in | `signin.html`, `_providers.html` | `pages.py`: `GET /signin`; `auth/routes.py`: `/auth/{provider}`, callback |
| 2 | Join with invite code | `join.html` | `pages.py`: `GET /join`; the form posts to `/auth/{provider}` via `formaction` |
| 3 | Waitlist (editor host) | `waitlist.html`, `_waitlist_form.html` | `pages.py`: `GET/POST /waitlist` |
| 4 | Sites list | `sites.html`, `_site_bar.html` | `editor.py`: `GET /sites` |
| 5 | Start a site | `start.html`, `_recipe_choice.html` | `editor.py`: `GET/POST /start`, `POST /site/{id}/template` |
| 6 | Business profile | `profile.html` | `editor.py`: `GET/POST /site/{id}/profile` |
| 7 | Editor: page, sections, generated form, save, undo | `editor.html`, `_section.html`, `_photo_field.html`, `_photo_dialog.html`, `_photo_answer.html` | `editor.py`: `GET /site/{id}`, `POST /site/{id}/sections/{sid}` (save), `.../restore` (undo), `.../move`, `.../hide`, `.../duplicate`, `.../remove`, pages, nav, theme, media; `drafting.py`: `/draft`, `/draft/skip` |
| 8 | Section history | `history.html` | `editor.py`: `GET /site/{id}/sections/{sid}/history` |
| 9 | Pasted markup and site HTML | `markup.html`, `site_html.html` | `editor.py`: `/site/{id}/markup/{def_id}`, `/site/{id}/html` |
| 10 | Import: the four doors | `import_start.html` | `importing.py`: `GET/POST /site/{id}/import` |
| 11 | Import review (before anything is saved) | `import_review.html` | `importing.py`: `GET /site/{id}/import/{draft}`, `.../confirm`, `.../again`, `.../discard` |
| 12 | Import checkup (report only) | `import_check.html` | `checkup.py`: `GET/POST /site/{id}/import-check` |
| 13 | Domains wizard | `domains.html`, `_domain_states.html` (HTMX-polled panel) | `domains.py`: `GET/POST /site/{id}/domains`, `/domains/states`, `/domains/canonical`, `.../remove` |
| 14 | Enquiries inbox | `enquiries.html` | `inbox.py`: `GET /site/{id}/enquiries`, `send-to`, `spam-check`, `resend`, `delete` |
| 15 | Site settings (menu, theme, photos, members, transfer, close) | `settings.html` | `editor.py`: `GET /site/{id}/settings` and its POSTs |
| 16 | Assistants and API keys | `assistants.html` | `assistants.py`: `/site/{id}/assistants`, `/keys`, `/disconnect`, `/auto-apply` |
| 17 | Suggestions awaiting approval | `suggestions.html`, `suggestion_preview.html` | `assistants.py`: `/site/{id}/suggestions`, `/approve`, `/decline`, `/preview` |
| 18 | Connect an outside client (OAuth consent) | `connect.html` | `connect.py`: `GET/POST /mcp/connect/{request_id}` |
| 19 | Health check | `health.html` | `editor.py`: `GET /site/{id}/health` |
| 20 | Delete a site, refusals | `delete_site.html`, `refused.html` | `editor.py`, and several modules for `refused.html` |
| 21 | Admin console (staff only) | `admin/waitlist.html`, `invites.html`, `sites.html`, `accounts.html`, `referrals.html`, `publishes.html` | `admin.py` under `/admin` |

The shell for all of 1 to 21 is `base.html` (header, account, EN/ES form, sign-out). `apex.html` deliberately does not extend it: its header comment says `base.html` "carries `noindex`, the signed-in header, and the editor's scripts".

The domain wizard's states are a closed set from `src/zzsites/domains/records.py` (`_WORDS`): `pending` "Waiting for your DNS change", `verifying` "Looking for your records", `dns_ok` "Ownership confirmed", `cert_pending` "Getting the padlock", `live` "Live", `error` "We couldn't set this up", grouped into three tones `waiting`, `ok`, `stuck`. A mockup shows all six, with the real sentences.

### 1.2 Recommended order

1. Landing (done).
2. Sign-in, join, waitlist (1 to 3): small, closest to the landing, and resolves the invite-code handoff (section 8).
3. Sites list and start (4, 5).
4. Editor with profile and history (6, 7, 8): the core of the product and the hardest test of the direction.
5. Import start and review (10, 11), then checkup (12).
6. Domains (13).
7. Enquiries (14), settings (15).
8. Assistants, suggestions, connect (16 to 18), health (19), delete and refusals (20).
9. Admin (21) last. `PRODUCT.md` calls it "an operating tool, not a design priority", and `src/zzsites/web/language.py` states admin screens are not translated ("That is a decision, not an omission").

---

## 2. The decision to put to the user FIRST

Before any console surface is shaped, ask:

> Does the builder console adopt the Labelled world (a redesign of `console.css`), or keep its own system with the brand only in precise details?

Give the user both options with the tradeoffs below, and do not start step 3.2 until they choose.

**Mode difference.** The landing was a Persuade surface: one visit, expression carries the argument. The console is an Operate surface: an owner returns to finish a task, often on a phone (`docs/DESIGN.md` §6: "Mobile-first at 360px"). Task completion, scanability and predictability outrank expression.

**Option A: adopt Labelled.** Rewrite `console.css` tokens and components in the tape world.

- Opportunity: the tape legend (red text, black contact, blue list, yellow hours, green photo) maps onto what the editor already edits, so the landing's promise ("those labels become a form") becomes literally true in the product. A field label in the editor would be the same tape that labelled the region on the landing (`DESIGN.md`, Components, Inputs / Fields: "Field labels in the form view are the same small tape that labelled the region").
- Mapping, verified against `src/zzsites/tools/types.py` (`TYPES`) and `docs/DESIGN.md` §2 and §15:

  | Tape | What it would label |
  |---|---|
  | red | `string`, `text`, `richtext` regions |
  | black | `phone`, `email` regions, and the contact facts in `profile.html` |
  | blue | a section's repeat group (FAQ, services, gallery). Not a region type: "One section may declare a single repeat group" |
  | yellow | opening hours. Not a region type either: hours live in the site profile, where "Hours are a repeat group, not a text box" |
  | green | `image` regions |
  | none defined | `number`, `boolean`, `url`, `enum`, `color` |

- Risks, stated honestly:
  - The legend mixes region types with business-fact categories and leaves five types without a colour. A rule is needed for them (for example white status tape) and must be taught on screen (`DESIGN.md`, "The Page Keeps Its Own Legend Rule").
  - Colour collisions with operational states. Red is text and the primary press, but consoles read red as danger (delete site, the `stuck` domain tone, validation errors). Green is photo, but reads as `ok` / "Live". `console.css` today has `--ok`, `--warn`, `--danger` tones. The proposal must say how state is expressed without breaking the legend.
  - Density and scanning. Condensed spaced caps and hand-tilted tapes read well in a headline and poorly in long forms, tables (admin, enquiries) and DNS record rows. Tilt fights alignment.
  - Cost. SVG emboss filters, textures and drop-shadow filters on dozens of fields may hurt rendering on low-end phones.
  - Scope. `console.css` is 1722 lines and every screen composes it (`base.html`: "Everything visual lives in `/static/console.css`"). This is a redesign, not a reskin.

**Option B: keep the console's own system, brand in precise details.** Keep `console.css` structure and quiet components; carry the brand where it helps a task: the header brand tape, the primary press, possibly small region-type tags on editor fields.

- Opportunity: lowest risk to task flow; the console stays scannable.
- Required either way: the console still uses the retired identity (`console.css`: `--accent: #5b4bf5`; `base.html` includes `_bolt.html`). `DESIGN.md` says the violet and bolt were "retired by a full rebrand", so option B still replaces the accent and mark. Say this to the user.

Whichever is chosen, the customer's site preview inside the editor (and `suggestion_preview.html`) shows the customer's theme, never the console or brand styling. It is framed under its own CSP (`src/zzsites/web/editor.py`, `default-src 'none'; ... form-action 'none'`), and `DESIGN.md` forbids restyling themes.

---

## 3. Process

Per surface (or per batch of related surfaces), in this order. This reproduces how the landing was made.

1. **Init.** `PRODUCT.md` already exists. Re-read it and the surface's templates, route module and any spec it names (`docs/spec/06-paste.md` for import, `docs/spec/07-forms.md` for enquiries, `docs/DESIGN.md` §9 for domains). Update `PRODUCT.md` only if the code contradicts it, and cite the file.
2. **Shape.** Ask discovery questions, each with two to four simple options. Cover: the one task the screen must complete; what the owner must see without scrolling at 360px; language (EN first, ES must fit); the sample content to show; whether JS is needed and what the no-JS version does; anti-goals (already: generic SaaS, corporate, techy, playful). Record answers in the contract.
3. **Direction.** Derive seven grounded candidates from the owner's working world, run the concept-seed roll, and present a decision page: the assigned direction, one pick, challengers each with a verdict, and a re-roll offering safer and bolder. The user chooses. If option B was chosen in section 2, candidates are constrained to the console's system plus the named brand details.
4. **Contract.** Write `.impeccable/surfaces/<slug>.md` with the same header and sections as `.impeccable/surfaces/mockups-landing-02-labelled-index-html.md`: Mode (Operate for console screens), audience, action, then THESIS, OWN-WORLD, STORY, FIRST VIEWPORT, FORM, FINISH. List open questions at the top.
5. **Build.** Code-led, static HTML/CSS/JS. Read the craft floor before writing code. Reuse `DESIGN.md` tokens and components (section 6). Use the product's real English sentences from the templates and the Spanish from `src/zzsites/web/languages/es.py`; mark any new sentence as proposed.
6. **Bounded review.** At most two batched screenshot rounds: 1440x900 desktop and 390 wide mobile, EN and ES each. For the editor and forms also check 360 wide, the documented minimum. Save to `.impeccable/review/<surface>/NN/`.
7. **Detector.** Run the design detector on the mockup. Fix or justify each finding in the contract.
8. **Finish review.** An independent reviewer with fresh context (not the builder) reviews against the contract, the chosen world and section 7, and returns one disposition: fix, rebuild or ship. Apply all fixes in one batch, then one verdict pass.
9. **Documentation.** Only after the user adopts a direction, the documenter updates `DESIGN.md` and `.impeccable/design.json` from the shipped mockup, including widening the "does not govern" scope if option A was chosen. Never document a direction that was not adopted.

---

## 4. Binding constraints

Each is from the zzsites repo unless marked. A proposal that breaks one is rejected.

| Constraint | Source and quote |
|---|---|
| Simplicity outranks everything | `docs/DESIGN.md` §0: "Simple. Few features. If a customer needs more, we help them one-off rather than building it into the product." No new features appear in a mockup; the roadmap exclusions are in `docs/HANDOFF.md` §6 ("free positioning or grid layout · CSS editing · plugins ..."). |
| Save is publish | `docs/DESIGN.md` d.13: "Save is publish. No draft state, no preview step. Undo is the safety net". §6: "Explicit Save per section. No autosave" and "The Save button is never disabled." No "Draft", "Preview before publish" or "Publish" button separate from Save. Undo sits beside the confirmation; history is "Earlier versions" (`_section.html`). |
| The tool layer is the only write path | `docs/DESIGN.md` d.23 and §5: "The editor form does not write to the database. It calls the same tools." A mockup must not imply a write path the tools lack (no inline canvas edits, no drag-to-position). |
| Outside writes are proposals | `docs/DESIGN.md` d.24: "Nothing publishes without the owner tapping approve". The one exception is the owner's auto-apply-while-away switch (`assistants.html` header comment). |
| Closed region type set | `docs/DESIGN.md` §2: `string · text · richtext · number · boolean · image · url · email · phone · enum · color`, and "There is no `html`, `raw`, `code`, or `script` type." Same list in `src/zzsites/tools/types.py`. One repeat group per section, "One level of nesting, never two." The editor form draws only these. |
| Editing is a generated form | `docs/DESIGN.md` d.5: "Editing is a generated form, not a canvas." §6: a page is "a vertical list of sections", "One open at a time". |
| CSP for console pages | `src/zzsites/web/ui.py` `CSP`: `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://*.googleusercontent.com https://avatars.githubusercontent.com; form-action 'self'; frame-ancestors 'none'; base-uri 'none'`. `connect.py` widens `form-action` only for the OAuth return. |
| Self-hosted fonts | Follows from the CSP: there is no `font-src`, so `default-src 'self'` blocks third-party font hosts. The console today uses a system stack (`console.css`: `--font: -apple-system, ...`); the Labelled mockups self-host woff2 in `fonts/`. Published themes may not use `@font-face` at all (`docs/spec/01-design-system.md` bans it in section CSS); that rule is for customer sites, not the console. |
| No inline scripts | `script-src 'self'` without `'unsafe-inline'`; `PRODUCT.md`: "`script-src` never gains `'unsafe-inline'`". No `<script>` bodies, no `on*=` attributes, no `javascript:` URLs. Inline styles are allowed by CSP, but `base.html` says a screen "adds a component to that stylesheet rather than a `<style>` block". (`apex.html` has its own `<style>` block; it is the exception, not the pattern.) |
| Server rendering: Jinja2 + HTMX | `src/zzsites/web/ui.py`: "one Jinja environment over `web/templates`, autoescape on for everything, strict on undefined names", `StrictUndefined`. HTMX is vendored (`static/htmx.min.js`, loaded in `base.html`). Pattern to keep: every HTMX control is also a plain form, e.g. `_section.html` buttons carry both `formaction`/`formmethod` and `hx-post`. Mockups must be expressible as server-rendered HTML fragments. |
| EN/ES | `src/zzsites/web/language.py`: "The catalogue is keyed on the English sentence itself" and "An untranslated string falls back to itself." Catalogue: `src/zzsites/web/languages/es.py`. Changing an English sentence orphans its translation, so propose copy changes explicitly. Layouts must fit Spanish, which runs longer. Admin is English only. |
| Hostnames from configuration | `README.md`: "Hostnames come from configuration. Never hard-code one." `pages.py` builds `editor_url` from `settings.editor_host`. No `zapzapsites.com` baked into a mockup link that would ship; use relative paths or mark the host as configured. |
| WCAG 2.2 AA | `PRODUCT.md`, Accessibility: "WCAG 2.2 AA on every surface". Text 4.5:1 (3:1 at 1.25rem bold and up), non-text 3:1, targets at least 2.75rem, visible focus, meaning never by colour alone, `prefers-reduced-motion` honoured. |
| Cache-busting | Owner's standing rule (not in the repo): every CSS, JS, font and image reference carries `?v=<build timestamp>`. Mockups do this already. Note: `base.html` currently links `/static/console.css` with no version string; adopting a proposal in production needs one. |
| Progressive enhancement | Owner's standing rule: modern CSS/JS always ships with a fallback (fallback declaration first, modern after). Every screen works without JS. |
| Packages and frameworks | Owner's standing rule: pnpm or bun, never npm; never React. MithrilJS is acceptable for a JS component only if one is truly needed. The repo has no `package.json` today: JS is vendored or hand-written (`static/editor.js`, 641 lines). |

---

## 5. Truth rules

- No invented customers, testimonials, logos, metrics, usage figures or prices. `PRODUCT.md`, Evidence: "No testimonials, case studies, press, usage figures, or customer logos exist. Do not fabricate any." Prices only from `docs/DESIGN.md` §12 (free hosting, 100 credits per site per month, d.18).
- Sample content is sample: fictional businesses, labelled on screen as samples. 43 19 FLEET is the one real reference customer, "lined up, not contacted about zzsites" (`docs/HANDOFF.md` §2); do not show it as a customer.
- Show only capabilities that exist, and say which state each is in:

  | Capability | State | Evidence |
  |---|---|---|
  | Sign-in (Google, GitHub), invite gate, editor, save is publish, undo, templates, themes | Live | `README.md`: "v0.1 and v0.2 are both done and accepted, and both are live." |
  | Import from paste, file, zip, URL, with the review screen | Live | `README.md`: "Paste your own HTML works end to end." |
  | Detecting which parts become editable | Live, but rule-based, not a model | `docs/HANDOFF.md`: "The proposer is rule-based, not a model (`importer/propose.py`)"; that module: "The proposal, without a model". |
  | Custom domains, contact forms, enquiries inbox | Built; v0.3 "in flight" | `docs/HANDOFF.md` header (2026-09-06). Current production status not found in the docs read; confirm before claiming live. |
  | Import checkup | Built, report only | `CHANGELOG.md`: "It changes nothing ... repairs are the next one" (#260). |
  | AI drafting of section words | Built, not live in production | `CHANGELOG.md` (#412): "production has no key today, so nothing live changes". |
  | Credits metering | Built; nothing in production calls a model | `CHANGELOG.md`: "The AI allowance is enforced" and "Nothing calls a model yet" (#46). |
  | MCP, assistants, API keys, suggestions | Built (routes exist in `assistants.py`, `connect.py`) | Production status not confirmed in the docs read; ask. |

  `CHANGELOG.md`'s top heading still says "Unreleased" and "v0.1 in progress" while its entries describe later work, so treat it as a list of what exists, not of what is deployed.
- Copy states refusals and losses as what happened and what to do (`PRODUCT.md`, Brand Commitments). No error codes in customer screens.

---

## 6. Deliverable format

```
mockups/<surface>/NN-<name>/
  index.html            links style.css?v=YYYYMMDD and app.js?v=YYYYMMDD
  style.css
  app.js                optional; own, same-origin, deferred
  fonts/                self-hosted woff2, referenced with ?v=
  img/                  only if needed, each raster with provenance
.impeccable/surfaces/mockups-<surface>-NN-<name>-index-html.md   direction contract
.impeccable/review/<surface>/NN/                                   screenshots
```

- `<surface>` is a short slug from section 1.1 (`signin`, `sites`, `editor`, `import`, `domains`, `enquiries`, `settings`, `assistants`, `health`, `admin`). `NN` counts proposals for that surface; a re-roll gets the next number.
- One mockup may hold several states of a surface (empty, filled, error, each domain state, no-JS). Make the states reachable without JS (anchors or separate files).
- Copy the fonts from `mockups/landing/02-labelled/fonts/` rather than fetching new ones.
- Reuse, do not reinvent. Point the contract at the `DESIGN.md` sections used:
  - Colors: Named Rules ("The Page Keeps Its Own Legend Rule", "The Only Chroma Is Tape Rule", "The Two Presses Rule").
  - Typography: Hierarchy, and "The Condensed Is Lettering Rule" (running text is always Barlow).
  - Layout: responsive breakpoints (1100, 900, 600) and the 2.75rem target rule.
  - Elevation & Depth: "The Two Heights Rule" and the Shadow Vocabulary.
  - Shapes: tape corners, 2px sheets and fields, tilt limits.
  - Components: Tape (three layers), Labels stuck to regions, Buttons (press), Toggles, Sheets, Inputs / Fields, Navigation.
  - Do's and Don'ts, whole list.
- A console mockup under option B names which `console.css` components it keeps, and which brand details replace which current ones.

---

## 7. Acceptance checklist

A proposal is ready for the user when every line is true.

- [ ] Section 2's decision was asked and answered before shaping.
- [ ] Discovery answers, direction choice and open questions are in the contract.
- [ ] Contract has THESIS, OWN-WORLD, STORY, FIRST VIEWPORT, FORM, FINISH and a Mode.
- [ ] Every field, button and state exists in the real template or route, or is marked "proposed" with a reason tied to the core journey.
- [ ] Form fields use the real names (for example `invite` in `join.html`, not `code`).
- [ ] Save is the only publish action; undo and "Earlier versions" are present where the editor saves.
- [ ] Only the eleven region types appear as editor fields; at most one repeat group per section.
- [ ] No inline `<script>`, no `on*=` handlers, no third-party requests; fonts self-hosted.
- [ ] Every CSS, JS, font and image reference carries `?v=`.
- [ ] Works with JS off; HTMX-style interactions have a plain form or link fallback.
- [ ] EN and ES both screenshotted; Spanish fits without truncation.
- [ ] 1440x900 and 390 screenshots taken (360 for editor and forms), at most two rounds.
- [ ] WCAG 2.2 AA: contrast measured, focus visible, targets at least 2.75rem, colour never the only signal, reduced motion honoured.
- [ ] No invented customers, testimonials, metrics or prices; samples labelled; unbuilt or not-live capabilities not shown as live.
- [ ] The customer-site preview shows the real theme, not the brand.
- [ ] No retired violet `#5b4bf5` or bolt.
- [ ] Detector run; findings fixed or justified.
- [ ] Independent finish review returned "ship", after at most one fix batch and a verdict pass.
- [ ] Nothing written outside this folder; `../zzsites` untouched.

---

## 8. Open decisions

Carry these into the next session and ask the user; do not resolve them by assumption.

1. **Console adopts Labelled or not** (section 2).
2. **The AI claim in the landing lede.** Mockup 02's contract records: "AI detection is not live in production". The code agrees: the proposer is rule-based (`src/zzsites/importer/propose.py`), and AI drafting has no production key (#412). The current lede, "We label the parts worth editing", is true of the rule-based proposer; any wording that says AI does it is not true today. `docs/DESIGN.md` d.4 still states the intent ("AI proposes which parts become editable").
3. **The invite-code form target.** Mockup 02 submits `GET /join` with a field named `code` (`mockups/landing/02-labelled/index.html`). Verified in the product:
   - `GET /join` (`pages.py`) reads only `?reason=`; it ignores `?code=`, so the code would not be prefilled.
   - `join.html` names its field `invite` and submits to `/auth/{provider}`.
   - On the apex, `pages.py` sends account actions to the editor host: `editor_url` built from `settings.editor_host` "so sign-in and the OAuth round trip only ever happen on one hostname". A relative `/join` on the apex is therefore the wrong host.
   - The apex is rendered with the same CSP (`form-action 'self'`), so a form on the apex cannot submit to the editor host at all. `_waitlist_form.html` keeps its action relative for exactly this reason: it "keeps the CSP's `form-action 'self'` true on both".
   - The live `apex.html` uses a link, not a form: `{{ editor_url }}/auth/language?lang={{ lang }}&next=join` ("Use it"), which also carries the language across.
   Options to put to the user: (a) replace the code field with that same link, keeping the two equal actions as a form and a press-styled link; (b) keep a field on the landing and add `?invite=` prefill to `/join` plus a way across hosts that the CSP allows (a product change, outside this folder); (c) other, if the user prefers.
