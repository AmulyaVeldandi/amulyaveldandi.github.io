import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject } from '../../../data/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12 pb-24">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-accent-light opacity-80">Project</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-slate-50">
          {project.title}
        </h1>
        <p className="text-slate-300 max-w-3xl leading-relaxed">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="chip-subtle text-[0.7rem] tracking-[0.3em]"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.badges ? (
          <div className="flex flex-wrap gap-2 text-xs">
            {project.badges.map((badge) => (
              <span
                key={badge.label}
                className="chip-subtle text-[0.65rem] tracking-[0.3em]"
              >
                {badge.label}: {badge.value}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <section className="section-card rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-100">Problem</h2>
        <p className="text-slate-300 leading-relaxed">{project.problem}</p>
      </section>

      <section className="section-card rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-100">Approach</h2>
        <ul className="space-y-3 text-slate-300 leading-relaxed list-disc list-inside">
          {project.approach.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </section>

      <section className="section-card rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-100">Results</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {project.results.map((result) => (
            <div
              key={result.metric + result.value}
              className="rounded-2xl card-border bg-[color:var(--surface-chip)] p-4"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-accent-light opacity-80">
                {result.metric}
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-100">{result.value}</p>
              {result.detail ? (
                <p className="mt-1 text-sm text-slate-300/80">{result.detail}</p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="section-card rounded-3xl p-8 sm:p-10 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-100">Visuals</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {project.visuals.map((visual) => (
            <div
              key={visual.title}
              className="project-placeholder rounded-2xl flex flex-col gap-2 text-left"
            >
              <span className="text-sm font-semibold text-slate-100">{visual.title}</span>
              <span className="text-xs text-slate-300/80 leading-relaxed">
                {visual.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Link href="/" className="btn-outline">
          ← Back to Portfolio
        </Link>
        <Link href={project.github} target="_blank" rel="noreferrer" className="btn-primary">
          View GitHub Repository
        </Link>
      </footer>
    </div>
  );
}
