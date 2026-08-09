"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, Mail, Terminal } from "lucide-react";
import { cvData } from "@/src/data/cv-data";
import { heroContent, siteConfig } from "@/src/data/site-config";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

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
            "linear-gradient(rgba(245,243,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,243,238,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-[rgba(242,166,90,0.06)] blur-3xl -z-10" />

      {/* Eyebrow / Status Tag */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-5 flex flex-wrap items-center gap-3"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(242,166,90,0.12)] border border-[rgba(242,166,90,0.3)] px-3.5 py-1.5 text-xs font-semibold text-[#F2A65A]">
          <span className="h-2 w-2 rounded-full bg-[#F2A65A] animate-pulse" />
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
        <h1 className="font-[var(--font-space-grotesk)] text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F5F3EE] leading-[1.08]">
          Hi, I&apos;m{" "}
          <span className="text-[#F2A65A] underline decoration-[rgba(242,166,90,0.4)] underline-offset-8">
            Denver Tandingan
          </span>
          .
        </h1>
        <p className="mt-3 font-[var(--font-space-grotesk)] text-xl sm:text-2xl md:text-3xl font-semibold text-[rgba(245,243,238,0.85)] leading-snug">
          Software &amp; Web Application Developer
        </p>
      </motion.div>

      {/* Short Compelling Introduction */}
      <motion.p
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="mt-6 max-w-2xl text-base sm:text-lg text-[rgba(245,243,238,0.7)] leading-relaxed"
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
        <span className="text-xs font-semibold uppercase tracking-wider text-[rgba(245,243,238,0.45)] mr-2 flex items-center gap-1">
          <Terminal size={14} className="text-[#F2A65A]" /> Core Stack:
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

      {/* Key Highlights / Meta Stats */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.35 }}
        className="mt-14 pt-8 border-t border-[rgba(245,243,238,0.08)] grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl"
      >
        <div>
          <div className="font-[var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[#F5F3EE]">
            BSIT 2026
          </div>
          <div className="mt-1 text-xs text-[rgba(245,243,238,0.55)]">
            University of Eastern Pangasinan
          </div>
        </div>

        <div>
          <div className="font-[var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[#F2A65A]">
            500 Hours
          </div>
          <div className="mt-1 text-xs text-[rgba(245,243,238,0.55)]">
            OJT Developer Intern
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <div className="font-[var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-[#F5F3EE]">
            Full-Stack
          </div>
          <div className="mt-1 text-xs text-[rgba(245,243,238,0.55)]">
            Frontend &amp; Backend Logic
          </div>
        </div>
      </motion.div>
    </section>
  );
}
