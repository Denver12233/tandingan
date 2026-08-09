# Denver Portfolio

## Project Overview

This repository is a Next.js portfolio website built with the App Router and TypeScript. It is designed as a developer landing page with a responsive navbar, hero section, and supporting page sections for portfolio content.

The project is intended to showcase a small portfolio site structure with reusable UI components, Tailwind CSS styling, motion-based animations, and a contact API route.

## Folder Structure

```
.
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── og-image.png
│   ├── resume.pdf
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   └── api
│   │       └── contact
│   │           └── route.ts
│   ├── components
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── sections
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Skills.tsx
│   │   └── ui
│   │       ├── AnimatedReveal.tsx
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── ProjectCard.tsx
│   │       └── SectionHeading.tsx
│   ├── data
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── site-config.ts
│   ├── hooks
│   │   └── useScrollSpy.ts
│   ├── lib
│   │   ├── email.ts
│   │   └── utils.ts
│   └── types
│       └── index.ts
├── eslint.config.mjs
└── tsconfig.json
```

## Explanation of Each Folder/File

- `app/`
  - Contains the Next.js App Router entry points.
  - `layout.tsx` defines the root HTML layout and renders the site-wide `Navbar`.
  - `page.tsx` renders the homepage content and currently includes the hero section.
  - `globals.css` contains global styles and Tailwind CSS imports.
  - `favicon.ico` is the site icon.

- `src/`
  - Contains the main source code for the application.

- `src/app/api/contact/route.ts`
  - Implements an API route for contact or form submission handling.

- `src/components/`
  - `layout/` holds shared layout components such as `Navbar` and `Footer`.
  - `sections/` contains page sections like `Hero`, `About`, `Skills`, `Experience`, `Projects`, `Education`, and `Contact`.
  - `ui/` contains reusable UI building blocks such as buttons, badges, cards, and animated reveal wrappers.

- `src/data/`
  - Stores content and configuration data used across the site.
  - `site-config.ts` includes navigation links and site settings.
  - `experience.ts`, `projects.ts`, and `skills.ts` define portfolio data.

- `src/hooks/`
  - Contains custom React hooks, such as scroll spy behavior for active section tracking.

- `src/lib/`
  - Contains utility functions and helper logic.
  - `email.ts` likely handles email or contact-related logic.
  - `utils.ts` includes shared utility helpers.

- `src/types/`
  - Defines TypeScript types used by the project.

- `public/`
  - Stores static assets served directly by Next.js.
  - Includes icons, images, and the downloadable `resume.pdf`.

- `package.json`
  - Lists project dependencies, scripts, and metadata.

- `package-lock.json`
  - Locks exact dependency versions for reproducible installs.

- `tsconfig.json`
  - Configures TypeScript settings and path aliases.

- `next.config.ts`
  - Configures Next.js build, runtime, and app settings.

- `postcss.config.mjs`
  - Configures PostCSS, which is used by Tailwind CSS.

- `eslint.config.mjs`
  - Defines linting rules and configuration.

- `next-env.d.ts`
  - Provides type declarations for Next.js runtime features.

- `AGENTS.md` and `CLAUDE.md`
  - Workspace-specific documentation files related to AI agents or tooling.

## How the Project Works

1. The Next.js App Router loads `app/layout.tsx` for every page.
2. `layout.tsx` renders the global structure and includes `Navbar` from `src/components/layout/Navbar.tsx`.
3. `app/page.tsx` renders the homepage content inside the `main` element.
4. The homepage currently uses `Hero` from `src/components/sections/Hero.tsx`.
5. Reusable sections and UI components are stored under `src/components` and can be composed into pages.
6. Global styles and Tailwind CSS are applied through `app/globals.css`.
7. Static assets in `public/` are served directly, including the resume PDF.
8. The API route at `src/app/api/contact/route.ts` handles backend contact logic when called from the frontend.

## Important Notes

- The project uses Next.js App Router and TypeScript.
- Tailwind CSS is configured via `app/globals.css` and `postcss.config.mjs`.
- Fonts are loaded using `next/font` in `app/layout.tsx`.
- `@/*` path aliases are set in `tsconfig.json` and used throughout the codebase.
- `node_modules/` is generated and not shown in this README tree.
- Keep the `app/` and `src/` folder structure intact to preserve the App Router and component organization.
- If you add new pages or routes, follow the App Router conventions inside `app/` or `src/app/`.
