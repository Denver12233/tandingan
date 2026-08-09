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
          <div className="h-full rounded-2xl border border-[rgba(245,243,238,0.1)] bg-[rgba(18,22,31,0.6)] p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(242,166,90,0.1)] border border-[rgba(242,166,90,0.25)] px-3 py-1 text-xs font-semibold text-[#F2A65A] mb-4">
                <GraduationCap size={15} />
                <span>Bachelor&apos;s Degree</span>
              </div>

              <h3 className="font-[var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[#F5F3EE] mb-2">
                {cvData.education.degree}
              </h3>

              <div className="text-lg font-semibold text-[rgba(245,243,238,0.85)] mb-4">
                {cvData.education.institution}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[rgba(245,243,238,0.6)] mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar size={15} className="text-[#F2A65A]" />
                  <span>Graduation Year: {cvData.education.year}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-[#F2A65A]" />
                  <span>{cvData.education.location}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[rgba(245,243,238,0.65)] leading-relaxed border-t border-[rgba(245,243,238,0.08)] pt-4">
                Completed core computer science &amp; IT curriculum covering web development, database management systems, network setup, software engineering principles, and application testing.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[rgba(245,243,238,0.08)]">
              <Badge variant="accent">BSIT 2026</Badge>
              <Badge variant="surface">Web &amp; Mobile Dev</Badge>
              <Badge variant="surface">Database Management</Badge>
            </div>
          </div>
        </AnimatedReveal>

        {/* Certifications & Diplomas */}
        <AnimatedReveal direction="up" delay={0.2} className="lg:col-span-5">
          <div className="h-full rounded-2xl border border-[rgba(245,243,238,0.1)] bg-[rgba(18,22,31,0.6)] p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-base font-bold text-[#F5F3EE] mb-6 border-b border-[rgba(245,243,238,0.08)] pb-4 font-[var(--font-space-grotesk)]">
                <Award className="text-[#F2A65A]" size={20} />
                <span>Verified Certifications</span>
              </div>

              <div className="space-y-6">
                {cvData.certifications.map((cert) => (
                  <div key={cert.title} className="group rounded-xl border border-[rgba(245,243,238,0.08)] bg-[rgba(245,243,238,0.02)] p-4 transition-all duration-200 hover:border-[rgba(242,166,90,0.3)] hover:bg-[rgba(242,166,90,0.04)]">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-[var(--font-space-grotesk)] text-sm font-semibold text-[#F5F3EE] group-hover:text-[#F2A65A] transition-colors">
                        {cert.title}
                      </h4>
                      <span className="text-[11px] font-mono text-[#F2A65A] shrink-0">{cert.year}</span>
                    </div>
                    <p className="text-xs text-[rgba(245,243,238,0.6)] mb-3">
                      Issued by {cert.issuer}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-[rgba(245,243,238,0.5)]">
                      <CheckCircle2 size={13} className="text-[#F2A65A]" />
                      <span>Verified Completion</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(245,243,238,0.08)] text-xs text-[rgba(245,243,238,0.5)]">
              All certificate records match Denver Tandingan&apos;s verified CV.
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}