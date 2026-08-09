"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, Mail, Terminal } from "lucide-react";
import { useState } from "react";
import { cvData } from "@/src/data/cv-data";
import { heroContent, siteConfig } from "@/src/data/site-config";
import { useTypewriter } from "@/src/hooks/useTypewriter";
import AnimatedReveal from "../ui/AnimatedReveal";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);
  const { typed, cursorVisible } = useTypewriter(heroContent.name, {
    typeSpeed: 50,
    deleteSpeed: 30,
    fullPauseMs: 1600,
    emptyPauseMs: 450,
  });
  const initials = heroContent.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-6 sm:px-10 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background Decorative Grid & Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-[var(--grid-glow)] blur-3xl -z-10" />

      {/* SVG clipPath definition — invisible, just registers the shape for reuse */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="splashClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.15,0.03 C 0.35,-0.02, 0.55,0.01, 0.72,0.06 C 0.85,0.1, 0.8,0.2, 0.92,0.24 C 1.03,0.28, 1.0,0.4, 0.95,0.5 C 0.9,0.6, 1.0,0.68, 0.94,0.78 C 0.88,0.88, 0.95,0.95, 0.82,0.98 C 0.68,1.02, 0.6,0.92, 0.46,0.97 C 0.32,1.02, 0.2,0.98, 0.1,0.9 C 0.02,0.83, 0.08,0.72, 0.03,0.6 C -0.02,0.48, 0.05,0.38, 0.02,0.26 C -0.01,0.16, 0.05,0.08, 0.15,0.03 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[3fr_2fr] md:gap-10 lg:gap-14">
        {/* Left Column — Text Content */}
        <div className="order-2 md:order-1">
          {/* Eyebrow / Status Tag */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--badge-accent-bg)] border border-[var(--badge-accent-border)] px-3.5 py-1.5 text-xs font-semibold text-[var(--badge-accent-text)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>BSIT Fresh Graduate — University of Eastern Pangasinan</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="max-w-4xl"
          >
            <h1 className="font-[var(--font-space-grotesk)] text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08]">
              Hi, I&apos;m{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="invisible" aria-hidden="true">
                  {heroContent.name}
                </span>
                <span className="absolute inset-y-0 left-0">
                  <span className="text-[var(--accent)] underline decoration-[var(--accent-border)] decoration-2 underline-offset-8">
                    {typed}
                  </span>
                  {cursorVisible ? (
                    <span
                      aria-hidden="true"
                      className="inline-block ml-1 h-[0.85em] w-[3px] rounded-sm bg-[var(--accent)] align-baseline caret-blink"
                    />
                  ) : null}
                </span>
              </span>
            </h1>
            <p className="mt-3 font-[var(--font-space-grotesk)] text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] leading-snug">
              Software &amp; Web Application Developer
            </p>
          </motion.div>

          {/* Short Compelling Introduction */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed"
          >
            {cvData.personal.summary}
          </motion.p>

          {/* Strongest Relevant Technical Skills */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center gap-2"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mr-2 flex items-center gap-1">
              <Terminal size={14} className="text-[var(--accent)]" /> Core Stack:
            </span>
            {heroContent.topSkills.map((tech) => (
              <Badge key={tech} variant="accent">
                {tech}
              </Badge>
            ))}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleScrollTo("experience")}
            >
              <span>View Experience</span>
              <ArrowRight size={18} />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleScrollTo("contact")}
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download size={18} />
              <span>Download CV</span>
            </Button>
          </motion.div>
        </div>

        {/* Right Column — Profile Photo with jagged splash-shaped clip-path */}
        <AnimatedReveal delay={0.15} className="order-1 md:order-2">
          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px]">
            {/* Ambient background glow behind the photo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full bg-[var(--grid-glow)] blur-3xl opacity-50"
            />

            {/* Single photo, clipped into an irregular splash/torn-edge silhouette */}
            <div
              className="relative aspect-[4/5] w-full overflow-hidden"
              style={{
                clipPath: "url(#splashClip)",
                filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.15))",
              }}
            >
              {imageFailed ? (
                <div className="flex h-full w-full items-center justify-center bg-[var(--badge-accent-bg)]">
                  <span className="font-[var(--font-space-grotesk)] text-5xl font-bold text-[var(--accent)]">
                    {initials}
                  </span>
                </div>
              ) : (
                <Image
                  src="/profile1.jpg"
                  alt={`${heroContent.name} — profile photo`}
                  fill
                  sizes="(max-width: 768px) 75vw, 40vw"
                  priority
                  onError={() => setImageFailed(true)}
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </AnimatedReveal>
      </div>

      {/* Key Highlights / Meta Stats */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.35 }}
        className="mt-14 pt-8 border-t border-[var(--surface-border)] grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl"
      >
        <div>
          <div className="font-[var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            BSIT 2026
          </div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">
            University of Eastern Pangasinan
          </div>
        </div>

        <div>
          <div className="font-[var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--accent)]">
            500 Hours
          </div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">
            OJT Developer Intern
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <div className="font-[var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Full-Stack
          </div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">
            Frontend &amp; Backend Logic
          </div>
        </div>
      </motion.div>
    </section>
  );
}