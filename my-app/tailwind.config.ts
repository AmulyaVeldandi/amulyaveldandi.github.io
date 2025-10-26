import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        'section-mobile': 'var(--section-gap-mobile)',
        'section-desktop': 'var(--section-gap-desktop)',
      },
      maxWidth: {
        'prose-min': 'var(--container-prose-min)',
        'prose': 'var(--container-prose-max)',
        'prose-wide': 'var(--container-wide)',
        'narrow': 'var(--container-narrow)',
      },
      minWidth: {
        'tap': 'var(--tap-target-min)',
      },
      minHeight: {
        'tap': 'var(--tap-target-min)',
      },
    },
  },
  plugins: [],
} satisfies Config;
