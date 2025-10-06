"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "preferred-theme";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return null;
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);
  root.style.setProperty("color-scheme", theme === "dark" ? "dark" : "light");
  window.dispatchEvent(new CustomEvent("theme-change", { detail: theme }));
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getStoredTheme() ?? getSystemTheme();
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  const buttonStyle =
    theme === "dark"
      ? {
          border: '1px solid rgba(89, 126, 152, 0.4)',
          color: '#e6edf5',
          background: 'rgba(20, 32, 45, 0.75)',
        }
      : {
          border: '1px solid rgba(160, 130, 100, 0.35)',
          color: '#2f2a26',
          background: 'rgba(255, 255, 255, 0.55)',
        };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      className="rounded-full px-4 py-2 text-xs sm:text-sm uppercase tracking-[0.35em] transition-all duration-200 hover:-translate-y-0.5"
      style={buttonStyle}
    >
      {mounted ? (theme === "dark" ? "Light" : "Dark") : "Theme"}
    </button>
  );
}
