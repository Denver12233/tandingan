"use client";

import { Code, Database, Layers, Wrench } from "lucide-react";
import { cvData } from "@/src/data/cv-data";
import { techIcons } from "@/src/lib/techIcons";
import AnimatedReveal from "../ui/AnimatedReveal";
import SectionHeading from "../ui/SectionHeading";

export default function Skills() {
  const getCategoryIcon = (name: string) => {
    if (name.includes("Frameworks")) return <Layers className="text-[var(--accent)]" size={22} />;
    if (name.includes("Languages")) return <Code className="text-[var(--accent)]" size={22} />;
    if (name.includes("Database")) return <Database className="text-[var(--accent)]" size={22} />;
    return <Wrench className="text-[var(--accent)]" size={22} />;
  };

  return (
    <section id="skills" className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="02. Technical Skills"
        title="Tools, languages, and technical competencies from my CV."
        description="All technical skills are derived directly from my hands-on university coursework and 500-hour OJT internship at MakerSpace InnovHub OPC."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {cvData.technicalSkills.map((category, idx) => (
          <AnimatedReveal key={category.name} direction="up" delay={0.1 + idx * 0.1}>
            <div className="h-full rounded-2xl border border-[var(--surface-border)] bg-[var(--card-bg)] p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-[var(--surface-hover-border)] hover:shadow-lg">
              <div className="flex items-center gap-3 mb-5 border-b border-[var(--surface-border)] pb-4">
                <div className="h-10 w-10 rounded-xl bg-[var(--badge-accent-bg)] border border-[var(--badge-accent-border)] flex items-center justify-center shrink-0">
                  {getCategoryIcon(category.name)}
                </div>
                <h3 className="font-[var(--font-space-grotesk)] text-lg font-bold text-[var(--text-primary)]">
                  {category.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const Icon = techIcons[skill];
                  return (
                    <div
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-xl bg-[var(--badge-surface-bg)] border border-[var(--badge-surface-border)] px-3.5 py-2 text-xs sm:text-sm font-medium text-[var(--badge-surface-text)] transition-all duration-200 hover:bg-[var(--badge-accent-bg)] hover:border-[var(--badge-accent-border)] hover:text-[var(--badge-accent-text)]"
                    >
                      {Icon ? (
                        <Icon className="h-3.5 w-3.5 shrink-0" />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      )}
                      <span>{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}