> This file is the source of truth for this portfolio's design system. Before adding or changing any UI, read this file and match its existing palette, typography, layout patterns, and animation conventions. Only deviate if the user explicitly asks for a new design direction — and if you do deviate, update this file afterward to reflect the change.

# Design System Reference — Denver Tandingan Portfolio

## 1. Color Palette (Dark & Light Modes)

Every color across the portfolio is managed via semantic CSS variables in `app/globals.css`, supporting both Dark Mode (default) and a warm, high-contrast Light Mode:

| Token / Purpose | Dark Theme (`:root`) | Light Theme (`[data-theme="light"]`) | Description / Contrast Strategy |
| :--- | :--- | :--- | :--- |
| **Primary Background** | `#0B0E14` (`--background`) | `#FAF7F2` (`--background`) | Main page body background. Warm cream-tinted off-white in light mode. |
| **Card Surface** | `#12161F` (`--surface`) | `#FFFFFF` (`--surface`) | Elevated pure white section cards, panels, and modals. |
| **Primary Text** | `#F5F3EE` (`--text-primary`) | `#1A1A18` (`--text-primary`) | Headlines & primary copy. Deep rich charcoal black (15.2:1 AAA contrast against `#FAF7F2`). |
| **Muted Body Text** | `rgba(245,243,238,0.7)` (`--text-secondary`) | `#4A4A45` (`--text-secondary`) | Secondary text & descriptions (7.6:1 AAA contrast against `#FAF7F2`). |
| **Caption Text** | `rgba(245,243,238,0.55)` (`--text-muted`) | `#73726B` (`--text-muted`) | Metadata, dates, and labels (4.8:1 AA contrast). |
| **Accent Primary** | `#F2A65A` (`--accent`) | `#C97A2E` (`--accent`) | Warm amber in dark mode; shifted to darker terracotta amber in light mode for proper visual weight. |
| **Accent Text On CTA** | `#0B0E14` (`--accent-text-on`) | `#FFFFFF` (`--accent-text-on`) | Text on primary button. Dark on light amber in dark mode; crisp white on `#C97A2E` in light mode. |
| **Accent Soft Fill** | `rgba(242,166,90,0.12)` (`--badge-accent-bg`) | `#FDF1E2` (`--badge-accent-bg`) | Soft warm amber badge & icon container backgrounds. |
| **Accent Badge Border** | `rgba(242,166,90,0.3)` (`--badge-accent-border`) | `#F0D3A8` (`--badge-accent-border`) | Accent pill borders & highlighted outlines. |
| **Accent Badge Text** | `#F2A65A` (`--badge-accent-text`) | `#8A5A18` (`--badge-accent-text`) | High-contrast amber badge text (4.6:1 AA contrast). |
| **Subtle Border** | `rgba(245,243,238,0.1)` (`--surface-border`) | `rgba(26,26,24,0.12)` (`--surface-border`) | Card outlines, dividers, and floating navbar borders for distinct visual depth. |
| **Skeleton Base** | `#12161F` (`--skeleton-bg`) | `#EAE6DE` (`--skeleton-bg`) | Base background for loading skeleton components. |

---

## 2. Typography

Loaded via `next/font/google` in `app/layout.tsx`:

- **Display / Heading Font**: `Space Grotesk` (`--font-space-grotesk`) — Used for H1, H2, H3 titles, section headings, numbers, brand logo (`Denver.dev`), and component titles.
- **Body Font**: `Geist` (`--font-geist-sans`) — Used for body paragraphs, descriptions, badges, button labels, and general copy.
- **Monospace Font**: `Geist Mono` (`--font-geist-mono`) — Used for technical tags, dates, and code snippets.
- **Accent Script Font**: `Caveat` (`--font-caveat`) — Used for handwritten annotations and hero highlights.

### Font Size Scale & Classes
- **Hero Title**: `clamp(38px, 6vw, 72px)` / `text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight`
- **Section Heading (H2)**: `text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight`
- **Card Heading (H3)**: `text-[18px]` to `text-2xl font-bold`
- **Subheading (H4)**: `text-sm sm:text-base font-semibold`
- **Body Text**: `text-sm sm:text-base leading-relaxed`
- **Caption / Metadata**: `text-xs font-medium`

---

## 3. Layout Patterns

- **Max Width**: `max-w-6xl` (`1152px`) centered with `mx-auto` for all core section wrappers.
- **Section Spacing**: `py-20 sm:py-28 px-6 sm:px-10` with `scroll-padding-top: 90px` to offset fixed navigation.

### Section Breakdown & Reused Components

1. **Navbar (`src/components/layout/Navbar.tsx`)**:
   - Fixed pill header (`fixed top-4 left-0 right-0`) with backdrop blur (`backdrop-blur-xl`).
   - Theme toggle button with animated Sun/Moon icon switch using Framer Motion.
   - Desktop flex list with `IntersectionObserver` active dot indicator (`motion.span layoutId="navDot"`).
   - Mobile hamburger menu drawer with smooth slide-down animation and minimum touch targets (`44px`).

2. **Hero (`src/components/sections/Hero.tsx`)**:
   - Centered vertical layout with background radial grid pattern (`var(--grid-line)`) and warm background glow (`var(--grid-glow)`).
   - Eyebrow tag, strong gradient-accented H1 headline, short CV summary, core technology pills, 3 action CTAs, and a 3-column stats bar (`BSIT 2026`, `500 Hours OJT`, `Full-Stack Dev`).
   - Reuses `Button` and `Badge` from `src/components/ui`.

3. **About (`src/components/sections/About.tsx`)**:
   - 12-column grid: 7-col background story & 2-card focus grid (Backend & Databases, Web & Software Dev); 5-col sidebar with Certifications Spotlight & Soft Skills Checklist.
   - Reuses `SectionHeading`, `AnimatedReveal`, `Badge`.

4. **Skills (`src/components/sections/Skills.tsx`)**:
   - 2x2 grid of skill categories (Frameworks, Programming Languages, Database Management, Core Technical Competencies).
   - Pill cards with subtle amber bullet indicators (`span h-1.5 w-1.5 bg-[var(--accent)]`). Zero fake rating bars.
   - Reuses `SectionHeading`, `AnimatedReveal`.

5. **Experience (`src/components/sections/Experience.tsx`)**:
   - Detailed timeline card for MakerSpace InnovHub OPC Developer Internship (Feb 2026 – May 2026).
   - Projects Spotlight bar highlighting real contributions (Research Platform & Enterprise Analytics Dashboard).
   - 2x2 grid of categorized responsibilities with green checkmark bullet icons.
   - Reuses `SectionHeading`, `AnimatedReveal`, `Badge`.

6. **Education (`src/components/sections/Education.tsx`)**:
   - 12-column split layout: 7-col University of Eastern Pangasinan degree card; 5-col Verified Certifications card list.
   - Reuses `SectionHeading`, `AnimatedReveal`, `Badge`.

7. **Contact (`src/components/sections/Contact.tsx`)**:
   - Centered CTA card container with top subtle ambient light.
   - 3-column quick detail grid (Email with copy button, Phone with direct call link, Location).
   - Action buttons for Direct Email and CV Download.
   - Reuses `SectionHeading`, `AnimatedReveal`, `Button`.

8. **Footer (`src/components/layout/Footer.tsx`)**:
   - Flex container with brand signature, inline nav links, and rounded scroll-to-top button.

---

## 4. Animation and Interaction Patterns

- **Scroll Reveal (`src/components/ui/AnimatedReveal.tsx`)**:
  - Fade-in + slide-up (`opacity: 0 -> 1`, `translateY: 20px -> 0px`).
  - Scroll triggered via `motion/react` `whileInView` with `viewport: { once: true, margin: "-40px" }`.
  - Respects `prefers-reduced-motion` (disables motion effects when requested by user OS).
- **Navigation Active Indicator**: Smooth spring transition (`stiffness: 300, damping: 30`) connecting active navigation links.
- **Button Hover States**: `hover:-translate-y-0.5`, subtle shadow expansion (`shadow-[0_4px_16px_var(--accent-glow)]`), scale active feedback (`active:scale-[0.98]`).
- **Card Hover States**: Border highlight (`hover:border-[var(--surface-hover-border)]`) and subtle shadow lift.
- **Theme Toggle Animation**: Smooth 90° rotation and scale/opacity fade when toggling between dark (Sun icon) and light (Moon icon) modes.

---

## 5. Component Conventions

- **Cards**: `rounded-2xl border border-[var(--surface-border)] bg-[var(--card-bg)] backdrop-blur-md p-6 sm:p-8`.
- **Badges (`Badge.tsx`)**: `rounded-full px-3 py-1 text-xs font-medium`. Variants: `accent` (`var(--badge-accent-bg)` fill, `var(--badge-accent-text)` text), `surface` (`var(--badge-surface-bg)` fill, `var(--badge-surface-text)` text).
- **Buttons (`Button.tsx`)**: `rounded-xl font-semibold transition-all duration-200`. Supports sizes `sm` (`38px`), `md` (`44px`), `lg` (`50px`).
- **Icons**: Standardized using `lucide-react` with uniform sizing (`16px`, `18px`, `20px`) colored in `var(--accent)` or `var(--text-secondary)`.

---

## 6. Rules for Future Changes

> Read this document prior to introducing any design modifications. Maintain color variables, typography hierarchy, card border styling, and animation parameters consistent with the system defined above. Never use hardcoded hex values in component files; use semantic CSS variable classes (`bg-[var(--surface)]`, `text-[var(--text-primary)]`, `text-[var(--accent)]`, etc.).