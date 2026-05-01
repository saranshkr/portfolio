import type {
  CapabilityGroup,
  JourneyCurrentWorkItem,
  JourneyConnectorRow,
  JourneyVisualItem
} from "@/data/types";

export const capabilityMap: CapabilityGroup[] = [
  {
    label: "Systems",
    skills: ["Distributed ETL", "Observability", "Cost Engineering", "Service Design"]
  },
  {
    label: "Applied ML",
    skills: ["Recommendation Systems", "Forecasting", "Graph ML", "Computer Vision"]
  },
  {
    label: "Platforms",
    skills: ["AWS", "Kubernetes", "Airflow", "PySpark"]
  },
  {
    label: "Delivery",
    skills: ["Product Thinking", "Experimentation", "CI/CD", "Operator Trust"]
  }
];

export const journeyVisualItems: JourneyVisualItem[] = [
  {
    phase: "Foundations",
    title: "NIT Silchar",
    period: "2017 - 2021",
    subtitle: "B.Tech in Electronics and Communication Engineering",
    description:
      "Built my mathematical and systems foundation through coursework in linear algebra, algorithms, and neural networks. This phase shaped the base for my later work in ML, data systems, and AI."
  },
  {
    phase: "Applied ML",
    title: "Wipro",
    period: "2021 - 2022",
    subtitle: "Junior Data Scientist",
    description:
      "Moved into product-facing ML through recommendation systems, evaluation logic, APIs, and deployment workflows. This phase pushed my work toward practical ML under real engineering constraints."
  },
  {
    phase: "Production Systems",
    title: "Samsung Research India",
    period: "2022 - 2024",
    subtitle: "Data Scientist",
    description:
      "Worked on production-scale data and ML systems across SmartTV analytics and ad delivery. This is where my work became deeply systems-oriented and production-focused."
  },
  {
    phase: "Advanced AI Systems",
    title: "University of Maryland",
    period: "2024 - 2026",
    subtitle: "M.S. in Data Science",
    description:
      "Expanded into graph analytics, reinforcement learning, and intelligent interfaces through coursework and projects. This phase broadened my focus from prediction and analytics to more interactive AI systems."
  }
];

export const journeyConnectorRows: JourneyConnectorRow[] = [
  {
    id: "before-first",
    notes: []
  },
  {
    id: "between-0-1",
    notes: [
      {
        title: "Automatic License Plate Recognition",
        description:
          "An early computer vision project that sharpened my understanding of robustness under blur, distortion, and low-light conditions.",
        lane: "left",
        anchor: "start"
      },
      {
        title: "Early Customer Analytics Projects",
        description:
          "Included a purchase propensity model and a clustering workflow, marking a shift toward business-oriented ML and tabular data problems.",
        lane: "right",
        anchor: "end"
      }
    ]
  },
  {
    id: "between-1-2",
    notes: []
  },
  {
    id: "between-2-3",
    notes: [
      {
        title: "Ocular Disease Analysis",
        description:
          "A multimodal healthcare project that strengthened my work in transfer learning, preprocessing, and structured evaluation.",
        lane: "right",
        anchor: "end"
      }
    ]
  },
  {
    id: "after-last",
    notes: [
      {
        title: "ClimaSense",
        description:
          "A reinforcement learning system for HVAC optimization that pushed my work from prediction into control and simulation.",
        lane: "right",
        anchor: "start"
      },
      {
        title: "Real-time Bitcoin Analytics",
        description:
          "A graph analytics system that brought together ingestion, schema design, natural-language querying, and user-facing interfaces.",
        lane: "left",
        anchor: "end"
      }
    ]
  }
];

export const journeyCurrentWork: JourneyCurrentWorkItem[] = [
  {
    slug: "planera",
    title: "Planera",
    summary:
      "An inspectable analytics copilot for structured data that keeps planning, SQL generation, and validation visible.",
    tags: ["AI Interfaces", "Analytics Systems", "Orchestration"]
  },
  {
    slug: "contour",
    title: "Contour",
    summary:
      "A sprint planning copilot that turns high-level goals into scoped tasks, priorities, and assignments based on team skills and capacity.",
    tags: ["Workflow Systems", "Planning", "Product Design"]
  },
  {
    slug: "efficient-diffusion",
    title: "Efficient Diffusion",
    summary:
      "An ongoing project exploring how to reduce diffusion steps without giving up too much quality, stability, or control.",
    tags: ["Generative AI", "Optimization", "Model Systems"]
  }
];
