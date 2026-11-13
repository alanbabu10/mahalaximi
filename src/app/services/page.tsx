import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ReadyBanner from "@/components/ReadyBanner";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Manufacturing Services & Capabilities | Mahalaxmi Tools & Plastic Industries LLP",
  description:
    "Explore our precision manufacturing services: Tools & Dies fabrication, Custom Injection Mould Development, and High-Precision Plastic Component Production.",
  openGraph: {
    title: "Manufacturing Services & Capabilities | Mahalaxmi Tools & Plastic Industries LLP",
    description:
      "Precision tooling, mould design, and injection moulding services supported by advanced machinery.",
    type: "website",
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "tools-and-dies",
      title: "Tools & Dies",
      subtitle: "Precision Tooling Fabrication & Die Engineering",
      description:
        "Precision tooling and die solutions designed to support industrial manufacturing processes. We engineer robust, high-durability dies crafted from premium tool steels to withstand intensive production cycles with consistent repeatability.",
      image: "/images/cap-tools-dies.png",
      features: [
        "Custom tooling design & 3D CAD/CAM engineering",
        "High-grade hardened alloy and tool steel fabrication",
        "Micro-tolerance CNC milling and spark erosion EDM finishing",
        "Preventive maintenance, refurbishment, and tool tuning",
      ],
      badge: "Core Capability",
    },
    {
      id: "mould-development",
      title: "Mould Development",
      subtitle: "Single & Multi-Cavity Injection Mould Engineering",
      description:
        "Mould solutions developed according to product requirements and manufacturing specifications. From initial concept analysis to precision mould trial, we deliver optimized cooling, balanced runners, and long-life mould architectures.",
      image: "/images/cap-mould-dev.png",
      features: [
        "Single-cavity and high-cavitation production moulds",
        "Precision core, cavity, and slide manufacturing",
        "Hot and cold runner system integration",
        "Mould flow optimization for reduced cycle times and zero shrinkage",
      ],
      badge: "Specialized Engineering",
    },
    {
      id: "plastic-components",
      title: "Plastic Components",
      subtitle: "High-Precision Injection Moulded Production",
      description:
        "Plastic component manufacturing solutions based on customer requirements and approved designs. Operating modern servo-driven injection moulding equipment from 150 to 450 Tons, we produce critical components with tight tolerances and exceptional surface finish.",
      image: "/images/cap-plastic-comp.png",
      features: [
        "Processing of technical and commodity engineering polymers",
        "Servo hydraulic clamping up to 450 Ton capacity",
        "Consistent dimensional repeatability and cosmetic finishing",
        "Batch traceability and strict multi-point QA inspection",
      ],
      badge: "Production Manufacturing",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#080808] flex flex-col selection:bg-[#E51E2A] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Page Hero */}
      <PageHero
        badge="OUR CAPABILITIES"
        title="Precision Tooling &"
        titleAccent="Manufacturing Services"
        description="Comprehensive manufacturing capabilities covering tool & die fabrication, custom mould development, and high-precision plastic injection moulding for demanding industrial sectors."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* 3. Detailed Services Showcase (Full Width Detailed Blocks) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5E5E5] overflow-hidden">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24">
          {services.map((service, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 pt-4 border-t border-[#E5E5E5] first:border-0 first:pt-0"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Card / Image Block */}
                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <ScrollReveal
                      direction={isReversed ? "right" : "left"}
                      duration={800}
                    >
                      <div className="relative rounded-[6px] overflow-hidden bg-neutral-900 border border-[#E5E5E5] shadow-xs group">
                        <Image
                          src={service.image}
                          alt={`${service.title} - ${service.subtitle}`}
                          width={640}
                          height={440}
                          priority={idx === 0}
                          loading={idx === 0 ? "eager" : "lazy"}
                          className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-103"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-red-300">
                            {service.badge}
                          </span>
                          <h4 className="text-[20px] font-bold text-white mt-1">
                            {service.title}
                          </h4>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Service Details & Capabilities */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <ScrollReveal
                      direction={isReversed ? "left" : "right"}
                      duration={800}
                      delay={100}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
                        <span className="text-[12px] font-semibold text-[#E51E2A] uppercase tracking-wider">
                          SERVICE 0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-[28px] sm:text-[34px] font-bold text-[#080808] leading-tight tracking-tight">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-[14px] font-medium text-[#30467F]">
                        {service.subtitle}
                      </p>

                      <p className="mt-4 text-[14.5px] leading-relaxed text-[#555555]">
                        {service.description}
                      </p>

                      {/* Key Scope Checklist */}
                      <div className="mt-6 space-y-2.5 pt-4 border-t border-[#F0F0F0]">
                        {service.features.map((feat) => (
                          <div
                            key={feat}
                            className="flex items-start gap-2.5 text-[13.5px] text-[#333333]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#E51E2A] flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Inquire Action Button */}
                      <div className="mt-8 pt-6 border-t border-[#E5E5E5] flex items-center gap-4">
                        <Link
                          href={`/contact?service=${encodeURIComponent(
                            service.title
                          )}`}
                          className="inline-flex items-center justify-center h-[38px] px-[18px] text-[13.5px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] transition-colors shadow-xs group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A]"
                        >
                          <span>Enquire about {service.title}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Equipment & Machinery Fleet Reference Section */}
      <section className="py-16 sm:py-20 bg-[#FAFAFA] border-b border-[#E5E5E5] overflow-hidden">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="down" duration={600}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
              <span className="text-[12px] font-semibold text-[#777777] uppercase tracking-wider">
                OUR INDUSTRIAL FLEET
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <h2 className="text-[30px] sm:text-[38px] font-bold text-[#080808] tracking-tight">
                  High-Precision Machinery Fleet
                </h2>
                <p className="mt-2 text-[14px] sm:text-[15px] text-[#555555] max-w-xl">
                  Our services are backed by top-tier Japanese, American, and Indian CNC machining centers and servo injection equipment.
                </p>
              </div>

              <Link
                href="/#machinery"
                className="inline-flex items-center gap-1 text-[14px] font-semibold text-[#E51E2A] hover:text-[#CC1622] transition-colors"
              >
                <span>Experience Machinery Showcase</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Quick Machinery Spec Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            {[
              { name: "Milacron 450T", brand: "Milacron" },
              { name: "Milacron 150T", brand: "Milacron" },
              { name: "Dual EDM", brand: "Sparkonix" },
              { name: "BMV PRO 9500", brand: "BFW" },
              { name: "VL 1570", brand: "STM" },
              { name: "VMC 1260", brand: "Jyoti" },
              { name: "VF-3YT", brand: "HAAS" },
            ].map((m) => (
              <div
                key={m.name}
                className="p-3.5 bg-white border border-[#E5E5E5] rounded-[4px] shadow-xs flex flex-col justify-center"
              >
                <span className="text-[10px] font-bold text-[#E51E2A] uppercase tracking-wider">
                  {m.brand}
                </span>
                <span className="text-[12.5px] font-bold text-[#080808] mt-1">
                  {m.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Ready To Work With Us CTA */}
      <ReadyBanner />

      {/* 6. Global Footer */}
      <Footer />
    </main>
  );
}
