"use client";

import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Badge } from "../shared/Badge";

const metricCharts = [
  {
    label: "Scanner Throughput",
    primary: 78,
    caption: "Minutes recovered per day after automating CT attenuation workflows",
    color: "#3b82f6",
  },
  {
    label: "Score Agreement",
    primary: 93,
    caption: "Consistency across multi-site SQ-MRI deployments",
    color: "#8b5cf6",
  },
  {
    label: "Follow-up Turnaround",
    primary: 82,
    caption: "Reduction in backlog after agentic radiology assistant rollout",
    color: "#10b981",
  },
];

export function ImpactMetrics() {
  return (
    <AnimatedSection className="space-y-5">
      <header className="space-y-2">
        <Badge variant="neutral">Impact Metrics</Badge>
        <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl lg:text-4xl">
          Clinical + Operational ROI
        </h2>
        <p className="max-w-3xl text-sm text-[var(--muted)] leading-relaxed sm:text-base">
          Measurable outcomes from recent deployments highlighting throughput, accuracy, and governance wins.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {metricCharts.map((metric) => (
          <div
            key={metric.label}
            className="p-4 border border-[var(--border-muted)] rounded-lg bg-[var(--surface)] hover:border-[var(--accent)] transition-colors sm:p-5 lg:p-6"
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Chart */}
              <div className="h-32 w-32">
                <ResponsiveContainer>
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="100%"
                    barSize={12}
                    data={[{ name: metric.label, value: metric.primary }]}
                    startAngle={180}
                    endAngle={-180}
                  >
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    <RadialBar
                      background={{ fill: "var(--surface-muted)" }}
                      dataKey="value"
                      cornerRadius={8}
                      fill={metric.color}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
              </div>

              {/* Content */}
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-[var(--foreground)]">
                  {metric.primary}%
                </div>
                <div className="text-sm font-semibold text-[var(--foreground)]">
                  {metric.label}
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  {metric.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}