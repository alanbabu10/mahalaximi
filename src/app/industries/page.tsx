import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Droplet,
  Home as HomeIcon,
  Cog,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ReadyBanner from "@/components/ReadyBanner";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Industries We Serve | Mahalaxmi Tools & Plastic Industries LLP",
  description:
    "Explore the key industries served by MTPI: Electrical & Electronics, Plumbing & Sanitary Components, Household Goods, and Industrial & Engineering Components.",
  openGraph: {
    title: "Industries We Serve | Mahalaxmi Tools & Plastic Industries LLP",
    description:
      "Precision tooling and moulding solutions tailored for diverse industrial sectors.",
    type: "website",
  },
};

export default function IndustriesPage() {
  const industries = [
    {
      id: "electrical-electronics",
      title: "Electrical & Electronics",
      description:
        "Precision components for electrical fittings and housings. Engineered with flame-retardant polymers and high dielectric strength materials to meet stringent electrical safety and insulation guidelines.",
      image: "/images/ind-electronics.png",
      icon: Cpu,
      typicalParts: [
        "Switchgear and breaker housings",
        "Insulated terminal blocks and connectors",
        "Enclosures for electronic control units",
        "Cable glands, sleeves, and modular covers",
      ],
      standards: "Flame Retardant (UL94) · High Dielectric Stability",
    },
    {
      id: "plumbing-sanitary",
      title: "Plumbing & Sanitary Components",
      description:
        "Robust plastic components designed for longlasting plumbing and sanitary performance. Manufactured to resist hydrostatic pressure, chemical corrosion, and thermal cycling over extended operating lifetimes.",
      image: "/images/ind-plumbing.png",
      icon: Droplet,
      typicalParts: [
        "Precision pipe fittings & threaded couplings",
        "Internal valve cartridges and flow diverters",
        "Bathroom sanitary fixtures and escutcheons",
        "Leak-resistant seal bodies and washers",
      ],
      standards: "Hydrostatic Pressure Tested · Chemical & Scale Resistant",
    },
    {
      id: "household-goods",
      title: "Household Goods",
      description:
        "Reliable moulded components designed for modern consumer and household applications. Balancing structural durability with clean cosmetic aesthetics and ergonomic ergonomics.",
      image: "/images/ind-household.png",
      icon: HomeIcon,
      typicalParts: [
        "Appliance structural bodies and panels",
        "Ergonomic handles, grips, and knobs",
        "Durable storage closures and lids",
        "Precision consumer product assemblies",
      ],
      standards: "High Aesthetic Finish · Food-Grade & Recyclable Polymers",
    },
    {
      id: "industrial-engineering",
      title: "Industrial & Engineering Components",
      description:
        "Precision-moulded engineering components built to meet stringent industrial standards. Utilizing engineering-grade polymers designed to endure mechanical friction, high loads, and rigorous factory environments.",
      image: "/images/ind-engineering.png",
      icon: Cog,
      typicalParts: [
        "High-wear nylon gears and sprockets",
        "Machinery bushings, guides, and spacers",
        "Protective industrial enclosures and guards",
        "Heavy-duty brackets and mounting fixtures",
      ],
      standards: "Tight Dimensional Tolerances · High Tensile Strength",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#080808] flex flex-col selection:bg-[#E51E2A] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Page Hero */}
      <PageHero
        badge="SECTOR SOLUTIONS"
        title="Specialized Manufacturing for"
        titleAccent="Critical Industries"
        description="Customized tooling, mould engineering, and plastic component production developed to meet the exacting functional and regulatory requirements of diverse industrial applications."
        breadcrumbs={[{ label: "Industries" }]}
      />

      {/* 3. Industry Sectors Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5E5E5] overflow-hidden">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <ScrollReveal
                  key={ind.id}
                  direction={idx % 2 === 0 ? "left" : "right"}
                  duration={750}
                  delay={idx * 100}
                >
                  <div className="bg-white border border-[#E5E5E5] rounded-[6px] overflow-hidden shadow-xs hover:border-[#E51E2A] transition-all flex flex-col h-full group">
                    {/* Industry Image Banner */}
                    <div className="relative w-full h-[220px] sm:h-[260px] bg-neutral-900 overflow-hidden">
                      <Image
                        src={ind.image}
                        alt={`${ind.title} components by Mahalaxmi Tools`}
                        width={600}
                        height={380}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-red-300">
                            SECTOR 0{idx + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-[22px] font-bold text-[#080808] tracking-tight group-hover:text-[#E51E2A] transition-colors">
                          {ind.title}
                        </h3>

                        <p className="mt-3 text-[14px] leading-relaxed text-[#555555]">
                          {ind.description}
                        </p>

                        {/* Typical Manufactured Parts Checklist */}
                        <div className="mt-5 pt-4 border-t border-[#F0F0F0]">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777] block mb-2.5">
                            Typical Applications &amp; Mouldings:
                          </span>
                          <ul className="space-y-1.5 text-[13px] text-[#333333]">
                            {ind.typicalParts.map((part) => (
                              <li key={part} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#E51E2A] flex-shrink-0" />
                                <span>{part}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Standards & CTA */}
                      <div className="mt-6 pt-4 border-t border-[#E5E5E5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span className="text-[11px] font-mono text-[#666666] bg-neutral-100 px-2.5 py-1 rounded">
                          {ind.standards}
                        </span>

                        <Link
                          href={`/contact?industry=${encodeURIComponent(
                            ind.title
                          )}`}
                          className="inline-flex items-center text-[13px] font-semibold text-[#E51E2A] hover:text-[#CC1622] group/link"
                        >
                          <span>Request sector quote</span>
                          <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Ready To Work With Us CTA */}
      <ReadyBanner />

      {/* 5. Global Footer */}
      <Footer />
    </main>
  );
}
