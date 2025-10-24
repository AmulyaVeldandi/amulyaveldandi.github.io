import clsx from "clsx";
import { ComponentProps } from "react";

type BadgeProps = ComponentProps<"span"> & {
  variant?: "neutral" | "accent" | "outline";
};

export function Badge({ variant = "neutral", className, ...rest }: BadgeProps) {
  const classes = clsx(
    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em]",
    variant === "neutral" && "border-[var(--border-muted)] bg-[var(--surface)] text-[var(--muted)]",
    variant === "accent" && "border-transparent bg-[var(--accent)] text-[var(--accent-foreground)]",
    variant === "outline" && "border-[var(--border-accent)] text-[var(--foreground)]",
    className,
  );
  return <span className={classes} {...rest} />;
}
