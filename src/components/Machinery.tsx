"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Cpu } from "lucide-react";
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

const AUTOPLAY_MS = 6000;
const pad = (n: number) => String(n).padStart(2, "0");

export default function Machinery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const count = MACHINES.length;
  const goTo = useCallback((i: number) => setActive(((i % count) + count) % count), [count]);
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Respect reduced-motion and only auto-advance while the section is on screen.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);

    const el = sectionRef.current;
    const observer = el
      ? new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 })
      : null;
    if (el && observer) observer.observe(el);

    return () => {
      mq.removeEventListener("change", update);
      observer?.disconnect();
    };
  }, []);

  const autoplay = inView && !paused && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const t = window.setTimeout(next, AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [autoplay, next]);

  // Keep the active thumbnail visible in the strip (mobile scrolls sideways).
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.children[active] as HTMLElement | undefined;
    if (!strip || !thumb) return;
    const left = thumb.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2;
    strip.scrollTo({ left, behavior: reducedMotion ? "auto" : "smooth" });
  }, [active, reducedMotion]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    setPaused(false);
    if (start === null) return;
    const dx = e.changedTouches[0].clientX - start;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
  };

  return (
    <section
      id="machinery"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-[#FAFAFA] border-t border-[#E5E5E5] overflow-hidden"
    >
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + controls */}
        <ScrollReveal direction="down" duration={600}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
            <div className="max-w-[640px]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
                <span className="text-[12px] font-semibold text-[#777777] uppercase tracking-wider">
                  Our Machinery
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[40px] font-bold text-[#080808] tracking-tight leading-[1.15]">
                Advanced Machinery. Precision Engineering.
              </h2>
              <p className="mt-3 text-[14px] sm:text-[15px] text-[#555555]">
                Equipped with advanced industrial machinery and cutting-edge technology, we deliver
                precision, quality and reliability in every manufacturing process.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="flex items-baseline gap-1" aria-live="polite">
                <span className="text-[28px] font-bold text-[#E51E2A] leading-none">
                  {pad(active + 1)}
                </span>
                <span className="text-[14px] font-medium text-[#888888]">/ {pad(count)}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous machine"
                  className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5] text-[#080808] hover:border-[#E51E2A] hover:text-[#E51E2A] flex items-center justify-center transition-colors shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E51E2A]"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next machine"
                  className="w-10 h-10 rounded-full bg-[#E51E2A] hover:bg-[#CC1622] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A]"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Slider */}
        <ScrollReveal direction="up" duration={750}>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Our machinery"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="relative rounded-[6px] border border-[#E5E5E5] bg-white shadow-xs overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E51E2A]"
          >
            <div
              className="flex motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}
            >
              {MACHINES.map((m, idx) => (
                <div
                  key={m.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${idx + 1} of ${count}: ${m.name}`}
                  aria-hidden={idx !== active}
                  className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-12"
                >
                  {/* Image */}
                  <div className="lg:col-span-7 relative h-[240px] sm:h-[340px] lg:h-[440px] bg-white border-b lg:border-b-0 lg:border-r border-[#F0F0F0] flex items-center justify-center p-6 sm:p-10">
                    <div
                      className="absolute inset-0 opacity-[0.35] pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                      aria-hidden="true"
                    />
                    <span className="absolute top-4 left-4 z-10 text-[10px] font-mono tracking-wider text-[#888888] bg-white/90 px-2 py-0.5 rounded border border-[#E5E5E5]">
                      {m.number}
                    </span>
                    <Image
                      src={m.image}
                      alt={`${m.name} - ${m.brand} high precision machinery at Mahalaxmi`}
                      width={1000}
                      height={700}
                      sizes="(max-width: 1024px) 100vw, 640px"
                      loading={idx === 0 ? "eager" : "lazy"}
                      className={`relative z-[1] w-full h-full object-contain transition-all duration-700 ${
                        idx === active ? "opacity-100 scale-100" : "opacity-40 scale-95"
                      }`}
                    />
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white bg-[#E51E2A] rounded-[3px]">
                        {m.brand}
                      </span>
                      <span className="text-[12px] font-medium text-[#666666]">{m.type}</span>
                    </div>
                    <h3 className="text-[24px] sm:text-[28px] font-bold text-[#080808] tracking-tight leading-[1.2]">
                      {m.name}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.65] text-[#555555]">{m.description}</p>
                    <div className="mt-5 pt-4 border-t border-[#F0F0F0] flex items-start gap-2.5 text-[13px]">
                      <Cpu className="w-4 h-4 text-[#E51E2A] flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-[#222222]">{m.specHighlight}</span>
                    </div>
                    <div className="mt-6">
                      <Link
                        href="/contact"
                        tabIndex={idx === active ? 0 : -1}
                        className="inline-flex items-center justify-center h-[38px] px-5 text-[13.5px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] transition-colors shadow-xs group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A]"
                      >
                        <span>Discuss Requirements</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Thumbnails */}
        <div
          ref={thumbsRef}
          className="mt-5 flex gap-3 overflow-x-auto pb-2 snap-x [scrollbar-width:thin]"
          aria-label="Choose a machine"
        >
          {MACHINES.map((m, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => goTo(idx)}
                aria-label={`Show ${m.name}`}
                aria-current={isActive}
                className={`relative snap-start flex-shrink-0 w-[132px] sm:w-[150px] lg:flex-1 lg:w-auto text-left bg-white border rounded-[4px] p-2.5 transition-colors cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E51E2A] ${
                  isActive ? "border-[#E51E2A] shadow-xs" : "border-[#E5E5E5] hover:border-neutral-400"
                }`}
              >
                <div className="h-[56px] flex items-center justify-center">
                  <Image
                    src={m.image}
                    alt=""
                    width={160}
                    height={90}
                    sizes="150px"
                    loading="lazy"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <span
                  className={`mt-2 block text-[11px] font-semibold leading-tight line-clamp-2 ${
                    isActive ? "text-[#E51E2A]" : "text-[#555555]"
                  }`}
                >
                  {m.name}
                </span>
                {/* Autoplay progress */}
                {isActive && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#F0F0F0]" aria-hidden="true">
                    <span
                      key={`${active}-${autoplay}`}
                      className="block h-full bg-[#E51E2A] origin-left"
                      style={
                        autoplay
                          ? { animation: `machinery-progress ${AUTOPLAY_MS}ms linear forwards` }
                          : { transform: "scaleX(1)" }
                      }
                    />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
