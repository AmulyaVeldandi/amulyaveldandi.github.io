"use client";

import clsx from "clsx";
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
          "fixed inset-x-0 top-0 z-50 backdrop-blur-md border-b transition-all duration-300",
          "bg-[var(--nav-background)] border-[var(--nav-border)]",
          hidden ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              AMULYA VELDANDI
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {links.map((link) => {
                  const isActive =
                    activeHref === link.href ||
                    (isHome && activeHref === `#${link.href.split("#")[1]}`);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={clsx(
                          "text-sm font-medium uppercase transition-colors",
                          isActive
                            ? "text-[var(--accent)]"
                            : "text-[var(--foreground-muted)] hover:text-[var(--accent)]",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[var(--foreground-muted)] hover:text-[var(--accent)] hover:bg-[var(--surface-muted)] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
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
