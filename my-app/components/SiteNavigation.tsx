"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import ThemeToggle from "./ThemeToggle";

type NavLink = {
  href: string;
  label: string;
};

interface SiteNavigationProps {
  links: NavLink[];
}

const MOBILE_BREAKPOINT = 768;

export default function SiteNavigation({ links }: SiteNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>(
    links[0]?.href ?? "#hero",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [navOpacity, setNavOpacity] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const lastScrollYRef = useRef(0);
  const menuOpenRef = useRef(menuOpen);

  useEffect(() => {
    const ids = links
      .map((link) => link.href.replace("#", ""))
      .filter((id) => id.length > 0);
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (targets.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (intersecting.length > 0) {
          setActiveSection(`#${intersecting[0].target.id}`);
          return;
        }

        const nearest = [...entries].sort(
          (a, b) =>
            Math.abs(a.boundingClientRect.top) -
            Math.abs(b.boundingClientRect.top),
        )[0];

        if (nearest) {
          setActiveSection(`#${nearest.target.id}`);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.25, 0.5, 0.75],
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
      observer.disconnect();
    };
  }, [links]);

  useEffect(() => {
    const hero = document.getElementById("hero");

    const updateNavAppearance = () => {
      const scrollY = window.scrollY;
      const heroHeight = hero?.offsetHeight ?? 0;
      const ratio =
        heroHeight > 0 ? Math.min(Math.max(scrollY / heroHeight, 0), 1) : 1;

      setNavOpacity(Number(ratio.toFixed(2)));
      setScrolled(scrollY > 12);

      if (menuOpenRef.current) {
        setIsHidden(false);
      } else {
        const lastScrollY = lastScrollYRef.current;
        const delta = scrollY - lastScrollY;
        const threshold = 120;
        const hide = delta > 6 && scrollY > threshold;
        const show = delta < -6 || scrollY <= threshold;

        if (hide) {
          setIsHidden(true);
        } else if (show) {
          setIsHidden(false);
        }
      }

      lastScrollYRef.current = scrollY;
    };

    updateNavAppearance();
    window.addEventListener("scroll", updateNavAppearance, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateNavAppearance);
    };
  }, []);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
    if (menuOpen) {
      setIsHidden(false);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeMenu = () => setMenuOpen(false);
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", closeMenu, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", closeMenu);
    };
  }, [menuOpen]);

  const navStyle = {
    "--nav-bg-opacity": navOpacity.toString(),
  } as CSSProperties;

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    setActiveSection(href);
  };

  return (
    <nav
      className="nav-shell"
      data-scrolled={scrolled}
      data-hidden={isHidden}
      style={navStyle}
    >
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          Amulya Veldandi
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-menu${menuOpen ? " nav-menu--open" : ""}`}>
          <div className="nav-links">
            {links.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link${isActive ? " nav-link--active" : ""}`}
                  data-active={isActive}
                  onClick={() => handleLinkClick(link.href)}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
