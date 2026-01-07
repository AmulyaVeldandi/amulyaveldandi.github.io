"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/data/work-items";
import type { WorkItem } from "@/lib/content-types";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Badge } from "../shared/Badge";
import { Button } from "../shared/Button";

const allProjects = getProjects();
const categories = Array.from(new Set(allProjects.flatMap((project) => project.tags.map((tag) => tag.category))));
const techStacks = Array.from(new Set(allProjects.flatMap((project) => project.techStack)));

export function ProjectsExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState<string>("All");

  const filtered = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.tags.some((tag) => tag.category === selectedCategory);
      const matchesTech = selectedTech === "All" || project.techStack.includes(selectedTech);
      const matchesSearch = search.trim().length === 0
        || project.title.toLowerCase().includes(search.toLowerCase())
        || project.summary.toLowerCase().includes(search.toLowerCase())
        || project.tags.some((tag) => tag.label.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [search, selectedCategory, selectedTech]);

  return (
    <div className="space-y-12">
      <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Projects</p>
          <h1 className="text-3xl font-semibold text-[var(--foreground)]">Academic, clinical, and agentic builds</h1>
          <p className="max-w-3xl text-sm text-[var(--muted)] leading-relaxed">
            Filter by domain, tech stack, or search keywords to explore projects spanning imaging AI, agentic workflows, analytics, and research.
          </p>
        </header>
        <div className="mt-6 grid gap-4 lg:grid-cols-4">
          <div className="col-span-2 flex flex-wrap gap-2">
            <FilterButton label="All" active={selectedCategory === "All"} onClick={() => setSelectedCategory("All")} />
            {categories.map((category) => (
              <FilterButton
                key={category}
                label={category}
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </div>
          <select
            value={selectedTech}
            onChange={(event) => setSelectedTech(event.target.value)}
            className="h-12 rounded-full border border-[var(--border-muted)] bg-[var(--surface)]/90 px-4 text-sm text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-accent)]"
          >
            <option value="All">All technologies</option>
            {techStacks.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by title, summary, tag"
            className="h-12 rounded-full border border-[var(--border-muted)] bg-[var(--surface)]/90 px-4 text-sm text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-accent)]"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="grid gap-6 lg:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-[var(--border-muted)] bg-[var(--surface)]/90 p-10 text-sm text-[var(--muted)] lg:col-span-2">
            No projects match the current filters. Try adjusting the filters or clearing the search term.
          </div>
        ) : null}
      </AnimatedSection>

      <GithubIntegration />
    </div>
  );
}

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] transition ${
        active
          ? "border-[var(--border-accent)] bg-[var(--surface-elevated)] text-[var(--foreground)]"
          : "border-[var(--border-muted)] text-[var(--muted)] hover:text-[var(--foreground)]"
      }`}
    >
      {label}
    </button>
  );
}

function ProjectCard({ project }: { project: WorkItem }) {
  // All projects now use /work route
  const url = `/work/${project.slug}`;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border-muted)] bg-[var(--surface)]/90 shadow-card transition hover:-translate-y-1 hover:border-[var(--border-accent)]">
      <div className="relative h-56 w-full">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge variant="neutral">{new Date(project.published).getFullYear()}</Badge>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag.label} variant="outline">
                {tag.label}
              </Badge>
            ))}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-[var(--foreground)]">{project.title}</h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed">{project.summary}</p>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
          {project.techStack.slice(0, 6).map((tech) => (
            <Badge key={tech} variant="neutral">
              {tech}
            </Badge>
          ))}
        </div>
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-2">
            {project.metrics.map((metric) => (
              <div key={`${project.slug}-${metric.label}`} className="rounded-2xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/85 px-4 py-3 text-sm">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">{metric.label}</p>
                <p className="mt-1 font-semibold text-[var(--accent)]">{metric.value}</p>
              </div>
            ))}
          </div>
        )}
        <div className="mt-auto flex items-center justify-between pt-2 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
          {project.github ? (
            <Link
              href={project.github}
              className="text-[var(--accent)] transition hover:text-[var(--accent-foreground)]"
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </Link>
          ) : (
            <span />
          )}
          <Button href={url} variant="primary" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}

function GithubIntegration() {
  return (
    <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 text-center backdrop-blur lg:p-12">
      <h2 className="text-2xl font-semibold text-[var(--foreground)]">Live GitHub activity</h2>
      <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
        Integrate the GitHub GraphQL API or the REST commits endpoint here to surface real-time repo insights—recent commits, deployment pipelines, and contributor stats.
      </p>
      <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-[var(--border-accent)] bg-[var(--surface-elevated)]/90 px-6 py-3 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
        <span>Workflow idea</span>
        <span className="font-semibold text-[var(--accent)]">Use Next.js API route + CRON to cache GitHub metrics</span>
      </div>
    </AnimatedSection>
  );
}
