"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rudolf Austin",
      role: "CEO - TradeBridge Asia",
      quote:
        "Precision engineering delivered ahead of schedule. The dimensional stability and surface finish on our multi-cavity parts exceeded our expectations.",
      image: "/images/client-rudolf.png",
      direction: "left" as const,
    },
    {
      name: "Lina Gabriele",
      role: "Operations Manager - NovaTech",
      quote:
        "Their team handled our complex tooling requirements seamlessly, with transparent communication throughout the entire trial and PPAP qualification.",
      image: "/images/client-lina.png",
      direction: "right" as const,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E5E5E5] overflow-hidden">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Centered */}
        <ScrollReveal direction="down" duration={600}>
          <div className="text-center max-w-[620px] mx-auto mb-12 sm:mb-14">
            <h2 className="text-[36px] sm:text-[44px] font-bold text-[#080808] tracking-tight">
              Client Says
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15px] text-[#555555]">
              Trusted feedback from our global engineering and manufacturing partners.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Testimonial Cards: Left and Right Entrances */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <ScrollReveal
              key={item.name}
              direction={item.direction}
              duration={800}
              delay={idx * 150}
              className="w-full flex"
            >
              <div className="bg-white border border-[#E5E5E5] rounded-[4px] p-6 sm:p-7 shadow-2xs flex flex-col sm:flex-row gap-5 sm:gap-6 items-start w-full">
                {/* Client Photo with Lazy Loading */}
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-[4px] overflow-hidden bg-neutral-100 flex-shrink-0 border border-[#E5E5E5]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={96}
                    height={112}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quote & Author Details */}
                <div className="flex-1 flex flex-col justify-between h-full">
                  <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#080808]">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#E5E5E5]">
                    <div className="font-bold text-[15px] text-[#080808]">
                      {item.name}
                    </div>
                    <div className="text-[12.5px] text-[#555555] mt-0.5">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Slider Controls Row */}
        <ScrollReveal direction="up" duration={600} delay={200}>
          <div className="mt-10 pt-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                type="button"
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-full bg-[#E51E2A] hover:bg-[#CC1622] text-white flex items-center justify-center transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-[#E51E2A]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                type="button"
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-full bg-[#E51E2A] hover:bg-[#CC1622] text-white flex items-center justify-center transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-[#E51E2A]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 ml-4 h-px bg-[#E5E5E5]" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
