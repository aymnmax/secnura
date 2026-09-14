import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function Container({ as: Tag = "div", children, className }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-(--container-content) px-6 sm:px-8 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
