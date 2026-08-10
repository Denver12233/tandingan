/**
 * ADDITIONAL personal & professional context about Denver Tandingan.
 *
 * IMPORTANT: Only update this file with information that Denver has explicitly
 * confirmed. Do NOT infer, guess, or invent personal details here. If a field
 * doesn't apply or hasn't been provided, leave it out entirely. If Denver wants
 * to add other personal milestones or details about other people (family,
 * colleagues, mentors), he should add them directly to this file himself with
 * the correct information.
 *
 * This file complements cv-data.ts (formal CV/resume content). The two files
 * stay separate by design — the chatbot system prompt references both.
 *
 * Note: `techStack` fields below are reorganized from facts already provided
 * elsewhere in this file or in cv-data.ts — they do not introduce new claims.
 */

import { siteConfig } from "./site-config";

export type PersonalProject = {
  name: string;
  url?: string;
  description: string;
  techStack: string[];
  highlights: string[];
};

export type EarlierProject = {
  name: string;
  techStack: string[];
  description: string;
};

export const aboutMeData = {
  birthdate: "January 12, 2004",
  facebook: siteConfig.facebook,
  currentStatus:
    "Actively job-hunting for software/web development or IT roles",
  internship: {
    role: "Web3 Full-Stack Developer Intern",
    company: "MakerSpace InnovHub OPC",
    duration: "February 2026 – May 2026",
    hours: "500 hours",
    projects: [
      "Research minting platform",
      "Enterprise analytics dashboard",
    ],
  },
  recentTraining: {
    title: "SAP Business One Functional Consultant Bootcamp",
    provider: "Xceler8 Technologies Inc.",
    location: "Makati",
    duration: "Two weeks",
    modules: ["Procure-to-Pay", "Inventory", "Sales-to-Cash"],
  },
  personalProjects: [
    {
      name: "Personal developer portfolio",
      url: "https://denverfolio.vercel.app",
      description:
        "Personal developer portfolio built with Next.js App Router, dark theme with amber accents (#F2A65A on #0B0E14 background), using Space Grotesk and Geist fonts.",
      techStack: ["Next.js App Router", "Space Grotesk", "Geist"],
      highlights: [
        "Dark theme with amber accents (#F2A65A on #0B0E14 background)",
      ],
    },
    {
      name: "OJT internship portfolio site",
      description:
        "Built following a strict PRD using Next.js App Router, TypeScript strict mode, Tailwind CSS, and an Atomic Design component structure; included 11 weekly OJT blog posts.",
      techStack: [
        "Next.js App Router",
        "TypeScript strict mode",
        "Tailwind CSS",
        "Atomic Design component structure",
      ],
      highlights: ["11 weekly OJT blog posts"],
    },
  ] as PersonalProject[],
  earlierProjects: [
    {
      name: "Early web projects",
      description:
        "Early web projects built using Laravel, PHP, HTML/CSS/JavaScript, and MySQL.",
      techStack: ["Laravel", "PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    },
    {
      name: "Capstone project",
      description: "Capstone project built using Unity and C#.",
      techStack: ["Unity", "C#"],
    },
  ] as EarlierProject[],
  interests: [
    "Sports betting (specifically UFC)",
    "General familiarity with cryptocurrency platforms",
    "Consistent curiosity about how major platforms (e.g. Facebook, YouTube) are built technically",
  ],
  communicationStyle: {
    preference: "Casual, direct conversation",
    languages: ["English", "Taglish (Tagalog-English code-switching)"],
  },
};
