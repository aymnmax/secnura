"use client";

import { createElement, type CSSProperties, type ReactNode, type Ref } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article" | "li" | "p";
  /** Extra CSS properties to transition alongside opacity/transform, e.g. "background-color". */
  extraTransitionProperties?: string;
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  extraTransitionProperties,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  // Set via inline style (rather than a Tailwind transition-* class) so it
  // can't be silently dropped when merging with a conflicting utility class
  // (e.g. hover:transition-colors) passed in through `className`.
  const style: CSSProperties = {
    transitionProperty: extraTransitionProperties
      ? `opacity, transform, ${extraTransitionProperties}`
      : "opacity, transform",
    transitionDuration: "700ms",
    transitionTimingFunction: "ease-in",
    transitionDelay: `${delay}ms`,
  };

  return createElement(
    as,
    {
      // Polymorphic tag: the ref type can't be narrowed to match every
      // intrinsic element's specific handle, so it's widened here.
      ref: ref as Ref<never>,
      className: cn(inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0", className),
      style,
    },
    children,
  );
}
