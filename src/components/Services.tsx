"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  const capabilities = [
    {
      title: "Tools & Dies",
      description:
        "Precision tooling and die solutions designed to support industrial manufacturing processes",
      image: "/images/cap-tools-dies.png",
    },
    {
      title: "Mould Development",
      description:
        "Mould solutions developed according to product requirements and manufacturing specifications",
      image: "/images/cap-mould-dev.png",
    },
    {
      title: "Plastic Components",
      description:
        "Plastic component manufacturing solutions based on customer requirements and approved designs",
      image: "/images/cap-plastic-comp.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? capabilities.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === capabilities.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E5E5E5] overflow-hidden">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Subtitle */}
        <ScrollReveal direction="down" duration={600}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
            <span className="text-[12px] font-medium text-[#777777]">
              Our Services
            </span>
          </div>

          {/* Section Heading Centered */}
          <div className="text-center max-w-[620px] mx-auto mb-12 sm:mb-14">
            <h2 className="text-[36px] sm:text-[44px] font-bold text-[#080808] tracking-tight">
              Our Capabilities
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15px] text-[#555555]">
              Customized tooling and component solutions for specific industrial applications
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Capabilities Cards with Staggered Upward Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <ScrollReveal
              key={cap.title}
              direction="up"
              duration={750}
              delay={idx * 150}
              className="w-full"
            >
              <div className="group relative rounded-[4px] overflow-hidden h-[380px] sm:h-[420px] w-full bg-neutral-900 border border-[#E5E5E5] shadow-xs flex flex-col justify-end">
                {/* Background Image with Lazy Loading */}
                <Image
                  src={cap.image}
                  alt={cap.title}
                  width={480}
                  height={600}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay for Crisp Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Card Content at Bottom */}
                <div className="relative z-10 p-6 sm:p-7 text-white">
                  <h3 className="text-[20px] sm:text-[22px] font-bold tracking-tight text-white group-hover:text-red-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] sm:text-[13px] leading-relaxed text-neutral-300">
                    {cap.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Controls Row: Red Navigation Arrows + Divider Line + View All Services */}
        <ScrollReveal direction="up" duration={600} delay={300}>
          <div className="mt-10 pt-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                type="button"
                aria-label="Previous capability"
                className="w-9 h-9 rounded-full bg-[#E51E2A] hover:bg-[#CC1622] text-white flex items-center justify-center transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-[#E51E2A]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                type="button"
                aria-label="Next capability"
                className="w-9 h-9 rounded-full bg-[#E51E2A] hover:bg-[#CC1622] text-white flex items-center justify-center transition-colors shadow-xs focus:outline-none focus:ring-2 focus:ring-[#E51E2A]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 mx-4 h-px bg-[#E5E5E5]" />

            <Link
              href="#contact"
              className="inline-flex items-center text-[14px] font-medium text-[#E51E2A] hover:text-[#CC1622] transition-colors whitespace-nowrap"
            >
              <span>view all services</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
