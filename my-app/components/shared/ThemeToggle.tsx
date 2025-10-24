"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/layout/ThemeProvider";
import { useEffect, useState } from "react";

const themeOrder = ["light", "dark", "contrast"] as const;

export default function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  const activeTheme = hydrated && mounted ? theme : "light";

  const index = themeOrder.indexOf(activeTheme);
  const nextTheme = themeOrder[(index + 1) % themeOrder.length];

  const label =
    activeTheme === "light"
      ? "Switch to dark mode"
      : activeTheme === "dark"
      ? "Switch to high contrast mode"
      : "Switch to light mode";

  const icon = {
    light: "☀️",
    dark: "🌙",
    contrast: "⚡️",
  }[activeTheme];

  const chipClasses =
    "relative inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label={label}
      className={chipClasses}
      data-theme-mode={activeTheme}
    >
      <motion.span
        key={activeTheme}
        initial={{ rotate: -15, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 15, opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
        aria-hidden="true"
      >
        {icon}
      </motion.span>
      <span className="font-mono" data-theme-label>
        {hydrated ? activeTheme : "…"}
      </span>
    </button>
  );
}
