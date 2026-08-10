"use client";

import { ArrowUp, Check, Mail } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, type ComponentType } from "react";
import { cvData } from "@/src/data/cv-data";
import { copyToClipboard } from "@/src/lib/clipboard";
import Logo from "@/src/components/ui/Logo";

type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
  icon: ComponentType<{ className?: string; size?: number | string }>;
};

const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Denver12233", external: true, icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tandingan-denver-m-374910392/", external: true, icon: FaLinkedin },
  { label: "Facebook", href: "https://facebook.com/denver.tandingan.2024", external: true, icon: FaFacebook },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const succeeded = await copyToClipboard(cvData.personal.email);
    if (succeeded) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--surface-border)] bg-[var(--card-bg)] py-12 px-6 sm:px-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Top row — name/tagline + social links */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-[var(--font-space-grotesk)] text-base font-bold text-[var(--text-primary)] tracking-tight transition-colors duration-200 hover:text-[var(--accent)]"
            >
              <Logo size="sm" />
              {cvData.personal.name}
              <span className="text-[var(--accent)]">.dev</span>
            </a>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              BSIT Graduate 2026 • Aspiring Developer
            </p>
          </div>

          <div className="flex items-center gap-5">
            {socials.map(({ label, href, external, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--accent)]"
              >
                <Icon size={18} />
              </a>
            ))}

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email to clipboard"
              className="relative text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--accent)]"
            >
              {copied ? <Check size={18} /> : <Mail size={18} />}
              {copied ? (
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--surface-border)] bg-[var(--card-bg)] px-2 py-1 text-[10px] font-medium text-[var(--text-primary)]">
                  Copied!
                </span>
              ) : null}
            </button>
          </div>
        </div>

        {/* Bottom row — copyright + back-to-top */}
        <div className="mt-10 pt-6 border-t border-[var(--surface-border)] flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} {cvData.personal.name}.
          </p>

          <button
            type="button"
            onClick={handleScrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--btn-secondary-bg)] text-[var(--text-secondary)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)]"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
