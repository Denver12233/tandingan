"use client";

import { useEffect, useState } from "react";
import { Calendar, Building2, FolderGit2, GitGraph } from "lucide-react";
import { ActivityCalendar, type Activity } from "react-activity-calendar";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";
import { cvData } from "@/src/data/cv-data";
import AnimatedReveal from "../ui/AnimatedReveal";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";

const GITHUB_THEME = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

type GithubContributionsResponse = {
  total: number;
  contributions: Activity[];
};

function useGithubContributions() {
  const [data, setData] = useState<Activity[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/github-contributions")
      .then(async (response) => {
        if (!response.ok) {
          let detail = `Request failed with status ${response.status}`;
          try {
            const body = (await response.json()) as { error?: string };
            if (body?.error) detail = body.error;
          } catch {
            // fall back to the status-based message
          }
          throw new Error(detail);
        }
        return response.json();
      })
      .then((json: GithubContributionsResponse) => {
        if (!cancelled) {
          setData(json.contributions);
          setError(null);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : "Unknown error";
          console.error("GitHub contributions failed to load:", message);
          setError(message);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, error };
}

export default function Experience() {
  const isCompact = useMediaQuery("(max-width: 640px)");
  const { data, error } = useGithubContributions();

  return (
    <section id="experience" className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="Work Experience"
        title="Hands-on internship experience in software & web development."
        description="Detailed record of my 500-hour OJT internship, key project contributions, technical responsibilities, and team collaboration."
      />

      <div className="mt-16 divide-y divide-[var(--surface-border)]">
        {cvData.experience.map((exp, idx) => (
          <AnimatedReveal key={exp.company} direction="up" delay={0.1 + idx * 0.1}>
            <div className="py-10 first:pt-0">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="text-[var(--accent)]" size={16} />
                    <span className="font-[var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      {exp.company}
                    </span>
                  </div>
                  <h3 className="font-[var(--font-space-grotesk)] text-2xl sm:text-[1.75rem] font-bold text-[var(--text-primary)]">
                    {exp.position}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <Calendar size={13} className="text-[var(--accent)]" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Featured projects */}
              {exp.projectsMentioned && exp.projectsMentioned.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2 mb-6 text-xs text-[var(--text-secondary)]">
                  <FolderGit2 className="text-[var(--accent)]" size={14} />
                  <span className="mr-1">Contributed to:</span>
                  {exp.projectsMentioned.map((proj) => (
                    <Badge key={proj} variant="accent">
                      {proj}
                    </Badge>
                  ))}
                </div>
              ) : null}

              {/* Responsibilities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {exp.categories.map((cat) => (
                  <div key={cat.category} className="space-y-2.5">
                    <h4 className="font-[var(--font-space-grotesk)] text-sm font-semibold text-[var(--text-primary)]">
                      {cat.category}
                    </h4>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pl-3 border-l border-[var(--surface-border)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[var(--text-muted)] mr-1">
                  Technologies Used:
                </span>
                {exp.techStack.map((tech) => (
                  <Badge key={tech} variant="surface" tech={tech}>
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* GitHub Activity */}
              <div className="mt-6 pt-6 border-t border-[var(--surface-border)]">
                <div className="flex items-center gap-2 mb-6">
                  <GitGraph size={14} className="text-[var(--accent)]" />
                  <span className="font-[var(--font-space-grotesk)] text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    GitHub Activity (Feb – May 2026)
                  </span>
                </div>
                <div className="overflow-x-auto scrollbar-hide [-webkit-overflow-scrolling:touch] min-h-[7rem]">
                  {error ? (
                    <div className="text-xs text-[var(--text-muted)]">
                      GitHub contribution data could not be loaded right now. Please try again later.
                      <span className="mt-1 block font-mono text-[var(--text-secondary)]">{error}</span>
                    </div>
                  ) : (
                    <ActivityCalendar
                      data={data ?? []}
                      loading={!data}
                      blockSize={isCompact ? 10 : 12}
                      blockMargin={isCompact ? 3 : 4}
                      fontSize={isCompact ? 11 : 14}
                      theme={GITHUB_THEME}
                      labels={{ totalCount: "{{count}} contributions in Feb – May 2026" }}
                    />
                  )}
                </div>
              </div>
            </div>
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}