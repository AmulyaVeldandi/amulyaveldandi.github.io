"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { skillMatrix } from "@/data/skills";
import { projects } from "@/data/projects";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Badge } from "../shared/Badge";

const projectLookup = new Map(projects.map((project) => [project.slug, project.title]));

export function SkillsGrid() {
  const categories = useMemo(() => Object.keys(skillMatrix), []);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [search, setSearch] = useState("");

  const currentCategory = skillMatrix[activeCategory as keyof typeof skillMatrix];

  const filteredSkills = currentCategory.skills.filter((skill) => {
    if (!search.trim()) return true;
    const haystack = `${skill.name} ${skill.description ?? ""} ${(skill.relatedProjects ?? [])
      .map((id) => projectLookup.get(id) ?? id)
      .join(" ")}`.toLowerCase();
    return haystack.includes(search.toLowerCase());
  });

  return (
    <AnimatedSection
      id="skills"
      data-nav-section
      className="section-spacing space-y-6 lg:space-y-8 rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-4 backdrop-blur sm:p-6 lg:p-8"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-fluid-xs uppercase tracking-[0.35em] text-[var(--muted)]">Skills Matrix</p>
          <h2 className="mt-2 text-fluid-2xl font-semibold text-[var(--foreground)]">Clinical + technical fluency</h2>
          <p className="mt-3 max-w-prose text-fluid-sm text-[var(--muted)]">
            Filters toggle multidisciplinary toolkits—hover to see the projects or deployments that sharpened each capability.
          </p>
        </div>
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search skills"
          className="w-full rounded-2xl border border-[var(--border-muted)] bg-[var(--surface)]/90 px-4 py-3 text-fluid-sm text-[var(--foreground)] shadow-card min-h-tap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-accent)] lg:w-72"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={clsx(
                "rounded-full border px-5 py-2.5 text-fluid-xs font-semibold uppercase tracking-[0.32em] transition min-h-[2.5rem]",
                isActive
                  ? "border-[var(--border-accent)] bg-[var(--surface-elevated)] text-[var(--foreground)]"
                  : "border-[var(--border-muted)] bg-transparent text-[var(--muted)] hover:text-[var(--foreground)]",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="rounded-3xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/85 p-4 shadow-card">
        <p className="text-fluid-sm text-[var(--muted)]">{currentCategory.summary}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {filteredSkills.map((skill) => {
          const related = (skill.relatedProjects ?? []).map((slug) => projectLookup.get(slug) ?? slug);
          return (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-[var(--border-muted)] bg-[var(--surface)]/90 p-4 shadow-card"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-fluid-lg font-semibold text-[var(--foreground)]">{skill.name}</h3>
                <span className="text-fluid-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                  {skill.years} yrs
                </span>
              </div>
              <p className="mt-3 text-fluid-sm text-[var(--muted)]">
                {skill.description ?? "Expertise refined in clinical deployments and research labs."}
              </p>
              <div className="mt-4 h-2 rounded-full bg-[var(--surface-muted)]">
                <motion.div
                  className="h-full rounded-full bg-[var(--accent)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              {related.length ? (
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
                  {related.map((title) => (
                    <Badge key={title} variant="neutral">
                      {title}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </motion.article>
          );
        })}
        {filteredSkills.length === 0 ? (
          <p className="rounded-3xl border border-dashed border-[var(--border-muted)] bg-[var(--surface)]/90 p-4 text-sm text-[var(--muted)] md:col-span-2">
            No skills match &ldquo;{search}&rdquo;. Try another keyword or select a different category.
          </p>
        ) : null}
      </div>
    </AnimatedSection>
  );
}
