import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function VaptIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="14" cy="14" r="8" />
      <circle cx="14" cy="14" r="3.2" />
      <path d="M14 6v3M14 19v3M6 14h3M19 14h3" />
      <path d="M19.6 19.6 25 25" />
    </svg>
  );
}

export function SocIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="6" width="22" height="15" rx="1.5" />
      <path d="M9 16l3.2-5 2.6 7 2.4-4.5 1.8 2.5H23" />
      <path d="M12 25h8" />
    </svg>
  );
}

export function IncidentResponseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 5c5.2 1.1 8 3.1 8 3.1v7.4c0 5.4-3.6 8.6-8 10.5-4.4-1.9-8-5.1-8-10.5V8.1S10.8 6.1 16 5Z" />
      <circle cx="14.5" cy="14" r="3.4" />
      <path d="M17 16.5 20.5 20" />
    </svg>
  );
}

export function AppSecIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11 10 6 16l5 6" />
      <path d="M21 10l5 6-5 6" />
      <path d="M17.5 8 14.5 24" />
    </svg>
  );
}

export function TrainingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="14" cy="12" r="6.2" />
      <path d="M9.6 15.8 6 26l8-3.2 8 3.2-3.6-10.2" />
      <path d="M14 8.8v6.4M11 12h6" />
    </svg>
  );
}

export function RedTeamIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 8l10 9 10-9" />
      <path d="M6 22l10-9 10 9" />
    </svg>
  );
}

export function DarkWebIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="16" cy="11" rx="10" ry="4.2" />
      <path d="M6 11v6c0 2.3 4.5 4.2 10 4.2s10-1.9 10-4.2v-6" />
      <path d="M6 17v6c0 2.3 4.5 4.2 10 4.2s10-1.9 10-4.2v-6" />
    </svg>
  );
}

export function VendorRiskIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="9" r="2.6" />
      <circle cx="24" cy="9" r="2.6" />
      <circle cx="16" cy="23" r="2.9" />
      <path d="M10.3 10.4 14 21M21.7 10.4 18 21M10.4 9h11.2" />
    </svg>
  );
}
