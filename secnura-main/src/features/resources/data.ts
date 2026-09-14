export interface ResourceTopic {
  title: string;
  description: string;
}

export const resourceTopics: ResourceTopic[] = [
  {
    title: "VAPT & security testing",
    description: "Practical guides on vulnerability assessments, penetration testing, and reading results.",
  },
  {
    title: "Incident response",
    description: "What to do in the first hours after a breach, and how to prepare before one happens.",
  },
  {
    title: "Security awareness",
    description: "Plain-language explainers on phishing, social engineering, and everyday threats.",
  },
  {
    title: "Risk & compliance",
    description: "Understanding vendor risk, third-party exposure, and where to start with compliance.",
  },
];
