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
        "fixed top-[20px] left-1/2 z-50 w-[calc(100%-32px)] max-w-[760px] -translate-x-1/2 rounded-full",
        "border border-[rgba(245,243,238,0.09)] shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-[20px] transition duration-[250ms]",
        isScrolled
          ? "bg-[rgba(18,22,31,0.82)] shadow-[0_8px_28px_rgba(0,0,0,0.4)]"
          : "bg-[rgba(18,22,31,0.55)]"
      )}
      initial={false}
    >
      <div className={cn(
        "flex items-center justify-between gap-[28px] px-[22px]",
        isScrolled ? "py-[10px]" : "py-[14px]"
      )}>
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="text-[14px] font-[600] text-[#F5F3EE] transition-colors duration-200"
        >
          denver
          <span className="text-[#F2A65A]">.dev</span>
        </a>

        <nav className="hidden min-w-0 md:flex">
          <ul className="flex items-center gap-[28px] whitespace-nowrap">
            {navLinks.map((link: NavLink) => {
              const isActive = activeSection === link.href;

              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className={cn(
                      "text-[14px] font-[500] transition-colors duration-200",
                      isActive
                        ? "text-[#F5F3EE]"
                        : "text-[rgba(245,243,238,0.65)] hover:text-[#F5F3EE]"
                    )}
                  >
                    {link.label}
                  </a>

                  {isActive ? (
                    <motion.span
                      layoutId="navDot"
                      transition={{ type: "spring", stiffness: 260, damping: 28 }}
                      className="absolute left-1/2 bottom-[-8px] h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-[#F2A65A]"
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
            className="inline-flex items-center justify-center rounded-full bg-[#F5F3EE] px-[16px] py-[8px] text-[13px] font-[600] text-[#0B0E14] transition duration-200 hover:bg-[#F2A65A] hover:-translate-y-[1px]"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(245,243,238,0.15)] bg-[rgba(0,0,0,0.3)] text-[#F5F3EE] transition duration-200 hover:bg-[rgba(0,0,0,0.5)] md:hidden"
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
            className="fixed top-[78px] left-4 right-4 z-40 rounded-[22px] border border-[rgba(245,243,238,0.09)] bg-[rgba(18,22,31,0.55)] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-[20px] md:hidden"
          >
            <ul className="space-y-2">
              {navLinks.map((link: NavLink) => {
                const isActive = activeSection === link.href;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(event) => handleNavClick(event, link.href)}
                      className={cn(
                        "block rounded-[18px] px-4 text-[14px] min-h-[44px] leading-[44px] transition duration-200",
                        isActive
                          ? "bg-[rgba(245,243,238,0.08)] text-[#F5F3EE]"
                          : "text-[rgba(245,243,238,0.75)] hover:bg-[rgba(245,243,238,0.08)] hover:text-[#F5F3EE]"
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
                rel="noopener noreferrer"
                download
                className="inline-flex w-full items-center justify-center rounded-full bg-[#F5F3EE] px-[16px] min-h-[44px] text-[13px] font-[600] text-[#0B0E14] transition duration-200 hover:bg-[#F2A65A] hover:-translate-y-[1px]"
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
