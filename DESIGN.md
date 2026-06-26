---
name: Matias Rodriguez Portfolio
description: A bold, technical portfolio where industrial-design heritage meets code — electric signal accents on alternating paper-and-ink surfaces.
colors:
  signal-magenta: "#ff4dc2"
  signal-magenta-deep: "#cc2e96"
  pulse-cyan: "#61deed"
  ink-plum: "#2e2b38"
  ink-plum-muted: "#2e2b38a5"
  canvas-black: "#060606"
  paper: "#fdfdfd"
typography:
  display:
    fontFamily: "Roboto, Inter, 'SF Pro Text', -apple-system, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.8px"
  title:
    fontFamily: "Roboto, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.8px"
  body:
    fontFamily: "Roboto, Inter, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.8px"
  label:
    fontFamily: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.8px"
rounded:
  sm: "0.5rem"
  md: "1rem"
  lg: "2rem"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "4rem"
  xxl: "6rem"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.signal-magenta-deep}"
    rounded: "{rounded.sm}"
    padding: "1rem 2rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.signal-magenta-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "1rem 2rem"
  project-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "2rem"
    width: "14rem"
    height: "12rem"
  project-card-hover:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "2rem"
  certificate-link:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "1rem"
    width: "10rem"
    height: "10rem"
  certificate-link-hover:
    backgroundColor: "{colors.signal-magenta}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "1rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    padding: "0 20px"
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.pulse-cyan}"
    padding: "0 20px"
---

# Design System: Matias Rodriguez Portfolio

## 1. Overview

**Creative North Star: "The Lit Drafting Table"**

This is the portfolio of someone who began at the drafting table as an industrial designer and ended up writing code — and the design refuses to choose between the two. Off-white "paper" worksurfaces (the drafting sheet) alternate with deep plum-ink panels and a near-black studio backdrop. Across them, two electric signal colors do the marking — like the precise, saturated pens you reach for on a technical drawing — and a monospace voice annotates the work the way an engineer scribbles dimensions in the margin. The result reads as bold, technical, and confident: a maker who can both draw the object and ship the software.

The system is built on **alternation, not uniformity**. The page paces itself by swapping its ground — paper, then ink, then paper — so each section arrives as a distinct plate rather than another row in an endless scroll. Surfaces are physical: cards and tiles lift, scale, and deepen their shadow when touched, the way you'd pick a sample up off the table to look closer. Nothing is flat for flatness's sake; depth is a response to attention.

It explicitly rejects the **generic template portfolio** (interchangeable card grids, skill bars, a timeline with no point of view), the **corporate SaaS landing** (gradient hero, three feature cards, big metric numbers), anything **overdesigned or gimmicky** (motion that fights reading), anything **sparse enough to read as unfinished**, and anything that signals **cheap** (default component styling, misaligned spacing, inconsistent type). The dark, electric identity is a deliberate stance — it does not get diluted toward safe corporate clean.

**Key Characteristics:**
- Alternating paper / ink / black surfaces — the page changes ground to pace itself
- Two saturated signal accents with strict, separate jobs (action vs. state)
- Monospace as the "engineer's annotation" voice, against a Roboto sans body
- Tactile, lifting components — depth is earned by interaction
- Bold accent strokes (2–3px borders) as the dominant framing device

## 2. Colors

A high-contrast pairing of two near-monochrome grounds (paper and ink) lit by two saturated electric signals — warm magenta for action, cool cyan for state.

### Primary
- **Signal Magenta** (`#ff4dc2`): The action color, used wherever magenta sits on a **dark** surface — the certificate stroke on ink-plum, the profile-photo frame, and the hero magenta tile (which carries dark text). Bright and electric. Magenta means *do this / look here*. It is the loudest voice on the page and is spent only on intent.
- **Signal Magenta Deep** (`#cc2e96`): The AA-safe sibling of Signal Magenta, used wherever magenta meets the **light "paper"** surface — the résumé CTA (text, border, and hover fill), every project-card and modal-image stroke, the mobile CTA, and the certificate hover fill. Reads as the same action signal, one step deeper, and clears 4.5:1 against paper in both directions where bright magenta did not (2.9:1).

### Secondary
- **Pulse Cyan** (`#61deed`): The state color. It marks *where you are* and *what's live* — the active and hovered nav link, list bullets, the work-card border, the active item in the education sidebar, and one corner tile of the hero mosaic. Cyan is orientation; magenta is action. They never trade jobs.

### Neutral
- **Paper** (`#fdfdfd`): The light worksurface. Background for the hero, projects, and education plates; also the text/icon color on every dark panel. This is the drafting sheet.
- **Ink Plum** (`#2e2b38`): The dark worksurface and the primary text color on paper. Background for the about, works, certificates, and education-sidebar panels. A plum-leaning charcoal, never a flat neutral grey.
- **Ink Plum Muted** (`#2e2b38a5`): A ~65% alpha of Ink Plum, reserved for the secondary taglines on paper surfaces.
- **Canvas Black** (`#060606`): The studio backdrop — the document body and the fixed navigation bar. The darkest layer; everything else sits on top of it.

### Named Rules
**The Two-Signal Rule.** There are exactly two accents and they have non-overlapping jobs: **Signal Magenta = action** (borders, CTAs, hover fills), **Pulse Cyan = state** (navigation, markers, "you are here"). Never use magenta for a passive marker or cyan for a call to action. The discipline is the brand.

**The Magenta-on-Light Rule.** The action signal has two lightness steps, picked by what it touches: **bright Signal Magenta (`#ff4dc2`) only on dark surfaces** (ink-plum, canvas-black), **Signal Magenta Deep (`#cc2e96`) whenever magenta sits on or against paper** (text, borders, and fills on the light surface). Bright magenta on paper fails contrast (2.9:1); never use it there. Same signal, same role — the depth shifts so the action always stays legible.

**The Alternating-Ground Rule.** Sections earn separation by changing their background between Paper, Ink Plum, and Canvas Black — not by adding dividers, eyebrows, or numbered markers. The ground change *is* the section break.

## 3. Typography

**Display / Body Font:** Roboto (with Inter, system-ui fallback)
**Label / Mono Font:** SF Mono (with Fira Code, Fira Mono, Roboto Mono fallback)

**Character:** One workhorse sans carries every heading and paragraph in committed weight contrast (400 body against 700 display), while a monospace runs underneath as the technical annotation layer. The mono isn't decoration — it's the dimension line on the drawing: taglines, skill lists, nav tiles, and work-experience cards all speak in it, signaling *engineer's notation* without a single "developer" cliché in the copy.

### Hierarchy
- **Display** (700, `clamp(3rem, 8vw, 5rem)`, line-height 1): The hero name/role headline only. One per page.
- **Title** (700, `clamp(1.5rem, 4vw, 2.25rem)`, line-height 1.1): Section headings (About, Projects, Works, Education, Certificates).
- **Body** (400, 18px, line-height 1.5): Intro and descriptive prose. Cap measure at 65–75ch; the current hero copy runs to ~96% column width and should be reined toward that range.
- **Label / Mono** (700, 1.2rem): Taglines, skill-list items, hero-tile labels, work-card body, certificate labels — the annotation voice.

### Named Rules
**The Annotation Rule.** Monospace is reserved for labels, lists, taglines, and technical metadata — the margin notes. It never sets a heading or a paragraph of prose. Prose is always Roboto.

## 4. Elevation

This system is **tactile and lifting**: surfaces rest with a soft ambient shadow and physically respond to attention. The signature gesture across cards, hero tiles, and certificate links is identical — on hover they rise and grow (`translateY(-5px) scale(1.05)`) and their shadow deepens, as if lifted off the worksurface. Depth is never ambient decoration; it is feedback. Shadows are intentionally low-chroma neutral greys, never tinted with the accents.

### Shadow Vocabulary
- **Rest** (`box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`): Buttons and hero tiles at rest — a tight, close shadow.
- **Card Rest** (`box-shadow: rgba(83, 83, 83, 0.2) 0px 8px 16px 0px`): Project cards and the profile image — a slightly lifted plate.
- **Lift** (`box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`): The hover state for every interactive surface, paired with the transform.

### Named Rules
**The Lift-On-Touch Rule.** Interactive surfaces (project cards, hero tiles, certificate links, the CTA) all share one hover gesture: `transform: translateY(-5px) scale(1.05)` plus the Lift shadow, eased `0.3s ease-in-out`. Consistency of this gesture is what makes the page feel like one physical surface.

## 5. Components

### Buttons
- **Shape:** Gently rounded (`0.5rem`).
- **Primary (Résumé CTA):** A ghost button — transparent fill, 2px Signal Magenta border, Signal Magenta mono-weight label, soft Rest shadow. Padding `1rem 2rem`.
- **Hover / Focus:** Fills with Signal Magenta, label flips to Paper, eased `0.3s ease-in-out`.
- **Mobile:** Collapses to a solid Signal Magenta fill with Paper text (no border) at ≤480px.

### Cards / Containers
- **Project Card** *(signature)*: A grayscaled client/brand logo centered on a Paper tile, framed by a 3px Signal Magenta border, radius `1rem`, Card Rest shadow. On hover the grayscale lifts to full color (`filter: none`) and the card rises with the Lift gesture — the reveal *is* the interaction. Sizes fluidly 8rem → 14rem across breakpoints.
- **Work Card:** A `1rem`-radius panel on Ink Plum with a 2px Pulse Cyan border and mono body — the "state/where-I've-been" register.
- **Certificate Link:** A 10rem square, transparent with a 2px Signal Magenta border and Paper label; hover fills Magenta and lifts.

### Navigation
- **Style:** Fixed full-width bar on Canvas Black, evenly distributed links.
- **Links:** Paper text at 0.75 opacity, weight 400, body type.
- **Hover / Active:** Opacity → 1, weight → 700, color → Pulse Cyan. (State color marking "you are here.")
- **Mobile:** Standard react-bootstrap collapse; language switch sits inline.

### Lists
- **Marker:** A Pulse Cyan bullet (`•`) with generous right margin, mono item text. Used for skills and project tech lists.

### Hero Tile Mosaic *(signature)*
A 5×5 CSS grid of four asymmetric tiles (About / Projects / Works / Education) in Pulse Cyan, Ink Plum, Canvas Black, and Signal Magenta. Each tile carries a **deliberately irregular border-radius** (e.g. `0 2rem 0 4rem`, `2rem 0 5rem 1rem`) — the exploded-view diagram of the site. On hover, a relevant photograph blends in behind the label and the tile lifts. Below 480px it reflows into a touch-sized 2×2 grid (tamed radii, tap-lift via `:active`) rather than hiding — the signature survives on mobile.

## 6. Do's and Don'ts

### Do:
- **Do** keep the Two-Signal Rule absolute: Signal Magenta (`#ff4dc2`) for action, Pulse Cyan (`#61deed`) for state. Never swap their jobs.
- **Do** pace sections by alternating the ground — Paper, Ink Plum, Canvas Black — instead of adding dividers or kickers.
- **Do** give every interactive surface the one shared Lift-On-Touch gesture (`translateY(-5px) scale(1.05)` + Lift shadow).
- **Do** reserve monospace for labels, taglines, lists, and technical metadata; set all prose in Roboto.
- **Do** keep magenta legible by surface: bright Signal Magenta only on dark, Signal Magenta Deep (`#cc2e96`) on/against paper. Every magenta pairing now clears WCAG AA (≥4.67:1); re-verify if you introduce a new magenta-on-paper use.
- **Do** cap body prose at 65–75ch and let display headings use `text-wrap: balance`.

### Don't:
- **Don't** ship the **generic template portfolio** look — identical card grids, skill bars, a point-of-view-less timeline.
- **Don't** drift toward a **corporate SaaS landing** — no gradient hero, no three-feature-card row, no big-number hero-metric template.
- **Don't** let motion become **gimmicky** — every animation must serve reading or feedback; the page is not a demo reel.
- **Don't** strip the design down until it reads as **sparse / unfinished**, and don't let anything read as **cheap**: no default component styling, no misaligned spacing, no inconsistent type.
- **Don't** dilute the dark, electric identity toward "safe corporate clean" — sharpen it instead.
- **Don't** use `background-clip: text` gradient text, decorative glassmorphism, or a colored side-stripe `border-left`/`border-right` as an accent — use full accent borders, which the system already does.
- **Don't** tint the elevation shadows with the accent colors; shadows stay neutral grey.
