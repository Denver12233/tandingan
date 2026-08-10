export type ExperienceCategory = {
  category: string;
  items: string[];
};

export type WorkExperience = {
  company: string;
  position: string;
  duration: string;
  categories: ExperienceCategory[];
  projectsMentioned: string[];
  techStack: string[];
};

export type Education = {
  degree: string;
  institution: string;
  year: string;
  location: string;
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
  /** Whether this category should be rendered in the Skills marquee. Defaults to true. */
  showInMarquee?: boolean;
};

export const cvData = {
  personal: {
    name: "Denver Tandingan",
    role: "BSIT Fresh Graduate",
    tagline: "Software & Web Application Developer",
    email: "tandingandenverm@gmail.com",
    phone: "(+63) 992 203 2589",
    secondaryPhone: "(+63) 931 950 5961",
    location: "Urdaneta City, Pangasinan",
    summary:
      "I’m a fresh IT graduate passionate about building practical and reliable software solutions. I enjoy working with backend development, databases, and solving technical problems. I’m a fast learner who’s always eager to take on new challenges and grow as a developer. ",
    interests: ["Backend Logic", "Database Management", "Data Migration", "Web Development", "Application Testing"],
  },
  education: {
    degree: "BS Information Technology",
    institution: "University of Eastern Pangasinan",
    year: "2026",
    location: "Binalonan, Pangasinan",
  } as Education,
  certifications: [
    {
      title: "Certified AI Amplified Scholar",
      issuer: "Philippine Coding Camp / Innovision",
      year: "2026",
    },
    {
      title: "500-Hour OJT Completion Certificate",
      issuer: "MakerSpace InnovHub OPC",
      year: "2026",
    },
  ] as Certification[],
  experience: [
    {
      company: "MakerSpace InnovHub OPC",
      position: "Developer Intern",
      duration: "February 2026 – May 2026",
      techStack: ["Next.js", "Node.js", "MySQL", "MongoDB", "Git", "GitHub"],
      projectsMentioned: ["Research Platform", "Enterprise Analytics Dashboard"],
      categories: [
        {
          category: "Software and Web Application Development",
          items: [
            "Assisted in developing and maintaining web applications using Next.js and Node.js.",
            "Implemented application features and resolved issues for real-world projects, including a research platform and an enterprise analytics dashboard.",
          ],
        },
        {
          category: "Testing and Troubleshooting",
          items: [
            "Participated in testing, debugging, and improving application performance ahead of deployment.",
            "Identified and resolved bugs and technical issues throughout the development process.",
          ],
        },
        {
          category: "Environment Setup and Documentation",
          items: [
            "Installed, configured, and maintained development and testing environments and software tools.",
            "Supported documentation and technical implementation for ongoing development work.",
          ],
        },
        {
          category: "Team Collaboration",
          items: [
            "Collaborated with team members using Git and GitHub for version control and code collaboration.",
            "Participated in team discussions and check-ins to stay aligned on project updates and deliverables.",
          ],
        },
      ],
    },
  ] as WorkExperience[],
  technicalSkills: [
    {
      name: "Frontend & Backend Frameworks",
      skills: ["Next.js", "Laravel", "Node.js"],
    },
    {
      name: "Programming Languages",
      skills: ["JavaScript", "PHP", "HTML", "CSS"],
    },
    {
      name: "Database Management",
      skills: ["MySQL", "MongoDB", "Firebase"],
    },
    {
      name: "Version Control & Collaboration",
      skills: ["Git", "GitHub"],
    },
    {
      name: "Core Technical Competencies",
      showInMarquee: false,
      skills: [
        "Web and Mobile Development",
        "Data Migration",
        "Version Control & Collaboration (Git & GitHub)",
        "Systems & Environment Support (Network Configuration, Environment Setup)",
        "Application Testing & Issue Resolution",
      ],
    },
  ] as SkillCategory[],
  softSkills: [
    "Attention to detail",
    "Willingness to learn and grow",
    "Strong communication skills",
    "Collaboration with cross-functional teams",
    "Analytical and problem-solving skills",
    "Time management and prioritization",
    "Critical thinking",
    "Responsibility and accountability",
  ],
};
