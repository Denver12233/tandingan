"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/src/lib/utils";
import { heroContent, siteConfig } from "@/src/data/site-config";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const motionProps = useMemo(
    () => ({
      initial: shouldReduceMotion ? false : { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.45, ease: "easeOut" as const },
    }),
    [shouldReduceMotion]
  );

  const noteMotionProps = useMemo(
    () => ({
      initial: shouldReduceMotion ? false : { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration: 0.35, ease: "easeOut" as const, delay: 0.35 },
    }),
    [shouldReduceMotion]
  );

  const handleProjectsClick = () => {
    const target = document.getElementById("projects");

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!mounted) {
    return (
      <section className="hero relative min-h-screen flex flex-col justify-center pt-[140px] px-[8vw] pb-[80px] overflow-hidden">
        <div
          className="grid-bg absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,243,238,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,243,238,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
          }}
        />

        <div className="eyebrow-row mb-[26px] flex items-center gap-[10px] relative z-10">
          <span className="status-dot h-[7px] w-[7px] rounded-full bg-[#F2A65A] shadow-[0_0_0_3px_rgba(242,166,90,0.15)]" />
          <span className="eyebrow text-[13px] uppercase tracking-[0.08em] text-[rgba(245,243,238,0.55)] font-[var(--font-space-grotesk)]">
            {heroContent.eyebrow}
          </span>
        </div>

        <div className="headline-wrap relative z-10 max-w-[960px]">
          <h1 className="font-[var(--font-space-grotesk)] font-[700] text-[clamp(38px,6.2vw,74px)] leading-[1.08] tracking-[-0.02em] text-[#F5F3EE]">
            {heroContent.headlineLine1}
            <br />
            {heroContent.headlineLine2}
            <span className="accent-word relative whitespace-nowrap text-[#F2A65A]">
              {heroContent.accentWord}
              <svg
                className="underline-scribble absolute left-[-2%] bottom-[-6px] h-[14px] w-[104%]"
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
              >
                <path
                  d="M2,10 C60,2 120,14 180,6 C220,1 260,9 298,4"
                  stroke="#F2A65A"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
            <span className="note note-1 absolute top-[-38px] right-[-6px] w-[220px] -rotate-[4deg] text-[22px] leading-[1.2] text-[#F2A65A] font-[var(--font-caveat)]">
              {heroContent.noteText}
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                <path
                  d="M2,2 C10,20 20,32 40,36"
                  stroke="#F2A65A"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M33,32 L40,36 L36,28"
                  stroke="#F2A65A"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h1>
        </div>

        <p className="sub relative z-10 mt-[130px] max-w-[540px] text-[17px] leading-[1.7] text-[rgba(245,243,238,0.55)]">
          {heroContent.sub}
        </p>

        <div className="cta-row relative z-10 mt-[40px] flex flex-wrap items-center gap-[16px]">
          <button
            type="button"
            onClick={handleProjectsClick}
            className={cn(
              "rounded-[10px] bg-[#F2A65A] px-[24px] py-[13px] text-[14px] font-[600] text-[#0B0E14] transition duration-150 ease-out",
              "hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(242,166,90,0.25)]"
            )}
          >
            {heroContent.ctaPrimary}
          </button>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            download
            className={cn(
              "rounded-[10px] border border-[rgba(245,243,238,0.18)] bg-transparent px-[24px] py-[13px] text-[14px] font-[600] text-[#F5F3EE] transition duration-200 ease-out",
              "hover:border-[rgba(245,243,238,0.4)] hover:bg-[rgba(245,243,238,0.03)]"
            )}
          >
            {heroContent.ctaSecondary}
          </a>
        </div>

        <div className="meta-row relative z-10 mt-[90px] flex flex-wrap gap-[40px] border-t border-[rgba(245,243,238,0.09)] pt-[28px] max-w-[640px]">
          {heroContent.metaItems.map((item) => (
            <div key={item.label} className="meta-item">
              <div className="num text-[22px] font-[600] text-[#F5F3EE] font-[var(--font-space-grotesk)]">{item.num}</div>
              <div className="label mt-[4px] text-[12.5px] text-[rgba(245,243,238,0.55)]">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="scroll-cue absolute bottom-[36px] left-[8vw] z-10 flex items-center gap-[10px] text-[12.5px] text-[rgba(245,243,238,0.55)]">
          <div className="scroll-line h-[34px] w-[1px] bg-[linear-gradient(rgba(245,243,238,0.55),transparent)]" />
          {heroContent.scrollCue}
        </div>
      </section>
    );
  }

  return (
    <section className="hero relative min-h-screen flex flex-col justify-center pt-[140px] px-[8vw] pb-[80px] overflow-hidden">
      <div
        className="grid-bg absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,243,238,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,243,238,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
        }}
      />

      <motion.div
        initial={motionProps.initial}
        animate={motionProps.animate}
        transition={{ ...motionProps.transition, delay: 0 }}
        className="eyebrow-row mb-[26px] flex items-center gap-[10px] relative z-10"
      >
        <span className="status-dot h-[7px] w-[7px] rounded-full bg-[#F2A65A] shadow-[0_0_0_3px_rgba(242,166,90,0.15)]" />
        <span className="eyebrow text-[13px] uppercase tracking-[0.08em] text-[rgba(245,243,238,0.55)] font-[var(--font-space-grotesk)]">
          {heroContent.eyebrow}
        </span>
      </motion.div>

      <motion.div
        initial={motionProps.initial}
        animate={motionProps.animate}
        transition={{ ...motionProps.transition, delay: 0.1 }}
        className="headline-wrap relative z-10 max-w-[960px]"
      >
        <h1 className="font-[var(--font-space-grotesk)] font-[700] text-[clamp(38px,6.2vw,74px)] leading-[1.08] tracking-[-0.02em] text-[#F5F3EE]">
          {heroContent.headlineLine1}
          <br />
          {heroContent.headlineLine2}
          <span className="accent-word relative whitespace-nowrap text-[#F2A65A]">
            {heroContent.accentWord}
            <svg
              className="underline-scribble absolute left-[-2%] bottom-[-6px] h-[14px] w-[104%]"
              viewBox="0 0 300 14"
              preserveAspectRatio="none"
            >
              <path
                d="M2,10 C60,2 120,14 180,6 C220,1 260,9 298,4"
                stroke="#F2A65A"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
          <motion.span
            initial={noteMotionProps.initial}
            animate={noteMotionProps.animate}
            transition={noteMotionProps.transition}
            className="note note-1 absolute top-[-38px] right-[-6px] w-[220px] -rotate-[4deg] text-[22px] leading-[1.2] text-[#F2A65A] font-[var(--font-caveat)]"
          >
            {heroContent.noteText}
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
              <path
                d="M2,2 C10,20 20,32 40,36"
                stroke="#F2A65A"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M33,32 L40,36 L36,28"
                stroke="#F2A65A"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
        </h1>
      </motion.div>

      <motion.p
        initial={motionProps.initial}
        animate={motionProps.animate}
        transition={{ ...motionProps.transition, delay: 0.2 }}
        className="sub relative z-10 mt-[130px] max-w-[540px] text-[17px] leading-[1.7] text-[rgba(245,243,238,0.55)]"
      >
        {heroContent.sub}
      </motion.p>

      <motion.div
        initial={motionProps.initial}
        animate={motionProps.animate}
        transition={{ ...motionProps.transition, delay: 0.3 }}
        className="cta-row relative z-10 mt-[40px] flex flex-wrap items-center gap-[16px]"
      >
        <button
          type="button"
          onClick={handleProjectsClick}
          className={cn(
            "rounded-[10px] bg-[#F2A65A] px-[24px] py-[13px] text-[14px] font-[600] text-[#0B0E14] transition duration-150 ease-out",
            "hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(242,166,90,0.25)]"
          )}
        >
          {heroContent.ctaPrimary}
        </button>
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noreferrer"
          download
          className={cn(
            "rounded-[10px] border border-[rgba(245,243,238,0.18)] bg-transparent px-[24px] py-[13px] text-[14px] font-[600] text-[#F5F3EE] transition duration-200 ease-out",
            "hover:border-[rgba(245,243,238,0.4)] hover:bg-[rgba(245,243,238,0.03)]"
          )}
        >
          {heroContent.ctaSecondary}
        </a>
      </motion.div>

      <motion.div
        initial={motionProps.initial}
        animate={motionProps.animate}
        transition={{ ...motionProps.transition, delay: 0.4 }}
        className="meta-row relative z-10 mt-[90px] flex flex-wrap gap-[40px] border-t border-[rgba(245,243,238,0.09)] pt-[28px] max-w-[640px]"
      >
        {heroContent.metaItems.map((item) => (
          <div key={item.label} className="meta-item">
            <div className="num text-[22px] font-[600] text-[#F5F3EE] font-[var(--font-space-grotesk)]">{item.num}</div>
            <div className="label mt-[4px] text-[12.5px] text-[rgba(245,243,238,0.55)]">{item.label}</div>
          </div>
        ))}
      </motion.div>

      <div className="scroll-cue absolute bottom-[36px] left-[8vw] z-10 flex items-center gap-[10px] text-[12.5px] text-[rgba(245,243,238,0.55)]">
        <div className="scroll-line h-[34px] w-[1px] bg-[linear-gradient(rgba(245,243,238,0.55),transparent)]" />
        {heroContent.scrollCue}
      </div>
    </section>
  );
}
