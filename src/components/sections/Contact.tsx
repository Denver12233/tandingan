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

      <AnimatedReveal direction="up" delay={0.1} className="max-w-3xl mx-auto">
        <div className="rounded-3xl border border-[var(--badge-accent-border)] bg-[var(--card-bg)] p-8 sm:p-12 backdrop-blur-xl text-center shadow-2xl relative overflow-hidden transition-colors duration-300">
          {/* Subtle Top Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-[var(--accent-glow)] blur-3xl" />

          <h3 className="font-[var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
            Ready to contribute to your dev team
          </h3>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mx-auto mb-8 leading-relaxed">
            I am actively seeking junior or entry-level positions in web development, backend engineering, or database management where I can apply my skills and continue growing.
          </p>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
            {/* Email Card */}
            <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--badge-surface-bg)] p-4 flex flex-col justify-between">
              <div>
                <div className="h-9 w-9 rounded-xl bg-[var(--badge-accent-bg)] border border-[var(--badge-accent-border)] flex items-center justify-center text-[var(--accent)] mb-3">
                  <Mail size={18} />
                </div>
                <div className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider mb-1">
                  Email
                </div>
                <div className="text-xs sm:text-sm font-medium text-[var(--text-primary)] truncate">
                  {cvData.personal.email}
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-[var(--accent)] hover:underline font-medium"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? "Copied to clipboard!" : "Copy email"}</span>
              </button>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--badge-surface-bg)] p-4 flex flex-col justify-between">
              <div>
                <div className="h-9 w-9 rounded-xl bg-[var(--badge-accent-bg)] border border-[var(--badge-accent-border)] flex items-center justify-center text-[var(--accent)] mb-3">
                  <Phone size={18} />
                </div>
                <div className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider mb-1">
                  Phone
                </div>
                <div className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">
                  {cvData.personal.phone}
                </div>
              </div>
              <a
                href={`tel:${cvData.personal.phone.replace(/[^0-9+]/g, "")}`}
                className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--accent)] hover:underline font-medium"
              >
                <span>Call phone</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Location Card */}
            <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--badge-surface-bg)] p-4 flex flex-col justify-between">
              <div>
                <div className="h-9 w-9 rounded-xl bg-[var(--badge-accent-bg)] border border-[var(--badge-accent-border)] flex items-center justify-center text-[var(--accent)] mb-3">
                  <MapPin size={18} />
                </div>
                <div className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider mb-1">
                  Location
                </div>
                <div className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">
                  {cvData.personal.location}
                </div>
              </div>
              <span className="mt-3 text-xs text-[var(--text-muted)]">
                Philippines
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href={`mailto:${cvData.personal.email}?subject=Job%20Opportunity%20-%20Denver%20Tandingan`}
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
      </AnimatedReveal>
    </section>
  );
}