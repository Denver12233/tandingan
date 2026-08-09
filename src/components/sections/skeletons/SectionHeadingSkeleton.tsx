import Skeleton from "@/src/components/ui/Skeleton";

interface SectionHeadingSkeletonProps {
  align?: "left" | "center";
}

export default function SectionHeadingSkeleton({ align = "left" }: SectionHeadingSkeletonProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-2xl mx-auto flex flex-col items-center" : "max-w-3xl"}`}>
      <div className={`inline-flex items-center gap-2 mb-3 ${isCenter ? "justify-center" : ""}`}>
        <Skeleton className="h-4 w-36" rounded="rounded-full" />
      </div>
      <Skeleton className="h-8 sm:h-10 md:h-12 w-full max-w-2xl mb-4" rounded="rounded-xl" />
      <Skeleton className="h-4 sm:h-5 w-4/5" rounded="rounded-lg" />
    </div>
  );
}
