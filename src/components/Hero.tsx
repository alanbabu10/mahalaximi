"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Pause } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mediaQuery.matches) {
      video.play().catch(() => {});
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <section
      id="home"
      className="relative bg-white pt-8 pb-14 sm:pt-12 sm:pb-16 lg:py-16 overflow-hidden"
    >
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: ~42% (5 of 12 cols = 41.67%) with Slide-In Left */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            <ScrollReveal direction="left" duration={800}>
              {/* Thin red accent line above heading */}
              <div
                className="w-[30px] h-[3px] bg-[#E51E2A] rounded-[1px] mb-6 sm:mb-7"
                aria-hidden="true"
              />

              {/* Oversized 2-line heading */}
              <h1 className="text-[40px] sm:text-[54px] lg:text-[68px] font-semibold text-[#080808] leading-[0.98] tracking-[-0.035em]">
                <span className="block">Precision in </span>
                <span className="block mt-1 sm:mt-2">
                  every <span className="text-[#E51E2A]">detail</span>
                </span>
              </h1>

              {/* Subtitle / Description */}
              <p className="mt-6 sm:mt-7 text-[16px] leading-[1.55] text-[#555555] max-w-[420px]">
                A considered approach to engineering, manufacturing and the
                requirements that matter.
              </p>

              {/* Action Buttons: 10px gap on desktop */}
              <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-[10px]">
                {/* Primary Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-[38px] px-[16px] sm:px-[18px] text-[13px] sm:text-[13.5px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] border border-[#E51E2A] rounded-[4px] transition-all duration-150 shadow-xs whitespace-nowrap flex-shrink-0 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A]"
                >
                  <span className="whitespace-nowrap">Discuss your requirements</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-2 flex-shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Secondary Button */}
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center h-[38px] px-[16px] sm:px-[18px] text-[13px] sm:text-[13.5px] font-medium text-[#080808] bg-white hover:bg-neutral-50 border border-[#E5E5E5] hover:border-neutral-400 rounded-[4px] transition-all duration-150 shadow-xs whitespace-nowrap flex-shrink-0 group focus:outline-none focus:ring-2 focus:ring-neutral-300"
                >
                  <span className="whitespace-nowrap">Explore capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-2 flex-shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#555555] group-hover:text-[#080808]" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: ~58% (7 of 12 cols = 58.33%) with Slide-In Right */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            <ScrollReveal direction="right" duration={900} delay={150} className="w-full">
              <div className="relative w-full max-w-[720px] lg:max-w-none group">
                {/* High-Resolution Industrial Machine Showcase Video */}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/images/hero-machine.png"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-auto object-contain select-none"
                  aria-label="Mahalaxmi precision industrial injection molding machine in operation"
                >
                  <source src="/videos/industrial-machine.mp4" type="video/mp4" />
                  {/* Fallback Static Image if video format is unsupported */}
                  <Image
                    src="/images/hero-machine.png"
                    alt="Industrial injection molding machine - Milacron Hydron precision manufacturing equipment"
                    width={1160}
                    height={630}
                    priority
                    quality={95}
                    className="w-full h-auto object-contain select-none"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 650px"
                  />
                </video>

                {/* Subtle Interactive Play / Pause Control Button */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="absolute bottom-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white text-[#080808] border border-[#E5E5E5] shadow-xs opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 cursor-pointer"
                  aria-label={isPlaying ? "Pause machine video" : "Play machine video"}
                  title={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 text-[#555555] hover:text-[#E51E2A]" />
                  ) : (
                    <Play className="w-3.5 h-3.5 text-[#555555] hover:text-[#E51E2A] ml-0.5" />
                  )}
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
