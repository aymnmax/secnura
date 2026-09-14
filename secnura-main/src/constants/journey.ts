export interface ProcessStep {
  label: string;
  description: string;
}

export const howItWorksSteps: ProcessStep[] = [
  {
    label: "Understand",
    description: "We learn how your business actually operates, what you rely on, and what would hurt most if it broke.",
  },
  {
    label: "Assess",
    description: "We test and review your systems to find real, exploitable weaknesses rather than generic checklist gaps.",
  },
  {
    label: "Protect",
    description: "We put the right defenses and monitoring in place, sized to your business rather than an enterprise budget.",
  },
  {
    label: "Improve",
    description: "Security keeps moving. We revisit, retest, and adjust as your business and the threats around it change.",
  },
];

export interface MaturityStage {
  label: string;
  description: string;
}

export const maturityStages: MaturityStage[] = [
  {
    label: "Starting Out",
    description: "You know security matters but don't have a plan yet. We help you find your footing.",
  },
  {
    label: "Growing",
    description: "Some basics are in place. We help you close the biggest gaps before they're tested by an attacker.",
  },
  {
    label: "Scaling",
    description: "Your attack surface is growing with your business. We help your security keep pace with it.",
  },
  {
    label: "Strengthening",
    description: "The fundamentals are solid. We help you refine, monitor, and stay ahead of new threats.",
  },
];
