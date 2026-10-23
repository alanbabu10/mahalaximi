"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 750,
  distance = 48,
  className = "",
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Initial transform offset based on direction
  const getTransformStyle = () => {
    if (isVisible) {
      return "translate3d(0, 0, 0)";
    }
    switch (direction) {
      case "left":
        return `translate3d(-${distance}px, 0, 0)`;
      case "right":
        return `translate3d(${distance}px, 0, 0)`;
      case "up":
        return `translate3d(0, ${distance}px, 0)`;
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "fade":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyle(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
