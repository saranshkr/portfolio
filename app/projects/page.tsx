import { FadeIn } from "@/components/FadeIn";
import { ProjectsAccordion } from "@/components/ProjectsAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="section-shell">
      <div className="container section-stack">
        <FadeIn>
          <SectionHeading
            eyebrow="Projects"
            title="A compact index of current work."
            description="A quiet, expandable list of selected projects, with quick metadata up front and a short summary underneath."
          />
        </FadeIn>

        <FadeIn delay={0.06}>
          <ProjectsAccordion projects={projects} />
        </FadeIn>
      </div>
    </section>
  );
}
