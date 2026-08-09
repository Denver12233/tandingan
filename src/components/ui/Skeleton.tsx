import { cn } from "@/src/lib/utils";
import { CSSProperties } from "react";

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  rounded?: string;
  style?: CSSProperties;
}

export default function Skeleton({
  width,
  height,
  className = "",
  rounded = "rounded-xl",
  style = {},
}: SkeletonProps) {
  const customStyles: CSSProperties = {
    ...(width !== undefined ? { width: typeof width === "number" ? `${width}px` : width } : {}),
    ...(height !== undefined ? { height: typeof height === "number" ? `${height}px` : height } : {}),
    ...style,
  };

  return (
    <div
      aria-hidden="true"
      style={customStyles}
      className={cn(
        "relative overflow-hidden bg-[var(--skeleton-bg)] border border-[var(--skeleton-border)] shrink-0 transition-colors duration-300",
        rounded,
        className
      )}
    >
      <div
        className="animate-shimmer absolute inset-0 -translate-x-full pointer-events-none bg-gradient-to-r from-transparent via-[var(--skeleton-shimmer)] to-transparent"
      />
    </div>
  );
}
