"use client";

import Image from "next/image";
import { Check, FileText, Mail } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, type ComponentType } from "react";
import { cvData } from "@/src/data/cv-data";
import { siteConfig } from "@/src/data/site-config";
import { copyToClipboard } from "@/src/lib/clipboard";
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
  { label: "Facebook", href: "https://facebook.com/denver.tandingan.2024", external: true, icon: FaFacebook },
];

export default function About() {
  const [imageFailed, setImageFailed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const succeeded = await copyToClipboard(cvData.personal.email);
    if (succeeded) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

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
          <clipPath id="aboutSplashClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.1,0 L 0.9,0 C 0.96,0, 1,0.05, 1,0.12 L 1,0.4 C 1,0.46, 0.97,0.5, 1,0.56 L 1,0.88 C 1,0.95, 0.95,1, 0.88,1 L 0.5,1 C 0.44,1, 0.4,0.97, 0.35,1 L 0.12,1 C 0.05,1, 0,0.95, 0,0.88 L 0,0.55 C 0,0.5, 0.03,0.47, 0,0.42 L 0,0.12 C 0,0.05, 0.05,0, 0.1,0 Z" />
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

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email to clipboard"
              className="relative text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--accent)]"
            >
              {copied ? <Check size={20} /> : <Mail size={20} />}
              {copied ? (
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--surface-border)] bg-[var(--card-bg)] px-2 py-1 text-[10px] font-medium text-[var(--text-primary)]">
                  Copied!
                </span>
              ) : null}
            </button>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}