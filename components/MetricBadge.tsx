import type { Metric } from "@/data/types";

type MetricBadgeProps = {
  metric: Metric;
};

export function MetricBadge({ metric }: MetricBadgeProps) {
  return (
    <div className="brand-soft rounded-2xl px-5 py-3.5">
      <div className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
        {metric.label}
      </div>
      <div className="mt-2 text-lg font-semibold text-text">{metric.value}</div>
    </div>
  );
}
