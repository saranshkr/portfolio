import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesPage() {
  return (
    <section className="section-shell">
      <div className="container section-stack">
        <FadeIn>
          <SectionHeading
            eyebrow="Case Studies"
            title="Three systems, three deeper narratives."
            description="These pages focus on the problem, the system shape, and the tradeoffs that mattered most."
          />
        </FadeIn>
        <div className="grid gap-4 xl:grid-cols-3 xl:gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
