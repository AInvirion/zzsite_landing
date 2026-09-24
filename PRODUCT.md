# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: owner-operators of small local businesses.** Bakeries, dentists, landscapers, rental fleets. Not developers. They hear the name over the phone, sign in with Google or GitHub, and maintain their own site by filling in a form. They often arrive with an existing hand-written HTML site and a domain that points nowhere. The builder speaks to them in English or Spanish.

The reference customer is 43 19 FLEET (`4319fleet.com`), vehicle rentals for gig drivers in the Puget Sound. Their journey is the benchmark: sign in (10 seconds), paste HTML or pick a template (1 minute), confirm what the AI proposes to make editable (30 seconds), fill in the form (5 minutes), point the domain with exact registrar steps (10 minutes to 24 hours), live.

**Secondary: the visitors of those published sites**, plus the search engines and LLMs that read them. Published pages must be fast, readable, and correctly indexed for them.

Internal staff use an admin console (accounts, invites, publishes, referrals, sites, waitlist); it is an operating tool, not a design priority.

## Product Purpose

ZapZapSites is a dead-simple hosted website builder for small local businesses. It gets a local business a good website it can maintain itself, hosted by us, fast, and search-engine and LLM friendly by default. Success is a non-technical owner going from sign-in to a live site on their own domain without a repo, build step, hosting account, or CSS, and keeping it current afterwards without a support email.

## Positioning

- **A template is HTML plus a declaration of which parts are editable.** Our templates, a customer's pasted HTML, and an AI-generated section are the same object.
- **Paste your own HTML.** AI proposes which parts become editable, a human confirms, and a form appears. The customer does not start from a blank page.
- **Editing is a generated form, not a canvas.** Sections can be added, removed, and reordered; nothing is dragged. This removes the "I broke my layout" class of problem.
- **Free for normal use.** 100 AI credits per site per month; packs beyond that, no subscription, tiers, or seats.
- Explicitly not a Wix competitor: the smallest thing that gets a local business a good site.

## Operating Context

- Invitation only: codes, a public waitlist, 3 invites per account as a one-time grant.
- Four intake doors produce one import: a paste, one `.html` file, a `.zip`, or a fetched URL. Losses are reported in plain sentences before anything is saved.
- Save is publish. No draft state, no preview step; undo and history are the safety net.
- Domain wizard gives exact DNS steps for the customer's registrar and watches until it goes green. A free subdomain works from minute one.
- Contact forms: we send the mail with `Reply-To` set to the visitor; submissions are stored first, emailed second.
- The business's own facts (name, phone, email, address, hours, socials) live once in a site profile and feed the footer, JSON-LD, and contact sections.
- An MCP server exposes the same tool layer to outside assistants; any write from it is a proposal the owner must approve.

## Capabilities and Constraints

**Surfaces in scope for design work:**
1. The builder console (`app.zapzapsites.com`): sign-in, sites, editor, import, domains, enquiries, history, settings, admin. Styled by `src/zzsites/web/static/console.css`; a screen composes its classes and adds nothing of its own.
2. Public ZapZapSites pages: apex and waitlist.
3. Published customer sites (`*.zzsites.com` and customer domains): governed by the section library, the closed token vocabulary, and the section property allowlist (`src/zzsites/design/`, `src/zzsites/sections/`, `src/zzsites/themes/`, `docs/spec/01-design-system.md`). Nothing from the console reaches a published page.

**Hard constraints:**
- Simple, few features. If a customer needs more, help them one-off rather than build it into the product. A feature assigned to a later milestone is not a bonus.
- Curated themes, no colour picker: six named looks (bold, ink, sage, sand, slate, warm). Palette, type, spacing, and radius move together so a customer cannot produce an unreadable site.
- One section library; a template is a recipe over it. Twelve sections.
- Static rendering. Publishing writes plain HTML; nothing renders per request.
- The absence of a capability is the security model: no region type accepts markup, no executable script on published pages, `script-src` never gains `'unsafe-inline'`.
- Hostnames come from configuration, never hard-coded.
- Stack: FastAPI, Jinja2, HTMX; Postgres; DigitalOcean App Platform.

**Source of intent:** `docs/DESIGN.md` (technical design and numbered decisions) wins when anything disagrees with it. It is a technical document, not a visual design system.

## Brand Commitments

- Name: **ZapZapSites**. Domains: `zapzapsites.com` (builder, email, apex), `zzsites.com` (customer subdomains).
- Voice: plain sentences a non-developer understands. Refusals and losses are stated as what happened and what to do, never as jargon or error codes.
- Interface copy is written in English and keyed on the English sentence; Spanish is the first translation.

## Evidence on Hand

- One real customer: 43 19 FLEET, whose existing HTML is the first paste-your-own test.
- No testimonials, case studies, press, usage figures, or customer logos exist. Do not fabricate any.
- Pricing facts are limited to what `docs/DESIGN.md` §12 states.

## Product Principles

1. **Simplicity outranks capability.** Every addition is named and cut unless it protects the core journey.
2. **One primitive everywhere.** Templates, pasted HTML, and AI sections are the same object to the editor, renderer, AI, and security model.
3. **A customer cannot break their own site.** Forms over canvases, curated themes over pickers, validated regions over free markup.
4. **Say what happened, in plain words.** Losses, refusals, and DNS states are explained before they matter.
5. **Nothing publishes without the owner.** Outside assistants propose; the owner approves.

## Accessibility & Inclusion

WCAG 2.2 AA on every surface: the builder console, the public ZapZapSites pages, and every published site in every theme. Published themes already gate text contrast at AA (spec 01 §3.8) and honor `prefers-reduced-motion`. The builder must work equally in English and Spanish. The reCAPTCHA audio fallback on contact forms is a known accessibility concession (docs/DESIGN.md §8).
