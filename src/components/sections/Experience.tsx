"use client";

import { Calendar, CheckCircle2, Building2, FolderGit2 } from "lucide-react";
import { cvData } from "@/src/data/cv-data";
import AnimatedReveal from "../ui/AnimatedReveal";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="03. Work Experience"
        title="Hands-on internship experience in software & web development."
        description="Detailed record of my 500-hour OJT internship, key project contributions, technical responsibilities, and team collaboration."
      />

      <div className="space-y-8">
        {cvData.experience.map((exp, idx) => (
          <AnimatedReveal key={exp.company} direction="up" delay={0.1 + idx * 0.1}>
            <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--card-bg)] p-6 sm:p-8 backdrop-blur-md relative transition-colors duration-300">
              {/* Timeline Connector Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--surface-border)] pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="text-[var(--accent)]" size={18} />
                    <span className="font-[var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      {exp.company}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-space-grotesk)] text-2xl font-bold text-[var(--text-primary)]">
                    {exp.position}
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-[var(--badge-surface-bg)] border border-[var(--badge-surface-border)] px-4 py-1.5 text-xs text-[var(--text-secondary)] self-start md:self-auto">
                  <Calendar size={14} className="text-[var(--accent)]" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Mentioned Real-World Projects Spotlight */}
              {exp.projectsMentioned && exp.projectsMentioned.length > 0 ? (
                <div className="mb-6 p-4 rounded-xl bg-[var(--badge-accent-bg)] border border-[var(--badge-accent-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-[var(--text-primary)]">
                    <FolderGit2 className="text-[var(--accent)]" size={16} />
                    <span>Real-world projects contributed to during internship:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.projectsMentioned.map((proj) => (
                      <Badge key={proj} variant="accent">
                        {proj}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Categorized Responsibilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exp.categories.map((cat) => (
                  <div key={cat.category} className="space-y-3">
                    <h4 className="font-[var(--font-space-grotesk)] text-sm font-semibold text-[var(--text-primary)] flex items-center gap-2 border-l-2 border-[var(--accent)] pl-2.5">
                      {cat.category}
                    </h4>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                          <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div className="mt-8 pt-6 border-t border-[var(--surface-border)] flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[var(--text-muted)] mr-2">
                  Technologies Used:
                </span>
                {exp.techStack.map((tech) => (
                  <Badge key={tech} variant="surface" tech={tech}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}