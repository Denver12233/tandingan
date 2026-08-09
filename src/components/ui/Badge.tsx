import { cn } from "@/src/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "accent" | "surface" | "outline" | "ghost";
  className?: string;
}

export default function Badge({ children, variant = "surface", className = "" }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors duration-200";

  const variants = {
    accent: "bg-[rgba(242,166,90,0.12)] text-[#F2A65A] border border-[rgba(242,166,90,0.25)]",
    surface: "bg-[rgba(245,243,238,0.06)] text-[#F5F3EE] border border-[rgba(245,243,238,0.12)]",
    outline: "bg-transparent text-[rgba(245,243,238,0.8)] border border-[rgba(245,243,238,0.2)]",
    ghost: "bg-transparent text-[rgba(245,243,238,0.65)]",
  };

  return <span className={cn(baseStyles, variants[variant], className)}>{children}</span>;
}