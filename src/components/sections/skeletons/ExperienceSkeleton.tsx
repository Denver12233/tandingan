import Skeleton from "@/src/components/ui/Skeleton";
import SectionHeadingSkeleton from "./SectionHeadingSkeleton";

export default function ExperienceSkeleton() {
  return (
    <div className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeadingSkeleton align="left" />

      <div className="space-y-8">
        <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--card-bg)] p-6 sm:p-8 backdrop-blur-md">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--surface-border)] pb-6 mb-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-44" rounded="rounded-md" />
              <Skeleton className="h-7 sm:h-8 w-64 sm:w-80" rounded="rounded-lg" />
            </div>
            <Skeleton className="h-8 w-44" rounded="rounded-full" />
          </div>

          {/* Project Spotlight Bar */}
          <div className="mb-6 p-4 rounded-xl bg-[var(--badge-accent-bg)] border border-[var(--badge-accent-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <Skeleton className="h-4 w-64" rounded="rounded-md" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-32" rounded="rounded-full" />
              <Skeleton className="h-6 w-40" rounded="rounded-full" />
            </div>
          </div>

          {/* Categorized Responsibilities (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-4 w-40" rounded="rounded-md" />
                <div className="space-y-2">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <Skeleton className="h-3.5 w-3.5 mt-1" rounded="rounded-full" />
                      <Skeleton className="h-4 w-11/12" rounded="rounded-md" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Footer */}
          <div className="mt-8 pt-6 border-t border-[var(--surface-border)] flex flex-wrap items-center gap-2">
            <Skeleton className="h-4 w-28 mr-2" rounded="rounded-md" />
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-20 sm:w-24" rounded="rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
