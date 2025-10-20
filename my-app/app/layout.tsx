import './globals.css';
import NeuralBackground from '../components/NeuralBackground';
import SiteNavigation from '../components/SiteNavigation';
import { ReactNode } from 'react';

const navLinks = [
  { href: '#hero', label: 'Hero' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
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
        <SiteNavigation links={navLinks} />
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
