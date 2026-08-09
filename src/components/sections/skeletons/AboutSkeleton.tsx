import Skeleton from "@/src/components/ui/Skeleton";
import SectionHeadingSkeleton from "./SectionHeadingSkeleton";

export default function AboutSkeleton() {
  return (
    <div className="py-20 sm:py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      <SectionHeadingSkeleton align="left" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Story Card + Focus Grid */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Background Story Card */}
          <div className="rounded-2xl border border-[rgba(245,243,238,0.1)] bg-[rgba(18,22,31,0.6)] p-6 sm:p-8 backdrop-blur-md">
            <Skeleton className="h-6 w-64 mb-4" rounded="rounded-lg" />
            <div className="space-y-2.5 mb-4">
              <Skeleton className="h-4 w-full" rounded="rounded-md" />
              <Skeleton className="h-4 w-11/12" rounded="rounded-md" />
              <Skeleton className="h-4 w-4/5" rounded="rounded-md" />
            </div>
            <div className="space-y-2.5">
              <Skeleton className="h-4 w-full" rounded="rounded-md" />
              <Skeleton className="h-4 w-5/6" rounded="rounded-md" />
            </div>
          </div>

          {/* Professional Focus Grid (2 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[rgba(245,243,238,0.08)] bg-[rgba(18,22,31,0.4)] p-5"
              >
                <Skeleton className="h-10 w-10 mb-3" rounded="rounded-xl" />
                <Skeleton className="h-5 w-36 mb-2" rounded="rounded-md" />
                <div className="space-y-1.5">
                  <Skeleton className="h-3.5 w-full" rounded="rounded-md" />
                  <Skeleton className="h-3.5 w-4/5" rounded="rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications & Soft Skills */}
        <div className="lg:col-span-5 space-y-6">
          {/* Certifications Spotlight */}
          <div className="rounded-2xl border border-[rgba(242,166,90,0.2)] bg-[rgba(242,166,90,0.04)] p-6 backdrop-blur-md">
            <Skeleton className="h-5 w-48 mb-4" rounded="rounded-md" />
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border-b border-[rgba(245,243,238,0.08)] pb-3 last:border-0 last:pb-0"
                >
                  <Skeleton className="h-4 w-4 mt-0.5" rounded="rounded-full" />
                  <div className="flex-1 space-y-1.5">
                    <Skeleton className="h-4 w-3/4" rounded="rounded-md" />
                    <Skeleton className="h-3 w-1/2" rounded="rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="rounded-2xl border border-[rgba(245,243,238,0.1)] bg-[rgba(18,22,31,0.6)] p-6 backdrop-blur-md">
            <Skeleton className="h-5 w-44 mb-4" rounded="rounded-md" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="h-3.5 w-3.5" rounded="rounded-full" />
                  <Skeleton className="h-4 w-28" rounded="rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
