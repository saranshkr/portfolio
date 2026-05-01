import { FadeIn } from "@/components/FadeIn";
import { JourneyVisual } from "@/components/JourneyVisual";
import { SectionHeading } from "@/components/SectionHeading";
import {
  capabilityMap,
  journeyCurrentWork,
  journeyConnectorRows,
  journeyVisualItems
} from "@/data/journey";

export default function JourneyPage() {
  return (
    <div className="section-stack">
      <section className="section-shell pb-0">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="My Journey"
              title="A progression from technical foundations to production-scale AI systems."
              description="This page traces how my work evolved, from modeling and experimentation into data products, distributed systems, and more operator-aware ML...."
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container">
          <JourneyVisual
            items={journeyVisualItems}
            connectorRows={journeyConnectorRows}
            currentWork={journeyCurrentWork}
          />
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container section-stack">
          <FadeIn>
            <SectionHeading
              eyebrow="Capability Map"
              title="Skills that compound in production."
              description="The emphasis here is on strengths that grow together in production: platform thinking, applied ML, decision systems, and disciplined delivery."
            />
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {capabilityMap.map((group, index) => (
              <FadeIn key={group.label} delay={index * 0.05}>
                <div className="surface-card h-full px-6 py-5 md:px-7 md:py-6">
                  <div className="space-y-4">
                    <div className="eyebrow">{group.label}</div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="tag-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
