import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "ghost";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-navy hover:bg-[#33c3ff] focus-visible:outline-accent",
  secondary:
    "border border-border-strong text-text hover:border-accent hover:text-accent",
  ghost: "text-text-muted hover:text-text",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button className={cn(baseStyles, variantStyles[variant], className)} {...props} />
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

// A plain anchor, not next/link's Link: every use in this single-page site
// is an in-page hash anchor, so there's no client-side route to navigate.
export function ButtonLink({ href, variant = "primary", className, children, ...props }: ButtonLinkProps) {
  return (
    <a href={href} className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </a>
  );
}
