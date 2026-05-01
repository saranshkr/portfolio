import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FadeIn } from "@/components/FadeIn";
import { MetricBadge } from "@/components/MetricBadge";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies } from "@/data/case-studies";
import type { CaseStudySection } from "@/data/types";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);

  if (!study) {
    return {};
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.summary
  };
}

function renderSectionContent(section: CaseStudySection) {
  if (section.kind === "prose") {
    return (
      <div className="mt-8 grid gap-4">
        {section.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="max-w-3xl text-sm leading-7 text-muted md:text-base"
          >
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  if (section.kind === "cards") {
    return (
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {section.items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border/50 bg-surfaceAlt/70 px-5 py-5 shadow-soft"
          >
            <div className="space-y-3">
              <h3 className="text-xl leading-tight">{item.title}</h3>
              <p className="text-sm leading-7 text-muted md:text-base">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-4">
      {section.items.map((item, index) => (
        <div
          key={item.title}
          className="flex gap-4 rounded-2xl border border-border/50 bg-surfaceAlt/70 px-5 py-5 shadow-soft"
        >
          <div className="brand-soft flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-mono text-sm font-semibold text-accent">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl leading-tight">{item.title}</h3>
            <p className="text-sm leading-7 text-muted md:text-base">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="section-stack">
      <section className="section-shell">
        <div className="container section-stack">
          <FadeIn>
            <div className="surface-card overflow-hidden px-7 py-6 md:px-9 md:py-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="eyebrow">Case Study / {study.title}</div>
                  <div className="space-y-3">
                    <h1 className="page-title">{study.title}</h1>
                    <p className="brand-gradient-text max-w-3xl text-2xl leading-tight md:text-[2rem]">
                      {study.tagline}
                    </p>
                    <p className="max-w-3xl text-base leading-7 text-muted">
                      {study.summary}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((item) => (
                    <span key={item} className="tag-chip">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {study.metrics.map((metric) => (
                    <MetricBadge key={metric.label} metric={metric} />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {study.sections.map((section, index) => (
        <section
          key={section.title}
          className={`section-shell ${index === study.sections.length - 1 ? "pt-0" : ""}`}
        >
          <div className="container">
            <FadeIn>
              <div className="surface-card px-7 py-6 md:px-9 md:py-8">
                <SectionHeading
                  eyebrow={`Section ${String(index + 1).padStart(2, "0")}`}
                  title={section.title}
                />
                {renderSectionContent(section)}
              </div>
            </FadeIn>
          </div>
        </section>
      ))}
    </div>
  );
}
