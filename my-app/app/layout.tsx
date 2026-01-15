import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import NeuralBackground from "@/components/shared/NeuralBackground";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Toaster } from "@/components/shared/Toaster";
import { StructuredData } from "@/components/seo/StructuredData";

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
  { href: "/scholarships", label: "Scholarships" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: {
    default: "Amulya Veldandi · Physician-Turned-AI Healthcare Engineer",
    template: "%s · Amulya Veldandi",
  },
  description:
    "Amulya Veldandi builds trustworthy imaging AI, agentic workflows, and clinical analytics that measurably improve patient care.",
  metadataBase: new URL("https://amulyaveldandi.github.io"),
  keywords: [
    "Amulya Veldandi",
    "Healthcare AI",
    "Medical Imaging",
    "Deep Learning",
    "Clinical Analytics",
    "Physician Data Scientist",
    "AI Engineer",
    "Machine Learning Healthcare",
    "Medical AI",
    "Healthcare Technology",
  ],
  authors: [
    {
      name: "Amulya Veldandi",
      url: "https://github.com/AmulyaVeldandi",
    },
  ],
  creator: "Amulya Veldandi",
  publisher: "Amulya Veldandi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Amulya Veldandi · Physician-Turned-AI Healthcare Engineer",
    description:
      "Physician-turned data scientist translating messy clinical workflows into reproducible neural products.",
    url: "https://amulyaveldandi.github.io",
    siteName: "Amulya Veldandi Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amulya Veldandi - Healthcare AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amulya Veldandi · Healthcare AI",
    description:
      "Clinician-turned data scientist delivering reproducible imaging AI, agentic workflows, and evidence-driven analytics.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  alternates: {
    canonical: "https://amulyaveldandi.github.io",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className="relative min-h-screen text-[var(--foreground)] antialiased transition-colors duration-500">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <NeuralBackground />
          <Navigation links={navLinks} />
          <div className="relative z-10 flex min-h-screen flex-col">
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 pb-8 pt-20 sm:px-6 lg:px-8">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
