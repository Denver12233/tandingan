"use client";

import AnimatedReveal from "./AnimatedReveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}>
      <AnimatedReveal direction="up" delay={0.05}>
        <div className={`inline-flex items-center gap-2 mb-3 ${isCenter ? "justify-center" : ""}`}>
          <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent-glow)]" />
          <span className="font-[var(--font-space-grotesk)] text-[12px] uppercase tracking-[0.15em] text-[var(--accent)] font-semibold">
            {eyebrow}
          </span>
        </div>
      </AnimatedReveal>

      <AnimatedReveal direction="up" delay={0.1}>
        <h2 className="font-[var(--font-space-grotesk)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.15]">
          {title}
        </h2>
      </AnimatedReveal>

      {description ? (
        <AnimatedReveal direction="up" delay={0.15}>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
            {description}
          </p>
        </AnimatedReveal>
      ) : null}
    </div>
  );
}