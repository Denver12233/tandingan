"use client";

import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { cvData } from "@/src/data/cv-data";
import AnimatedReveal from "../ui/AnimatedReveal";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";

export default function EducationSection() {
  return (
    <section id="education" className="pt-8 sm:pt-10 pb-20 sm:pb-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation in Information Technology."
        description="Formal IT education from University of Eastern Pangasinan, covering the core disciplines behind everything I build."
      />

      <AnimatedReveal direction="up" delay={0.1}>
        <div className="max-w-3xl border-l-2 border-[var(--accent)] pl-6 sm:pl-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--badge-accent-bg)] border border-[var(--badge-accent-border)] px-3 py-1 text-xs font-semibold text-[var(--badge-accent-text)] mb-4">
            <GraduationCap size={15} />
            <span>Bachelor&apos;s Degree</span>
          </div>

          <h3 className="font-[var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-1.5">
            {cvData.education.degree}
          </h3>

          <div className="text-lg font-semibold text-[var(--text-secondary)] mb-4">
            {cvData.education.institution}
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-[var(--text-muted)] mb-6">
            <div className="flex items-center gap-1.5">
              <Calendar size={15} className="text-[var(--accent)]" />
              <span>Graduation Year: {cvData.education.year}</span>
            </div>
            <a
              href="https://maps.app.goo.gl/KnoG9houJ4H2azfQ8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View University of Eastern Pangasinan on Google Maps"
              className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[var(--accent)]"
            >
              <MapPin size={15} className="text-[var(--accent)]" />
              <span>{cvData.education.location}</span>
            </a>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Completed core computer science &amp; IT curriculum covering web development,
            database management systems, network setup, software engineering principles,
            and application testing.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Badge variant="accent">BSIT 2026</Badge>
            <Badge variant="surface">Web &amp; Mobile Dev</Badge>
            <Badge variant="surface">Database Management</Badge>
          </div>
        </div>
      </AnimatedReveal>
    </section>
  );
}