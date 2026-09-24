---
name: ZapZapSites
description: The brand and marketing visual system of ZapZapSites, a labelled workbench of embossed tape.
colors:
  bench: "#d3d8de"
  band: "#eef1f4"
  paper: "#ffffff"
  ink: "#16171a"
  ink-2: "#41444b"
  ink-3: "#5c6068"
  rule: "#b3bac3"
  field-stroke: "#8a8c90"
  field-placeholder: "#6b6e74"
  foot-ink: "#c8c9c4"
  tape-red: "#c8102e"
  tape-black: "#1a1a1c"
  tape-blue: "#1e4fa8"
  tape-yellow: "#f5c400"
  tape-green: "#1f7a3e"
  tape-white: "#f3f3ef"
  tape-dull: "#686a6f"
  tape-lettering: "#f3f2ec"
  tape-lettering-dark: "#141414"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "clamp(2rem, .9rem + 3.4vw, 3.9rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: ".035em"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 2.8vw, 3.5rem)"
    fontWeight: 800
    lineHeight: .96
    letterSpacing: ".005em"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "clamp(1.25rem, 1rem + .9vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: ".09em"
  tape:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: ".09em"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: ".75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: ".1em"
  button:
    fontFamily: "Barlow Condensed, Arial Narrow, Helvetica Neue, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: ".09em"
  lede:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + .3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  small:
    fontFamily: "Barlow, Helvetica Neue, Arial, sans-serif"
    fontSize: ".9375rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  tape: ".32em"
  cut: "0"
  sheet: "2px"
  toggle: "3px"
spacing:
  gutter: "clamp(1rem, 3.2vw, 2.5rem)"
  max: "80rem"
  band: "clamp(4rem, 8vw, 6.5rem)"
  section-head: "clamp(2rem, 4vw, 3rem)"
  hero-gap: "clamp(2rem, 4vw, 4rem)"
  sheet: "1.1rem 1.25rem 1.4rem"
  tape-pad: ".42em .75em .36em"
  press-pad: ".55rem 1.15rem"
  target: "2.75rem"
components:
  tape-red:
    backgroundColor: "{colors.tape-red}"
    textColor: "{colors.tape-lettering}"
    typography: "{typography.tape}"
    rounded: "{rounded.tape}"
    padding: "{spacing.tape-pad}"
  tape-black:
    backgroundColor: "{colors.tape-black}"
    textColor: "{colors.tape-lettering}"
    typography: "{typography.tape}"
    rounded: "{rounded.tape}"
    padding: "{spacing.tape-pad}"
  tape-blue:
    backgroundColor: "{colors.tape-blue}"
    textColor: "{colors.tape-lettering}"
    typography: "{typography.tape}"
    rounded: "{rounded.tape}"
    padding: "{spacing.tape-pad}"
  tape-yellow:
    backgroundColor: "{colors.tape-yellow}"
    textColor: "{colors.tape-lettering-dark}"
    typography: "{typography.tape}"
    rounded: "{rounded.tape}"
    padding: "{spacing.tape-pad}"
  tape-green:
    backgroundColor: "{colors.tape-green}"
    textColor: "{colors.tape-lettering}"
    typography: "{typography.title}"
    rounded: "{rounded.tape}"
    padding: "{spacing.tape-pad}"
  tape-white:
    backgroundColor: "{colors.tape-white}"
    textColor: "{colors.ink}"
    typography: "{typography.tape}"
    rounded: "{rounded.tape}"
    padding: "{spacing.tape-pad}"
  tape-dull:
    backgroundColor: "{colors.tape-dull}"
    textColor: "{colors.tape-lettering}"
    typography: "{typography.title}"
    rounded: "{rounded.tape}"
    padding: "{spacing.tape-pad}"
  press-red:
    backgroundColor: "{colors.tape-red}"
    textColor: "{colors.tape-lettering}"
    typography: "{typography.button}"
    rounded: "{rounded.sheet}"
    padding: "{spacing.press-pad}"
    height: "3rem"
  press-red-active:
    backgroundColor: "{colors.tape-white}"
    textColor: "{colors.tape-red}"
  press-black:
    backgroundColor: "{colors.tape-black}"
    textColor: "{colors.tape-lettering}"
    typography: "{typography.button}"
    rounded: "{rounded.sheet}"
    padding: "{spacing.press-pad}"
    height: "3rem"
  press-black-active:
    backgroundColor: "{colors.tape-white}"
    textColor: "{colors.ink}"
  press-disabled:
    backgroundColor: "{colors.tape-dull}"
    textColor: "{colors.tape-lettering}"
  toggle:
    backgroundColor: "{colors.tape-white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tape}"
    height: "{spacing.target}"
  toggle-selected:
    backgroundColor: "{colors.tape-black}"
    textColor: "{colors.tape-lettering}"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sheet}"
    padding: ".5rem .7rem"
    height: "3rem"
  sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "{spacing.sheet}"
---

# Design System: ZapZapSites

This file is the visual system for the ZapZapSites brand and marketing surfaces (the zapzapsites.com landing and pages that speak for the brand). It was recorded from the shipped build at `mockups/landing/02-labelled/`. The technical design of the product lives in `docs/DESIGN.md`; that file records product decisions, not visuals.

Scope, stated explicitly. This system does not govern:

- **The builder console** (`src/zzsites/web/static/console.css`), the owner-facing app, which has its own visual system.
- **The published customer-site themes** (`src/zzsites/themes/*.css`, `src/zzsites/design/`). The six theme previews on the landing (Warm, Slate, Ink, Sage, Sand, Bold) and the labelled sample site reproduce those themes faithfully. They are product truth, shown on the bench, and are not part of this brand system: never restyle them to match the tape, and never borrow their faces or colours for brand surfaces.

The earlier violet (#5b4bf5) and lightning-bolt identity was retired by a full rebrand. Nothing from it carries forward.

## Overview

**Creative North Star: "The Labelled Shelf"**

A customer's existing website, printed on white paper, lies on a cool grey workbench, and strips of embossed label tape are stuck to the parts that will become editable. The tape is the brand: its colour says what kind of thing sits under it, its raised condensed capitals carry the headlines, and pressing a tape is how you act. Everything else is quiet: grey bench, white paper, dark ink, and Barlow for reading.

The density is a working bench, not a showroom. Sheets of paper carry soft, low lift; tapes sit on top with a tight shadow of their own and a slight, hand-applied tilt. Colour appears only as tape, and every tape colour is a word in a legend the page itself teaches. Motion is physical and brief: labels are stuck on once, and the switch between the labelled page and its form is a single view transition.

The world refuses the category default of a SaaS hero with an editor screenshot and three feature cards, and it refuses corporate, techy, and playful registers. It stays plain and exact, like a shop that labels its shelves.

**Key Characteristics:**
- Cool grey bench (bench) with alternating lighter bands (band) and white paper sheets.
- Embossed label tape as the only source of chroma, one colour per region type.
- Three-layer tape: shadow wrapper, textured vinyl body, raised lettering.
- Headlines set on tape in Barlow Condensed caps; reading text in Barlow.
- Press buttons are tape you push; pressing inverts the tape.
- Labels stuck to the regions they name, tilted a degree or two.
- One-shot "stick on" motion and a view transition on the Labels / Form switch, both off under reduced motion.

## Colors

A cool neutral bench and white paper carry the page; saturated colour exists only as label tape, and each tape colour is a region type.

### Primary
- **Label Red** (tape-red): text regions (headlines, paragraphs, business names). Also the H1 strips, the brand tape "ZapZap", and the primary press ("Join the waitlist", "Add me", "Make these editable", "Save is publish"). Text selection highlight.

### Secondary
- **Contact Black** (tape-black): contact regions (phone, email, address). Also the secondary press ("I have a code", "Use it"), the selected state of a toggle tape, the footer ground, and the skip link.
- **List Blue** (tape-blue): list regions (questions, services, menus), and the counters inside a list field. Also links and the focus ring, where it reads as affordance rather than as a label.

### Tertiary
- **Hours Yellow** (tape-yellow): opening hours. The only light tape with dark lettering (tape-lettering-dark).
- **Photo Green** (tape-green): photo regions. Lettering on it is set at 1.25rem bold or larger, the WCAG large-text size, because its light lettering reaches about 4.4:1 against the flat colour.
- **Status White** (tape-white): status and non-region tags: "Sample site", the "We found" printout, step titles, theme names, the $0 price, and unselected toggles. Lettering is ink.
- **Left-off Grey** (tape-dull): things deliberately not in the product, lettering struck through. Also the disabled press while a form submits.

### Neutral
- **Workbench Grey** (bench): the page ground and the `theme-color`.
- **Pale Band** (band): alternating full-width bands that set sections apart without lines.
- **Paper White** (paper): sheets: the printout, the form view, the action cards, the theme previews.
- **Ink** (ink): headings, primary text, heavy 2px rules under section heads.
- **Ink Soft** (ink-2): lede, paragraphs, secondary copy (6.8:1 on bench).
- **Ink Muted** (ink-3): field hints on paper only (6.3:1).
- **Rule Grey** (rule): 1px row dividers in legends and price lists.
- **Field Stroke** (field-stroke): 1.5px input and list-field borders (3.4:1 on paper, meeting the non-text 3:1 floor).
- **Footer Ink** (foot-ink): footer copy on black.
- **Tape Lettering** (tape-lettering): the near-white of raised letters, computed as `color-mix(in srgb, <tape> 10%, #f8f7f3)` with this value as the fallback.

### Named Rules
**The Page Keeps Its Own Legend Rule.** A tape colour on a brand surface always means its region type: red text, black contact, blue list, yellow hours, green photo, white status or a non-region tag, dull grey left off. Any surface that uses more than one tape colour teaches the legend on the page itself. Never pick a tape colour for looks.

**The Only Chroma Is Tape Rule.** Saturated colour appears as tape, as a press, or as the two affordance borrowings (blue links and focus ring, red selection). Grounds, sheets, rules and body text stay neutral.

**The Two Presses Rule.** Actions use red or black only, the two colours the closing line names ("Two labels. Pick one."). Equal-weight actions are one red and one black.

## Typography

**Display Font:** Barlow Condensed 600/700/800 (with Arial Narrow, Helvetica Neue, sans-serif), self-hosted as woff2.
**Body Font:** Barlow 400/500/600/700 (with Helvetica Neue, Arial, sans-serif), self-hosted as woff2.

**Character:** Barlow Condensed in spaced capitals is the lettering a label maker punches; Barlow is its plain, legible reading partner with tabular figures for phone numbers, hours and prices.

### Hierarchy
- **Display** (800, clamp(2rem, .9rem + 3.4vw, 3.9rem), 1, .035em, caps): the H1 and the closing line, always set on tape, one strip per line.
- **Price figure** (800, clamp(4.5rem, 2rem + 8vw, 8.5rem), 0 tracking, caps): the single $0 white tape.
- **Headline** (800, clamp(2rem, 1.2rem + 2.8vw, 3.5rem), .96, caps, max 22ch, balanced): section heads, printed in ink on the bench, not on tape.
- **Title** (700, clamp(1.25rem, 1rem + .9vw, 1.75rem), .09em, caps): large tapes such as step titles; legend tapes use 1.25rem.
- **Tape** (700, 1rem, .09em, caps): default tape, action card heads.
- **Label** (700, .75rem, .1em, caps): small tapes stuck to regions, toggles, printout counts.
- **Button** (700, 1.125rem, .09em, caps): press buttons; 1.35rem in the closing actions.
- **Lede** (400, clamp(1.0625rem, 1rem + .3vw, 1.25rem), 1.5, max 46ch): the hero paragraph.
- **Body** (400, 1.0625rem, 1.5; 1rem under 600px): section copy at max 60ch; legend rows at 1.125rem, max 52ch.
- **Small** (400, .9375rem, 1.4): action card copy, header note, footer.

### Named Rules
**The Condensed Is Lettering Rule.** Barlow Condensed is only ever set in uppercase with tracking, on tape, on a press, or as a section head. Running text is always Barlow.

**The One Strip Per Line Rule.** A headline on tape is broken into one strip per line, set by hand so the longest line fits the column in every language (the H1 is four strips in English and Spanish).

## Layout

A single centred column (max 80rem) with a fluid gutter (clamp(1rem, 3.2vw, 2.5rem)). The hero is two columns (1fr and 1.08fr, gap clamp(2rem, 4vw, 4rem)): words and actions on the left, the bench with the sample sheet on the right. Below it, full-width bands alternate bench and band grounds, each padded clamp(4rem, 8vw, 6.5rem) vertically, each opening with a headline and a paragraph, then content at a clamp(2rem, 4vw, 3rem) offset.

Content inside bands is set as ruled lists (legend rows at an 11rem tape column, price rows), four-up steps, and a three-up grid of theme previews. Tapes that tag a sheet or preview overlap its top or bottom edge, slightly off the corner.

Responsive rules, as built:
- **1100px and below:** the two action cards stack; steps go two-up.
- **900px and below:** the hero becomes one column; the header note hides; action cards return to two-up; previews go two-up; the "left off" and price bands stack.
- **600px and below:** body text drops to 1rem; the hero reorders to H1, lede, bench, then actions; action cards, steps, previews and legend rows are single column; display tape clamps to clamp(1.9rem, 9.2vw, 2.6rem); right-side labels move beneath their region; closing presses go full width.

Every interactive target is at least 2.75rem (44px) square; presses and fields are 3rem tall.

## Elevation & Depth

Depth is physical and has exactly two levels: paper lies on the bench, tape sits on the paper or the bench. Paper carries one soft lift; tape carries a tight drop shadow on its wrapper so that angled cuts keep their depth; press buttons add a bevel. Bands and grounds are flat and tonal.

### Shadow Vocabulary
- **Paper lift** (`box-shadow: 0 1px 1px rgba(22, 23, 26, .08), 0 18px 36px -18px rgba(22, 23, 26, .35)`): every white sheet: printout, form view, action cards, previews.
- **Tape drop** (`filter: drop-shadow(0 1px 1px rgba(20, 24, 30, .28)) drop-shadow(0 4px 5px rgba(20, 24, 30, .16))`): on the tape wrapper, never on the body, so clip-path cuts are shadowed too.
- **Press bevel** (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, .2), inset 0 -1px 0 rgba(0, 0, 0, .25), 0 1px 1px rgba(0, 0, 0, .22), 0 6px 12px -6px rgba(0, 0, 0, .45)`): press buttons; the outer shadow deepens on hover.
- **Emboss** (SVG filters `#emboss` and `#emboss-sm`): specular lighting plus top rim and lower shade on the lettering itself; `#emboss-sm` for small tapes and toggles. A `0 1px 0 rgba(0, 0, 0, .35)` text-shadow is the fallback where SVG filters on HTML are unsupported. Light tapes (yellow, white) use a light-rim text-shadow instead of the filter.

### Named Rules
**The Two Heights Rule.** Paper lifts, tape sits. Nothing else floats: no cards over cards, no ambient glows, no hover lifts beyond the 1px press rise.

## Shapes

Tape corners are the rounded cutter (.32em radius), or the tape is cut at an angle with a parallelogram `clip-path` (.45em slant) and a square radius. Sheets and fields are almost square (2px). Toggle hit areas are 3px. Tapes are tilted by hand: between -2deg and 2deg, alternating, with small offsets; section heads and body text are never rotated. Headline strips alternate rounded and cut ends.

The tape texture is `img/tape.png`, a procedurally generated vinyl grain (numpy noise, seed 417, provenance in the PNG metadata), tiled horizontally at full tape height and blended with `soft-light` over the tape colour.

## Components

### Tape (signature)
Three layers, always in this order:
- **Wrapper (tape):** carries the font, uppercase, tracking, `white-space: nowrap`, and the tape drop shadow. It sets `--t` (body colour) and `--t-ink` (lettering).
- **Body (tape__b):** the vinyl: tape colour plus `img/tape.png` in soft-light, the rounded-cutter radius or the angled cut, padding .42em .75em .36em.
- **Lettering (tape__i):** raised letters in tape-lettering (tape-lettering-dark on yellow, ink on white) with the emboss filter.
- **Sizes:** small (.75rem), default (1rem), large (title), extra large (display, 800 weight, tighter padding .16em .32em .1em), price.
- **Left off:** dull grey tape with struck-through lettering (2px line).

### Labels stuck to regions
A small tape positioned absolutely off the top-left corner of the region it names (about -.9rem, -1.45rem), rotated about -2deg; a right-side variant sits just past the region's right edge, centred. On narrow screens right-side labels drop below the region. The text of a label says what the region is and, when relevant, how many places it appears ("Phone · 3 places").

### Buttons (press)
- **Shape:** near-square (2px), 3rem minimum height, padding .55rem 1.15rem.
- **Primary:** Label Red press, tape texture, lettering in near-white with a dark 1px text-shadow.
- **Secondary:** Contact Black press, same form.
- **Hover:** rises 1px and the shadow deepens (.15s, `cubic-bezier(.16, 1, .3, 1)`).
- **Active (pressing inverts):** the body turns tape-white and the lettering takes the press colour (red on a red press, ink on a black press), sinking 1px.
- **Disabled / busy:** Left-off Grey with a progress cursor while a form submits.
- **Static:** a non-interactive press used as a stamp ("Save is publish"): smaller, no hover.

### Toggles (Labels / Form switch, EN / ES)
- **Style:** small tapes. Unselected is white tape with flat ink lettering; selected is black tape with embossed lettering.
- **State:** pressing an unselected toggle flips it to black for the press; pressing the selected one flips it to white. Hover rises 1px.
- **Mechanics:** the Labels / Form switch is two visually hidden radio inputs and CSS-only state, so it works without JS; with JS, the change runs inside a view transition. Focus from the hidden radio is drawn on its visible label. EN / ES are links (`?lang=`) marked with `aria-current`.

### Sheets
- **Corner Style:** 2px.
- **Background:** paper.
- **Shadow Strategy:** paper lift.
- **Internal Padding:** 1.1rem 1.25rem 1.4rem, 1.6rem on top when a white status tape tags the sheet's top edge.

### Inputs / Fields
- **Style:** white, 1.5px field-stroke border, 2px radius, 3rem tall; placeholder in field-placeholder.
- **Hover:** border turns ink.
- **Focus:** 3px List Blue outline at 1px offset, border ink.
- **Error:** border turns Label Red on `:user-invalid`.
- **Field labels** in the form view are the same small tape that labelled the region.

### Navigation
The header is the brand (a red cut tape reading "ZapZap" followed by "SITES" in condensed ink caps), a short note in ink-2, and the EN / ES toggles. The footer is Contact Black with the small brand tape and plain links.

## Do's and Don'ts

### Do:
- **Do** build every tape from the three layers (shadow wrapper, textured body, embossed lettering), so cut ends keep their shadow.
- **Do** choose tape colour by region type only: red text, black contact, blue list, yellow hours, green photo, white status or non-region tags, dull grey for things left off.
- **Do** teach the legend on the page whenever a surface uses more than one tape colour.
- **Do** make pressing invert the tape: the body goes tape-white and the lettering takes the press colour.
- **Do** stick labels to the regions they name, tilted within 2deg, and label every sample as a sample.
- **Do** keep reading text in Barlow at 1.0625rem, 1.5 line height, within 46 to 60ch.
- **Do** run the stick-on animation once, and the Labels / Form view transition only when `prefers-reduced-motion` is not set.
- **Do** keep text contrast at WCAG 2.2 AA (4.5:1, or 3:1 for 1.25rem bold and up), 3:1 for field borders and focus rings, and 2.75rem minimum targets.
- **Do** self-host the fonts and add a `?v=` version string to every CSS, JS, font and image reference.

### Don't:
- **Don't** carry the retired violet (#5b4bf5) or the lightning bolt into any brand surface.
- **Don't** apply this system to the builder console or to the published customer-site themes, and don't restyle the theme previews to match the tape.
- **Don't** use a tape colour decoratively or out of its meaning, including coloured step numbers; numbers on a tape take the tape's own lettering.
- **Don't** set Barlow Condensed in lowercase or for running text.
- **Don't** add colour outside tape, presses, links, focus and selection: no coloured grounds, gradients or tinted cards.
- **Don't** add a third depth level: no stacked cards, glows, or large hover lifts.
- **Don't** put light lettering on green tape below 1.25rem bold.
- **Don't** rotate section heads or reading text; only tape tilts.
