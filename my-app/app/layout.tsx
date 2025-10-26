import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import NeuralBackground from "@/components/shared/NeuralBackground";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Toaster } from "@/components/shared/Toaster";

const themeInitScript = `(() => {
  try {
    const storageKey = 'preferred-theme';
    const stored = window.localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'light' || stored === 'dark' || stored === 'contrast' ? stored : (prefersDark ? 'dark' : 'light');
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme === 'dark' || theme === 'contrast' ? 'dark' : 'light';
  } catch (error) {
    // no-op
  }
})();`;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: {
    default: "Amulya Veldandi · Physician-Turned-AI Healthcare Engineer",
    template: "%s · Amulya Veldandi",
  },
  description:
    "Amulya Veldandi builds trustworthy imaging AI, agentic workflows, and clinical analytics that measurably improve patient care.",
  metadataBase: new URL("https://amulyaveldandi.com"),
  openGraph: {
    title: "Amulya Veldandi · Physician-Turned-AI Healthcare Engineer",
    description:
      "Physician-turned data scientist translating messy clinical workflows into reproducible neural products.",
    url: "https://amulyaveldandi.com",
    siteName: "Amulya Veldandi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amulya Veldandi · Healthcare AI",
    description:
      "Clinician-turned data scientist delivering reproducible imaging AI, agentic workflows, and evidence-driven analytics.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased transition-colors duration-500">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <NeuralBackground />
          <Navigation links={navLinks} />
          <div className="relative z-10 flex min-h-screen flex-col">
            <main className="flex-1 w-full max-w-prose-wide mx-auto px-5 pb-24 pt-32 sm:px-8 lg:px-12 xl:px-16">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
