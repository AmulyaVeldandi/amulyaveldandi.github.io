import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkItem, getAllWorkItems } from "@/data/work-items";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";

type WorkItemPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllWorkItems().map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: WorkItemPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkItem(slug);
  if (!item) return { title: "Work Not Found" };

  return {
    title: `${item.title} | Amulya Veldandi`,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: item.heroImage ? [{ url: item.heroImage, alt: item.heroAlt }] : [],
    },
  };
}

export default async function WorkItemPage({ params }: WorkItemPageProps) {
  const { slug } = await params;
  const item = getWorkItem(slug);

  if (!item) {
    notFound();
  }

  // Check if this is a detailed case study or a simpler project
  const isDetailedCaseStudy = item.type === "case-study" && item.overview && item.challenge && item.approach;

  return (
    <div className="pb-24 space-y-12">
      {/* Hero Section */}
      <AnimatedSection className="space-y-6">
        <div className="flex items-center gap-3">
          <Badge variant="neutral">{item.category || item.type}</Badge>
          {item.overview?.timeline && (
            <span className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">{item.overview.timeline}</span>
          )}
        </div>
        <h1 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl lg:text-6xl">{item.title}</h1>
        <p className="max-w-3xl text-lg text-[var(--muted)] leading-relaxed">{item.description}</p>
        <div className="flex flex-wrap gap-3">
          {item.github && (
            <Button href={item.github} variant="primary" target="_blank" rel="noreferrer">
              View on GitHub
            </Button>
          )}
          {item.demo && (
            <Button href={item.demo} variant="outline" target="_blank" rel="noreferrer">
              View Demo
            </Button>
          )}
          <Button href="/work" variant="outline">
            All Work
          </Button>
        </div>
      </AnimatedSection>

      {/* Hero Image */}
      {item.heroImage && (
        <AnimatedSection className="relative aspect-video w-full overflow-hidden rounded-3xl border border-[var(--border-muted)]">
          <Image src={item.heroImage} alt={item.heroAlt ?? item.title} fill className="object-cover" sizes="100vw" priority />
        </AnimatedSection>
      )}

      {/* Overview - only for detailed case studies */}
      {isDetailedCaseStudy && item.overview && (
        <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">Overview</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-2">Problem</p>
              <p className="text-sm text-[var(--foreground)] leading-relaxed">{item.overview.problem}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-2">Role</p>
              <p className="text-sm text-[var(--foreground)] leading-relaxed">{item.overview.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-2">Timeline</p>
              <p className="text-sm text-[var(--foreground)] leading-relaxed">{item.overview.timeline}</p>
              {item.overview.teamSize && (
                <>
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-2 mt-4">Team</p>
                  <p className="text-sm text-[var(--foreground)] leading-relaxed">{item.overview.teamSize}</p>
                </>
              )}
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Tech Stack */}
      <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
        <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {item.techStack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </AnimatedSection>

      {/* Metrics - for simpler projects */}
      {!isDetailedCaseStudy && item.metrics && item.metrics.length > 0 && (
        <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">Key Metrics</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {item.metrics.map((metric, index) => (
              <div key={index} className="rounded-2xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/85 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-2">{metric.label}</p>
                <p className="text-2xl font-semibold text-[var(--accent)] mb-2">{metric.value}</p>
                {metric.description && (
                  <p className="text-xs text-[var(--muted)] leading-relaxed">{metric.description}</p>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      )}

      {/* Challenge - only for detailed case studies */}
      {isDetailedCaseStudy && item.challenge && (
        <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">{item.challenge.heading}</h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">{item.challenge.body}</p>
          {item.challenge.bullets && (
            <ul className="space-y-3">
              {item.challenge.bullets.map((bullet, index) => (
                <li key={index} className="flex gap-3 text-sm text-[var(--foreground)]">
                  <span className="text-[var(--accent)]">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </AnimatedSection>
      )}

      {/* Approach - only for detailed case studies */}
      {isDetailedCaseStudy && item.approach && (
        <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">{item.approach.heading}</h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">{item.approach.body}</p>
          {item.approach.bullets && (
            <ul className="space-y-3 mb-8">
              {item.approach.bullets.map((bullet, index) => (
                <li key={index} className="flex gap-3 text-sm text-[var(--foreground)]">
                  <span className="text-[var(--accent)]">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          {item.approach.diagram && (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--border-muted)]">
              <Image src={item.approach.diagram} alt="Approach diagram" fill className="object-cover" sizes="100vw" />
            </div>
          )}
        </AnimatedSection>
      )}

      {/* Results - only for detailed case studies */}
      {isDetailedCaseStudy && item.results && item.results.length > 0 && (
        <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">Results</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {item.results.map((result, index) => (
              <div key={index} className="rounded-2xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/85 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-3">{result.metric}</p>
                <div className="mb-2">
                  <p className="text-sm text-[var(--muted)]">
                    Before: <span className="text-[var(--foreground)]">{result.before}</span>
                  </p>
                  <p className="text-sm text-[var(--muted)]">
                    After: <span className="font-semibold text-[var(--accent)]">{result.after}</span>
                  </p>
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed">{result.insight}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      )}

      {/* Impact - only for detailed case studies */}
      {isDetailedCaseStudy && item.impact && item.impact.length > 0 && (
        <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">Impact</h2>
          <ul className="space-y-3">
            {item.impact.map((impactItem, index) => (
              <li key={index} className="flex gap-3 text-sm text-[var(--foreground)]">
                <span className="text-[var(--accent)]">✓</span>
                <span>{impactItem}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      )}

      {/* Deep Dive - only for detailed case studies */}
      {isDetailedCaseStudy && item.deepDive && item.deepDive.length > 0 && (
        <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">Deep Dive</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {item.deepDive.map((section, index) => (
              <div key={index} className="rounded-2xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/85 p-6">
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">{section.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      )}

      {/* Related Projects */}
      {item.related && item.related.length > 0 && (
        <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">Related Projects</h2>
          <div className="flex flex-wrap gap-3">
            {item.related.map((relatedSlug) => (
              <Button key={relatedSlug} href={`/work/${relatedSlug}`} variant="outline">
                View {relatedSlug}
              </Button>
            ))}
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}
