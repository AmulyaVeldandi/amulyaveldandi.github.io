import { profile } from "@/data/profile";
import { AnimatedSection } from "../shared/AnimatedSection";

export function FeatureHighlights() {
  return (
    <AnimatedSection
      id="highlights"
      data-nav-section
      className="section-spacing grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5"
    >
      {profile.highlights.map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-[var(--border-muted)] bg-[var(--surface)]/85 p-4 sm:p-5 backdrop-blur transition hover:-translate-y-1 hover:border-[var(--border-accent)] hover:bg-[var(--surface-elevated)]/90"
        >
          <span className="text-3xl" aria-hidden>
            {item.icon}
          </span>
          <h3 className="mt-5 text-fluid-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
          <p className="mt-3 text-fluid-sm text-[var(--muted)]">{item.description}</p>
        </article>
      ))}
    </AnimatedSection>
  );
}
