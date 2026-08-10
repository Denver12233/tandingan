import Skeleton from "@/src/components/ui/Skeleton";
import SectionHeadingSkeleton from "./SectionHeadingSkeleton";

export default function ExperienceSkeleton() {
  return (
    <div className="pt-8 sm:pt-10 pb-20 sm:pb-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeadingSkeleton align="left" />

      <div className="mt-16 divide-y divide-[var(--surface-border)]">
        <div className="py-10 first:pt-0">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Skeleton className="h-4 w-4" rounded="rounded-sm" />
                <Skeleton className="h-4 w-44" rounded="rounded-md" />
              </div>
              <Skeleton className="h-7 sm:h-8 w-64 sm:w-80" rounded="rounded-lg" />
            </div>
            <Skeleton className="h-8 w-44" rounded="rounded-full" />
          </div>

          {/* Featured projects */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Skeleton className="h-4 w-4" rounded="rounded-sm" />
            <Skeleton className="h-4 w-28" rounded="rounded-md" />
            <Skeleton className="h-6 w-32" rounded="rounded-full" />
            <Skeleton className="h-6 w-40" rounded="rounded-full" />
          </div>

          {/* Responsibilities (2-col grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="space-y-2.5">
                <Skeleton className="h-4 w-40" rounded="rounded-md" />
                <div className="space-y-2">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <Skeleton
                      key={j}
                      className="h-4 w-11/12 pl-3 border-l border-[var(--surface-border)]"
                      rounded="rounded-md"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Skeleton className="h-4 w-28 mr-1" rounded="rounded-md" />
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-20 sm:w-24" rounded="rounded-full" />
            ))}
          </div>

          {/* GitHub Activity */}
          <div className="mt-6 pt-6 border-t border-[var(--surface-border)]">
            <div className="flex items-center gap-2 mb-6">
              <Skeleton className="h-3.5 w-3.5" rounded="rounded-sm" />
              <Skeleton className="h-4 w-56" rounded="rounded-md" />
            </div>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex items-start gap-[3px] w-max">
                {Array.from({ length: 18 }).map((_, week) => (
                  <div key={week} className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }).map((_, day) => (
                      <Skeleton
                        key={day}
                        className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                        rounded="rounded-[2px]"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
