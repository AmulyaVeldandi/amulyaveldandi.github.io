"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import ThemeToggle from "../shared/ThemeToggle";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string; description?: string }[];
  activeHref: string;
  extra?: ReactNode;
};

export function MobileMenu({ open, onClose, links, activeHref, extra }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        >
          <motion.nav
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="absolute inset-x-4 top-4 rounded-3xl border border-[var(--border-muted)] bg-[var(--surface-elevated)] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--muted)]">
                Navigate
              </p>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-[var(--border-muted)] px-3 py-1 text-xs uppercase tracking-[0.35em] text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                Close
              </button>
            </div>
            <ul className="mt-6 space-y-4">
              {links.map((link) => {
                const isActive = activeHref === link.href || activeHref.startsWith(`${link.href}#`);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group block rounded-2xl border border-transparent px-4 py-3 transition-colors hover:border-[var(--border-accent)] hover:bg-[var(--surface)]"
                      data-active={isActive}
                    >
                      <p className="flex items-center justify-between text-base font-semibold text-[var(--foreground)]">
                        <span>{link.label}</span>
                        <span
                          className="text-xs uppercase tracking-[0.35em] text-[var(--muted)] transition-opacity group-data-[active=true]:opacity-100 group-data-[active=false]:opacity-0"
                          aria-hidden
                        >
                          Active
                        </span>
                      </p>
                      {link.description ? (
                        <p className="mt-1 text-sm text-[var(--muted)]">{link.description}</p>
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-[var(--border-muted)] px-4 py-3">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Theme</p>
              <ThemeToggle />
            </div>
            {extra ? <div className="mt-4">{extra}</div> : null}
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
