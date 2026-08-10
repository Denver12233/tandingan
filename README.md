# Denver Tandingan — Personal Portfolio

## Project Overview

This repository contains the personal portfolio website for **Denver Tandingan**, a **BSIT Fresh Graduate** (Class of 2026, University of Eastern Pangasinan) specializing in **Software & Web Application Development**, backend logic, database management, and web development.

The application is built using **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion (`motion/react`)**. The site is structured strictly around Denver's CV as the single source of truth, featuring a fixed floating navigation bar, recruiter-focused sections, smooth scrolling, and custom responsive animations.

---

## Portfolio Sections

The portfolio consists of 6 primary sections:

1. **Home (`#home`)**: Hero introduction, graduate background, core tech stack, key highlights, and primary CTAs.
2. **About (`#about`)**: Educational background, technical focus, soft skills grid, and verified certifications.
3. **Skills (`#skills`)**: Categorized technical skills (Frameworks, Languages, Databases, Technical Competencies) without fake percentage bars.
4. **Experience (`#experience`)**: Timeline card detailing 500-hour OJT Developer Internship at MakerSpace InnovHub OPC and project contributions.
5. **Education (`#education`)**: Degree details from University of Eastern Pangasinan and verified certifications.
6. **Contact (`#contact`)**: Direct email link, phone, location, interactive email copy button, and CV download action.

---

## Folder Structure

```
.
├── .vscode/
│   └── settings.json             # Workspace settings (Tailwind v4 directive lint rules)
├── AGENTS.md                     # Agent & workspace guidelines
├── CLAUDE.md                     # AI assistant instructions
├── DESIGN.md                     # Permanent design reference
├── README.md                     # Project overview and documentation
├── app/
│   ├── favicon.ico               # Browser favicon
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── layout.tsx                # Root layout with global HTML shell and metadata
│   └── page.tsx                  # App entry page rendering the portfolio view
├── next-env.d.ts                 # Next.js TypeScript declarations
├── next.config.ts                # Next.js configuration (allowedDevOrigins)
├── package.json                  # Dependencies, scripts, and metadata
├── package-lock.json             # Locked dependency versions
├── postcss.config.mjs            # PostCSS configuration for Tailwind CSS
├── public/
│   ├── og-image.png              # OpenGraph social share image
│   ├── resume.pdf                # Downloadable CV document
│   └── ...                       # Static assets, SVGs, and icons
├── src/
│   ├── app/
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts      # Contact API route for email form actions
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatWidget.tsx     # Inline chat/contact widget
│   │   │   └── MarkdownContent.tsx# Markdown renderer for chat content
│   │   ├── layout/
│   │   │   ├── Footer.tsx        # Site footer with branding and back-to-top action
│   │   │   └── Navbar.tsx        # Floating navigation pill with active section indicator
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Hero.tsx
│   │   │   └── Skills.tsx
│   │   ├── theme/
│   │   │   └── ThemeProvider.tsx # Theme provider and color mode handling
│   │   ├── ui/
│   │   │   ├── AnimatedReveal.tsx # Scroll-triggered animation wrapper
│   │   │   ├── Badge.tsx         # Styled badge/pill component
│   │   │   ├── Button.tsx        # Reusable button and link component
│   │   │   ├── Logo.tsx          # Brand logo/icon component
│   │   │   ├── SectionHeading.tsx# Reusable section heading component
│   │   │   └── Skeleton.tsx      # Loading skeleton components
│   │   └── PortfolioView.tsx     # Main portfolio page composition
│   ├── data/
│   │   ├── about-me-data.ts      # Personal profile and summary data
│   │   ├── cv-data.ts            # Structured CV data and resume content
│   │   ├── experience.ts         # Experience timeline and project details
│   │   ├── site-config.ts        # Site metadata and navigation links
│   │   └── skills.ts             # Categorized technical skills data
│   ├── hooks/
│   │   ├── useMediaQuery.ts      # Media query hook
│   │   ├── useScrollSpy.ts       # Active section scroll spy hook
│   │   └── useTypewriter.ts      # Typewriter text animation hook
   │   ├── lib/
│   │   │   ├── clipboard.ts      # Clipboard copy helper
   │   │   ├── email.ts          # Email helper utilities
   │   │   ├── techIcons.tsx      # Technology icon mappings
   │   │   └── utils.ts           # Utility helpers and class merge helpers
│   │   └── types/
│   │       └── index.ts          # TypeScript interface definitions
├── eslint.config.mjs             # ESLint linting configuration
└── tsconfig.json                 # TypeScript compiler configuration & path aliases
```

---

## Explanation of Key Folders & Files

### Data Layer (`src/data/`)
- **`cv-data.ts`**: Contains all factual personal profile information, work experience at MakerSpace InnovHub OPC, BSIT education details, technical skills, soft skills, and certifications extracted directly from Denver's CV.
- **`site-config.ts`**: Defines the site title, resume download URL, and active navigation links (`Home`, `About`, `Skills`, `Experience`, `Education`, `Contact`).

### Design System (`DESIGN.md` & `app/globals.css`)
- **`DESIGN.md`**: Permanent design reference documenting the dark theme color palette (`#0B0E14` base, `#12161F` surface, `#F2A65A` warm amber accent), typography scale (`Space Grotesk`, `Geist`, `Geist Mono`, `Caveat`), layout patterns, and component conventions.
- **`app/globals.css`**: Configures root CSS variables, smooth scrolling padding, scrollbar aesthetics, and font variables.

### Components (`src/components/`)
- **`layout/Navbar.tsx`**: Centered floating navigation bar with backdrop blur, active section dot indicator (`IntersectionObserver`), and mobile hamburger menu.
- **`sections/`**: Modular section components composed into `app/page.tsx`.
- **`ui/`**: Reusable UI primitives (`Button`, `Badge`, `SectionHeading`, `AnimatedReveal`).

---

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation & Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Run production server
npm run start

# Lint codebase
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.
