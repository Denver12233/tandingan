import { cvData } from "./cv-data";

export const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const siteConfig = {
  name: cvData.personal.name,
  role: cvData.personal.role,
  email: cvData.personal.email,
  phone: cvData.personal.phone,
  location: cvData.personal.location,
  resumeUrl: "/Denver_M.Tandingan.pdf",
};

export const heroContent = {
  eyebrow: "BSIT Graduate — Open to Opportunities",
  name: cvData.personal.name,
  role: "BSIT Fresh Graduate",
  tagline: "Software & Web Application Developer",
  sub: cvData.personal.summary,
  ctaPrimary: "View Experience",
  ctaSecondary: "Contact Me",
  ctaResume: "Download CV",
  metaItems: [
    { num: "2026", label: "BSIT Graduate" },
    { num: "500 hrs", label: "OJT Internship" },
    { num: "Full-Stack", label: "Web & Software Dev" },
  ],
  topSkills: ["Next.js", "Node.js", "Laravel", "PHP", "JavaScript", "MySQL", "MongoDB"],
  scrollCue: "Scroll down",
};
