"use client";

import clsx from "clsx";
import Link from "next/link";
import { ComponentProps } from "react";

type BaseProps = {
  variant?: "primary" | "outline" | "ghost";
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

type ButtonAsButton = BaseProps &
  ComponentProps<"button"> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  ComponentProps<"a"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variantClasses: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-foreground)] hover:brightness-110 focus-visible:ring-[var(--accent)]",
  outline:
    "border border-[var(--border-accent)] bg-transparent text-[var(--foreground)] hover:bg-[var(--surface)] focus-visible:ring-[var(--border-accent)]",
  ghost:
    "bg-transparent text-[var(--foreground)] hover:bg-[var(--surface)] focus-visible:ring-[var(--border-muted)]",
};

const sizeClasses: Record<NonNullable<BaseProps["size"]>, string> = {
  sm: "px-4 py-2 text-xs uppercase tracking-[0.32em]",
  md: "px-5 py-3 text-xs uppercase tracking-[0.32em]",
  lg: "px-6 py-3 text-sm uppercase tracking-[0.32em]",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", icon, className, children, ...rest } = props;

  const classes = clsx(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link className={classes} href={href} {...linkRest}>
        {icon ? <span aria-hidden>{icon}</span> : null}
        {children}
      </Link>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonRest}>
      {icon ? <span aria-hidden>{icon}</span> : null}
      {children}
    </button>
  );
}
