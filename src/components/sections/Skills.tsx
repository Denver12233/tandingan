"use client";

import { useReducedMotion } from "motion/react";
import { Fragment, ReactNode, useEffect, useId, useRef, useState } from "react";
import { cvData } from "@/src/data/cv-data";
import { techIcons } from "@/src/lib/techIcons";
import AnimatedReveal from "../ui/AnimatedReveal";
import SectionHeading from "../ui/SectionHeading";

type GroupKey = "Tools" | "Languages" | "Frameworks";

const GROUP_ORDER: GroupKey[] = ["Tools", "Languages", "Frameworks"];

const groupFor = (categoryName: string): GroupKey => {
  if (categoryName.includes("Language")) return "Languages";
  if (categoryName.includes("Framework") || categoryName.includes("Library")) return "Frameworks";
  return "Tools";
};

const SKILL_GROUPS: Record<GroupKey, string[]> = (() => {
  const groups: Record<GroupKey, string[]> = {
    Tools: [],
    Languages: [],
    Frameworks: [],
  };
  for (const category of cvData.technicalSkills) {
    groups[groupFor(category.name)].push(...category.skills);
  }
  return groups;
})();

const EDGE_MASK = "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";

const LANGUAGES_MASK =
  "linear-gradient(to right, transparent, black max(15%, 96px), black calc(100% - max(15%, 96px)), transparent)";

function SkillPill({ skill }: { skill: string }) {
  const Icon = techIcons[skill];
  return (
    <div className="mr-4 sm:mr-5 shrink-0 min-w-[180px] max-w-[260px] rounded-2xl border border-[var(--surface-border)] bg-[var(--card-bg)] px-5 py-4 flex items-center gap-3">
      {Icon ? (
        <Icon size={24} className="shrink-0 text-[var(--accent)]" />
      ) : (
        <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
      )}
      <span className="min-w-0 flex-1 text-xs sm:text-sm font-semibold text-[var(--text-primary)] leading-snug line-clamp-2">
        {skill}
      </span>
    </div>
  );
}

function LanguageBadge({ skill }: { skill: string }) {
  const Icon = techIcons[skill];
  return (
    <div className="mr-4 sm:mr-5 shrink-0 h-16 w-16 rounded-full border border-[var(--surface-border)] bg-[var(--badge-accent-bg)] flex items-center justify-center">
      {Icon ? (
        <Icon size={28} className="shrink-0 text-[var(--accent)]" />
      ) : (
        <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
      )}
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  speed,
  reducedMotion,
  renderItem,
  mask = EDGE_MASK,
}: {
  items: string[];
  direction: "left" | "right";
  speed: number;
  reducedMotion: boolean;
  renderItem: (item: string) => ReactNode;
  mask?: string;
}) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const [layout, setLayout] = useState<{
    copyWidth: number;
    containerWidth: number;
  } | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const row = rowRef.current;
    const copy = copyRef.current;
    if (!row || !copy) return;

    const measure = () => {
      const copyWidth = copy.scrollWidth;
      const containerWidth = row.clientWidth;
      if (copyWidth > 0 && containerWidth > 0) {
        setLayout({ copyWidth, containerWidth });
      }
    };

    measure();

    const observer = new ResizeObserver(() => measure());
    observer.observe(row);
    observer.observe(copy);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const n = layout
    ? Math.max(2, Math.ceil((2 * layout.containerWidth) / layout.copyWidth))
    : 0;
  const animating = !reducedMotion && layout !== null && n > 0;

  const shift = direction === "left" ? -(100 / n) : 100 / n;
  const keyframeName = `marquee-scroll-${uid}`;
  const trackClass = `marquee-track-${uid}-${n}`;
  const duration = layout ? layout.copyWidth / speed : 0;

  const css = animating
    ? `
@keyframes ${keyframeName} {
  from { transform: translateX(0); }
  to { transform: translateX(${shift}%); }
}
.${trackClass} {
  animation: ${keyframeName} ${duration.toFixed(2)}s linear infinite;
  will-change: transform;
}
.marquee-row:hover .${trackClass},
.marquee-row:focus-within .${trackClass} {
  animation-play-state: paused;
}`
    : "";

  return (
    <div
      ref={rowRef}
      className="marquee-row relative overflow-hidden"
      style={{ WebkitMaskImage: mask, maskImage: mask }}
    >
      {css ? <style>{css}</style> : null}

      {animating ? (
        <div className={`flex w-max ${trackClass}`}>
          {Array.from({ length: n }).flatMap((_, copy) =>
            items.map((item, index) => (
              <Fragment key={`${copy}-${index}`}>{renderItem(item)}</Fragment>
            ))
          )}
        </div>
      ) : (
        <div className="flex w-max">
          {items.map((item, index) => (
            <Fragment key={index}>{renderItem(item)}</Fragment>
          ))}
        </div>
      )}

      {!reducedMotion ? (
        <div
          ref={copyRef}
          aria-hidden="true"
          className="invisible pointer-events-none absolute left-0 top-0 flex w-max"
        >
          {items.map((item, index) => (
            <Fragment key={index}>{renderItem(item)}</Fragment>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const labelsRef = useRef<HTMLDivElement | null>(null);
  const [labelsOverflow, setLabelsOverflow] = useState(false);

  useEffect(() => {
    const el = labelsRef.current;
    if (!el) return;
    const update = () => setLabelsOverflow(el.scrollWidth > el.clientWidth + 1);
    update();
    const observer = new ResizeObserver(() => update());
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="What I Work With"
        title="The stack behind everything I build."
        description="Learned in class, tested in real projects."
      />

      <AnimatedReveal direction="up" delay={0.05}>
        <div
          ref={labelsRef}
          className="overflow-x-auto scrollbar-hide [-webkit-overflow-scrolling:touch] -mt-6 md:-mt-10 mb-10 sm:mb-12"
          style={
            labelsOverflow
              ? { WebkitMaskImage: EDGE_MASK, maskImage: EDGE_MASK }
              : undefined
          }
        >
          <div className="mx-auto flex w-fit items-center gap-1 sm:gap-2">
            {GROUP_ORDER.map((name, index) => (
              <div key={name} className="flex shrink-0 items-center">
                {index > 0 && (
                  <span aria-hidden="true" className="h-6 w-px shrink-0 bg-[var(--surface-border)] mx-1.5 sm:mx-3" />
                )}
                <span
                  className={`font-[var(--font-space-grotesk)] text-lg sm:text-2xl md:text-3xl font-bold leading-none ${index === 0 ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"
                    }`}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedReveal>

      <AnimatedReveal direction="up" delay={0.1}>
        <div className="flex flex-col gap-10 sm:gap-14">
          <MarqueeRow
            items={SKILL_GROUPS.Tools}
            direction="left"
            speed={36}
            reducedMotion={shouldReduceMotion}
            renderItem={(skill) => <SkillPill skill={skill} />}
          />
          <MarqueeRow
            items={SKILL_GROUPS.Languages}
            direction="right"
            speed={44}
            mask={LANGUAGES_MASK}
            reducedMotion={shouldReduceMotion}
            renderItem={(skill) => <LanguageBadge skill={skill} />}
          />
          <MarqueeRow
            items={SKILL_GROUPS.Frameworks}
            direction="left"
            speed={40}
            reducedMotion={shouldReduceMotion}
            renderItem={(skill) => <SkillPill skill={skill} />}
          />
        </div>
      </AnimatedReveal>
    </section>
  );
}
