import Link from "next/link";
import { StorySection, ValuesGrid } from "@/components/about/StorySection";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { CertificationBadges } from "@/components/about/CertificationBadges";
import { profile } from "@/data/profile";
import { experienceTimeline } from "@/data/work/experience";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const storyContent = {
  eyebrow: "About · Story",
  title: "Clinician-turned data scientist building trustworthy imaging AI.",
  body:
    "From CT throughput forecasting at Cleveland Clinic to agentic workflows that reconcile imaging follow-ups in hours instead of weeks, I translate messy clinical operations into reproducible neural products. Every deployment keeps clinicians in control, surfaces evidence for decision-makers, and ships with a governance playbook teams can own.",
  impact: [
    { metric: "1.2k+ scans", caption: "Automated imaging studies with reproducible QA" },
    { metric: "12 pipelines", caption: "Containerised workflows in production" },
    { metric: "30+ mentees", caption: "Clinicians & scientists coached" },
  ],
  values: [
    {
      label: "Human-first AI",
      detail: "Designing decision support that keeps clinicians in the loop, not out of it.",
    },
    {
      label: "Evidence + Execution",
      detail: "Pairing statistical rigor with dockerised delivery, QA dashboards, and governance guardrails.",
    },
    {
      label: "Equity by Design",
      detail: "Stress-testing bias, drift, and audit trails so deployments stay accountable long after launch.",
    },
  ],
};

const timelinePreview = experienceTimeline.slice(0, 3);

export default function AboutPage() {
  return (
    <div className="pb-24">
      <StorySection
        eyebrow={storyContent.eyebrow}
        title={storyContent.title}
        body={storyContent.body}
        resumeUrl={profile.resumeUrl}
        ctaHref="/work"
        impact={storyContent.impact}
        values={storyContent.values}
      />

      <ValuesGrid values={storyContent.values} />

      <AnimatedSection className="mt-16 space-y-6 rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur lg:p-12">
        <header className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Career Journey</p>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Snapshots from the timeline</h2>
            <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
              Every role blends bedside empathy with reproducible engineering. Dive deeper into the interactive timeline to explore metrics, deliverables, and team impact.
            </p>
          </div>
          <Link
            href="/about/timeline"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)] transition hover:text-[var(--accent-foreground)]"
          >
            View full timeline →
          </Link>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {timelinePreview.map((entry) => (
            <article
              key={entry.id}
              className="rounded-2xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/85 p-6 shadow-card"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">{entry.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">{entry.title}</h3>
              <p className="text-sm text-[var(--muted)]">{entry.organisation}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{entry.headline}</p>
              <ul className="mt-3 space-y-2 text-xs text-[var(--muted)]">
                {entry.achievements.slice(0, 2).map((metric) => (
                  <li key={metric.label} className="flex items-center justify-between">
                    <span>{metric.label}</span>
                    <span className="font-semibold text-[var(--accent)]">{metric.metric}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <SkillsGrid />

      <CertificationBadges />
    </div>
  );
}
