import { certifications } from "@/data/certifications";
import { AnimatedSection } from "../shared/AnimatedSection";
import { Badge } from "../shared/Badge";

export function CertificationBadges() {
  return (
    <AnimatedSection className="mt-16 rounded-[2.5rem] border border-[var(--border-muted)] bg-[var(--surface)]/90 p-8 backdrop-blur sm:p-12">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Recognition</p>
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Certifications & Scholarships</h2>
      </header>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="flex flex-col gap-2 rounded-2xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/85 p-5 shadow-card"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-semibold text-[var(--foreground)]">{cert.name}</h3>
              <Badge variant="neutral">{cert.year}</Badge>
            </div>
            <p className="text-sm text-[var(--muted)]">{cert.issuer}</p>
            {cert.credentialUrl ? (
              <a
                href={cert.credentialUrl}
                className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] hover:text-[var(--accent-foreground)]"
                target="_blank"
                rel="noreferrer"
              >
                View Credential →
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
