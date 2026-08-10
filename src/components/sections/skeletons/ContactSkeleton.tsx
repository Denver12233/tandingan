import Skeleton from "@/src/components/ui/Skeleton";
import SectionHeadingSkeleton from "./SectionHeadingSkeleton";

export default function ContactSkeleton() {
  return (
    <div className="pt-8 sm:pt-10 pb-20 sm:pb-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeadingSkeleton align="center" />

      {/* Availability status */}
      <div className="flex items-center justify-center gap-2 -mt-6 sm:-mt-10 mb-6 sm:mb-8">
        <Skeleton className="h-2 w-2" rounded="rounded-full" />
        <Skeleton className="h-3.5 w-52" rounded="rounded-md" />
      </div>

      {/* Two-column editorial layout */}
      <div className="mt-14 pt-10 sm:pt-12 border-t border-[var(--surface-border)] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left: heading + description + buttons */}
        <div>
          <Skeleton className="h-8 sm:h-9 w-3/4 mb-3" rounded="rounded-lg" />
          <div className="space-y-2 mb-8">
            <Skeleton className="h-4 w-full" rounded="rounded-md" />
            <Skeleton className="h-4 w-5/6" rounded="rounded-md" />
          </div>
          <div className="flex flex-wrap gap-4">
            <Skeleton className="h-12 w-44" rounded="rounded-xl" />
            <Skeleton className="h-12 w-36" rounded="rounded-xl" />
          </div>
        </div>

        {/* Right: divided contact list */}
        <div className="divide-y divide-[var(--surface-border)]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={`flex items-center justify-between gap-4 py-4 ${i === 0 ? "pt-0" : ""}`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Skeleton className="h-4 w-4 shrink-0" rounded="rounded-md" />
                <div className="min-w-0">
                  <Skeleton className="h-3 w-16 mb-1" rounded="rounded-md" />
                  <Skeleton className="h-4 w-40" rounded="rounded-md" />
                </div>
              </div>
              <Skeleton className="h-3 w-14 shrink-0" rounded="rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
