import Image from "next/image";
import Link from "next/link";
import { caseStudyList } from "@/data/work/caseStudies";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Badge } from "../shared/Badge";
import { Button } from "../shared/Button";

export function CaseStudyShowcase() {
  return (
    <AnimatedSection className="mt-16 space-y-8 rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
      <header className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Case Studies</p>
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">Deep dives into healthcare AI deployments</h2>
          <p className="mt-2 max-w-3xl text-sm text-[var(--muted)] leading-relaxed">
            Explore the methodology, metrics, and governance playbooks powering imaging AI, agentic workflows, and analytics programmes.
          </p>
        </div>
        <Button href="/projects" variant="outline">
          Explore all projects
        </Button>
      </header>
      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudyList.map((study) => (
          <article
            key={study.slug}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/85 shadow-card transition hover:-translate-y-1 hover:border-[var(--border-accent)]"
          >
            {study.heroImage ? (
              <div className="relative h-48 w-full">
                <Image
                  src={study.heroImage}
                  alt={study.heroAlt ?? study.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ) : null}
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="neutral">{study.category}</Badge>
                <div className="flex flex-wrap gap-2">
                  {study.techStack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{study.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{study.description}</p>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>
                  <strong>Problem</strong>: {study.overview.problem}
                </li>
                <li>
                  <strong>Role</strong>: {study.overview.role}
                </li>
                <li>
                  <strong>Timeline</strong>: {study.overview.timeline}
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                {study.techStack.slice(0, 6).map((tech) => (
                  <Badge key={`${study.slug}-${tech}`} variant="neutral">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-2 text-xs text-[var(--muted)]">
                {study.highlights?.slice(0, 3).map((highlight) => (
                  <div key={highlight.metric} className="flex items-center justify-between">
                    <span>{highlight.metric}</span>
                    <span className="font-semibold text-[var(--accent)]">{highlight.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-3">
                <Button href={`/work/${study.slug}`} variant="primary" className="w-full justify-center">
                  Read the case study
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
