import type { ComponentType, SVGProps } from "react";
import type { Service } from "@/types/service";
import {
  AppSecIcon,
  DarkWebIcon,
  IncidentResponseIcon,
  RedTeamIcon,
  SocIcon,
  TrainingIcon,
  VaptIcon,
  VendorRiskIcon,
} from "@/components/ui/service-icons";

export interface ServiceWithIcon extends Service {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const services: ServiceWithIcon[] = [
  {
    slug: "vapt",
    name: "Vulnerability Assessment & Penetration Testing",
    shortName: "VAPT",
    description:
      "We find the gaps in your systems before someone else does, then show you exactly how to close them.",
    Icon: VaptIcon,
  },
  {
    slug: "managed-security",
    name: "Managed Security Services (MSSP) / SOC",
    shortName: "Managed Security",
    description:
      "Ongoing monitoring and response, so your team isn't watching dashboards on top of everything else they do.",
    Icon: SocIcon,
  },
  {
    slug: "incident-response",
    name: "Incident Response & Digital Forensics",
    shortName: "Incident Response",
    description:
      "When something goes wrong, we help you contain it, understand it, and recover with a clear record of what happened.",
    Icon: IncidentResponseIcon,
  },
  {
    slug: "application-security",
    name: "Application Security",
    shortName: "AppSec",
    description:
      "Secure code review and SAST/DAST testing that catch issues while they're still cheap to fix.",
    Icon: AppSecIcon,
  },
  {
    slug: "security-awareness-training",
    name: "Security Awareness Training",
    shortName: "Awareness Training",
    description:
      "Practical training that helps your team spot phishing and social engineering before it costs you anything.",
    Icon: TrainingIcon,
  },
  {
    slug: "red-team-purple-team",
    name: "Red Team / Purple Team Exercises",
    shortName: "Red & Purple Team",
    description:
      "Realistic attack simulations that test not just your systems, but how your people and processes respond.",
    Icon: RedTeamIcon,
  },
  {
    slug: "dark-web-monitoring",
    name: "Dark Web Monitoring",
    shortName: "Dark Web Monitoring",
    description:
      "We watch for your brand and credentials appearing where they shouldn't, so leaks get caught early.",
    Icon: DarkWebIcon,
  },
  {
    slug: "vendor-risk-management",
    name: "Third-Party / Vendor Risk Management",
    shortName: "Vendor Risk",
    description:
      "Visibility into the risk your vendors and partners introduce, without slowing down how you work with them.",
    Icon: VendorRiskIcon,
  },
];
