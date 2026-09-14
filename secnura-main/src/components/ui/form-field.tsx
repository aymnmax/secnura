import type { ReactNode } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}

export function FormField({ id, label, optional, error, children }: FormFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-text">
        {label}
        {optional ? <span className="ml-1 font-normal text-text-faint">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-[#e07a5f]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
