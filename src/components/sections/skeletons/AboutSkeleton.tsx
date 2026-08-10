import Skeleton from "@/src/components/ui/Skeleton";

export default function AboutSkeleton() {
  return (
    <div className="py-20 sm:py-28 px-6 sm:px-10 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
        {/* Left Column — Portrait Skeleton */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[280px]">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <Skeleton className="h-full w-full" rounded="rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Right Column — Bio Skeleton */}
        <div className="lg:col-span-7">
          <Skeleton className="h-10 sm:h-12 w-48" rounded="rounded-lg" />
          <Skeleton className="mt-2 h-3.5 w-64" rounded="rounded-md" />
          <div className="mt-5 max-w-xl space-y-2.5">
            <Skeleton className="h-4 sm:h-5 w-full" rounded="rounded-md" />
            <Skeleton className="h-4 sm:h-5 w-11/12" rounded="rounded-md" />
            <Skeleton className="h-4 sm:h-5 w-5/6" rounded="rounded-md" />
            <Skeleton className="h-4 sm:h-5 w-10/12" rounded="rounded-md" />
            <Skeleton className="h-4 sm:h-5 w-9/12" rounded="rounded-md" />
            <Skeleton className="h-4 sm:h-5 w-3/4" rounded="rounded-md" />
          </div>

          {/* Socials Skeleton */}
          <div className="mt-7 flex items-center gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-5 w-5" rounded="rounded-md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
