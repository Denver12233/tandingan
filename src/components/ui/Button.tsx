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
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A65A] active:scale-[0.98]";

  const sizes = {
    sm: "px-3.5 py-2 text-xs gap-1.5 min-h-[38px]",
    md: "px-5 py-2.5 text-sm gap-2 min-h-[44px]",
    lg: "px-7 py-3.5 text-base gap-2.5 min-h-[50px]",
  };

  const variants = {
    primary:
      "bg-[#F2A65A] text-[#0B0E14] shadow-[0_4px_16px_rgba(242,166,90,0.2)] hover:bg-[#f3af6b] hover:shadow-[0_6px_24px_rgba(242,166,90,0.35)] hover:-translate-y-0.5",
    secondary:
      "bg-[rgba(245,243,238,0.08)] text-[#F5F3EE] border border-[rgba(245,243,238,0.14)] hover:bg-[rgba(245,243,238,0.14)] hover:border-[rgba(245,243,238,0.25)] hover:-translate-y-0.5",
    outline:
      "bg-transparent text-[#F5F3EE] border border-[rgba(245,243,238,0.25)] hover:border-[#F2A65A] hover:text-[#F2A65A] hover:bg-[rgba(242,166,90,0.05)] hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-[rgba(245,243,238,0.7)] hover:text-[#F5F3EE] hover:bg-[rgba(245,243,238,0.06)]",
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