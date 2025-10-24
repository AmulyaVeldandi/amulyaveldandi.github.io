import { profile } from "@/data/profile";
import { AnimatedSection } from "../shared/AnimatedSection";

export function FeatureHighlights() {
  return (
    <AnimatedSection
      id="highlights"
      data-nav-section
      className="mt-16 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
    >
      {profile.highlights.map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-[var(--border-muted)] bg-[var(--surface)]/85 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[var(--border-accent)] hover:bg-[var(--surface-elevated)]/90"
        >
          <span className="text-3xl" aria-hidden>
            {item.icon}
          </span>
          <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
        </article>
      ))}
    </AnimatedSection>
  );
}
