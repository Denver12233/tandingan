import Skeleton from "@/src/components/ui/Skeleton";
import SectionHeadingSkeleton from "./SectionHeadingSkeleton";

export default function EducationSkeleton() {
  return (
    <div className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeadingSkeleton align="left" />

      <div className="max-w-3xl pl-6 sm:pl-8">
        {/* Degree Badge Pill */}
        <Skeleton className="h-6 w-40 mb-4" rounded="rounded-full" />

        {/* Degree Title */}
        <Skeleton className="h-8 sm:h-10 w-4/5 mb-1.5" rounded="rounded-lg" />

        {/* Institution */}
        <Skeleton className="h-7 w-3/5 mb-4" rounded="rounded-md" />

        {/* Graduation Year + Location row */}
        <div className="flex flex-wrap items-center gap-5 mb-6">
          <Skeleton className="h-4 w-40" rounded="rounded-md" />
          <Skeleton className="h-4 w-36" rounded="rounded-md" />
        </div>

        {/* Description */}
        <div className="space-y-2.5">
          <Skeleton className="h-4 sm:h-5 w-full" rounded="rounded-md" />
          <Skeleton className="h-4 sm:h-5 w-11/12" rounded="rounded-md" />
          <Skeleton className="h-4 sm:h-5 w-3/4" rounded="rounded-md" />
        </div>

        {/* Tag Badges */}
        <div className="mt-5 flex flex-wrap gap-2">
          <Skeleton className="h-6 w-24" rounded="rounded-full" />
          <Skeleton className="h-6 w-32" rounded="rounded-full" />
          <Skeleton className="h-6 w-36" rounded="rounded-full" />
        </div>
      </div>
    </div>
  );
}
