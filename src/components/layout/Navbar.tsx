"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
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
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id: string) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

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
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.4, 0.7],
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
        "fixed top-4 left-1/2 z-50 w-[calc(100%-32px)] max-w-3xl -translate-x-1/2",
        "rounded-full border border-white/10 bg-black/40 shadow-lg shadow-black/20 backdrop-blur-xl transition duration-[250ms]",
        isScrolled ? "bg-black/70" : "bg-black/40"
      )}
      initial={false}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="text-sm font-medium text-white transition hover:text-slate-200"
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link: NavLink) => {
              const isActive = activeSection === link.href;

              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className={cn(
                      "text-sm transition-colors duration-200",
                      isActive ? "font-semibold text-white" : "text-slate-300 hover:text-white"
                    )}
                  >
                    {link.label}
                  </a>

                  {isActive ? (
                    <motion.span
                      layoutId="navDot"
                      className="absolute left-1/2 bottom-[-6px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white"
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
            rel="noreferrer"
            download
            className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black transition hover:bg-slate-100"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white transition hover:bg-black/50 md:hidden"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[78px] left-4 right-4 z-40 rounded-3xl border border-white/10 bg-black/40 p-4 shadow-lg shadow-black/20 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-3">
              {navLinks.map((link: NavLink) => {
                const isActive = activeSection === link.href;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(event) => handleNavClick(event, link.href)}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-sm transition duration-200",
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-slate-300 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-slate-100"
              >
                Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
