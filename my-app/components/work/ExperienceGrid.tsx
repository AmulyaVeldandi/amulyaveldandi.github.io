import Link from "next/link";
import { experienceRoles } from "@/data/work/experience";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Badge } from "../shared/Badge";
import { Button } from "../shared/Button";

export function ExperienceGrid() {
  return (
    <AnimatedSection className="space-y-8 rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Experience Overview</p>
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Teams that trusted my clinical + data lens</h2>
        <p className="max-w-3xl text-sm text-[var(--muted)] leading-relaxed">
          Every engagement blends bedside empathy with reproducible engineering—from predictive imaging ops to agentic workflows that resolve follow-ups before patients are missed.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-2">
        {experienceRoles.map((role) => (
          <article
            key={role.slug}
            className="flex h-full flex-col gap-5 rounded-3xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/85 p-6 shadow-card transition hover:-translate-y-1 hover:border-[var(--border-accent)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Badge variant="neutral">{role.period}</Badge>
              <span className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">{role.category}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{role.role}</h3>
              <p className="text-sm text-[var(--muted)]">{role.organisation}</p>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">{role.location}</p>
            </div>
            <p className="text-sm leading-relaxed text-[var(--muted)]">{role.summary}</p>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              {role.achievements.map((achievement) => (
                <li key={achievement} className="rounded-2xl border border-[var(--border-muted)]/60 bg-[var(--surface)]/80 px-4 py-2">
                  {achievement}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-3">
              {role.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-[var(--border-muted)] bg-[var(--surface)]/80 px-3 py-3 text-center">
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--muted)]">{metric.label}</p>
                  <p className="mt-1 text-sm font-semibold text-[var(--accent)]">{metric.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              {role.technologies.map((tech) => (
                <Badge key={tech} variant="neutral">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {role.links?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)] transition hover:text-[var(--accent-foreground)]"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="flex justify-center pt-2">
        <Button href="/about/timeline" variant="outline">
          View full timeline
        </Button>
      </div>
    </AnimatedSection>
  );
}
