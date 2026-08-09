"use client";

import { AnimatePresence, motion } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { cn } from "@/src/lib/utils";
import { navLinks, siteConfig } from "@/src/data/site-config";

type NavLink = { label: string; href: string };

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(navLinks[0]?.href ?? "#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = useMemo<string[]>(
    () => navLinks.map((link: NavLink) => link.href.replace("#", "")),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id: string) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length) {
          setActiveSection(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -45% 0px",
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sections.forEach((section: HTMLElement) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMobileOpen(false);

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-4 left-0 right-0 z-50 mx-auto w-[calc(100%-32px)] max-w-4xl rounded-full border transition-all duration-300",
        isScrolled
          ? "border-[rgba(245,243,238,0.12)] bg-[rgba(11,14,20,0.85)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "border-[rgba(245,243,238,0.08)] bg-[rgba(18,22,31,0.6)] backdrop-blur-md"
      )}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-4 px-5 transition-all duration-300",
          isScrolled ? "py-2.5" : "py-3.5"
        )}
      >
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="font-[var(--font-space-grotesk)] text-sm font-bold text-[#F5F3EE] tracking-tight transition-colors duration-200 hover:text-[#F2A65A]"
        >
          Denver<span className="text-[#F2A65A]">.dev</span>
        </a>

        <nav className="hidden items-center justify-center md:flex flex-1">
          <ul className="flex items-center gap-6 whitespace-nowrap">
            {navLinks.map((link: NavLink) => {
              const isActive = activeSection === link.href;

              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className={cn(
                      "text-xs font-medium tracking-wide transition-colors duration-200",
                      isActive
                        ? "text-[#F5F3EE]"
                        : "text-[rgba(245,243,238,0.6)] hover:text-[#F5F3EE]"
                    )}
                  >
                    {link.label}
                  </a>

                  {isActive ? (
                    <motion.span
                      layoutId="navDot"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="absolute left-1/2 -bottom-2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#F2A65A] shadow-[0_0_6px_rgba(242,166,90,0.8)]"
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center md:flex">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(242,166,90,0.12)] border border-[rgba(242,166,90,0.3)] px-3.5 py-1.5 text-xs font-semibold text-[#F2A65A] transition duration-200 hover:bg-[#F2A65A] hover:text-[#0B0E14] hover:-translate-y-0.5"
          >
            <Download size={13} />
            <span>CV</span>
          </a>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileOpen((current) => !current)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(245,243,238,0.15)] bg-[rgba(245,243,238,0.05)] text-[#F5F3EE] transition duration-200 hover:bg-[rgba(245,243,238,0.12)] md:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 z-40 max-h-[calc(100vh-100px)] overflow-y-auto rounded-2xl border border-[rgba(245,243,238,0.12)] bg-[rgba(11,14,20,0.95)] p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <ul className="space-y-1">
              {navLinks.map((link: NavLink) => {
                const isActive = activeSection === link.href;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(event) => handleNavClick(event, link.href)}
                      className={cn(
                        "flex items-center rounded-xl px-4 min-h-[44px] text-sm font-medium transition duration-200",
                        isActive
                          ? "bg-[rgba(242,166,90,0.15)] text-[#F2A65A]"
                          : "text-[rgba(245,243,238,0.75)] hover:bg-[rgba(245,243,238,0.06)] hover:text-[#F5F3EE]"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 pt-3 border-t border-[rgba(245,243,238,0.08)]">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center justify-center gap-2 rounded-xl bg-[#F2A65A] px-4 min-h-[44px] text-sm font-semibold text-[#0B0E14] transition duration-200 active:scale-[0.98]"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
