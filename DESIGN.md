After you finish implementing the redesign, create a file called `DESIGN.md` at the root of the project. This file is meant to be the permanent design-system reference for this portfolio — from now on, before making any future UI change, you (or any AI assistant working on this repo) should read `DESIGN.md` first and follow it, instead of deciding new colors, fonts, or patterns from scratch each time.

Document the following in `DESIGN.md`, based on what you actually implemented:

## 1. Color palette

List every color used, with its hex value, its CSS variable name (if you used one), and what it's used for. Example format:

- Background: `#0d0f14` — `--bg-primary` — page background
- Accent 1: `#e0a458` — `--accent-primary` — CTAs, highlighted words, key UI

## 2. Typography

- Which fonts are used (display/heading, body, mono/label), where each is loaded from (`next/font`, Google Fonts, etc.), and which elements use which font.
- Font size scale actually used (headline, subheading, body, caption) with the Tailwind classes or CSS values.

## 3. Layout patterns

For each section (Hero, About, Skills, Experience, Education, Contact) and shared layout (Navbar, Footer), briefly describe:
- The structural approach (e.g. "split layout, text left / visual right", "tabbed panel", "timeline with connectors")
- Spacing/sizing conventions (padding, gaps, max-width) actually used
- Any component this section reuses from `src/components/ui`

## 4. Animation and interaction patterns

List every animation/transition actually implemented — what triggers it, what it does, and roughly its duration/easing. Example: "Hero headline: typewriter effect on mount, ~40ms per character" or "Section reveal: fade + translateY(12px) on scroll into view via `AnimatedReveal`, staggered 80ms between children." Also note hover-state conventions (e.g. "nav links: background highlight only, no lift/shadow, 150ms ease").

## 5. Component conventions

Note reusable patterns for buttons, badges, cards — border radius, border style, states (default/hover/active) — so new sections stay visually consistent with existing ones.

## 6. Rules for future changes

Add this note at the top of the file:

> This file is the source of truth for this portfolio's design system. Before adding or changing any UI, read this file and match its existing palette, typography, layout patterns, and animation conventions. Only deviate if the user explicitly asks for a new design direction — and if you do deviate, update this file afterward to reflect the change.

Keep `DESIGN.md` accurate — if you change something during this task, make sure the file reflects the final implementation, not the plan.