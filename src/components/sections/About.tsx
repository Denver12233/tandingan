"use client";

import { Award, CheckCircle2, Code2, Database, GraduationCap, Sparkles, Target } from "lucide-react";
import { cvData } from "@/src/data/cv-data";
import AnimatedReveal from "../ui/AnimatedReveal";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="01. About Me"
        title="Solid technical foundation backed by hands-on internship experience."
        description="I am a motivated BSIT graduate dedicated to building clean, maintainable web applications with a strong emphasis on backend logic, database management, and reliability."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Background Story & Professional Focus */}
        <div className="lg:col-span-7 space-y-6">
          <AnimatedReveal direction="up" delay={0.1}>
            <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--card-bg)] p-6 sm:p-8 backdrop-blur-md transition-colors duration-300">
              <h3 className="font-[var(--font-space-grotesk)] text-xl font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
                <GraduationCap className="text-[var(--accent)]" size={22} />
                <span>Educational &amp; Technical Background</span>
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-4">
                I graduated with a degree in <strong className="text-[var(--text-primary)]">BS Information Technology</strong> from{" "}
                <strong className="text-[var(--text-primary)]">University of Eastern Pangasinan</strong> (Class of 2026). During my degree, I developed a strong interest in software development, backend logic, and database systems.
              </p>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                My hands-on experience was solidified during my <strong className="text-[var(--accent)]">500-hour OJT internship at MakerSpace InnovHub OPC</strong>. There, I worked directly on production codebases using Next.js and Node.js, resolving real bugs, managing databases, migrating data, and preparing applications for deployment.
              </p>
            </div>
          </AnimatedReveal>

          {/* Professional Focus Grid */}
          <AnimatedReveal direction="up" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--card-subtle-bg)] p-5 transition-colors duration-300">
                <div className="h-10 w-10 rounded-xl bg-[var(--badge-accent-bg)] border border-[var(--badge-accent-border)] flex items-center justify-center text-[var(--accent)] mb-3">
                  <Database size={20} />
                </div>
                <h4 className="font-[var(--font-space-grotesk)] text-base font-semibold text-[var(--text-primary)] mb-1">
                  Backend &amp; Databases
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Particular interest in backend logic, API integration, data migration, and managing MySQL, MongoDB, and Firebase databases.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--card-subtle-bg)] p-5 transition-colors duration-300">
                <div className="h-10 w-10 rounded-xl bg-[var(--badge-accent-bg)] border border-[var(--badge-accent-border)] flex items-center justify-center text-[var(--accent)] mb-3">
                  <Code2 size={20} />
                </div>
                <h4 className="font-[var(--font-space-grotesk)] text-base font-semibold text-[var(--text-primary)] mb-1">
                  Web &amp; Software Dev
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Building functional web applications with Next.js, Node.js, Laravel, JavaScript, PHP, HTML, and CSS.
                </p>
              </div>
            </div>
          </AnimatedReveal>
        </div>

        {/* Right Column: Soft Skills & Certifications Spotlight */}
        <div className="lg:col-span-5 space-y-6">
          {/* Certifications Spotlight */}
          <AnimatedReveal direction="up" delay={0.25}>
            <div className="rounded-2xl border border-[var(--badge-accent-border)] bg-[var(--badge-accent-bg)] p-6 backdrop-blur-md transition-colors duration-300">
              <h3 className="font-[var(--font-space-grotesk)] text-base font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
                <Award className="text-[var(--accent)]" size={20} />
                <span>Certifications &amp; Training</span>
              </h3>

              <div className="space-y-4">
                {cvData.certifications.map((cert) => (
                  <div key={cert.title} className="flex items-start gap-3 border-b border-[var(--surface-border)] pb-3 last:border-0 last:pb-0">
                    <Sparkles className="text-[var(--accent)] shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[var(--text-muted)]">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>

          {/* Soft Skills */}
          <AnimatedReveal direction="up" delay={0.3}>
            <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--card-bg)] p-6 backdrop-blur-md transition-colors duration-300">
              <h3 className="font-[var(--font-space-grotesk)] text-base font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
                <Target className="text-[var(--accent)]" size={20} />
                <span>Professional Strengths</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cvData.softSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle2 size={14} className="text-[var(--accent)] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}