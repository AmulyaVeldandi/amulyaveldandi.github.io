"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { experienceTimeline } from "@/data/work/experience";
import type { ExperienceCategory } from "@/lib/content-types";
import { Badge } from "../shared/Badge";
import { AnimatedSection } from "../shared/AnimatedSection";

const categoryStyles: Record<ExperienceCategory, string> = {
  Clinical: "from-sky-400/40 to-sky-500/10",
  Research: "from-purple-400/40 to-purple-500/10",
  "Data Science": "from-emerald-400/40 to-emerald-500/10",
  Product: "from-amber-400/40 to-amber-500/10",
  Leadership: "from-rose-400/40 to-rose-500/10",
};

export function ExperienceTimeline() {
  const [expanded, setExpanded] = useState<string | null>(experienceTimeline[0]?.id ?? null);

  return (
    <AnimatedSection
      id="experience"
      data-nav-section
      className="space-y-10 lg:space-y-12 rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-6 backdrop-blur sm:p-10 lg:p-12"
    >
      <header className="space-y-2">
        <p className="text-fluid-xs uppercase tracking-[0.35em] text-[var(--muted)]">Professional Journey</p>
        <h1 className="text-fluid-3xl font-semibold text-[var(--foreground)]">Teams that trusted my clinical + data lens</h1>
        <p className="max-w-prose text-fluid-sm text-[var(--muted)]">
          Click on each milestone to see detailed achievements, impact metrics, and the clinical or operational context guiding the work. Every engagement blends bedside empathy with reproducible engineering.
        </p>
      </header>
      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--border-muted)] to-transparent lg:block" />
        <ol className="space-y-6 lg:space-y-12">
          {experienceTimeline.map((item, index) => {
            const isExpanded = expanded === item.id;
            const accent = categoryStyles[item.category] ?? "from-zinc-200/30 to-zinc-400/10";
            const side = index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16";
            return (
              <li key={item.id} className="relative">
                <button
                  type="button"
                  onClick={() => setExpanded((current) => (current === item.id ? null : item.id))}
                  className={clsx(
                    "group grid w-full gap-4 rounded-3xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/85 p-6 text-left shadow-card transition hover:border-[var(--border-accent)] lg:grid-cols-2 lg:gap-8",
                    side,
                  )}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <Badge variant="neutral">{item.period}</Badge>
                      <span className="text-fluid-xs uppercase tracking-[0.35em] text-[var(--muted)]">{item.location}</span>
                    </div>
                    <div>
                      <p className="text-fluid-sm uppercase tracking-[0.35em] text-[var(--muted)]">{item.category}</p>
                      <h2 className="mt-2 text-fluid-xl font-semibold text-[var(--foreground)]">{item.title}</h2>
                      <p className="text-fluid-sm text-[var(--muted)]">{item.organisation}</p>
                    </div>
                    <p className="text-fluid-sm text-[var(--muted)]">{item.headline}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement) => (
                        <Badge key={achievement.label} variant="outline">
                          {achievement.metric}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    layout
                    className="relative overflow-hidden rounded-3xl border border-transparent bg-gradient-to-br p-6"
                    initial={false}
                    animate={{
                      opacity: isExpanded ? 1 : 0.4,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundImage: `linear-gradient(135deg, var(--surface) 0%, transparent 100%)` }}
                  >
                    <div className={clsx("absolute inset-0 rounded-3xl bg-gradient-to-br", accent)} aria-hidden />
                    <div className="relative space-y-3 text-sm text-[var(--foreground)]">
                      <p>{item.description}</p>
                      <motion.ul
                        initial={false}
                        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="space-y-2 overflow-hidden"
                      >
                        {item.achievements.map((achievement) => (
                          <li key={achievement.label} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.35em] text-white/80">
                            {achievement.label}: {achievement.metric}
                          </li>
                        ))}
                      </motion.ul>
                    </div>
                  </motion.div>
                </button>
                <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border-muted)] bg-[var(--surface-elevated)] lg:block" />
              </li>
            );
          })}
        </ol>
      </div>
    </AnimatedSection>
  );
}
