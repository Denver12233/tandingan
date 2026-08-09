"use client";

import { cvData } from "@/src/data/cv-data";
import { navLinks } from "@/src/data/site-config";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--surface-border)] bg-[var(--card-bg)] py-12 px-6 sm:px-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="font-[var(--font-space-grotesk)] text-base font-bold text-[var(--text-primary)] tracking-tight transition-colors duration-200 hover:text-[var(--accent)]"
          >
            {cvData.personal.name}
            <span className="text-[var(--accent)]">.dev</span>
          </a>
          <p className="mt-1 text-xs text-[var(--text-muted)]">
            BSIT Graduate 2026 • Software &amp; Web Application Developer
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-xs text-[var(--text-secondary)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={handleScrollToTop}
          aria-label="Scroll back to top"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--btn-secondary-bg)] text-[var(--text-secondary)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)]"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}