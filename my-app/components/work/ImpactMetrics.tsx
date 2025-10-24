"use client";

import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { AnimatedSection } from "../shared/AnimatedSection";

const metricCharts = [
  {
    label: "Scanner Throughput",
    primary: 78,
    caption: "Minutes recovered per day after automating CT attenuation workflows.",
    color: "#4d8cff",
  },
  {
    label: "Score Agreement",
    primary: 93,
    caption: "Consistency across multi-site SQ-MRI deployments.",
    color: "#9c7dff",
  },
  {
    label: "Follow-up Turnaround",
    primary: 82,
    caption: "Reduction in backlog after agentic radiology assistant rollout.",
    color: "#5bd0c4",
  },
];

export function ImpactMetrics() {
  return (
    <AnimatedSection className="mt-16 rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Impact Metrics</p>
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Clinical + operational ROI</h2>
        <p className="max-w-3xl text-sm text-[var(--muted)] leading-relaxed">
          Benchmarks from recent deployments highlighting measurable throughput, accuracy, and governance wins.
        </p>
      </header>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {metricCharts.map((metric) => (
          <article
            key={metric.label}
            className="flex flex-col items-center gap-4 rounded-3xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/85 p-6 shadow-card"
          >
            <div className="h-40 w-full">
              <ResponsiveContainer>
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="40%"
                  outerRadius="100%"
                  barSize={14}
                  data={[{ name: metric.label, value: metric.primary }]}
                  startAngle={180}
                  endAngle={-180}
                >
                  <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                  <RadialBar
                    background
                    dataKey="value"
                    cornerRadius={16}
                    fill={metric.color}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{metric.primary}%</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{metric.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
