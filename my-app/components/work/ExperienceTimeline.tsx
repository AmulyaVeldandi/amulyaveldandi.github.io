"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { experienceTimeline } from "@/data/work/experience";
import type { ExperienceCategory } from "@/lib/content-types";
import { Badge } from "../shared/Badge";
import { AnimatedSection } from "../shared/AnimatedSection";

const categoryColors: Record<ExperienceCategory, string> = {
  Clinical: "bg-blue-50 text-blue-700 border-blue-200",
  Research: "bg-purple-50 text-purple-700 border-purple-200",
  "Data Science": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Product: "bg-amber-50 text-amber-700 border-amber-200",
  Leadership: "bg-rose-50 text-rose-700 border-rose-200",
};

const categoryColorsDark: Record<ExperienceCategory, string> = {
  Clinical: "dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800",
  Research: "dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800",
  "Data Science": "dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800",
  Product: "dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800",
  Leadership: "dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800",
};

export function ExperienceTimeline() {
  const [expanded, setExpanded] = useState<string | null>(experienceTimeline[0]?.id ?? null);

  return (
    <AnimatedSection id="experience" data-nav-section className="space-y-6">
      <header className="space-y-2">
        <div className="flex items-center gap-3">
          <Badge variant="neutral">Experience</Badge>
          <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
            {experienceTimeline.length} Roles
          </span>
        </div>
        <h1 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl lg:text-4xl">
          Professional Journey
        </h1>
        <p className="max-w-3xl text-sm text-[var(--muted)] leading-relaxed sm:text-base">
          Teams that trusted my clinical + data lens. Click each role to expand details.
        </p>
      </header>

      <div className="space-y-3">
        {experienceTimeline.map((item) => {
          const isExpanded = expanded === item.id;
          const colorClass = categoryColors[item.category] ?? "bg-gray-50 text-gray-700 border-gray-200";
          const colorClassDark = categoryColorsDark[item.category] ?? "dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800";

          return (
            <motion.div
              key={item.id}
              layout
              className="border border-[var(--border-muted)] rounded-lg bg-[var(--surface)] overflow-hidden transition-all hover:border-[var(--accent)] hover:shadow-sm"
            >
              <button
                type="button"
                onClick={() => setExpanded((current) => (current === item.id ? null : item.id))}
                className="w-full text-left p-4 space-y-3 sm:p-5 lg:p-6 lg:space-y-4"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={clsx(
                        "text-xs font-medium px-2 py-1 rounded border",
                        colorClass,
                        colorClassDark
                      )}>
                        {item.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-[var(--foreground)] mb-1">
                      {item.title}
                    </h2>
                    <p className="text-sm text-[var(--muted)]">{item.organisation}</p>
                  </div>
                  <div className="text-right text-sm text-[var(--muted)]">
                    <div className="font-medium">{item.period}</div>
                    <div>{item.location}</div>
                  </div>
                </div>

                {/* Headline */}
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {item.headline}
                </p>

                {/* Key Metrics */}
                <div className="flex flex-wrap gap-2">
                  {item.achievements.map((achievement) => (
                    <span
                      key={achievement.label}
                      className="text-xs px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--muted)] font-medium"
                    >
                      {achievement.metric}
                    </span>
                  ))}
                </div>

                {/* Expand indicator */}
                <div className="flex items-center justify-center pt-2">
                  <svg
                    className={clsx(
                      "w-5 h-5 text-[var(--muted)] transition-transform",
                      isExpanded && "rotate-180"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Expanded Content */}
              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? "auto" : 0,
                  opacity: isExpanded ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 space-y-3 border-t border-[var(--border-muted)] pt-3 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6 lg:space-y-4 lg:pt-4">
                  <p className="text-sm text-[var(--foreground)] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
                      Key Achievements
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {item.achievements.map((achievement) => (
                        <div
                          key={achievement.label}
                          className="p-3 rounded border border-[var(--border-muted)] bg-[var(--surface-muted)]"
                        >
                          <div className="text-lg font-semibold text-[var(--accent)] mb-1">
                            {achievement.metric}
                          </div>
                          <div className="text-xs text-[var(--muted)]">
                            {achievement.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}