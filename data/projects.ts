import type { ProjectEntry } from "@/data/types";

export const projects: ProjectEntry[] = [
  {
    id: "planera",
    title: "Planera: Inspectable analytics copilot for structured data",
    year: "2026",
    tags: ["Analytics Copilot"],
    githubUrl: "https://github.com/Ay2012/planera",
    caseStudySlug: "planera",
    description:
      "A chat-first analytics workspace that keeps planning, SQL generation, validation, and execution traces visible instead of hidden."
  },
  {
    id: "contour",
    title: "Contour: Sprint planning copilot for engineering teams",
    year: "2026",
    tags: ["Planning Copilot"],
    githubUrl: "https://github.com/saranshkr/contour",
    caseStudySlug: "contour",
    description:
      "A planning system that turns backlog and team inputs into scoped work, ownership suggestions, risk signals, and Jira-ready output."
  },
  {
    id: "efficient-diffusion",
    title: "Efficient Diffusion: Cost-optimized diffusion inference",
    year: "2026",
    tags: ["Generative AI Research"],
    githubUrl: "https://github.com/Ay2012/adaptive-diffusion-inference",
    caseStudySlug: "efficient-diffusion",
    description:
      "An ongoing project exploring how to reduce diffusion steps and inference cost without giving up too much quality, stability, or control."
  },
  {
    id: "climasense",
    title: "ClimaSense: RL-based HVAC optimization and control",
    year: "2025",
    tags: ["Control System"],
    githubUrl: "https://github.com/Ineshtandy/HVAC_Predictive_Consumption",
    description:
      "A custom HVAC control system that uses reinforcement learning and forecast-aware deployment to reduce energy use and daily runtime in simulation."
  },
  {
    id: "bitcoin-analytics",
    title: "Real-time Bitcoin Analytics with LangChain & Neo4j",
    year: "2025",
    tags: ["Graph Analytics"],
    githubUrl: "https://github.com/saranshkr/langchain-bitcoin-analytics",
    description:
      "A real-time Bitcoin analytics system that models wallet transactions in Neo4j, visualizes activity in Streamlit, and supports natural-language Cypher querying."
  },
  {
    id: "ocular-disease-analysis",
    title: "Ocular Disease Analysis and Recognition using Multimodal Data",
    year: "2024",
    tags: ["Multimodal ML"],
    description:
      "A multimodal disease detection project that combines fundus image preprocessing, transfer learning, and structured evaluation to classify ocular conditions."
  },
  {
    id: "automatic-license-plate-recognition",
    title: "Automatic License Plate Recognition",
    year: "2021",
    tags: ["Computer Vision"],
    description:
      "An early computer vision project that used segmentation, character detection, and augmentation to handle distorted, blurred, and non-standard license plates."
  },
  {
    id: "purchase-propensity-model",
    title: "Customer Purchase Propensity Model based on User Activity",
    year: "2021",
    tags: ["Predictive Modeling"],
    githubUrl: "https://github.com/saranshkr/purchase-propensity-model",
    description:
      "A purchase propensity model built from user behavior signals to estimate which customers are most likely to convert."
  },
  {
    id: "customer-profile-analysis",
    title: "Market Segmentation and Clustering with Customer Profiles",
    year: "2023",
    tags: ["Customer Analytics"],
    githubUrl: "https://github.com/saranshkr/customer-profile-analysis",
    description:
      "A customer analytics project using exploratory analysis, PCA, and clustering to identify spending profiles for targeted campaigns."
  }
];
