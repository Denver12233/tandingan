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
├── DESIGN.md                     # Permanent Design System Reference
├── README.md                     # Project overview and directory documentation
├── app/
│   ├── favicon.ico               # Browser favicon
│   ├── globals.css               # Design tokens, Tailwind CSS imports, and global styles
│   ├── layout.tsx                # Root layout with font imports, metadata, and Navbar
│   └── page.tsx                  # Main page assembling all 6 portfolio sections
├── next-env.d.ts                 # Next.js TypeScript declarations
├── next.config.ts                # Next.js configuration (allowedDevOrigins)
├── package.json                  # Dependencies, scripts, and metadata
├── package-lock.json             # Locked dependency versions
├── postcss.config.mjs            # PostCSS configuration for Tailwind CSS
├── public/
│   ├── og-image.png              # OpenGraph social share image
│   ├── resume.pdf                # Downloadable CV document
│   └── ...                       # Static SVGs and icons
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx        # Site footer with branding, nav links, and back-to-top action
│   │   │   └── Navbar.tsx        # Fixed centered navigation pill with active section indicator
│   │   ├── sections/
│   │   │   ├── About.tsx         # About section (BSIT degree, focus, soft skills, certifications)
│   │   │   ├── Contact.tsx       # Contact section (email copy, phone, direct email, location)
│   │   │   ├── Education.tsx     # Education section (UEP degree, verified certificates)
│   │   │   ├── Experience.tsx    # Work Experience section (MakerSpace InnovHub OPC internship)
│   │   │   ├── Hero.tsx          # Hero section (Graduate intro, stack, stats, CTAs)
│   │   │   └── Skills.tsx        # Technical Skills section (Categorized skill badges)
│   │   └── ui/
│   │       ├── AnimatedReveal.tsx # Scroll-triggered fade & slide animation wrapper
│   │       ├── Badge.tsx         # Styled pill badges for skills, tags, and categories
│   │       ├── Button.tsx        # Reusable primary/secondary button and link component
│   │       └── SectionHeading.tsx# Reusable section header with eyebrow tag and description
│   ├── data/
│   │   ├── cv-data.ts            # Structured CV data (Single source of truth)
│   │   └── site-config.ts        # Navigation links and site metadata
│   ├── lib/
│   │   └── utils.ts              # Classname merging helper (clsx + tailwind-merge)
│   └── types/
│       └── index.ts              # TypeScript interface definitions
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
