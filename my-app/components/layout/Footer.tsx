import Link from 'next/link';

const links = [
  {
    href: 'mailto:veldandiamulya@gmail.com',
    label: 'Email',
    icon: '✉️',
    glow: 'rgba(164, 170, 182, 0.45)',
  },
  {
    href: 'https://www.linkedin.com/in/amulya-veldandi-104242261/',
    label: 'LinkedIn',
    icon: '🔗',
    glow: 'rgba(150, 156, 168, 0.45)',
  },
  {
    href: 'https://github.com/amulyaveldandi',
    label: 'GitHub',
    icon: '🐙',
    glow: 'rgba(181, 186, 197, 0.45)',
  },
];

export default function Footer() {
  return (
    <footer className="section-spacing rounded-3xl border border-[var(--border-muted)] bg-[var(--surface-chip-strong)] px-4 py-8 sm:px-6 sm:py-10 text-[var(--foreground)]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-fluid-sm font-semibold text-[var(--foreground)]">Stay Connected</p>
          <p className="text-fluid-xs text-[var(--muted)]">
            AI for healthcare, designed with clinical empathy and reproducible engineering.
          </p>
        </div>
        <div className="flex gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group relative flex min-h-tap min-w-tap items-center justify-center rounded-full border border-[var(--border-accent)] bg-[var(--surface-chip)] transition-transform duration-200 hover:-translate-y-1 hover:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
              aria-label={`${link.label} - ${link.href.startsWith('mailto:') ? 'send email' : 'opens in new window'}`}
            >
              <span className="absolute inset-0 rounded-full blur-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ background: link.glow }} />
              <span className="relative text-lg" aria-hidden="true">{link.icon}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="group flex items-center gap-4">
          <div className="chibi-brain" aria-label="Chibi brain mascot" role="img">
            <span />
          </div>
          <div className="space-y-1">
            <p className="text-fluid-sm text-[var(--foreground)] transition-colors">
              Hover to say hi to BrAI-ny, the curious cortex companion.
            </p>
            <p className="text-fluid-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Futuristic, minimal, clinically grounded.
            </p>
          </div>
        </div>
        <div className="self-start sm:self-auto text-fluid-xs text-[var(--muted)] uppercase tracking-[0.35em]">
          Crafted with empathy-driven AI design.
        </div>
      </div>
      <p className="mt-5 text-fluid-xs uppercase tracking-[0.35em] text-[var(--muted)]">
        © {new Date().getFullYear()} Amulya Veldandi · Designed for trustworthy AI in healthcare
      </p>
    </footer>
  );
}
