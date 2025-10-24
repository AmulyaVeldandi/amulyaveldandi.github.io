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
    <footer className="mt-16 rounded-3xl border card-border bg-[color:var(--surface-chip-strong)] px-6 py-8 text-[color:var(--foreground)]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="label-accent opacity-80">Stay Connected</p>
          <p className="text-xs text-slate-300/80">
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
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-[color:var(--surface-chip)] transition-transform duration-200 hover:-translate-y-1 hover:border-accent focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
              aria-label={`${link.label} - ${link.href.startsWith('mailto:') ? 'send email' : 'opens in new window'}`}
            >
              <span className="absolute inset-0 rounded-full blur-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100" style={{ background: link.glow }} />
              <span className="relative text-lg" aria-hidden="true">{link.icon}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="group flex items-center gap-4">
          <div className="chibi-brain" aria-label="Chibi brain mascot" role="img">
            <span />
          </div>
          <div className="space-y-1">
            <p className="label-accent opacity-80 transition-colors group-hover:opacity-100">
              Hover to say hi to BrAI-ny, the curious cortex companion.
            </p>
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-400/70">
              Futuristic, minimal, clinically grounded.
            </p>
          </div>
        </div>
        <div className="self-start sm:self-auto text-xs text-slate-400/80 uppercase tracking-[0.35em]">
          Crafted with empathy-driven AI design.
        </div>
      </div>
      <p className="mt-6 text-[0.65rem] uppercase tracking-[0.35em] text-slate-400/70">
        © {new Date().getFullYear()} Amulya Veldandi · Designed for trustworthy AI in healthcare
      </p>
    </footer>
  );
}
