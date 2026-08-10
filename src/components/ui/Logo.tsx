import { cn } from "@/src/lib/utils";

export type LogoSize = "sm" | "md" | "lg";

const LOGO_DIMENSIONS: Record<LogoSize, number> = {
  sm: 28,
  md: 44,
  lg: 64,
};

type LogoProps = {
  size?: LogoSize;
  className?: string;
};

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const dimension = LOGO_DIMENSIONS[size];

  return (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Denver Tandingan — code bracket logo"
      className={cn("shrink-0", className)}
    >
      <rect width="100" height="100" rx="22" fill="var(--accent)" />
      <g
        fill="none"
        stroke="var(--accent-text-on)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 40 34 L 25 50 L 40 66" />
        <path d="M 60 34 L 75 50 L 60 66" />
        <path d="M 45 66 L 55 34" />
      </g>
    </svg>
  );
}
