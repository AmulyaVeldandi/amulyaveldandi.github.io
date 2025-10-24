import Link from "next/link";
import { blogPosts } from "@/data/blog/posts";
import { getFeaturedProjects } from "@/data/projects";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Badge } from "../shared/Badge";
import { Button } from "../shared/Button";
import { Card } from "../shared/Card";

export function LatestWork() {
  const featuredProjects = getFeaturedProjects(3);
  const latestBlog = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )[0];

  return (
    <AnimatedSection
      id="latest"
      data-nav-section
      className="mt-24 grid gap-8 lg:grid-cols-[2.1fr,1fr]"
    >
      <div className="space-y-6">
        <header className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Latest Work</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
              Case studies with measurable clinical impact
            </h2>
          </div>
          <Button href="/projects" variant="outline" size="sm">
            All Projects
          </Button>
        </header>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="p-5 sm:col-span-1">
              <div className="flex items-center justify-between gap-2 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                <span>{new Date(project.published).getFullYear()}</span>
                {project.caseStudySlug ? (
                  <Badge variant="outline" className="text-[0.6rem]">
                    Case Study
                  </Badge>
                ) : null}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{project.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{project.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag.label} variant="neutral">
                    {tag.label}
                  </Badge>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                <span>{project.metrics[0]?.value ?? ""}</span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-semibold text-[var(--accent)] transition hover:text-[var(--accent-foreground)]"
                >
                  Read →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Card className="flex flex-col justify-between p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Latest Journal</p>
          <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">
            {latestBlog.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{latestBlog.description}</p>
        </div>
        <div className="mt-6 space-y-3">
          <Link
            href={`/blog/${latestBlog.slug}`}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)] transition hover:text-[var(--accent-foreground)]"
          >
            Read the story →
          </Link>
          <div className="flex flex-wrap gap-2">
            {latestBlog.tags.map((tag) => (
              <Badge key={tag} variant="neutral">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </AnimatedSection>
  );
}
