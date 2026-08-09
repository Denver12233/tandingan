import { cn } from "@/src/lib/utils";
import { techIcons } from "@/src/lib/techIcons";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "accent" | "surface" | "outline" | "ghost";
  className?: string;
  tech?: string;
}

export default function Badge({ children, variant = "surface", className = "", tech }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors duration-200";

  const variants = {
    accent: "bg-[var(--badge-accent-bg)] text-[var(--badge-accent-text)] border border-[var(--badge-accent-border)]",
    surface: "bg-[var(--badge-surface-bg)] text-[var(--badge-surface-text)] border border-[var(--badge-surface-border)]",
    outline: "bg-transparent text-[var(--text-secondary)] border border-[var(--surface-border)]",
    ghost: "bg-transparent text-[var(--text-muted)]",
  };

  const Icon = tech ? techIcons[tech] : undefined;

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {Icon ? <Icon className="h-3.5 w-3.5 shrink-0" /> : null}
      {children}
    </span>
  );
}