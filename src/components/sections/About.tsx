"use client";

import { Award, BookOpen, CheckCircle2, Code2, Database, GraduationCap, Sparkles, Target } from "lucide-react";
import { cvData } from "@/src/data/cv-data";
import AnimatedReveal from "../ui/AnimatedReveal";
import Badge from "../ui/Badge";
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
            <div className="rounded-2xl border border-[rgba(245,243,238,0.1)] bg-[rgba(18,22,31,0.6)] p-6 sm:p-8 backdrop-blur-md">
              <h3 className="font-[var(--font-space-grotesk)] text-xl font-bold text-[#F5F3EE] flex items-center gap-2 mb-4">
                <GraduationCap className="text-[#F2A65A]" size={22} />
                <span>Educational &amp; Technical Background</span>
              </h3>

              <p className="text-sm sm:text-base text-[rgba(245,243,238,0.7)] leading-relaxed mb-4">
                I graduated with a degree in <strong className="text-[#F5F3EE]">BS Information Technology</strong> from{" "}
                <strong className="text-[#F5F3EE]">University of Eastern Pangasinan</strong> (Class of 2026). During my degree, I developed a strong interest in software development, backend logic, and database systems.
              </p>

              <p className="text-sm sm:text-base text-[rgba(245,243,238,0.7)] leading-relaxed">
                My hands-on experience was solidified during my <strong className="text-[#F2A65A]">500-hour OJT internship at MakerSpace InnovHub OPC</strong>. There, I worked directly on production codebases using Next.js and Node.js, resolving real bugs, managing databases, migrating data, and preparing applications for deployment.
              </p>
            </div>
          </AnimatedReveal>

          {/* Professional Focus Grid */}
          <AnimatedReveal direction="up" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[rgba(245,243,238,0.08)] bg-[rgba(18,22,31,0.4)] p-5">
                <div className="h-10 w-10 rounded-xl bg-[rgba(242,166,90,0.1)] border border-[rgba(242,166,90,0.2)] flex items-center justify-center text-[#F2A65A] mb-3">
                  <Database size={20} />
                </div>
                <h4 className="font-[var(--font-space-grotesk)] text-base font-semibold text-[#F5F3EE] mb-1">
                  Backend &amp; Databases
                </h4>
                <p className="text-xs text-[rgba(245,243,238,0.6)] leading-relaxed">
                  Particular interest in backend logic, API integration, data migration, and managing MySQL, MongoDB, and Firebase databases.
                </p>
              </div>

              <div className="rounded-2xl border border-[rgba(245,243,238,0.08)] bg-[rgba(18,22,31,0.4)] p-5">
                <div className="h-10 w-10 rounded-xl bg-[rgba(242,166,90,0.1)] border border-[rgba(242,166,90,0.2)] flex items-center justify-center text-[#F2A65A] mb-3">
                  <Code2 size={20} />
                </div>
                <h4 className="font-[var(--font-space-grotesk)] text-base font-semibold text-[#F5F3EE] mb-1">
                  Web &amp; Software Dev
                </h4>
                <p className="text-xs text-[rgba(245,243,238,0.6)] leading-relaxed">
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
            <div className="rounded-2xl border border-[rgba(242,166,90,0.2)] bg-[rgba(242,166,90,0.04)] p-6 backdrop-blur-md">
              <h3 className="font-[var(--font-space-grotesk)] text-base font-bold text-[#F5F3EE] flex items-center gap-2 mb-4">
                <Award className="text-[#F2A65A]" size={20} />
                <span>Certifications &amp; Training</span>
              </h3>

              <div className="space-y-4">
                {cvData.certifications.map((cert) => (
                  <div key={cert.title} className="flex items-start gap-3 border-b border-[rgba(245,243,238,0.08)] pb-3 last:border-0 last:pb-0">
                    <Sparkles className="text-[#F2A65A] shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-[#F5F3EE]">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[rgba(245,243,238,0.55)]">
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
            <div className="rounded-2xl border border-[rgba(245,243,238,0.1)] bg-[rgba(18,22,31,0.6)] p-6 backdrop-blur-md">
              <h3 className="font-[var(--font-space-grotesk)] text-base font-bold text-[#F5F3EE] flex items-center gap-2 mb-4">
                <Target className="text-[#F2A65A]" size={20} />
                <span>Professional Strengths</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cvData.softSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-xs text-[rgba(245,243,238,0.75)]">
                    <CheckCircle2 size={14} className="text-[#F2A65A] shrink-0" />
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