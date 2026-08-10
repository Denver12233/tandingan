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
    <section id="about" className="pt-8 sm:pt-10 pb-20 sm:pb-28 px-6 sm:px-10 max-w-5xl mx-auto">
      {/*
        NOTE: this id must be UNIQUE across the whole page.
        Hero.tsx already registers a clipPath with id="splashClip" —
        reusing that id here caused the browser to just keep using
        Hero's shape for both sections. Renamed to "aboutSplashClip".
      */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="aboutBlobClip" clipPathUnits="objectBoundingBox">
      <path d="M 0.15,0.02 C 0.4,-0.02, 0.65,0.0, 0.85,0.08 C 1.0,0.14, 1.0,0.32, 0.95,0.48 C 0.9,0.62, 0.98,0.75, 0.9,0.88 C 0.82,1.0, 0.6,1.02, 0.42,0.98 C 0.25,0.94, 0.1,1.0, 0.02,0.85 C -0.05,0.7, 0.05,0.55, 0.02,0.4 C -0.02,0.25, 0.0,0.1, 0.15,0.02 Z" />
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
                  src="/profile1.png"
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