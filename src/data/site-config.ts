import type { HeroContent } from "@/src/types";

export const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const siteConfig: { name: string; resumeUrl: string } = {
  name: "Denver",
  resumeUrl: "/resume.pdf",
};

export const heroContent: HeroContent = {
  eyebrow: "BSIT Graduate — Open to Work",
  headlineLine1: "Fresh out of university,",
  headlineLine2: "not fresh out of",
  accentWord: "ideas",
  noteText: "built 3 real projects during OJT",
  sub:
    "I'm Denver — an IT graduate who likes turning messy problems into clean, working software. Still early in the journey, already comfortable shipping real things.",
  ctaPrimary: "View my projects",
  ctaSecondary: "Download resume",
  metaItems: [
    { num: "2026", label: "BSIT graduate" },
    { num: "1", label: "Completed OJT placement" },
    { num: "2+", label: "Shipped projects" },
  ],
  scrollCue: "scroll",
};
