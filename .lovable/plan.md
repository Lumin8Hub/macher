## Macher — One-Page Site Build Plan

A premium, single-route marketing site for the board game *Macher*, matching the brief's bureaucratic-brutalist / grassroots aesthetic. All §5 copy used verbatim. Mobile-first, accessible, motion-reduced aware.

### Stack adaptation
The brief recommends Astro; this project is TanStack Start (React + Tailwind). Same static feel, same tokens, same look. Single route at `/` with anchor sections — no multi-page routing.

### Sections (top → bottom, exact order from §5)
1. **Sticky Nav** — Fractured Star + MACHER wordmark; anchors *The Mission · How It Plays · The World · The Campaign*; persistent teal **Notify Me** CTA. Transparent over hero, solid navy + hairline steel border after scroll. Mobile hamburger.
2. **Hero** — full-bleed navy with faint city-grid texture, monolith/box render right (stacked on mobile), eyebrow, brushed-steel MACHER wordmark, subhead, tagline pill, primary CTA, "Coming soon to Kickstarter."
3. **The Mission** — most prominent non-hero block. Roomy single 720px column on `--macher-navy-deep`, large pull-quote (`The game is the diagnosis. The conversation is the cure.`), credibility line.
4. **How It Plays** — three pillars (Solve / Sell Out or Stand Up / Outlast) with custom inline-SVG icons; "How a round works" explainer paragraph.
5. **The World** — six domain panels (Campus, Media, Politics, Education, Street, Promenade) each in its domain hex with icon + name + one-liner.
6. **Concept Art Gallery** — responsive grid of placeholder panels at correct aspect ratios; swap in user-uploaded art.
7. **The Campaign + Signup** — raised navy-panel block, headline *Be a Founding Macher*, signup form, micro-trust line.
8. **Social** — eyebrow, row of icon links (IG/TikTok/FB/X/YouTube + community placeholder), tagline.
9. **Footer** — Fractured Star lock-up, decorative row of six domain-colored cracked-star ticks, link list, contact, copyright, dry sign-off.

Reusable `<Divider/>` (centered Fractured Star between two thin steel rules) between sections.

### Design system (authoritative tokens from §4)
- All hexes (`--macher-navy`, `--macher-cream`, `--macher-teal`, six domains, etc.) added to `src/styles.css` as CSS vars + Tailwind theme via `@theme`.
- Fonts via `@fontsource`: **Anton** (display/wordmark), **Oswald** (eyebrows/buttons/nav, tracked), **Inter** (body, tabular nums).
- Brushed-steel wordmark: vertical steel→steel-2 gradient via `background-clip:text`.
- **Global film grain:** fixed full-viewport SVG `feTurbulence` overlay, `mix-blend-mode:overlay; opacity:.05; pointer-events:none`.
- **Letterpress distress** on H1/H2 via masked grain overlay (subtle, fully legible).
- **City-grid texture** behind hero + one section at ~6% opacity (inline SVG).
- Panels: navy-panel bg, 1px steel border at low opacity, soft inner vignette, 6px radius.
- Primary CTA: teal fill, navy-deep text, Oswald uppercase, hover → teal-bright, 2px cream focus outline. Secondary: transparent, 1px cream border.

### Iconography
Inline SVG components, `currentColor`-driven so they recolor:
- `FracturedStar` (Star of David with jagged crack) — used in nav, dividers, bullets, footer ticks, favicon.
- Pillar icons: broken-heart, influence-chip ($), cube.
- Six domain icons: mortarboard, broadcast tower, dome, book, megaphone, bench.

### Motion (restrained, `prefers-reduced-motion` respected)
- IntersectionObserver scroll-reveal: fade + 12px rise, ~400ms, staggered, once.
- Subtle hero parallax on monolith (≤12px).
- Domain chips animate color on reveal.
- Reduced-motion → no transforms, instant.

### Email signup — "Both"
Lovable Cloud (built-in DB) **and** optional forwarding to a provider:
- Cloud: `email_signups` table (id, email, first_name, location, role, created_at) with RLS allowing public INSERT only; SELECT restricted to admins (none yet — service role / Cloud dashboard exports). Server function `submitSignup` validates with Zod (email required; optional first_name/location/role), checks honeypot, inserts row.
- Provider forwarder: same server fn optionally POSTs to a configured endpoint (Mailchimp/ConvertKit/Formspree). I'll add commented constants `SIGNUP_FORWARD_URL` / `SIGNUP_FORWARD_KEY` in the server fn so the owner can paste later; no-op when blank.
- Form: email (required), first name (optional), "Where are you?" (optional), "I'm a…" select (Activist / Community professional / Gamer / Just curious). Honeypot + `aria-live` success/error. Success state replaces form: *"You're on the list. Watch your inbox — and your group chat."* with social follow buttons.
- Privacy microcopy + link.

### Concept art
User will upload renders. Until provided, gallery + hero use labeled aspect-ratio placeholders (navy-panel, steel border, "BOX FRONT" / "CITY BOARD" / "MONOLITH" labels in Oswald).

### Social links
`#` placeholders with clear `// TODO: paste real URL` comments.

### Quiz scaffold
Skipped per user.

### SEO / OG / a11y
- `<title>`: *Macher — A Board Game About Community Politics*
- meta description from §8 verbatim
- Open Graph + Twitter `summary_large_image` (placeholder og-image until art arrives)
- Single H1 = MACHER, sensible heading hierarchy, alt text everywhere
- `lang="en"`, favicon = Fractured Star SVG
- Color-contrast verified (cream/body on navy ≥ 4.5:1)
- Full keyboard operability, visible focus rings

### Files I'll add/edit
- `src/styles.css` — tokens, grain, gradients, focus styles
- `src/routes/__root.tsx` — head meta, fonts, grain overlay
- `src/routes/index.tsx` — page composition
- `src/components/macher/` — `Nav`, `Hero`, `Mission`, `HowItPlays`, `Pillars`, `Domains`, `Gallery`, `Campaign`, `SignupForm`, `Social`, `Footer`, `Divider`, `FracturedStar`, icon set
- `src/lib/signup.functions.ts` — `submitSignup` server fn (Cloud insert + optional provider forward)
- Migration: `email_signups` table + RLS + GRANTs
- `package.json` — `@fontsource/anton`, `@fontsource/oswald`, `@fontsource/inter`, `zod`

### Out of scope (deferred until user provides)
- Real concept art (placeholders for now)
- Real social URLs
- Provider endpoint/key for forwarding
- Analytics (Plausible/GA) — leave a clearly commented slot in `__root.tsx`
- Quiz mini-section

### Acceptance check (mirrors §10)
All §5 sections in order with verbatim copy; tokens/fonts/grain/dividers/domain colors per §4; mission visually dominant; signup writes to Cloud and (when configured) forwards; sticky nav + mobile menu; responsive 360/768/1200; reduced-motion + keyboard + alt text; OG/favicon/meta set.

Approve and I'll build.