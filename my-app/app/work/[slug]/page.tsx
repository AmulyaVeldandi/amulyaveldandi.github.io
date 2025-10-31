import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCaseStudy, caseStudyList } from "@/data/work/caseStudies";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudyList.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Amulya Veldandi`,
    description: study.description,
    openGraph: {
      title: study.title,
      description: study.description,
      images: study.heroImage ? [{ url: study.heroImage, alt: study.heroAlt }] : [],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="pb-24 space-y-12">
      {/* Hero Section */}
      <AnimatedSection className="space-y-6">
        <div className="flex items-center gap-3">
          <Badge variant="neutral">{study.category}</Badge>
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">{study.overview.timeline}</span>
        </div>
        <h1 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl lg:text-6xl">{study.title}</h1>
        <p className="max-w-3xl text-lg text-[var(--muted)] leading-relaxed">{study.description}</p>
        <div className="flex flex-wrap gap-3">
          {study.github && (
            <Button href={study.github} variant="primary" target="_blank" rel="noreferrer">
              View on GitHub
            </Button>
          )}
          <Button href="/projects" variant="outline">
            All Projects
          </Button>
        </div>
      </AnimatedSection>

      {/* Hero Image */}
      {study.heroImage && (
        <AnimatedSection className="relative aspect-video w-full overflow-hidden rounded-3xl border border-[var(--border-muted)]">
          <Image src={study.heroImage} alt={study.heroAlt ?? study.title} fill className="object-cover" sizes="100vw" priority />
        </AnimatedSection>
      )}

      {/* Overview */}
      <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
        <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">Overview</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-2">Problem</p>
            <p className="text-sm text-[var(--foreground)] leading-relaxed">{study.overview.problem}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-2">Role</p>
            <p className="text-sm text-[var(--foreground)] leading-relaxed">{study.overview.role}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-2">Timeline</p>
            <p className="text-sm text-[var(--foreground)] leading-relaxed">{study.overview.timeline}</p>
            {study.overview.teamSize && (
              <>
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] mb-2 mt-4">Team</p>
                <p className="text-sm text-[var(--foreground)] leading-relaxed">{study.overview.teamSize}</p>
              </>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Tech Stack */}
      <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
        <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {study.techStack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </AnimatedSection>

      {/* Challenge */}
      <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
        <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">{study.challenge.heading}</h2>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">{study.challenge.body}</p>
        {study.challenge.bullets && (
          <ul className="space-y-3">
            {study.challenge.bullets.map((bullet, index) => (
              <li key={index} className="flex gap-3 text-sm text-[var(--foreground)]">
                <span className="text-[var(--accent)]">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </AnimatedSection>

      {/* Approach */}
      <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
        <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">{study.approach.heading}</h2>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">{study.approach.body}</p>
        {study.approach.bullets && (
          <ul className="space-y-3 mb-8">
            {study.approach.bullets.map((bullet, index) => (
              <li key={index} className="flex gap-3 text-sm text-[var(--foreground)]">
                <span className="text-[var(--accent)]">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
        {study.approach.diagram && (
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--border-muted)]">
            <Image src={study.approach.diagram} alt="Approach diagram" fill className="object-cover" sizes="100vw" />
          </div>
        )}
      </AnimatedSection>

      {/* Results */}
      <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
        <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">Results</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {study.results.map((result, index) => (
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

      {/* Impact */}
      <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
        <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">Impact</h2>
        <ul className="space-y-3">
          {study.impact.map((item, index) => (
            <li key={index} className="flex gap-3 text-sm text-[var(--foreground)]">
              <span className="text-[var(--accent)]">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </AnimatedSection>

      {/* Deep Dive */}
      {study.deepDive && (
        <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">Deep Dive</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {study.deepDive.map((section, index) => (
              <div key={index} className="rounded-2xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/85 p-6">
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">{section.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      )}

      {/* Related Projects */}
      {study.related && study.related.length > 0 && (
        <AnimatedSection className="rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">Related Projects</h2>
          <div className="flex flex-wrap gap-3">
            {study.related.map((slug) => (
              <Button key={slug} href={`/work/${slug}`} variant="outline">
                View {slug}
              </Button>
            ))}
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}
