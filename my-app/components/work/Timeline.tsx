"use client";
import { useMemo, useState } from "react";

export type TimelineItem = {
  title: string;
  institution: string;
  period: string;
  blurb: string;
  icon?: string;
  accent?: string;
  imageURL?: string;
  imageAlt?: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const clampedIndex = Math.min(Math.max(activeIndex, 0), Math.max(items.length - 1, 0));
  const activeItem = items[clampedIndex] ?? items[0];

  const detailAccent = useMemo(() => {
    if (!activeItem) return undefined;
    return activeItem.accent ?? "linear-gradient(135deg, rgba(126, 168, 255, 0.16), rgba(118, 232, 210, 0.14))";
  }, [activeItem]);

  if (!items.length || !activeItem) {
    return null;
  }

  return (
    <div className="timeline" data-reveal>
      <div className="timeline__list" role="list">
        <span className="timeline__rail" aria-hidden="true" />
        {items.map((item, index) => {
          const isActive = index === clampedIndex;
          return (
            <button
              key={item.title}
              type="button"
              role="listitem"
              className={`timeline__node${isActive ? " is-active" : ""}`}
              aria-current={isActive}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <span className="timeline__node-marker" aria-hidden="true" />
              <span className="timeline__node-icon" aria-hidden="true">
                {item.icon ?? "•"}
              </span>
              <span className="timeline__node-content">
                <span className="timeline__node-period">{item.period}</span>
                <span className="timeline__node-title">{item.title}</span>
                <span className="timeline__node-subtitle">{item.institution}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="timeline__detail" style={{ background: detailAccent }}>
        <div className="timeline__detail-icon" aria-hidden="true">
          <span>{activeItem.icon ?? "✦"}</span>
        </div>
        <div className="timeline__detail-body">
          <p className="timeline__detail-period">{activeItem.period}</p>
          <h3 className="timeline__detail-title">{activeItem.title}</h3>
          <p className="timeline__detail-institution">{activeItem.institution}</p>
          <p className="timeline__detail-blurb">{activeItem.blurb}</p>
        </div>
      </div>
    </div>
  );
}
