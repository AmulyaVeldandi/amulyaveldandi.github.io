import Image from "next/image";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Badge } from "../shared/Badge";
import { Button } from "../shared/Button";

export type StoryImpact = {
  metric: string;
  caption: string;
};

export type StoryValue = {
  label: string;
  detail: string;
};

export type StorySectionProps = {
  eyebrow: string;
  title: string;
  body: string;
  resumeUrl: string;
  ctaHref: string;
  impact: StoryImpact[];
  values: StoryValue[];
};

export function StorySection({ eyebrow, title, body, resumeUrl, ctaHref, impact, values }: StorySectionProps) {
  return (
    <AnimatedSection
      id="about"
      data-nav-section
      className="grid items-center gap-10 rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur sm:grid-cols-[1.05fr,1fr] sm:p-12"
    >
      <div className="relative order-2 sm:order-1">
        <Image
          src="/images/about/profile-hero.svg"
          alt="Illustration of Amulya Veldandi in a professional setting"
          width={520}
          height={640}
          className="mx-auto drop-shadow-xl"
          style={{ maxWidth: '24rem', width: '100%', height: 'auto' }}
          priority
        />
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-2xl border border-[var(--border-muted)] bg-[var(--surface)]/85 px-4 py-3 text-center text-xs uppercase tracking-[0.35em] text-[var(--muted)] shadow-card sm:block">
          Clinician · Data Scientist · Builder
        </div>
      </div>
      <div className="order-1 space-y-6 sm:order-2">
        <Badge variant="outline" className="text-[0.6rem]">
          {eyebrow}
        </Badge>
        <h1 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">{title}</h1>
        <p className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">{body}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {impact.map((item) => (
            <div key={item.metric} className="rounded-2xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/90 p-4 text-center">
              <p className="text-lg font-semibold text-[var(--foreground)]">{item.metric}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">{item.caption}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={ctaHref} variant="primary">
            Explore My Work
          </Button>
          <Button href={resumeUrl} variant="outline" target="_blank" rel="noreferrer" download>
            Download Resume
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function ValuesGrid({ values }: { values: StoryValue[] }) {
  return (
    <AnimatedSection className="mt-16 space-y-8 rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur sm:p-12">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Principles</p>
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Values at the center of every deployment</h2>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <article
            key={value.label}
            className="group rounded-2xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/85 p-6 transition hover:-translate-y-1 hover:border-[var(--border-accent)]"
          >
            <h3 className="text-lg font-semibold text-[var(--foreground)]">{value.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{value.detail}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
