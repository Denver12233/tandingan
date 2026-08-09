"use client";

import { cvData } from "@/src/data/cv-data";
import { navLinks } from "@/src/data/site-config";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[rgba(245,243,238,0.08)] bg-[rgba(11,14,20,0.9)] py-12 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="font-[var(--font-space-grotesk)] text-base font-bold text-[#F5F3EE] tracking-tight"
          >
            {cvData.personal.name}
            <span className="text-[#F2A65A]">.dev</span>
          </a>
          <p className="mt-1 text-xs text-[rgba(245,243,238,0.5)]">
            BSIT Graduate 2026 • Software &amp; Web Application Developer
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-xs text-[rgba(245,243,238,0.6)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[#F2A65A]"
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
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(245,243,238,0.12)] bg-[rgba(245,243,238,0.05)] text-[rgba(245,243,238,0.7)] transition duration-200 hover:border-[#F2A65A] hover:text-[#F2A65A] hover:bg-[rgba(242,166,90,0.08)]"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}