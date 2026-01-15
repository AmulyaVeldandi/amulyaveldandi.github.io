import Image from "next/image";
import Link from "next/link";
import { getCaseStudies } from "@/data/work-items";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Badge } from "../shared/Badge";
import { Button } from "../shared/Button";

export function CaseStudyShowcase() {
  const caseStudies = getCaseStudies();

  return (
    <AnimatedSection className="space-y-5">
      <header className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <Badge variant="neutral">Case Studies</Badge>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mt-2 sm:text-3xl lg:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-1.5 max-w-3xl text-sm text-[var(--muted)] leading-relaxed sm:text-base">
              Deep dives into healthcare AI deployments with methodology, metrics, and governance playbooks.
            </p>
          </div>
          <Button href="/projects" variant="outline" className="shrink-0">
            View All Projects →
          </Button>
        </div>
      </header>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className="group block h-full"
          >
            <div className="h-full border border-[var(--border-muted)] rounded-lg bg-[var(--surface)] overflow-hidden transition-all hover:border-[var(--accent)] hover:shadow-md">
              {/* Cover Image */}
              {study.heroImage && (
                <div className="relative h-48 w-full bg-[var(--surface-muted)] overflow-hidden">
                  <Image
                    src={study.heroImage}
                    alt={study.heroAlt ?? study.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-4 space-y-3 sm:p-5 lg:p-6 lg:space-y-4">
                {/* Category & Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {study.category && (
                    <Badge variant="neutral">{study.category}</Badge>
                  )}
                  {study.techStack.slice(0, 2).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-[0.65rem]">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-3">
                  {study.description}
                </p>

                {/* Overview */}
                {study.overview && (
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-[var(--foreground)] shrink-0">Role:</span>
                      <span className="text-[var(--muted)]">{study.overview.role}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-[var(--foreground)] shrink-0">Timeline:</span>
                      <span className="text-[var(--muted)]">{study.overview.timeline}</span>
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {study.highlights && study.highlights.length > 0 && (
                  <div className="pt-3 border-t border-[var(--border-muted)] space-y-2">
                    {study.highlights.slice(0, 3).map((highlight) => (
                      <div
                        key={highlight.metric}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="text-[var(--muted)]">{highlight.metric}</span>
                        <span className="font-semibold text-[var(--accent)]">{highlight.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Read More */}
                <div className="pt-2">
                  <span className="text-sm font-medium text-[var(--accent)] group-hover:underline inline-flex items-center gap-1">
                    Read Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </AnimatedSection>
  );
}