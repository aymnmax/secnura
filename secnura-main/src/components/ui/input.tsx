import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

const fieldStyles =
  "w-full rounded-sm border border-border-strong bg-bg-panel px-4 py-3 text-sm text-text placeholder:text-text-faint transition-colors focus:border-accent focus:outline-none";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return <input ref={ref} className={cn(fieldStyles, className)} {...props} />;
  },
);

export { fieldStyles };
