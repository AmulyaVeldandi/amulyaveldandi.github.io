"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import ThemeToggle from "../shared/ThemeToggle";
import { MobileMenu } from "./MobileMenu";

type NavLink = {
  href: string;
  label: string;
  description?: string;
};

type NavigationProps = {
  links: NavLink[];
};

const HIDDEN_SCROLL_THRESHOLD = 120;

export default function Navigation({ links }: NavigationProps) {
  const pathname = usePathname() ?? "/";
  const [activeSection, setActiveSection] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);

  const isHome = pathname === "/" || pathname === "/(home)";

  useEffect(() => {
    setActiveSection(pathname);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) return;
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-section]"),
    ).filter((section) => section.id);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
          return;
        }

        const nearest = entries.sort(
          (a, b) =>
            Math.abs(a.boundingClientRect.top) -
            Math.abs(b.boundingClientRect.top),
        )[0];

        if (nearest?.target.id) {
          setActiveSection(`#${nearest.target.id}`);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.2, 0.6, 0.9],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 8);

      if (menuOpen) {
        setHidden(false);
        lastScroll.current = current;
        return;
      }

      if (current <= HIDDEN_SCROLL_THRESHOLD) {
        setHidden(false);
      } else if (current > lastScroll.current + 6) {
        setHidden(true);
      } else if (current < lastScroll.current - 6) {
        setHidden(false);
      }

      lastScroll.current = current;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    if (!menuOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("hashchange", closeMenu);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("hashchange", closeMenu);
    };
  }, [menuOpen]);

  const activeHref = useMemo(() => {
    if (!isHome) {
      return pathname;
    }
    return activeSection;
  }, [activeSection, isHome, pathname]);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-30 transition-all duration-300",
          scrolled ? "pt-3 shadow-sm" : "pt-4",
          hidden ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="relative flex w-full items-center justify-between rounded-3xl border border-[var(--border-muted)] bg-[var(--surface-elevated)]/90 px-4 py-2.5 shadow-lg backdrop-blur">
          <Link
            href="/"
            className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            Amulya Veldandi
          </Link>
          <nav className="hidden items-center gap-3 lg:flex">
            <ul className="flex items-center gap-2 rounded-full border border-[var(--border-muted)] bg-[var(--surface)] p-1">
              {links.map((link) => {
                const isActive =
                  activeHref === link.href ||
                  (isHome && activeHref === `#${link.href.split("#")[1]}`);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={clsx(
                        "relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)] transition-colors",
                        isActive
                          ? "text-[var(--foreground)]"
                          : "hover:text-[var(--foreground)]",
                      )}
                    >
                      {link.label}
                      <AnimatePresence>
                        {isActive ? (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 -z-10 rounded-full bg-[var(--surface-elevated)] shadow-nav-pill"
                            transition={{ type: "spring", stiffness: 280, damping: 26 }}
                          />
                        ) : null}
                      </AnimatePresence>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ThemeToggle />
          </nav>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex min-h-tap min-w-tap items-center justify-center rounded-full border border-[var(--border-muted)] text-[var(--muted)] transition-colors hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <motion.span
              initial={false}
              animate={{ rotate: menuOpen ? 45 : 0 }}
              className="relative block h-4 w-4"
            >
              <span className="absolute left-0 top-1/2 block h-[2px] w-full -translate-y-1/2 bg-current transition-all" />
              <span className="absolute left-0 top-0 block h-[2px] w-full bg-current transition-all" />
              <span className="absolute left-0 bottom-0 block h-[2px] w-full bg-current transition-all" />
            </motion.span>
          </button>
          </div>
        </div>
      </header>
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={links}
        activeHref={activeHref}
      />
    </>
  );
}
