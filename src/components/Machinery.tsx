"use client";

import { useEffect, useRef, useState, useTransition, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Maximize2,
  X,
  Cpu,
  Layers,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Machine {
  id: string;
  number: string;
  brand: string;
  name: string;
  image: string;
  description: string;
  type: string;
  specHighlight: string;
}

const MACHINES: Machine[] = [
  {
    id: "milacron-450",
    number: "01/07",
    brand: "Milacron",
    name: "Milacron Hydron Servo 450 Ton",
    image: "/mahalaxmi_milacron_hydron_servo_450.webp",
    description:
      "Advanced injection moulding technology designed for precision and reliable manufacturing performance.",
    type: "Injection Moulding",
    specHighlight: "450 Ton Clamping Force · Servo Energy Efficient",
  },
  {
    id: "milacron-150",
    number: "02/07",
    brand: "Milacron",
    name: "Milacron N-Series 150 Eco",
    image: "/mahalaxmi_150_ton_machine.webp",
    description:
      "Compact and efficient injection moulding technology for precision manufacturing applications.",
    type: "Injection Moulding",
    specHighlight: "150 Ton Capacity · Eco Series High Repeatability",
  },
  {
    id: "sparkonix-edm",
    number: "03/07",
    brand: "Sparkonix",
    name: "Sparkonix EDM Machines",
    image: "/mahalaxmi_sparkonix_2_machines.webp",
    description:
      "Precision EDM technology supporting accurate machining and detailed component production.",
    type: "Spark Erosion EDM",
    specHighlight: "Dual EDM Setup · Sub-Micron Cavity Finishing",
  },
  {
    id: "bfw-bmv-9500",
    number: "04/07",
    brand: "BFW",
    name: "BFW BMV PRO 9500 HD",
    image: "/mahalaxmi_bmv_pro_9500_hd.webp",
    description:
      "Advanced machining technology designed for precision engineering and demanding manufacturing operations.",
    type: "Heavy Duty VMC",
    specHighlight: "High-Rigidity Spindle · Precision Die & Mould Milling",
  },
  {
    id: "stm-vl-1570",
    number: "05/07",
    brand: "STM",
    name: "STM VL 1570",
    image: "/mahalaxmi_stm_vl1570.webp",
    description:
      "Industrial machining equipment designed for accuracy, consistency and reliable performance.",
    type: "Vertical Machining Center",
    specHighlight: "Large Working Envelope · Heavy Component Milling",
  },
  {
    id: "jyoti-vmc-1260",
    number: "06/07",
    brand: "Jyoti",
    name: "Jyoti VMC 1260",
    image: "/mahalaxmi_jyoti_vmc_1260.webp",
    description:
      "Vertical machining technology built for precision machining and efficient production workflows.",
    type: "Precision VMC",
    specHighlight: "High-Speed Dynamic Machining · Rapid Tool Changer",
  },
  {
    id: "haas-vf3yt",
    number: "07/07",
    brand: "HAAS",
    name: "HAAS VF-3YT",
    image: "/mahalaxmi_haas_vf3yt.webp",
    description:
      "Advanced CNC machining technology delivering precision, consistency and dependable manufacturing performance.",
    type: "Extended Travel CNC",
    specHighlight: "High-Precision HAAS Control · Tight Tolerance Tooling",
  },
];

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function Machinery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const isReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const [, startTransition] = useTransition();

  // Desktop scroll tracking
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = container.offsetHeight - windowHeight;

      if (totalScrollable <= 0) return;

      // Calculate how far into the container we've scrolled
      const currentScroll = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      startTransition(() => {
        setScrollProgress(rawProgress);
        // Map progress to active machine index
        const index = Math.min(
          MACHINES.length - 1,
          Math.max(0, Math.round(rawProgress * (MACHINES.length - 1)))
        );
        setActiveIndex(index);
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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  // Jump to specific machine index smoothly
  const scrollToMachine = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const totalScrollable = container.offsetHeight - window.innerHeight;
    const targetScrollRatio = index / (MACHINES.length - 1);
    const containerTop = container.offsetTop;
    const targetScrollY = containerTop + targetScrollRatio * totalScrollable;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToMachine(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < MACHINES.length - 1) {
      scrollToMachine(activeIndex + 1);
    }
  };

  const activeMachine = MACHINES[activeIndex] || MACHINES[0];

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          DESKTOP VIEW: STICKY SCROLL-DRIVEN SHOWCASE (lg:block)
      ───────────────────────────────────────────────────────────── */}
      <section
        id="machinery"
        ref={containerRef}
        className="relative hidden lg:block bg-white border-t border-[#E5E5E5]"
        style={{ height: "650vh" }}
      >
        {/* Sticky Viewport Stage */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-[#FAFAFA]">
          {/* Subtle Technical Engineering Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />

          {/* Faint Architectural Vignette */}
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white/80"
            aria-hidden="true"
          />

          {/* 1. TOP HEADER & NAVIGATION BAR */}
          <div className="relative z-20 pt-6 pb-3 border-b border-[#E5E5E5] bg-white/90 backdrop-blur-md">
            <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
              <div className="flex items-center justify-between gap-6">
                {/* Left: Titles & Headings */}
                <div className="max-w-[680px]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
                    <span className="text-[11px] font-semibold text-[#777777] uppercase tracking-wider">
                      OUR MANUFACTURING CAPABILITIES
                    </span>
                    <span className="text-[#CCCCCC]">|</span>
                    <span className="text-[11px] font-bold text-[#E51E2A] uppercase tracking-wider">
                      OUR MACHINERY
                    </span>
                  </div>

                  <h2 className="text-[28px] xl:text-[32px] font-bold text-[#080808] tracking-tight leading-tight">
                    Advanced Machinery. Precision Engineering.
                  </h2>

                  <p className="mt-1 text-[13px] text-[#555555] line-clamp-1">
                    Equipped with advanced industrial machinery and cutting-edge
                    technology, we deliver precision, quality and reliability in
                    every manufacturing process.
                  </p>
                </div>

                {/* Right: Machine Step Tracker & Nav Controls */}
                <div className="flex items-center gap-5 flex-shrink-0">
                  {/* Machine Counter */}
                  <div className="flex items-baseline gap-1 bg-white border border-[#E5E5E5] rounded-[4px] px-3.5 py-1.5 shadow-xs">
                    <span className="text-[20px] font-bold text-[#E51E2A] leading-none">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[13px] font-medium text-[#888888] leading-none">
                      / 07
                    </span>
                  </div>

                  {/* Interactive Fleet Pills */}
                  <div className="flex items-center gap-1.5 bg-neutral-100 p-1 rounded-[5px] border border-[#E5E5E5]">
                    {MACHINES.map((m, idx) => (
                      <button
                        key={m.id}
                        onClick={() => scrollToMachine(idx)}
                        className={`h-7 px-2.5 rounded-[3px] text-[11px] font-medium transition-all cursor-pointer ${
                          idx === activeIndex
                            ? "bg-[#E51E2A] text-white shadow-xs font-semibold"
                            : "text-[#555555] hover:text-[#080808] hover:bg-white"
                        }`}
                        title={m.name}
                        aria-label={`Jump to machine ${m.number}: ${m.name}`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </button>
                    ))}
                  </div>

                  {/* Prev / Next Chevrons */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrev}
                      disabled={activeIndex === 0}
                      className="p-1.5 rounded-[4px] border border-[#E5E5E5] bg-white text-[#080808] hover:bg-neutral-100 disabled:opacity-35 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      aria-label="Previous machine"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={activeIndex === MACHINES.length - 1}
                      className="p-1.5 rounded-[4px] border border-[#E5E5E5] bg-white text-[#080808] hover:bg-neutral-100 disabled:opacity-35 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      aria-label="Next machine"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. MAIN MACHINERY STAGE (40% INFO / 60% LARGE IMAGE) */}
          <div className="relative z-10 flex-1 flex items-center py-4 lg:py-6">
            <div className="w-full max-w-[1240px] mx-auto px-6 lg:px-8">
              <div className="grid grid-cols-12 gap-8 items-center">
                {/* ────────────────────────────────────────────────────────
                    LEFT COLUMN: MACHINE INFORMATION (~40% of space)
                ──────────────────────────────────────────────────────── */}
                <div className="col-span-5 flex flex-col justify-center">
                  <div className="relative bg-white border border-[#E5E5E5] rounded-[6px] p-7 lg:p-8 shadow-xs">
                    {/* Watermark Machine Index in Background */}
                    <div
                      className="absolute top-4 right-5 text-[64px] font-black text-neutral-100 select-none pointer-events-none leading-none tracking-tighter"
                      aria-hidden="true"
                    >
                      {String(activeIndex + 1).padStart(2, "0")}
                    </div>

                    {/* Machine Brand Badge & Category */}
                    <div className="relative z-10 flex items-center gap-2.5 mb-4">
                      <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white bg-[#E51E2A] rounded-[3px]">
                        {activeMachine.brand}
                      </span>
                      <span className="text-[12px] font-medium text-[#666666] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {activeMachine.type}
                      </span>
                    </div>

                    {/* Machine Name */}
                    <h3 className="relative z-10 text-[26px] xl:text-[30px] font-bold text-[#080808] tracking-tight leading-[1.2]">
                      {activeMachine.name}
                    </h3>

                    {/* Machine Description */}
                    <p className="relative z-10 mt-3 text-[14px] leading-[1.65] text-[#555555]">
                      {activeMachine.description}
                    </p>

                    {/* Key Technical Highlight */}
                    <div className="relative z-10 mt-5 pt-4 border-t border-[#F0F0F0] flex items-center gap-2.5 text-[12.5px] text-[#444444]">
                      <Cpu className="w-4 h-4 text-[#E51E2A] flex-shrink-0" />
                      <span className="font-medium text-[#222222]">
                        {activeMachine.specHighlight}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="relative z-10 mt-6 pt-5 border-t border-[#E5E5E5] flex items-center gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center h-[38px] px-5 text-[13.5px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] transition-colors shadow-xs group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A]"
                      >
                        <span>Discuss Requirements</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>

                      <button
                        onClick={() => setModalOpen(true)}
                        className="inline-flex items-center justify-center h-[38px] px-4 text-[13px] font-medium text-[#080808] bg-neutral-100 hover:bg-neutral-200 border border-[#E5E5E5] rounded-[4px] transition-colors cursor-pointer"
                        title="View all 7 machines in grid"
                      >
                        <Layers className="w-4 h-4 mr-1.5 text-[#555555]" />
                        <span>View Fleet List</span>
                      </button>
                    </div>
                  </div>

                  {/* Quick Machinery Quick-Switch Selector Bar */}
                  <div className="mt-4 flex items-center justify-between text-[11px] text-[#777777] px-1">
                    <span>
                      Machine {activeMachine.number} · {activeMachine.brand}
                    </span>
                    <span className="flex items-center gap-1 text-[#E51E2A] font-medium">
                      Scroll to transition
                      <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                    </span>
                  </div>
                </div>

                {/* ────────────────────────────────────────────────────────
                    RIGHT COLUMN: LARGE MACHINERY VISUAL ARENA (~60% of space)
                ──────────────────────────────────────────────────────── */}
                <div className="col-span-7">
                  <div className="relative w-full h-[460px] xl:h-[510px] rounded-[6px] border border-[#E5E5E5] bg-white shadow-sm overflow-hidden flex items-center justify-center">
                    {/* Precision Engineering Backdrop & Crosshairs */}
                    <div
                      className="absolute inset-0 opacity-[0.25] pointer-events-none"
                      style={{
                        backgroundImage:
                          "linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                      aria-hidden="true"
                    />

                    {/* Corner Crosshairs */}
                    <span
                      className="absolute top-3 left-3 text-[11px] font-mono text-[#E51E2A] select-none"
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <span
                      className="absolute top-3 right-3 text-[11px] font-mono text-[#999999] select-none"
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <span
                      className="absolute bottom-3 left-3 text-[11px] font-mono text-[#999999] select-none"
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <span
                      className="absolute bottom-3 right-3 text-[11px] font-mono text-[#E51E2A] select-none"
                      aria-hidden="true"
                    >
                      +
                    </span>

                    {/* Technical Specification Watermark Tag */}
                    <div className="absolute top-4 left-6 z-10 flex items-center gap-2">
                      <span className="text-[10px] font-mono tracking-wider text-[#888888] bg-neutral-100/90 px-2 py-0.5 rounded border border-[#E5E5E5]">
                        REF: MTPI-M{String(activeIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[10px] font-mono tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        IN-HOUSE ASSET
                      </span>
                    </div>

                    {/* Grounding Base Shadow */}
                    <div
                      className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-[16px] bg-black/10 rounded-full blur-md pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* ALL 7 MACHINERY IMAGES (Layered with Scroll Interpolation) */}
                    {MACHINES.map((machine, idx) => {
                      const isCurrent = idx === activeIndex;

                      // Continuous smooth interpolation
                      const normalizedDiff = (scrollProgress * (MACHINES.length - 1)) - idx;
                      const absDiff = Math.abs(normalizedDiff);

                      // Opacity calculation: 1 at center, drops to 0 as distance increases
                      const opacity = isReducedMotion
                        ? isCurrent
                          ? 1
                          : 0
                        : Math.max(0, Math.min(1, 1 - absDiff * 1.3));

                      // Scale calculation: slightly scales from 0.94 to 1.0 to 1.03
                      const scale = isReducedMotion
                        ? 1
                        : 0.96 + Math.max(0, (1 - absDiff) * 0.04);

                      // Y Translation: subtle vertical parallax
                      const translateY = isReducedMotion
                        ? 0
                        : normalizedDiff * -24;

                      // Only render visible items for extreme rendering performance
                      const isVisible = absDiff < 1.1;

                      if (!isVisible) return null;

                      return (
                        <div
                          key={machine.id}
                          className="absolute inset-0 flex items-center justify-center p-6 xl:p-8 pointer-events-none"
                          style={{
                            opacity,
                            transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                            transition: isReducedMotion
                              ? "opacity 200ms ease"
                              : "transform 100ms linear, opacity 100ms linear",
                            zIndex: isCurrent ? 5 : 2,
                            willChange: "transform, opacity",
                          }}
                        >
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                              src={machine.image}
                              alt={`${machine.name} - ${machine.brand} high precision machinery at Mahalaxmi`}
                              width={900}
                              height={550}
                              priority={idx === 0 || idx === 1}
                              loading={idx < 2 ? "eager" : "lazy"}
                              className="max-w-full max-h-full w-auto h-auto object-contain filter drop-shadow-md select-none"
                            />
                          </div>
                        </div>
                      );
                    })}

                    {/* Expand / View Full Preview Button */}
                    <button
                      onClick={() => setModalOpen(true)}
                      className="absolute bottom-4 right-4 z-10 p-2 rounded-[4px] bg-white/90 hover:bg-white text-[#080808] border border-[#E5E5E5] shadow-xs transition-colors cursor-pointer group"
                      title="View all machinery in detail"
                      aria-label="View all machinery in detail"
                    >
                      <Maximize2 className="w-4 h-4 text-[#555555] group-hover:text-[#E51E2A] transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. BOTTOM PROGRESS BAR & FOOTER CONTROLS */}
          <div className="relative z-20 py-3.5 border-t border-[#E5E5E5] bg-white">
            <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
              <div className="flex items-center justify-between gap-6">
                {/* Scroll Indicator with Animated Chevron */}
                <div className="flex items-center gap-2 text-[12px] text-[#666666]">
                  <div className="w-4 h-6 border-2 border-[#888888] rounded-full flex justify-center pt-1">
                    <div className="w-1 h-1.5 bg-[#E51E2A] rounded-full animate-bounce" />
                  </div>
                  <span>Scroll down to navigate through machinery fleet</span>
                </div>

                {/* Continuous Red Progress Bar Across All 7 Machines */}
                <div className="flex-1 max-w-[420px] mx-6">
                  <div className="flex items-center justify-between text-[11px] text-[#888888] mb-1 font-mono">
                    <span>01 {MACHINES[0].brand}</span>
                    <span className="text-[#E51E2A] font-semibold">
                      {Math.round(scrollProgress * 100)}% COMPLETE
                    </span>
                    <span>07 {MACHINES[MACHINES.length - 1].brand}</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#E51E2A] transition-all duration-100 ease-out"
                      style={{ width: `${scrollProgress * 100}%` }}
                    />
                  </div>
                </div>

                {/* View All Machinery Modal Trigger */}
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[12.5px] font-medium text-[#080808] hover:text-[#E51E2A] bg-neutral-50 hover:bg-neutral-100 border border-[#E5E5E5] rounded-[4px] transition-colors cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-[#E51E2A]" />
                  <span>View All Machinery</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MOBILE & TABLET VIEW: CLEAN RESPONSIVE STACK (block lg:hidden)
      ───────────────────────────────────────────────────────────── */}
      <section
        id="machinery-mobile"
        className="block lg:hidden py-16 sm:py-20 bg-white border-t border-[#E5E5E5] overflow-hidden"
      >
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6">
          {/* Section Subtitle */}
          <ScrollReveal direction="down" duration={600}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
              <span className="text-[12px] font-semibold text-[#777777] uppercase tracking-wider">
                OUR MANUFACTURING CAPABILITIES
              </span>
            </div>

            {/* Section Heading */}
            <div className="mb-10 sm:mb-12">
              <span className="text-[12px] font-bold text-[#E51E2A] uppercase tracking-wider block mb-1">
                OUR MACHINERY
              </span>
              <h2 className="text-[32px] sm:text-[40px] font-bold text-[#080808] tracking-tight leading-[1.12]">
                Advanced Machinery. Precision Engineering.
              </h2>
              <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-[#555555]">
                Equipped with advanced industrial machinery and cutting-edge
                technology, we deliver precision, quality and reliability in
                every manufacturing process.
              </p>
            </div>
          </ScrollReveal>

          {/* 7 Responsive Stacked Machine Cards */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {MACHINES.map((machine, idx) => (
              <ScrollReveal
                key={machine.id}
                direction="up"
                duration={700}
                delay={idx * 80}
              >
                <div className="bg-white border border-[#E5E5E5] rounded-[6px] overflow-hidden shadow-xs">
                  {/* Card Top Header */}
                  <div className="px-5 py-3.5 bg-neutral-50 border-b border-[#E5E5E5] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[12px] font-mono font-bold text-[#E51E2A]">
                        {machine.number}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-white bg-[#E51E2A] rounded-[3px]">
                        {machine.brand}
                      </span>
                    </div>

                    <span className="text-[11px] font-medium text-[#666666] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {machine.type}
                    </span>
                  </div>

                  {/* Machine Image Frame */}
                  <div className="relative w-full h-[240px] sm:h-[300px] bg-[#FBFBFB] border-b border-[#E5E5E5] p-4 flex items-center justify-center">
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage:
                          "linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                      aria-hidden="true"
                    />

                    <Image
                      src={machine.image}
                      alt={`${machine.name} - ${machine.brand}`}
                      width={640}
                      height={380}
                      loading="lazy"
                      className="max-w-full max-h-full w-auto h-auto object-contain filter drop-shadow-sm"
                    />
                  </div>

                  {/* Card Content & Description */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#080808] tracking-tight">
                      {machine.name}
                    </h3>

                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#555555]">
                      {machine.description}
                    </p>

                    <div className="mt-4 pt-3.5 border-t border-[#F0F0F0] flex items-center gap-2 text-[12px] text-[#444444]">
                      <Cpu className="w-3.5 h-3.5 text-[#E51E2A] flex-shrink-0" />
                      <span className="font-medium text-[#222222]">
                        {machine.specHighlight}
                      </span>
                    </div>

                    <div className="mt-5">
                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center px-4 py-2.5 text-[13.5px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] transition-colors shadow-xs group"
                      >
                        <span>Discuss this machine</span>
                        <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          "VIEW ALL MACHINERY" MODAL / OVERVIEW DRAWER
      ───────────────────────────────────────────────────────────── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-machinery-title"
        >
          <div className="bg-white rounded-[6px] border border-[#E5E5E5] w-full max-w-[1100px] max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-[#E5E5E5] flex items-center justify-between bg-neutral-50 flex-shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-[14px] h-[2px] bg-[#E51E2A]" />
                  <span className="text-[11px] font-bold text-[#E51E2A] uppercase tracking-wider">
                    OUR MACHINERY · COMPLETE FLEET
                  </span>
                </div>
                <h3
                  id="modal-machinery-title"
                  className="text-[20px] sm:text-[24px] font-bold text-[#080808]"
                >
                  All 7 Precision Manufacturing Units
                </h3>
              </div>

              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-[4px] hover:bg-neutral-200 text-[#555555] hover:text-[#080808] transition-colors cursor-pointer"
                aria-label="Close machinery list"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Grid of 7 Machines */}
            <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {MACHINES.map((machine, idx) => (
                <div
                  key={machine.id}
                  className="border border-[#E5E5E5] rounded-[4px] p-4 bg-white hover:border-[#E51E2A] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold text-[#E51E2A]">
                        {machine.number}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#30467F] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        {machine.brand}
                      </span>
                    </div>

                    <div className="relative w-full h-[140px] bg-neutral-50 rounded border border-[#E5E5E5] flex items-center justify-center p-2 mb-3">
                      <Image
                        src={machine.image}
                        alt={machine.name}
                        width={300}
                        height={180}
                        loading="lazy"
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h4 className="text-[15px] font-bold text-[#080808] leading-tight">
                      {machine.name}
                    </h4>

                    <p className="mt-1.5 text-[12px] text-[#555555] leading-relaxed">
                      {machine.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F0F0F0] flex items-center justify-between">
                    <span className="text-[11px] text-[#777777]">
                      {machine.type}
                    </span>
                    <button
                      onClick={() => {
                        setModalOpen(false);
                        scrollToMachine(idx);
                      }}
                      className="text-[12px] font-medium text-[#E51E2A] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      View in showcase
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-[#E5E5E5] bg-neutral-50 flex items-center justify-between flex-shrink-0">
              <span className="text-[13px] text-[#666666]">
                Need detailed tonnage or CNC specifications?
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-[13px] font-medium text-[#555555] hover:text-[#080808] cursor-pointer"
                >
                  Close
                </button>
                <Link
                  href="/contact"
                  onClick={() => setModalOpen(false)}
                  className="inline-flex items-center px-4 py-2 text-[13px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] transition-colors"
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
