import Skeleton from "@/src/components/ui/Skeleton";

export default function HeroSkeleton() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-6 sm:px-10 max-w-6xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[3fr_2fr] md:gap-10 lg:gap-14">
        {/* Left Column — Text Content Skeleton */}
        <div className="order-2 md:order-1">
          {/* Eyebrow / Status Tag Skeleton */}
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <Skeleton height={32} className="w-80 sm:w-96" rounded="rounded-full" />
          </div>

          {/* Main Headline Skeleton */}
          <div className="max-w-4xl space-y-3">
            <Skeleton className="h-10 sm:h-14 md:h-16 w-4/5 sm:w-3/4" rounded="rounded-2xl" />
            <Skeleton className="h-6 sm:h-8 md:h-9 w-3/5 sm:w-1/2" rounded="rounded-xl" />
          </div>

          {/* Short Introduction Skeleton */}
          <div className="mt-6 max-w-2xl space-y-2.5">
            <Skeleton className="h-4 sm:h-5 w-full" rounded="rounded-lg" />
            <Skeleton className="h-4 sm:h-5 w-11/12" rounded="rounded-lg" />
            <Skeleton className="h-4 sm:h-5 w-4/5" rounded="rounded-lg" />
          </div>

          {/* CTA Buttons Skeleton */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Skeleton className="h-12 w-44" rounded="rounded-xl" />
            <Skeleton className="h-12 w-36" rounded="rounded-xl" />
            <Skeleton className="h-12 w-40" rounded="rounded-xl" />
          </div>
        </div>

        {/* Right Column — Portrait Skeleton */}
        <div className="order-1 md:order-2">
          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px]">
            <div className="aspect-[4/5] w-full">
              <Skeleton className="h-full w-full" rounded="rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Highlights / Meta Stats Bar Skeleton */}
      <div className="mt-14 pt-8 border-t border-[var(--surface-border)] grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className={i === 2 ? "col-span-2 sm:col-span-1" : ""}>
            <Skeleton className="h-8 sm:h-9 w-28 mb-2" rounded="rounded-lg" />
            <Skeleton className="h-3.5 w-36" rounded="rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
