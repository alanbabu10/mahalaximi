"use client";

import { useEffect, useRef } from "react";

// Layers cut from the Prakash Group logo (public/images/prakash-group/).
// The layers are stored rotated to read horizontally (rays at the right end).
// Rays are listed in sweep order
// so they fan out one after another.
const RAYS = [
  "ray-11-b",
  "ray-9-r",
  "ray-4-b",
  "ray-4-r",
  "ray-5-b",
  "ray-1-r",
  "ray-3-b",
  "ray-2-r",
  "ray-6-b",
  "ray-8-r",
  "ray-10-b",
];

const src = (name: string) => `/images/prakash-group/prakash-${name}.png`;

export default function PrakashGroupLogo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Hide until scrolled into view, then play the intro once.
    el.dataset.state = "idle";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.state = "play";
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`pg-logo ${className}`}
      role="img"
      aria-label="Prakash Group logo"
    >
      {RAYS.map((name, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={name}
          src={src(name)}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pg-layer pg-ray"
          style={{ "--i": i } as React.CSSProperties}
        />
      ))}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src("line")} alt="" aria-hidden="true" loading="lazy" className="pg-layer pg-line" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src("prakash")} alt="" aria-hidden="true" loading="lazy" className="pg-layer pg-word" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src("group")} alt="" aria-hidden="true" loading="lazy" className="pg-layer pg-group" />
    </div>
  );
}
