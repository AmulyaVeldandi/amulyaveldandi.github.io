import Link from 'next/link';
import './globals.css';
import NeuralBackground from '../components/NeuralBackground';
import ThemeToggle from '../components/ThemeToggle';
import { ReactNode } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#scholarships', label: 'Scholarships' },
  { href: '#projects', label: 'Projects' },
  { href: '#publications', label: 'Publications' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="relative min-h-screen transition-colors duration-500">
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const storageKey = 'preferred-theme';
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const stored = localStorage.getItem(storageKey);
    const initial = stored === 'dark' || stored === 'light' ? stored : (systemPrefersDark.matches ? 'dark' : 'light');
    const applyTheme = (theme) => {
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.setProperty('color-scheme', theme === 'dark' ? 'dark' : 'light');
      window.dispatchEvent(new CustomEvent('theme-change', { detail: theme }));
    };
    applyTheme(initial);
    systemPrefersDark.addEventListener('change', (event) => {
      const theme = event.matches ? 'dark' : 'light';
      if (!localStorage.getItem(storageKey)) {
        applyTheme(theme);
      }
    });
  } catch (error) {}
})();`,
          }}
        />
        <NeuralBackground />
        <nav className="fixed top-0 z-50 w-full px-5 sm:px-10 lg:px-16 py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-xl font-semibold tracking-wide text-[color:var(--foreground)]">
            Amulya Veldandi
          </Link>
          <div className="flex w-full sm:w-auto items-center justify-between gap-4 sm:justify-end">
            <div className="flex items-center gap-4 text-xs sm:text-sm uppercase tracking-[0.3em] overflow-x-auto no-scrollbar whitespace-nowrap text-[color:var(--foreground-muted)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="shrink-0 text-muted transition-colors duration-200 hover:text-[color:var(--accent-light)]"
              >
                {link.label}
              </Link>
            ))}
            </div>
            <ThemeToggle />
          </div>
        </nav>
        <main className="max-w-5xl mx-auto mt-32 px-5 sm:px-6 lg:px-8 pb-24 relative z-10">
          {children}
        </main>
        <a
          href="/Resume_v3.pdf"
          className="sticky-resume"
          target="_blank"
          rel="noreferrer"
        >
          View Full CV
        </a>
      </body>
    </html>
  );
}
