import { useEffect, useState } from "react";

export type Theme = "light" | "dark" | "contrast";

function getTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const attr = document.documentElement.dataset.theme;
  if (attr === "light" || attr === "dark" || attr === "contrast") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(getTheme());

    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return theme;
}
