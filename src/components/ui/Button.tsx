"use client";

import { cn } from "@/src/lib/utils";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] active:scale-[0.98]";

  const sizes = {
    sm: "px-3.5 py-2 text-xs gap-1.5 min-h-[38px]",
    md: "px-5 py-2.5 text-sm gap-2 min-h-[44px]",
    lg: "px-7 py-3.5 text-base gap-2.5 min-h-[50px]",
  };

  const variants = {
    primary:
      "bg-[var(--accent)] text-[var(--accent-text-on)] shadow-[0_4px_16px_var(--accent-glow)] hover:bg-[var(--accent-hover)] hover:-translate-y-0.5",
    secondary:
      "bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] border border-[var(--btn-secondary-border)] hover:bg-[var(--btn-secondary-hover-bg)] hover:-translate-y-0.5",
    outline:
      "bg-transparent text-[var(--text-primary)] border border-[var(--surface-border)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-glow)] hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--btn-secondary-bg)]",
  };

  const combinedClass = cn(baseStyles, sizes[size], variants[variant], className);

  if (props.href) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a href={href} className={combinedClass} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClass} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}