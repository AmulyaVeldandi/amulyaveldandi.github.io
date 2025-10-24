import clsx from "clsx";
import { ComponentProps } from "react";

type CardProps = ComponentProps<"div"> & {
  hoverable?: boolean;
};

export function Card({ hoverable = false, className, ...rest }: CardProps) {
  return (
    <div
      className={clsx(
        "relative rounded-3xl border border-[var(--border-muted)] bg-[var(--surface)] shadow-card transition-all",
        hoverable && "hover:-translate-y-1 hover:shadow-card-strong",
        className,
      )}
      {...rest}
    />
  );
}
