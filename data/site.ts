import {
  Activity,
  Gauge,
  GitBranchPlus,
  Waypoints
} from "lucide-react";

import type { DesignPillar } from "@/data/types";

export const profile = {
  name: "Saransh Kumar",
  role: "Data & ML Systems Engineer",
  intro:
    "I build production-grade data, ML, and AI systems, from large-scale analytics platforms to intelligent interfaces. My work turns messy data into reliable tools and decisions.",
  highlights: [
    {
      label: "Data Platforms",
      value: "500+ TB",
      context: "ETL and analytics pipelines engineered for SmartTV-scale telemetry."
    },
    {
      label: "Cost Efficiency",
      value: "$200K/mo",
      context: "Cloud spend reduced through serverless Spark and platform modernization."
    },
    {
      label: "Decision Reach",
      value: "100M+ users",
      context: "SmartTV ad delivery and analytics systems operated across international markets."
    }
  ]
};

const designPhilosophy: DesignPillar[] = [
  {
    title: "Observe Before You Optimize",
    description:
      "I treat instrumentation, metrics, and debuggability as part of the product surface so systems can be understood before they are tuned.",
    icon: Activity
  },
  {
    title: "Model the Interfaces",
    description:
      "The most durable ML systems are built around clean handoffs between data, services, and operators rather than around a single clever model.",
    icon: Waypoints
  },
  {
    title: "Design for Constraints",
    description:
      "Latency, cost, governance, and operational trust shape architecture as much as accuracy, especially when the system needs to survive contact with production.",
    icon: Gauge
  },
  {
    title: "Ship Incremental Leverage",
    description:
      "I prefer systems that create compounding value: a cleaner pipeline, a better evaluation loop, or a platform primitive that unlocks faster iteration later.",
    icon: GitBranchPlus
  }
];

export const homeSections = {
  about:
    "My work centers on turning analytical prototypes into production systems that are observable, efficient, and grounded in business constraints. Across large-scale data platforms, ML systems, and intelligent interfaces, I have focused on making machine learning practical enough to ship and reliable enough to trust. I am currently pursuing a Master’s in Data Science at the University of Maryland, College Park, with a focus on machine learning and large-scale data systems.",
  designPhilosophy
};
