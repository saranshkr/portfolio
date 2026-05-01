import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { CaseStudyCard } from "@/components/CaseStudyCard";
import { FadeIn } from "@/components/FadeIn";
import { HeroSignalField } from "@/components/HeroSignalField";
import { SectionHeading } from "@/components/SectionHeading";
import { homeSections, profile } from "@/data/site";
import { caseStudies } from "@/data/case-studies";

const featuredStudies = caseStudies.filter((study) => study.featured);

export default function HomePage() {
  return (
    <div className="section-stack">
      <section className="section-shell">
        <div className="container">
          <div className="mx-auto max-w-[76rem] space-y-5 xl:space-y-6">
            <FadeIn className="surface-card overflow-hidden px-7 py-10 md:px-9 md:py-12 lg:px-11">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(18rem,0.72fr)] lg:items-center xl:grid-cols-[minmax(0,0.94fr)_minmax(20rem,0.78fr)] xl:gap-10">
                <div className="space-y-8">
                  <div className="space-y-5">
                    <div className="eyebrow">AI/ML Systems Portfolio</div>
                    <div className="space-y-5 border-l border-accent/20 pl-5 md:pl-6">
                      <div className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-accent">
                        Data to Decisions
                      </div>
                      <div className="space-y-3">
                        <h1 className="max-w-3xl text-[2.65rem] font-display leading-[1.02] tracking-[-0.035em] text-text md:text-[3.4rem]">
                          {profile.name}
                        </h1>
                        <p className="brand-gradient-text max-w-2xl text-2xl leading-tight md:text-[2rem]">
                          {profile.role}
                        </p>
                      </div>
                      <p className="max-w-2xl text-base leading-8 text-muted md:text-lg">
                        {profile.intro}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border/50 pt-5">
                    <Link
                      href="/case-studies"
                      className="group inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted hover:text-accent"
                    >
                      View Case Studies
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/journey"
                      className="group inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted hover:text-accent"
                    >
                      Read My Journey
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <HeroSignalField />
              </div>
            </FadeIn>

            <div className="grid gap-4 md:grid-cols-3">
              {profile.highlights.map((highlight, index) => (
                <FadeIn
                  key={highlight.label}
                  delay={0.08 + index * 0.05}
                  className="h-full"
                >
                  <div className="surface-card h-full px-6 py-5 md:px-7">
                    <div className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                      {highlight.label}
                    </div>
                    <div className="mt-3 text-2xl font-display text-text">
                      {highlight.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {highlight.context}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container section-stack">
          <FadeIn>
            <SectionHeading
              eyebrow="About"
              title="Engineering machine learning like an operating system, not a one-off model."
              description={homeSections.about}
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-shell">
        <div className="container section-stack">
          <FadeIn>
            <SectionHeading
              eyebrow="Design Philosophy"
              title="A systems-oriented approach to shipping reliable intelligence."
              description="Every project is framed around observability, interfaces, operator trust, and measurable outcomes."
            />
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2 xl:gap-6">
            {homeSections.designPhilosophy.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <FadeIn key={pillar.title} delay={index * 0.08}>
                  <article className="surface-card h-full px-6 py-5 md:px-7 md:py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div className="eyebrow">0{index + 1}</div>
                        <h3 className="text-2xl">{pillar.title}</h3>
                        <p className="max-w-md text-sm leading-7 text-muted md:text-base">
                          {pillar.description}
                        </p>
                      </div>
                      <div className="brand-soft rounded-2xl p-3 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container section-stack">
          <FadeIn>
            <SectionHeading
              eyebrow="Featured Work"
              title="Three case studies on the systems I'm building now."
              description="These stories focus on system framing, architecture, critical flows, and the tradeoffs that shaped each build."
            />
          </FadeIn>
          <div className="grid gap-4 xl:grid-cols-3 xl:gap-6">
            {featuredStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} delay={index * 0.08} />
            ))}
          </div>
          <FadeIn>
            <div className="flex items-center gap-2 text-sm text-muted">
              <Sparkles className="h-4 w-4 text-accent" />
              Selected work across data platforms, intelligent interfaces, and applied AI systems.
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
