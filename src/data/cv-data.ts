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
};

export const cvData = {
  personal: {
    name: "Denver Tandingan",
    role: "BSIT Fresh Graduate",
    tagline: "Software & Web Application Developer",
    email: "tandingandenverm@gmail.com",
    phone: "(+63) 992 203 2589",
    location: "Urdaneta City, Pangasinan",
    summary:
      "I am a fresh IT graduate with practical experience in software and web application development gained during my internship at MakerSpace InnovHub OPC. I have knowledge of both frontend and backend web development, with particular interest in backend logic, database management, and solving technical problems that keep an application running smoothly. During my internship, I contributed to real projects that involved building application features, managing databases, migrating data between systems, and testing applications before deployment. I am comfortable learning new tools quickly and enjoy working closely with a team to figure out the best way to get things done.",
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
      name: "Core Technical Competencies",
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
