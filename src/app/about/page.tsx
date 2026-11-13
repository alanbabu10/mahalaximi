import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Target,
  Eye,
  ShieldCheck,
  Award,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ReadyBanner from "@/components/ReadyBanner";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Mahalaxmi Tools & Plastic Industries LLP",
  description:
    "Discover Mahalaxmi Tools & Plastic Industries (MTPI) – your trusted partner with 20+ years of precision tooling, mould development, and injection molding manufacturing expertise.",
  openGraph: {
    title: "About Us | Mahalaxmi Tools & Plastic Industries LLP",
    description:
      "20+ years of proven manufacturing excellence, in-house tool room, and advanced machinery fleet.",
    type: "website",
  },
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: Target,
      title: "Precision Engineering",
      description:
        "Rigorous adherence to micron-level tolerances and product specifications across all tooling, mould, and component manufacturing.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Confidentiality",
      description:
        "Every client design, mould specification, and proprietary product concept is treated under strict non-disclosure protections.",
    },
    {
      icon: Cpu,
      title: "Technological Advancement",
      description:
        "Continuous investment in cutting-edge machinery including Milacron servo injection moulders, HAAS, and BFW CNC machining centers.",
    },
    {
      icon: Award,
      title: "Reliable Quality Delivery",
      description:
        "Stringent multi-stage quality inspections from raw material verification to finished component dispatch.",
    },
  ];

  const capabilityHighlights = [
    {
      title: "In-House Tool Room",
      desc: "Complete mould design, machining, tool assembly, and regular preventive maintenance handled under one roof.",
      link: "/services",
    },
    {
      title: "Precision Injection Moulding",
      desc: "Fleet of energy-efficient servo machines ranging up to 450 Ton capacity for small to large volume manufacturing.",
      link: "/#machinery",
    },
    {
      title: "Die & Mould Development",
      desc: "Custom tooling engineered for electrical, plumbing, household, and demanding industrial applications.",
      link: "/services",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#080808] flex flex-col selection:bg-[#E51E2A] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Page Hero */}
      <PageHero
        badge="ABOUT OUR COMPANY"
        title="Your Trusted Partner in"
        titleAccent="Industrial Manufacturing"
        description="A considered approach to engineering, precision injection molding, tooling development, and custom manufacturing solutions backed by over two decades of technical expertise."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* 3. Company Introduction & Facility Showcase */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5E5E5] overflow-hidden">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Facility Image & Stats */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left" duration={800}>
                <div className="relative rounded-[6px] overflow-hidden bg-neutral-100 border border-[#E5E5E5] shadow-xs group">
                  <Image
                    src="/images/about-facility.png"
                    alt="Mahalaxmi Tools manufacturing facility floor and injection moulding line"
                    width={640}
                    height={440}
                    priority
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-[4px] border border-[#E5E5E5] flex items-center justify-between shadow-xs">
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-[#777777]">
                        FACILITY STATUS
                      </span>
                      <span className="block text-[13px] font-bold text-[#080808]">
                        Full In-House Tooling &amp; Moulding
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded text-[11px] font-medium border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active Operations
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Company Background & Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <ScrollReveal direction="right" duration={800} delay={100}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
                  <span className="text-[12px] font-semibold text-[#777777] uppercase tracking-wider">
                    COMPANY BACKGROUND
                  </span>
                </div>

                <h2 className="text-[32px] sm:text-[38px] font-bold text-[#080808] leading-[1.15] tracking-tight">
                  Two Decades of Dedicated Tooling &amp; Moulding Excellence
                </h2>

                <p className="mt-5 text-[15px] leading-[1.65] text-[#555555]">
                  Mahalaxmi Tools &amp; Plastic Industries LLP (MTPI) specializes in precision tooling, custom mould development, and high-performance industrial plastic component manufacturing.
                </p>

                <p className="mt-3.5 text-[15px] leading-[1.65] text-[#555555]">
                  Our facility operates an integrated ecosystem where design engineering, CNC toolroom machining, spark erosion EDM, and high-tonnage injection moulding unite under one roof to deliver consistent, dependable results.
                </p>

                {/* Social Proof Metric */}
                <div className="mt-8 pt-6 border-t border-[#E5E5E5] flex flex-wrap items-center gap-6 sm:gap-10">
                  <div>
                    <div className="text-[36px] font-bold text-[#E51E2A] leading-none">
                      20+
                    </div>
                    <span className="text-[12px] font-medium text-[#777777] mt-1 block">
                      Years Manufacturing Experience
                    </span>
                  </div>

                  <div className="h-10 w-px bg-[#E5E5E5]" />

                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/about-avatars.png"
                      alt="Trusted clients and partner leads"
                      width={78}
                      height={36}
                      loading="lazy"
                      className="h-9 w-auto object-contain flex-shrink-0"
                    />
                    <div className="text-[13px] leading-tight">
                      <span className="block text-[#555555]">Trusted by</span>
                      <span className="block font-semibold text-[#080808]">
                        105+ business partners
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision Cards */}
      <section className="py-16 sm:py-20 bg-[#FAFAFA] border-b border-[#E5E5E5] overflow-hidden">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission */}
            <ScrollReveal direction="left" duration={750}>
              <div className="h-full bg-white border border-[#E5E5E5] rounded-[6px] p-8 sm:p-9 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[4px] bg-red-50 text-[#E51E2A] flex items-center justify-center mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#E51E2A] block mb-1">
                    OUR PURPOSE
                  </span>
                  <h3 className="text-[24px] sm:text-[26px] font-bold text-[#080808] tracking-tight">
                    Our Mission
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-[#555555]">
                    To engineer and deliver precision-moulded components, high-grade tools, and dies that empower industrial manufacturers with exceptional dimensional quality, zero-defect consistency, and reliable production uptime.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0F0F0] flex items-center gap-2 text-[12.5px] text-[#777777]">
                  <CheckCircle2 className="w-4 h-4 text-[#E51E2A]" />
                  <span>Focused on technical excellence and customer specifications</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Our Vision */}
            <ScrollReveal direction="right" duration={750} delay={100}>
              <div className="h-full bg-white border border-[#E5E5E5] rounded-[6px] p-8 sm:p-9 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[4px] bg-blue-50 text-[#30467F] flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#30467F] block mb-1">
                    OUR HORIZON
                  </span>
                  <h3 className="text-[24px] sm:text-[26px] font-bold text-[#080808] tracking-tight">
                    Our Vision
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-[#555555]">
                    To be recognized as a premier, technologically advanced industrial manufacturing and tooling partner, setting industry benchmarks in precision engineering, durable tooling solutions, and dependable customer partnerships.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0F0F0] flex items-center gap-2 text-[12.5px] text-[#777777]">
                  <CheckCircle2 className="w-4 h-4 text-[#30467F]" />
                  <span>Continuous technological and infrastructural innovation</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5E5E5] overflow-hidden">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down" duration={600}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
              <span className="text-[12px] font-semibold text-[#777777] uppercase tracking-wider">
                HOW WE OPERATE
              </span>
            </div>

            <div className="text-center max-w-[620px] mx-auto mb-12 sm:mb-14">
              <h2 className="text-[32px] sm:text-[40px] font-bold text-[#080808] tracking-tight">
                Our Core Values
              </h2>
              <p className="mt-3 text-[14px] sm:text-[15px] text-[#555555]">
                Principles that guide our engineering standards, customer relationships, and manufacturing processes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <ScrollReveal
                  key={val.title}
                  direction="up"
                  duration={750}
                  delay={idx * 100}
                >
                  <div className="h-full bg-white border border-[#E5E5E5] rounded-[4px] p-6 hover:border-[#E51E2A] transition-colors shadow-xs flex flex-col">
                    <div className="w-10 h-10 rounded-[4px] bg-neutral-100 flex items-center justify-center text-[#E51E2A] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#080808]">
                      {val.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#555555]">
                      {val.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Mahalakshmi & In-House Toolroom */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFAFA] border-b border-[#E5E5E5] overflow-hidden">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Highlight Cards */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <ScrollReveal direction="left" duration={800}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
                  <span className="text-[12px] font-semibold text-[#777777] uppercase tracking-wider">
                    WHY CHOOSE US
                  </span>
                </div>
                <h2 className="text-[32px] sm:text-[38px] font-bold text-[#080808] leading-tight tracking-tight">
                  Comprehensive In-House Tool Room &amp; Manufacturing Ecosystem
                </h2>
                <p className="mt-4 text-[14.5px] leading-relaxed text-[#555555]">
                  By maintaining complete control over mould design, tool steel machining, spark erosion, and final component moulding, we eliminate third-party delays and uphold strict quality standards.
                </p>

                <div className="mt-6 space-y-4">
                  {capabilityHighlights.map((cap) => (
                    <div
                      key={cap.title}
                      className="p-5 bg-white border border-[#E5E5E5] rounded-[4px] shadow-xs flex items-start justify-between gap-4 group"
                    >
                      <div>
                        <h4 className="text-[16px] font-bold text-[#080808] group-hover:text-[#E51E2A] transition-colors">
                          {cap.title}
                        </h4>
                        <p className="mt-1 text-[13px] text-[#555555] leading-relaxed">
                          {cap.desc}
                        </p>
                      </div>
                      <Link
                        href={cap.link}
                        className="p-1.5 rounded text-[#888888] hover:text-[#E51E2A] transition-colors flex-shrink-0"
                        aria-label={`Learn more about ${cap.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Visual Toolroom Floor and Machining */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="right" duration={800} delay={150}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-[4px] overflow-hidden border border-[#E5E5E5] bg-white shadow-xs">
                    <Image
                      src="/images/why-cnc-machining.png"
                      alt="CNC Vertical Machining center at Mahalakshmi"
                      width={480}
                      height={600}
                      loading="lazy"
                      className="w-full h-[280px] object-cover hover:scale-103 transition-transform duration-300"
                    />
                    <div className="p-3.5 bg-white text-center">
                      <span className="text-[12px] font-semibold text-[#080808]">
                        High-Precision CNC Tooling
                      </span>
                    </div>
                  </div>

                  <div className="rounded-[4px] overflow-hidden border border-[#E5E5E5] bg-white shadow-xs">
                    <Image
                      src="/images/why-toolroom-floor.png"
                      alt="In-house toolroom floor with modern machinery"
                      width={480}
                      height={600}
                      loading="lazy"
                      className="w-full h-[280px] object-cover hover:scale-103 transition-transform duration-300"
                    />
                    <div className="p-3.5 bg-white text-center">
                      <span className="text-[12px] font-semibold text-[#080808]">
                        In-House Injection Floor
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Ready To Work With Us CTA */}
      <ReadyBanner />

      {/* 8. Global Footer */}
      <Footer />
    </main>
  );
}
