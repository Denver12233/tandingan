import Skeleton from "@/src/components/ui/Skeleton";
import SectionHeadingSkeleton from "./SectionHeadingSkeleton";

export default function SkillsSkeleton() {
  return (
    <div className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeadingSkeleton align="left" />

      {/* Group Labels */}
      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-10 sm:mb-12">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center">
            {i > 0 && <Skeleton className="mx-2 sm:mx-3 h-6 w-px" rounded="rounded-full" />}
            <Skeleton className="h-8 sm:h-9 w-24 sm:w-32" rounded="rounded-lg" />
          </div>
        ))}
      </div>

      {/* Marquee Rows */}
      <div className="flex flex-col gap-10 sm:gap-14">
        <div className="flex overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 min-w-[180px] mr-4 sm:mr-5 rounded-2xl border border-[var(--surface-border)] bg-[var(--card-bg)] px-5 py-4 flex items-center gap-3"
            >
              <Skeleton className="h-7 w-7" rounded="rounded-lg" />
              <Skeleton className="h-4 w-20" rounded="rounded-md" />
            </div>
          ))}
        </div>
        <div className="flex overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 h-[72px] w-[72px] mr-4 sm:mr-5 rounded-full border border-[var(--surface-border)] bg-[var(--badge-accent-bg)] flex items-center justify-center"
            >
              <Skeleton className="h-8 w-8" rounded="rounded-full" />
            </div>
          ))}
        </div>
        <div className="flex overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 min-w-[180px] mr-4 sm:mr-5 rounded-2xl border border-[var(--surface-border)] bg-[var(--card-bg)] px-5 py-4 flex items-center gap-3"
            >
              <Skeleton className="h-7 w-7" rounded="rounded-lg" />
              <Skeleton className="h-4 w-20" rounded="rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
