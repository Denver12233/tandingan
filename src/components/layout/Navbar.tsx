"use client";

import { AnimatePresence, motion } from "motion/react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { cn } from "@/src/lib/utils";
import { navLinks, siteConfig } from "@/src/data/site-config";
import { useTheme } from "@/src/components/theme/ThemeProvider";

type NavLink = { label: string; href: string };

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(navLinks[0]?.href ?? "#home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const sectionIds = useMemo<string[]>(
    () => navLinks.map((link: NavLink) => link.href.replace("#", "")),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
          ? "border-[var(--nav-border-scrolled)] bg-[var(--nav-bg-scrolled)] shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-2xl"
          : "border-[var(--nav-border-unscrolled)] bg-[var(--nav-bg-unscrolled)] backdrop-blur-xl"
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
          className="font-[var(--font-space-grotesk)] text-sm font-bold text-[var(--text-primary)] tracking-tight transition-colors duration-200 hover:text-[var(--accent)]"
        >
          Denver<span className="text-[var(--accent)]">.dev</span>
        </a>

        <nav className="hidden items-center justify-center md:flex flex-1">
          <ul className="flex items-center gap-6 whitespace-nowrap">
            {navLinks.map((link: NavLink) => {
              const isActive = activeSection === link.href;

              return (
                <li key={link.href} className="relative py-1">
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className={cn(
                      "text-xs font-medium tracking-wide transition-colors duration-200",
                      isActive
                        ? "text-[var(--text-primary)] font-semibold"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    )}
                  >
                    {link.label}
                  </a>

                  {isActive ? (
                    <motion.span
                      layoutId="navDot"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      className="absolute left-1/2 -bottom-2 -translate-x-1/2 flex items-center justify-center pointer-events-none"
                    >
                      {/* Outer ambient glow ring pulse */}
                      <motion.span
                        animate={{ scale: [1, 1.45, 1], opacity: [0.4, 0.85, 0.4] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                        className="absolute h-3.5 w-3.5 rounded-full bg-[var(--accent)] blur-[3px]"
                      />
                      {/* Inner pulsing glowing dot */}
                      <motion.span
                        animate={{ scale: [1, 1.18, 1] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                        className="relative h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_2px_var(--accent)]"
                      />
                    </motion.span>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--badge-surface-border)] bg-[var(--badge-surface-bg)] text-[var(--text-primary)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </motion.div>
          </button>

          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--badge-accent-bg)] border border-[var(--badge-accent-border)] px-3.5 py-1.5 text-xs font-semibold text-[var(--badge-accent-text)] transition duration-200 hover:bg-[var(--accent)] hover:text-[var(--accent-text-on)] hover:-translate-y-0.5"
          >
            <Download size={13} />
            <span>CV</span>
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {/* Theme Toggle Button for Mobile Header */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--badge-surface-border)] bg-[var(--badge-surface-bg)] text-[var(--text-primary)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </motion.div>
          </button>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--btn-secondary-bg)] text-[var(--text-primary)] transition duration-200 hover:bg-[var(--btn-secondary-hover-bg)]"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 z-40 max-h-[calc(100vh-100px)] overflow-y-auto rounded-2xl border border-[var(--surface-border)] bg-[var(--nav-menu-bg)] p-4 shadow-2xl backdrop-blur-2xl md:hidden"
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
                          ? "bg-[var(--badge-accent-bg)] text-[var(--badge-accent-text)] font-semibold"
                          : "text-[var(--text-secondary)] hover:bg-[var(--btn-secondary-bg)] hover:text-[var(--text-primary)]"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 pt-3 border-t border-[var(--surface-border)] space-y-2">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 min-h-[44px] text-sm font-semibold text-[var(--accent-text-on)] transition duration-200 active:scale-[0.98]"
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
