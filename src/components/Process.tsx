"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Requirement Analysis",
      description:
        "Understanding the customer's product specifications and manufacturing requirements.",
      align: "left",
      direction: "left" as const,
    },
    {
      step: "02",
      title: "Design & Planning",
      description:
        "Planning the tooling or mould solution according to the approved requirements",
      align: "right",
      direction: "right" as const,
    },
    {
      step: "03",
      title: "Manufacturing",
      description:
        "Developing tools, moulds, and components based on the agreed specifications",
      align: "left",
      direction: "left" as const,
    },
    {
      step: "04",
      title: "Quality Inspection",
      description:
        "Checking the finished output against the applicable quality requirements",
      align: "right",
      direction: "right" as const,
    },
    {
      step: "05",
      title: "Delivery",
      description:
        "Preparing the completed products for delivery according to the agreed terms",
      align: "left",
      direction: "left" as const,
    },
  ];

  const timelineRef = useRef<HTMLDivElement>(null);
  const drillRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!timelineRef.current || !drillRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const drillHeight = drillRef.current.offsetHeight || 52;
      const totalHeight = timelineRef.current.offsetHeight;
      const maxTravel = Math.max(0, totalHeight - drillHeight);

      // Trigger zone: starts moving when top of timeline is at ~45% of viewport
      // and finishes when bottom of timeline is at ~55% of viewport
      const startTrigger = windowHeight * 0.45;
      const endTrigger = windowHeight * 0.55;

      const scrollDistance = startTrigger - rect.top;
      const totalRange = totalHeight - (endTrigger - startTrigger);

      let progress = 0;
      if (totalRange > 0) {
        progress = scrollDistance / totalRange;
      }
      progress = Math.max(0, Math.min(1, progress));

      const targetY = progress * maxTravel;

      drillRef.current.style.transform = `translate3d(-50%, ${targetY}px, 0)`;

      if (progressLineRef.current) {
        progressLineRef.current.style.height = `${targetY + drillHeight * 0.85}px`;
      }

      const timelineRect = timelineRef.current.getBoundingClientRect();
      dotsRef.current.forEach((dot) => {
        if (!dot) return;
        const dotRect = dot.getBoundingClientRect();
        const dotRelativeTop = dotRect.top - timelineRect.top;

        if (targetY + drillHeight * 0.85 >= dotRelativeTop) {
          dot.classList.add("bg-[#E51E2A]", "ring-4", "ring-red-100", "scale-125");
          dot.classList.remove("bg-black");
        } else {
          dot.classList.remove("bg-[#E51E2A]", "ring-4", "ring-red-100", "scale-125");
          dot.classList.add("bg-black");
        }
      });
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    // Initial calculation on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E5E5E5] overflow-hidden">
      <div className="max-w-[1050px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Subtitle */}
        <ScrollReveal direction="down" duration={600}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
            <span className="text-[12px] font-medium text-[#777777]">
              Our Process
            </span>
          </div>

          {/* Section Heading Centered */}
          <div className="text-center max-w-[680px] mx-auto mb-16 sm:mb-20">
            <h2 className="text-[36px] sm:text-[44px] font-bold text-[#080808] tracking-tight">
              Meet Our Manufacturing Process
            </h2>
          </div>
        </ScrollReveal>

        {/* Vertical Alternating Timeline Container */}
        <div ref={timelineRef} className="relative py-4">
          {/* Base Static Gray Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-neutral-200 z-0" />

          {/* Dynamic Red Drilled Progress Line */}
          <div
            ref={progressLineRef}
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-[#E51E2A] z-0 transition-[height] duration-75"
            style={{ height: 0 }}
          />

          {/* Moving Tooling Drill Bit (Follows page scroll down) */}
          <div
            ref={drillRef}
            className="hidden md:flex flex-col items-center absolute left-1/2 top-0 z-20 pointer-events-none will-change-transform"
            style={{
              transform: "translate3d(-50%, 0px, 0)",
              transition: "transform 75ms ease-out",
            }}
          >
            <div className="w-5 h-12 relative flex items-center justify-center filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/process-drill.png"
                alt="Tooling drill bit"
                width={16}
                height={48}
                priority
                className="w-4 h-12 object-contain"
              />
            </div>
            {/* Red spark glow at drill bit tip */}
            <div className="w-2 h-2 -mt-1 rounded-full bg-[#E51E2A] blur-[1px] animate-pulse" />
          </div>

          {/* Timeline Steps with Alternating Left and Right Entrances */}
          <div className="space-y-12 sm:space-y-16 relative z-10">
            {steps.map((item, idx) => (
              <div
                key={item.step}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative"
              >
                {/* Center marker dot on desktop */}
                <div
                  ref={(el) => {
                    dotsRef.current[idx] = el;
                  }}
                  className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-black z-10 transition-all duration-200"
                />

                {item.align === "left" ? (
                  <>
                    {/* Left content block */}
                    <ScrollReveal direction="left" duration={750} delay={idx * 80}>
                      <div className="flex items-center justify-end gap-6 text-right md:pr-10">
                        <div>
                          <h3 className="text-[20px] sm:text-[22px] font-bold text-[#E51E2A]">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#555555] max-w-[340px] ml-auto">
                            {item.description}
                          </p>
                        </div>
                        <div className="text-[64px] sm:text-[76px] font-bold text-neutral-200 leading-none select-none">
                          {item.step}
                        </div>
                      </div>
                    </ScrollReveal>
                    {/* Right empty spacer on desktop */}
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    {/* Left empty spacer on desktop */}
                    <div className="hidden md:block" />
                    {/* Right content block */}
                    <ScrollReveal direction="right" duration={750} delay={idx * 80}>
                      <div className="flex items-center justify-start gap-6 text-left md:pl-10">
                        <div className="text-[64px] sm:text-[76px] font-bold text-neutral-200 leading-none select-none">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="text-[20px] sm:text-[22px] font-bold text-[#E51E2A]">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#555555] max-w-[340px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
