import Skeleton from "@/src/components/ui/Skeleton";
import SectionHeadingSkeleton from "./SectionHeadingSkeleton";

export default function EducationSkeleton() {
  return (
    <div className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeadingSkeleton align="left" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Degree Card */}
        <div className="lg:col-span-7">
          <div className="h-full rounded-2xl border border-[var(--surface-border)] bg-[var(--card-bg)] p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <Skeleton className="h-6 w-36 mb-4" rounded="rounded-full" />
              <Skeleton className="h-8 sm:h-9 w-4/5 mb-2" rounded="rounded-lg" />
              <Skeleton className="h-6 w-3/5 mb-4" rounded="rounded-md" />

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Skeleton className="h-4 w-40" rounded="rounded-md" />
                <Skeleton className="h-4 w-36" rounded="rounded-md" />
              </div>

              <div className="border-t border-[var(--surface-border)] pt-4 space-y-2">
                <Skeleton className="h-4 w-full" rounded="rounded-md" />
                <Skeleton className="h-4 w-11/12" rounded="rounded-md" />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[var(--surface-border)]">
              <Skeleton className="h-7 w-24" rounded="rounded-full" />
              <Skeleton className="h-7 w-32" rounded="rounded-full" />
              <Skeleton className="h-7 w-36" rounded="rounded-full" />
            </div>
          </div>
        </div>

        {/* Certifications & Diplomas */}
        <div className="lg:col-span-5">
          <div className="h-full rounded-2xl border border-[var(--surface-border)] bg-[var(--card-bg)] p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <Skeleton className="h-6 w-48 mb-6" rounded="rounded-md" />

              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-[var(--surface-border)] bg-[var(--badge-surface-bg)] p-4"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <Skeleton className="h-4 w-3/4" rounded="rounded-md" />
                      <Skeleton className="h-3 w-10" rounded="rounded-md" />
                    </div>
                    <Skeleton className="h-3 w-1/2 mb-3" rounded="rounded-md" />
                    <Skeleton className="h-3 w-28" rounded="rounded-md" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--surface-border)]">
              <Skeleton className="h-3 w-56" rounded="rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
