"use client";

import { Check, Copy, Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cvData } from "@/src/data/cv-data";
import { siteConfig } from "@/src/data/site-config";
import AnimatedReveal from "../ui/AnimatedReveal";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(cvData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="05. Contact"
        title="Let's connect — open to IT & Software Development roles."
        description="Whether you have an open position, an internship follow-up, or want to discuss full-stack & backend opportunities, feel free to reach out!"
        align="center"
      />

      <AnimatedReveal direction="up" delay={0.1}>
        <div className="mt-14 pt-10 sm:pt-12 border-t border-[var(--surface-border)] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h3 className="font-[var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
              Ready to contribute to your dev team
            </h3>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mb-8 leading-relaxed">
              I am actively seeking junior or entry-level positions in web development, backend engineering, or database management where I can apply my skills and continue growing.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(cvData.personal.email)}&su=${encodeURIComponent("Job Opportunity - Denver Tandingan")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send size={18} />
                <span>Send Direct Email</span>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <span>Download CV</span>
              </Button>
            </div>
          </div>

          <div className="divide-y divide-[var(--surface-border)]">
            <div className="flex items-center justify-between gap-4 py-4 first:pt-0">
              <div className="flex items-center gap-3 min-w-0">
                <Mail size={18} className="shrink-0 text-[var(--accent)]" />
                <div className="min-w-0">
                  <div className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider mb-1">
                    Email
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)] truncate">
                    {cvData.personal.email}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="shrink-0 inline-flex items-center gap-1.5 text-xs text-[var(--accent)] hover:underline font-medium"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            <div className="flex items-center justify-between gap-4 py-4">
              <div className="flex items-center gap-3 min-w-0">
                <Phone size={18} className="shrink-0 text-[var(--accent)]" />
                <div className="min-w-0">
                  <div className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider mb-1">
                    Phone
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                    {cvData.personal.phone}
                  </div>
                </div>
              </div>
              <a
                href={`tel:${cvData.personal.phone.replace(/[^0-9+]/g, "")}`}
                className="shrink-0 inline-flex items-center gap-1 text-xs text-[var(--accent)] hover:underline font-medium"
              >
                <span>Call</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="flex items-center justify-between gap-4 py-4">
              <div className="flex items-center gap-3 min-w-0">
                <MapPin size={18} className="shrink-0 text-[var(--accent)]" />
                <div className="min-w-0">
                  <div className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider mb-1">
                    Location
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                    {cvData.personal.location}
                  </div>
                </div>
              </div>
              <span className="shrink-0 text-sm font-medium text-[var(--text-secondary)]">
                Philippines
              </span>
            </div>
          </div>
        </div>
      </AnimatedReveal>
    </section>
  );
}
