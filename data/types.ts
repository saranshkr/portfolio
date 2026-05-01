import type { LucideIcon } from "lucide-react";

export type Metric = {
  label: string;
  value: string;
};

export type CaseStudyCardItem = {
  title: string;
  description: string;
};

export type CaseStudyStepItem = {
  title: string;
  description: string;
};

export type CaseStudySection =
  | {
      title: string;
      kind: "prose";
      paragraphs: string[];
    }
  | {
      title: string;
      kind: "cards";
      items: CaseStudyCardItem[];
    }
  | {
      title: string;
      kind: "steps";
      items: CaseStudyStepItem[];
    };

export type DesignPillar = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  year: number;
  githubUrl: string;
  metrics: Metric[];
  tech: string[];
  featured: boolean;
  sections: CaseStudySection[];
};

export type ProjectEntry = {
  id: string;
  title: string;
  year?: string;
  tags: string[];
  githubUrl?: string;
  caseStudySlug?: string;
  description: string;
};

export type JourneyVisualItem = {
  phase: string;
  title: string;
  period: string;
  subtitle: string;
  description: string;
};

export type JourneyCurrentWorkItem = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
};

export type JourneyConnectorNote = {
  title: string;
  description: string;
  lane: "left" | "right";
  anchor: "start" | "middle" | "end";
};

export type JourneyConnectorRowId =
  | "before-first"
  | "after-last"
  | `between-${number}-${number}`;

export type JourneyConnectorRow = {
  id: JourneyConnectorRowId;
  notes: JourneyConnectorNote[];
};

export type CapabilityGroup = {
  label: string;
  skills: string[];
};
