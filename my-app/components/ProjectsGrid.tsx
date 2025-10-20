"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from "react";
import type { ProjectDetail } from "../data/projects";
import { caseStudies } from "../data/caseStudies";

type ProjectsGridProps = {
  projects: ProjectDetail[];
  comparison: string[];
  onToggleComparison: (slug: string) => void;
};

export default function ProjectsGrid({ projects, comparison, onToggleComparison }: ProjectsGridProps) {
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      prefersReducedMotion.current = mediaQuery.matches;
    };
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion.current) return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const percentX = offsetX / rect.width;
    const percentY = offsetY / rect.height;
    const tiltX = (0.5 - percentY) * 6;
    const tiltY = (percentX - 0.5) * 6;
    card.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
    card.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
    card.style.setProperty("--lift", "-6px");
    card.style.setProperty("--glow-opacity", "0.6");
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--lift", "0px");
    card.style.setProperty("--glow-opacity", "0");
  };

  if (!projects.length) {
    return (
      <div className="projects-grid projects-grid--empty" data-reveal>
        <p className="text-sm text-[color:var(--foreground-muted)]">
          No projects match the current filters. Try clearing search terms or selecting different tags.
        </p>
      </div>
    );
  }

  return (
    <div className="projects-grid" role="list">
      {projects.map((project) => {
        const caseStudy = caseStudies[project.slug];
        const focusAreas = caseStudy?.focusAreas ?? project.tags.slice(0, 3);
        const metric =
          caseStudy?.highlightMetric ??
          project.results?.[0] ?? { label: "Focus", value: project.tags[0] ?? "Project" };
        const isComparing = comparison.includes(project.slug);
        const heroMedia = caseStudy?.heroMedia;

        return (
          <article
            key={project.slug}
            className="projects-grid__card"
            role="listitem"
            data-reveal
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            <div className="projects-grid__media">
              {heroMedia ? (
                <Image
                  src={heroMedia.src}
                  alt={heroMedia.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 360px"
                  className="projects-grid__image"
                />
              ) : (
                <div className="projects-grid__media-placeholder">
                  <span className="projects-grid__media-text">Case study coming soon</span>
                </div>
              )}
              <div className="projects-grid__focus">
                {focusAreas.map((area) => (
                  <span key={area} className="projects-grid__focus-chip">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="projects-grid__body">
              <div className="projects-grid__header">
                <h3 className="projects-grid__title">{project.title}</h3>
                <button
                  type="button"
                  className={`projects-grid__compare ${isComparing ? "projects-grid__compare--active" : ""}`}
                  onClick={() => onToggleComparison(project.slug)}
                  aria-pressed={isComparing}
                >
                  {isComparing ? "Selected" : "Compare"}
                </button>
              </div>
              <p className="projects-grid__summary">{project.summary}</p>
              <div className="projects-grid__metric">
                <p className="projects-grid__metric-label">{metric.label}</p>
                <p className="projects-grid__metric-value">{metric.value}</p>
              </div>
            </div>

            <div className="projects-grid__footer">
              <div className="projects-grid__tags">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="projects-grid__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/projects/${project.slug}`} className="projects-grid__cta">
                View Case Study
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
