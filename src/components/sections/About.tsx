"use client";

import Image from "next/image";
import { FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, type ComponentType } from "react";
import { cvData } from "@/src/data/cv-data";
import { siteConfig } from "@/src/data/site-config";
import AnimatedReveal from "../ui/AnimatedReveal";

type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
  icon: ComponentType<{ className?: string; size?: number | string }>;
};

const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Denver12233", external: true, icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tandingan-denver-m-374910392/", external: true, icon: FaLinkedin },
  { label: "Email", href: "mailto:tandingandenverm@gmail.com", icon: Mail },
];

export default function About() {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = siteConfig.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <section id="about" className="py-20 sm:py-28 px-6 sm:px-10 max-w-5xl mx-auto">
      {/*
        NOTE: this id must be UNIQUE across the whole page.
        Hero.tsx already registers a clipPath with id="splashClip" —
        reusing that id here caused the browser to just keep using
        Hero's shape for both sections. Renamed to "aboutSplashClip".
      */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="aboutSplashClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.2,0.0 C 0.45,-0.03, 0.6,0.05, 0.78,0.02 C 0.92,0.0, 1.02,0.12, 0.96,0.28 C 0.9,0.42, 1.0,0.5, 0.98,0.65 C 0.96,0.8, 0.85,0.85, 0.88,0.98 C 0.9,1.05, 0.6,1.02, 0.5,0.95 C 0.4,0.88, 0.25,1.0, 0.12,0.92 C 0.0,0.84, 0.08,0.7, 0.02,0.55 C -0.04,0.4, 0.06,0.3, 0.0,0.15 C -0.04,0.02, 0.1,0.02, 0.2,0.0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
        {/* Left Column — Portrait */}
        <AnimatedReveal direction="left" delay={0.1} className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[280px]">
            {/* Soft blurred accent glow behind the portrait */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2rem] bg-[var(--accent)] opacity-20 blur-2xl"
            />
            <div
              className="relative aspect-[4/5] overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)]"
              style={{ clipPath: "url(#aboutSplashClip)" }}
            >
              {imageFailed ? (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-[var(--font-space-grotesk)] text-5xl font-bold text-[var(--accent)]">
                    {initials}
                  </span>
                </div>
              ) : (
                <Image
                  src="/profile2.jpg"
                  alt={`${siteConfig.name} — portrait`}
                  fill
                  sizes="280px"
                  onError={() => setImageFailed(true)}
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </AnimatedReveal>

        {/* Right Column — Bio */}
        <AnimatedReveal direction="up" delay={0.2} className="lg:col-span-7">
          <h2 className="font-[var(--font-space-grotesk)] text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            About Me
          </h2>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
            {siteConfig.name} — {siteConfig.role}
          </p>
          <p className="mt-5 max-w-xl text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            I&apos;m Denver, a 22-year-old BSIT graduate from the University of Eastern Pangasinan,
            Class of 2026, based in Pangasinan, Philippines. I&apos;ve always been interested in how
            things work under the hood, especially backend logic, databases, and the systems that
            make applications run. At the same time, I enjoy building clean and functional frontend
            experiences. I learn best by building, breaking, and fixing things until they work, and
            I&apos;m always looking for opportunities to grow my skills and build software that
            solves real problems.
          </p>

          <div className="mt-7 flex items-center gap-5">
            {socials.map(({ label, href, external, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--accent)]"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}