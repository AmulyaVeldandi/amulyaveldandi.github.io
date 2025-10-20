"use client";
import Image from "next/image";
import { type MouseEvent, useEffect, useRef } from "react";

type ExperienceCardProps = {
  title: string;
  institution: string;
  timeline: string;
  bullets: string[];
  imageURL: string;
  imageAlt: string;
  imageTheme?: string;
  onOpenMedia: () => void;
};

export default function ExperienceCard({
  title,
  institution,
  timeline,
  bullets,
  imageURL,
  imageAlt,
  imageTheme,
  onOpenMedia,
}: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const resetTransforms = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--experience-tilt-x", "0deg");
    card.style.setProperty("--experience-tilt-y", "0deg");
    card.style.setProperty("--experience-parallax-x", "0px");
    card.style.setProperty("--experience-parallax-y", "0px");
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion.current) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width;
    const relativeY = (event.clientY - rect.top) / rect.height;

    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = window.requestAnimationFrame(() => {
      const tiltX = (0.5 - relativeY) * 8;
      const tiltY = (relativeX - 0.5) * 8;
      const translateX = (relativeX - 0.5) * -18;
      const translateY = (relativeY - 0.5) * -18;

      card.style.setProperty("--experience-tilt-x", `${tiltX.toFixed(2)}deg`);
      card.style.setProperty("--experience-tilt-y", `${tiltY.toFixed(2)}deg`);
      card.style.setProperty("--experience-parallax-x", `${translateX.toFixed(2)}px`);
      card.style.setProperty("--experience-parallax-y", `${translateY.toFixed(2)}px`);
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current);
    }
    resetTransforms();
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-reveal
      className="experience-card group flex h-full flex-col justify-between gap-5 rounded-3xl border card-border bg-[color:var(--surface-chip)]/90 p-6 shadow-[0_18px_45px_-30px_var(--accent-shadow-strong)] transition-all duration-300 hover:bg-[color:var(--surface-chip-strong)]/95"
    >
      <div className="relative overflow-hidden rounded-2xl border border-[color:var(--accent-border)] bg-[color:var(--surface-chip-strong)]">
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={imageURL}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            style={{
              transform: "translate3d(var(--experience-parallax-x, 0px), var(--experience-parallax-y, 0px), 0) scale(1.05)",
            }}
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/35 via-black/10 to-transparent" />
        </div>
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/25 bg-white/20 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-white backdrop-blur-md">
          {imageTheme ?? "Imagery"}
        </div>
        <button
          type="button"
          onClick={onOpenMedia}
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/35 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-white/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20 hover:bg-black/45"
        >
          View
        </button>
      </div>

      <div className="space-y-3">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.4em] text-accent-light">{timeline}</p>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--foreground-muted)]/80">{institution}</p>
        </div>
        <ul className="space-y-2 text-[0.8rem] leading-relaxed text-[color:var(--foreground-muted)]">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
