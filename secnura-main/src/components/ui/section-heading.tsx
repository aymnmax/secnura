import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  title: string;
  lede?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({
  title,
  lede,
  align = "left",
  children,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2 className="text-3xl font-semibold text-text sm:text-4xl">{title}</h2>
      {lede ? <p className="mt-4 text-base leading-relaxed text-text-muted">{lede}</p> : null}
      {children}
    </div>
  );
}
