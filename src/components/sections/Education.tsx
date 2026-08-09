"use client";

import { Award, GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { cvData } from "@/src/data/cv-data";
import AnimatedReveal from "../ui/AnimatedReveal";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="04. Education & Certifications"
        title="Academic degree & verified technical credentials."
        description="Formal IT education from University of Eastern Pangasinan accompanied by specialized industry certifications."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Degree Card */}
        <AnimatedReveal direction="up" delay={0.1} className="lg:col-span-7">
          <div className="h-full rounded-2xl border border-[var(--surface-border)] bg-[var(--card-bg)] p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between transition-colors duration-300">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--badge-accent-bg)] border border-[var(--badge-accent-border)] px-3 py-1 text-xs font-semibold text-[var(--badge-accent-text)] mb-4">
                <GraduationCap size={15} />
                <span>Bachelor&apos;s Degree</span>
              </div>

              <h3 className="font-[var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
                {cvData.education.degree}
              </h3>

              <div className="text-lg font-semibold text-[var(--text-secondary)] mb-4">
                {cvData.education.institution}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[var(--text-muted)] mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar size={15} className="text-[var(--accent)]" />
                  <span>Graduation Year: {cvData.education.year}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-[var(--accent)]" />
                  <span>{cvData.education.location}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--surface-border)] pt-4">
                Completed core computer science &amp; IT curriculum covering web development, database management systems, network setup, software engineering principles, and application testing.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[var(--surface-border)]">
              <Badge variant="accent">BSIT 2026</Badge>
              <Badge variant="surface">Web &amp; Mobile Dev</Badge>
              <Badge variant="surface">Database Management</Badge>
            </div>
          </div>
        </AnimatedReveal>

        {/* Certifications & Diplomas */}
        <AnimatedReveal direction="up" delay={0.2} className="lg:col-span-5">
          <div className="h-full rounded-2xl border border-[var(--surface-border)] bg-[var(--card-bg)] p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between transition-colors duration-300">
            <div>
              <div className="flex items-center gap-2 text-base font-bold text-[var(--text-primary)] mb-6 border-b border-[var(--surface-border)] pb-4 font-[var(--font-space-grotesk)]">
                <Award className="text-[var(--accent)]" size={20} />
                <span>Verified Certifications</span>
              </div>

              <div className="space-y-6">
                {cvData.certifications.map((cert) => (
                  <div key={cert.title} className="group rounded-xl border border-[var(--surface-border)] bg-[var(--badge-surface-bg)] p-4 transition-all duration-200 hover:border-[var(--surface-hover-border)] hover:bg-[var(--badge-accent-bg)]">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-[var(--font-space-grotesk)] text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {cert.title}
                      </h4>
                      <span className="text-[11px] font-mono text-[var(--accent)] shrink-0">{cert.year}</span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] mb-3">
                      Issued by {cert.issuer}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-[var(--text-muted)]">
                      <CheckCircle2 size={13} className="text-[var(--accent)]" />
                      <span>Verified Completion</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--surface-border)] text-xs text-[var(--text-muted)]">
              All certificate records match Denver Tandingan&apos;s verified CV.
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}