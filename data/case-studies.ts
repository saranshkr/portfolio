import type { CaseStudy } from "@/data/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "planera",
    title: "Planera",
    tagline: "Inspectable Analytics Copilot",
    summary:
      "I built Planera as an analytics workspace where planning, SQL generation, validation, and execution stay visible enough for a human to trust the answer.",
    year: 2026,
    githubUrl: "https://github.com/Ay2012/planera",
    metrics: [
      { label: "Trust Surface", value: "Traceable query path" },
      { label: "Risk Control", value: "Validation before answer" }
    ],
    tech: ["NL-to-SQL", "Validation Pipelines", "LLM Orchestration", "Execution Tracing"],
    featured: true,
    sections: [
      {
        title: "The Problem Worth Solving",
        kind: "prose",
        paragraphs: [
          "Analytics teams live between two bad options: either someone writes every query by hand and the workflow stays slow, or an AI tool hides the work behind a polished answer and forces users to trust a black box.",
          "What I wanted to solve was not just query generation. I wanted a system that could shorten time-to-insight without removing the operator's ability to inspect what happened, understand where the answer came from, and step in when the model was wrong."
        ]
      },
      {
        title: "Why a Simpler Version Breaks",
        kind: "prose",
        paragraphs: [
          "A basic NL-to-SQL demo looks convincing right up until the schema gets messy, the business logic has exceptions, or the user asks a question that requires changing grain, joining the right tables, and preserving the correct filters. At that point, plausible SQL is not the same thing as correct SQL.",
          "In production, users need more than an answer box. They need validation signals, recovery paths, and enough visibility to tell whether a failure came from the prompt, the schema, or the model's assumptions. Without that, a single hallucination is enough to make the whole surface feel unsafe."
        ]
      },
      {
        title: "How I Framed the System",
        kind: "prose",
        paragraphs: [
          "I did not frame Planera as a chatbot. I framed it as an inspectable analytics workspace where every query is a controlled system interaction with visible state transitions.",
          "That changed the design philosophy. Instead of trying to expose private model reasoning, I focused on exposing the operational trail: what the system believed the question was, how it planned the work, what SQL it produced, what validations passed or failed, and how the final answer was synthesized."
        ]
      },
      {
        title: "Core Architecture",
        kind: "cards",
        items: [
          {
            title: "Planner",
            description:
              "Translates the user question into a structured intent, identifies the tables and metrics involved, and turns an open-ended request into a constrained execution plan."
          },
          {
            title: "SQL Generation Engine",
            description:
              "Produces candidate SQL from the planner output, keeping the generation step tied to explicit schema context instead of free-form guessing."
          },
          {
            title: "Validation Layer",
            description:
              "Checks syntax, schema compatibility, and result-shape expectations before the answer is allowed to inherit model confidence it has not earned."
          },
          {
            title: "Execution Engine",
            description:
              "Runs validated queries, captures failures with enough context to debug them, and keeps query execution separate from narrative synthesis."
          },
          {
            title: "Synthesis",
            description:
              "Turns validated outputs into a readable response while preserving the trace between the user's question, the query, and the result."
          },
          {
            title: "Persistence",
            description:
              "Stores the query thread, execution trace, and validation results so the workflow remains inspectable across retries, reviews, and follow-up analysis."
          }
        ]
      },
      {
        title: "Critical Flow",
        kind: "steps",
        items: [
          {
            title: "Data upload",
            description:
              "The user connects or uploads structured data, and the system builds enough schema awareness to ground future planning and SQL generation."
          },
          {
            title: "User query",
            description:
              "A natural-language question arrives with all the ambiguity that makes analytics hard in the first place: fuzzy intent, shorthand business language, and implicit constraints."
          },
          {
            title: "System planning",
            description:
              "Planera turns that request into a scoped task, identifies the likely tables and metrics, and prepares the query-generation step with explicit structure."
          },
          {
            title: "SQL execution",
            description:
              "The generated SQL is executed only after it passes the relevant checks, so the system does not confuse confident prose with a valid analytic result."
          },
          {
            title: "Validation",
            description:
              "Execution results are inspected for mismatches, empty outputs, and other signals that the query technically ran but semantically missed the user's intent."
          },
          {
            title: "Traced response",
            description:
              "The final answer returns with the supporting trail intact, so the user can inspect the generated SQL, review validation signals, and recover quickly if the system drifted."
          }
        ]
      },
      {
        title: "The Decisions That Shaped the Build",
        kind: "cards",
        items: [
          {
            title: "Make planning visible",
            description:
              "I treated the system plan as a first-class artifact because hidden intent resolution is where trust usually starts to erode."
          },
          {
            title: "Validate before summarizing",
            description:
              "I separated answer generation from answer permission. The model can propose SQL, but it does not get to narrate success until the data path has earned it."
          },
          {
            title: "Persist the full interaction trail",
            description:
              "Storing query attempts, validation outcomes, and execution traces makes recovery and iteration much faster than forcing users to restart from scratch."
          },
          {
            title: "Optimize for operator recovery",
            description:
              "When the system fails, the user should be one step away from understanding why, not three layers away behind hidden orchestration."
          }
        ]
      },
      {
        title: "Failure Modes and Tradeoffs",
        kind: "cards",
        items: [
          {
            title: "Hallucinated SQL can still look credible",
            description:
              "The hardest failures are not syntax errors. They are plausible queries that run cleanly and return the wrong business answer with enough confidence to mislead the user."
          },
          {
            title: "Schema mismatches break otherwise good plans",
            description:
              "Even strong intent modeling falls apart when table names, metric definitions, or join assumptions drift away from what the generator thinks is true."
          },
          {
            title: "Hidden reasoning creates trust debt",
            description:
              "If the user cannot inspect the operational path, the system turns every surprise into a credibility problem. That is why I exposed artifacts instead of asking for blind trust."
          },
          {
            title: "Validation adds friction, but it is worth it",
            description:
              "Every validation layer introduces latency and implementation overhead, but removing those checks would save milliseconds at the cost of long-term trust."
          }
        ]
      },
      {
        title: "What Changed",
        kind: "prose",
        paragraphs: [
          "The biggest shift was not that the system answered faster. It was that the interaction became safer to trust. Users could see the generated SQL, inspect validation signals, and understand the boundary between model assistance and verified execution.",
          "That changes adoption dynamics. Instead of treating analytics AI like a novelty, Planera makes it easier to use the system as a controlled workspace where visibility, recovery, and confidence are built into the product."
        ]
      },
      {
        title: "What I'd Improve Next",
        kind: "cards",
        items: [
          {
            title: "Schema-aware memory",
            description:
              "I would push more durable understanding of business definitions, common joins, and prior query patterns into the planning layer so the system gets better at repeat analysis."
          },
          {
            title: "Stronger repair loops",
            description:
              "The next step is better guided recovery when validation fails, especially around automated query repair and clearer explanations of what changed between attempts."
          },
          {
            title: "Deeper evaluation coverage",
            description:
              "I would expand the evaluation harness to stress ambiguous prompts, schema drift, and edge-case metric definitions so trust does not depend on only the happy path."
          }
        ]
      }
    ]
  },
  {
    slug: "contour",
    title: "Contour",
    tagline: "Sprint Planning Copilot",
    summary:
      "I built Contour as a planning copilot that turns vague sprint goals into scoped work, priority signals, and assignment recommendations grounded in how a team actually operates.",
    year: 2026,
    githubUrl: "https://github.com/saranshkr/contour",
    metrics: [
      { label: "Planning Output", value: "Goal-to-work conversion" },
      { label: "Assignment Logic", value: "Skill and capacity aware" }
    ],
    tech: ["Planning Systems", "Task Decomposition", "Prioritization", "Assignment Logic"],
    featured: true,
    sections: [
      {
        title: "The Problem Worth Solving",
        kind: "prose",
        paragraphs: [
          "Sprint planning sounds simple until a team actually tries to translate high-level goals into concrete work. That process is usually manual, fuzzy, and heavily dependent on whoever happens to be best at turning ambiguity into a usable plan.",
          "The business problem is consistency. Teams need a way to break down goals into scoped tasks and ownership suggestions without rebuilding the planning logic from scratch every sprint."
        ]
      },
      {
        title: "Why a Simpler Version Breaks",
        kind: "prose",
        paragraphs: [
          "A generic task generator can produce a long list of plausible work items, but that is not the same thing as a plan. Real planning depends on the shape of the team, current workload, expected dependencies, and the difference between a backlog item and something that is actually sprint-ready.",
          "If the system ignores those constraints, it creates polished output that still fails operationally. Tasks come out at the wrong level of granularity, ownership recommendations feel arbitrary, and the team stops trusting the suggestions."
        ]
      },
      {
        title: "How I Framed the System",
        kind: "prose",
        paragraphs: [
          "I framed Contour as a planning copilot, not an autonomous planner. Its job is to convert intent into structure and make allocation logic explicit enough that a team can review, adjust, and adopt it.",
          "That meant the core product was not text generation. The core product was structured allocation logic: decompose the goal, prioritize the work, match it against real team context, and return a plan that looks like something an engineering lead would actually refine."
        ]
      },
      {
        title: "Core Architecture",
        kind: "cards",
        items: [
          {
            title: "Input Parsing",
            description:
              "Normalizes sprint goals, backlog context, and planning constraints so the system is working from structured intent rather than raw prose alone."
          },
          {
            title: "Decomposition Engine",
            description:
              "Breaks high-level goals into actionable work items while preserving scope boundaries, sequencing, and the difference between discovery work and execution work."
          },
          {
            title: "Prioritization Module",
            description:
              "Assigns ordering and urgency so the plan reflects what matters most instead of returning a flat list with no operational hierarchy."
          },
          {
            title: "Skill-Matching Logic",
            description:
              "Maps scoped tasks to team capability, current workload, and fit so assignment suggestions feel grounded in how the team actually works."
          },
          {
            title: "Backlog Integration",
            description:
              "Pushes the structured output into a backlog-ready shape so the system closes the gap between planning insight and execution setup."
          }
        ]
      },
      {
        title: "Critical Flow",
        kind: "steps",
        items: [
          {
            title: "Sprint goals enter the system",
            description:
              "The planning flow starts with high-level outcomes, not fully formed tickets, because that is where most real sprint ambiguity lives."
          },
          {
            title: "Team context grounds the plan",
            description:
              "Contour folds in skill coverage, current workload, and practical constraints so decomposition does not happen in a vacuum."
          },
          {
            title: "A decomposed task list is generated",
            description:
              "The system converts the goal into scoped work items with clearer boundaries, dependencies, and priority signals."
          },
          {
            title: "Scoped assignments are proposed",
            description:
              "Assignment logic recommends ownership based on fit and capacity, producing a draft sprint plan that a lead can review instead of rewrite."
          }
        ]
      },
      {
        title: "The Decisions That Shaped the Build",
        kind: "cards",
        items: [
          {
            title: "Separate decomposition from assignment",
            description:
              "I kept those concerns distinct so the system could first decide what the work is before it decides who should own it."
          },
          {
            title: "Keep constraints explicit",
            description:
              "Skill fit, capacity, and planning quality are not optional details. They are the difference between an impressive demo and a usable planner."
          },
          {
            title: "Return recommendations, not commands",
            description:
              "The system is strongest when it helps a team reason faster, not when it pretends assignment logic should replace human judgment."
          },
          {
            title: "Produce backlog-shaped output",
            description:
              "I wanted the result to be easy to operationalize, so the output needed to look like work that could move directly into team workflows."
          }
        ]
      },
      {
        title: "Failure Modes and Tradeoffs",
        kind: "cards",
        items: [
          {
            title: "Decomposition granularity is easy to get wrong",
            description:
              "If the tasks are too coarse, the plan stays fuzzy. If they are too fine, the output becomes noisy and harder to execute than the original goal."
          },
          {
            title: "Workload estimation is inherently imperfect",
            description:
              "Even with strong team context, capacity is a moving target. Planning logic can narrow uncertainty, but it cannot remove it."
          },
          {
            title: "Automated assignments can lose trust quickly",
            description:
              "The moment ownership suggestions feel detached from team reality, the model stops being a copilot and starts feeling like an unhelpful scheduler."
          },
          {
            title: "Constraint quality determines output quality",
            description:
              "If the team context is stale or incomplete, the system can still produce coherent plans that are wrong in the exact ways that matter most."
          }
        ]
      },
      {
        title: "What Changed",
        kind: "prose",
        paragraphs: [
          "Contour makes sprint planning feel less like a blank page and more like a structured editing task. Teams start with a decomposed draft, clearer priorities, and assignment suggestions that already account for who can realistically take what on.",
          "The practical outcome is better planning structure with less breakdown overhead. Instead of spending most of the session turning goals into work, the team can spend more of it refining tradeoffs and committing to execution."
        ]
      },
      {
        title: "What I'd Improve Next",
        kind: "cards",
        items: [
          {
            title: "Historical effort calibration",
            description:
              "I would connect the planner to prior sprint outcomes so workload estimation gets grounded in how the team actually delivered, not just how the work was described."
          },
          {
            title: "Scenario comparison",
            description:
              "The next version should let teams compare multiple planning strategies, such as speed-first versus risk-first, before they lock in a sprint shape."
          },
          {
            title: "Closed-loop feedback",
            description:
              "I want the system to learn from post-sprint adjustments, scope creep, and reassignment patterns so the planner improves from real team behavior over time."
          }
        ]
      }
    ]
  },
  {
    slug: "efficient-diffusion",
    title: "Efficient Diffusion",
    tagline: "Cost-Aware Diffusion Inference",
    summary:
      "I treated Efficient Diffusion as a controlled optimization problem: reduce diffusion inference cost as aggressively as possible without crossing the point where quality, stability, or prompt adherence visibly degrade.",
    year: 2026,
    githubUrl: "https://github.com/Ay2012/adaptive-diffusion-inference",
    metrics: [
      { label: "Efficiency Target", value: "Fewer inference steps" },
      { label: "Quality Bar", value: "Minimal visible drift" }
    ],
    tech: ["Diffusion Models", "Inference Optimization", "Evaluation", "Experimental Design"],
    featured: true,
    sections: [
      {
        title: "The Problem Worth Solving",
        kind: "prose",
        paragraphs: [
          "Diffusion models produce high-quality images, but the inference path is expensive enough that cost and latency become product constraints long before the model runs out of research value.",
          "The real problem is not just speed. It is finding where the system can be compressed without quietly undermining the qualities users actually care about: image fidelity, output stability, and prompt adherence."
        ]
      },
      {
        title: "Why a Simpler Version Breaks",
        kind: "prose",
        paragraphs: [
          "The obvious optimization is to cut the number of sampling steps. The problem is that blindly doing that often destroys the exact properties that made the model useful in the first place.",
          "Once steps get too low, image quality collapses, outputs become less stable, and fine-grained control starts to disappear. A benchmark that celebrates speed while ignoring those degradations is not an optimization win. It is a measurement failure."
        ]
      },
      {
        title: "How I Framed the System",
        kind: "prose",
        paragraphs: [
          "I framed this work as a controlled optimization problem, not a speed hack. That meant every efficiency claim had to stay tied to a quality claim, and every quality claim had to be tested against a known baseline.",
          "Instead of asking how to make diffusion faster in the abstract, I asked where the sweet spot actually sits: the point where the pipeline gets materially cheaper while perceptual quality and controllability still hold up under comparison."
        ]
      },
      {
        title: "Core Architecture",
        kind: "cards",
        items: [
          {
            title: "Inference Pipeline",
            description:
              "Generates the baseline outputs and the compressed variants under controlled conditions so comparisons stay tied to the same prompt and model setup."
          },
          {
            title: "Step-Scheduling Logic",
            description:
              "Adjusts the number and pattern of denoising steps to test where cost can be removed without introducing visible instability."
          },
          {
            title: "Evaluation Loop",
            description:
              "Measures the effect of each schedule choice on speed, output consistency, and qualitative degradation instead of treating runtime alone as success."
          },
          {
            title: "Comparison Framework",
            description:
              "Puts baseline and reduced-step generations side by side so the tradeoff between efficiency and output quality is inspectable rather than assumed."
          }
        ]
      },
      {
        title: "Critical Flow",
        kind: "steps",
        items: [
          {
            title: "Baseline generation",
            description:
              "Start with a reference image produced under the full or accepted sampling configuration so every optimization has something honest to compare against."
          },
          {
            title: "Step reduction",
            description:
              "Lower the step count in controlled increments or schedules instead of making one aggressive cut and calling the result representative."
          },
          {
            title: "Output comparison",
            description:
              "Compare the reduced-step outputs against the baseline for perceptual quality, prompt adherence, and stability across prompts."
          },
          {
            title: "Degradation measurement",
            description:
              "Identify where visual drift, instability, or controllability loss starts to outweigh the performance gains and mark that boundary as the useful operating limit."
          }
        ]
      },
      {
        title: "The Decisions That Shaped the Build",
        kind: "cards",
        items: [
          {
            title: "Benchmark against a fixed baseline",
            description:
              "I wanted optimization claims to stay anchored, so every reduced-step run had to be compared against a stable reference instead of a moving target."
          },
          {
            title: "Treat quality and speed as a joint metric",
            description:
              "A faster pipeline is only better if the output still clears the user-visible quality bar, so I never separated runtime wins from degradation analysis."
          },
          {
            title: "Prefer reproducible sweeps over anecdotes",
            description:
              "Single prompt wins are easy to overstate. The build is much more useful when the evaluation loop makes it hard to confuse luck with a pattern."
          },
          {
            title: "Optimize for the usable boundary",
            description:
              "I was not chasing the absolute minimum number of steps. I was chasing the lowest cost that still preserves the behavior people notice."
          }
        ]
      },
      {
        title: "Failure Modes and Tradeoffs",
        kind: "cards",
        items: [
          {
            title: "Quality collapse can be abrupt",
            description:
              "The degradation curve is not always gentle. Some schedules hold up for a while and then fail hard once the step budget crosses a threshold."
          },
          {
            title: "Instability makes wins look larger than they are",
            description:
              "If the reduced pipeline becomes inconsistent across prompts or seeds, an isolated strong sample can hide a broader reliability problem."
          },
          {
            title: "Fine-grained controllability can disappear first",
            description:
              "Even before the image looks obviously worse, prompt adherence and subtle composition control can degrade enough to reduce the model's practical usefulness."
          },
          {
            title: "Speed benchmarks can mislead",
            description:
              "It is easy to report runtime gains without normalizing for hardware, batch setup, or evaluation quality. That makes experimental discipline part of the engineering work."
          }
        ]
      },
      {
        title: "What Changed",
        kind: "prose",
        paragraphs: [
          "The most useful result was identifying the operating region where inference can be compressed without perceptible quality loss on the prompts I cared about most. That turns efficiency work from guesswork into something I can reason about and extend.",
          "Just as importantly, the project made the tradeoff boundary visible. Instead of asking whether fewer steps are better in general, I can point to where the savings remain real and where the degradation starts to outweigh the gain."
        ]
      },
      {
        title: "What I'd Improve Next",
        kind: "cards",
        items: [
          {
            title: "Broader prompt coverage",
            description:
              "I would expand the evaluation set to include more composition types, style variation, and edge-case prompts so the sweet spot is not defined by a narrow slice of behavior."
          },
          {
            title: "Hardware-normalized benchmarking",
            description:
              "The next step is tighter measurement across environments so runtime claims remain honest when the serving context changes."
          },
          {
            title: "Adaptive schedules",
            description:
              "I would explore per-prompt or per-image step allocation so the system spends compute where it matters most instead of applying one static schedule everywhere."
          }
        ]
      }
    ]
  }
];
