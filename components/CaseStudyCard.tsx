import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/FadeIn";
import { MetricBadge } from "@/components/MetricBadge";
import type { CaseStudy } from "@/data/types";

type CaseStudyCardProps = {
  study: CaseStudy;
  delay?: number;
};

export function CaseStudyCard({ study, delay = 0 }: CaseStudyCardProps) {
  return (
    <FadeIn delay={delay} className="h-full">
      <article className="surface-card flex h-full flex-col justify-between px-6 py-5 md:px-7 md:py-6">
        <div className="space-y-5">
          <div className="space-y-3">
            <div className="eyebrow">{study.tagline}</div>
            <div className="space-y-2">
              <h3 className="text-2xl">{study.title}</h3>
              <p className="text-sm leading-7 text-muted md:text-base">
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

          <div className="grid gap-3 sm:grid-cols-2">
            {study.metrics.map((metric) => (
              <MetricBadge key={metric.label} metric={metric} />
            ))}
          </div>
        </div>

        <Link
          href={`/case-studies/${study.slug}`}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3"
        >
          Read the case study
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </article>
    </FadeIn>
  );
}
