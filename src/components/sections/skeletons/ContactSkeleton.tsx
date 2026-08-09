import Skeleton from "@/src/components/ui/Skeleton";
import SectionHeadingSkeleton from "./SectionHeadingSkeleton";

export default function ContactSkeleton() {
  return (
    <div className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeadingSkeleton align="center" />

      <div className="max-w-3xl mx-auto rounded-3xl border border-[var(--badge-accent-border)] bg-[var(--card-bg)] p-8 sm:p-12 backdrop-blur-xl text-center shadow-2xl relative overflow-hidden">
        {/* Title & Description Skeleton */}
        <Skeleton className="h-8 sm:h-9 w-3/4 mx-auto mb-3" rounded="rounded-lg" />
        <div className="max-w-xl mx-auto space-y-2 mb-8">
          <Skeleton className="h-4 w-full" rounded="rounded-md" />
          <Skeleton className="h-4 w-4/5 mx-auto" rounded="rounded-md" />
        </div>

        {/* 3-Column Detail Cards Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--surface-border)] bg-[var(--badge-surface-bg)] p-4 flex flex-col justify-between"
            >
              <div>
                <Skeleton className="h-9 w-9 mb-3" rounded="rounded-xl" />
                <Skeleton className="h-3 w-16 mb-1" rounded="rounded-md" />
                <Skeleton className="h-4 w-28" rounded="rounded-md" />
              </div>
              <Skeleton className="h-3 w-20 mt-4" rounded="rounded-md" />
            </div>
          ))}
        </div>

        {/* Action Buttons Skeleton */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Skeleton className="h-12 w-44" rounded="rounded-xl" />
          <Skeleton className="h-12 w-36" rounded="rounded-xl" />
        </div>
      </div>
    </div>
  );
}
