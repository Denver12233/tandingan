import Skeleton from "@/src/components/ui/Skeleton";
import SectionHeadingSkeleton from "./SectionHeadingSkeleton";

export default function SkillsSkeleton() {
  return (
    <div className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeadingSkeleton align="left" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="h-full rounded-2xl border border-[var(--surface-border)] bg-[var(--card-bg)] p-6 sm:p-7 backdrop-blur-md"
          >
            {/* Header Icon + Category Title */}
            <div className="flex items-center gap-3 mb-5 border-b border-[var(--surface-border)] pb-4">
              <Skeleton className="h-10 w-10" rounded="rounded-xl" />
              <Skeleton className="h-6 w-44" rounded="rounded-lg" />
            </div>

            {/* Skill Pills Grid */}
            <div className="flex flex-wrap gap-2.5">
              {Array.from({ length: 7 }).map((_, i) => (
                <Skeleton key={i} className="h-9 w-24 sm:w-28" rounded="rounded-xl" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
