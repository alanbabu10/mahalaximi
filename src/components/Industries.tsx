import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Industries() {
  const industries = [
    {
      title: "Electrical & Electronics",
      description: "Precision components for electrical fittings and housings.",
      image: "/images/ind-electronics.png",
      direction: "left" as const,
    },
    {
      title: "Plumbing & Sanitary Components",
      description:
        "Robust plastic components designed for longlasting plumbing and sanitary performance",
      image: "/images/ind-plumbing.png",
      direction: "right" as const,
    },
    {
      title: "Household Goods",
      description:
        "Reliable moulded components designed for modern consumer and household applications",
      image: "/images/ind-household.png",
      direction: "left" as const,
    },
    {
      title: "Industrial & Engineering Components",
      description:
        "Precision-moulded engineering components built to meet stringent industrial standards",
      image: "/images/ind-engineering.png",
      direction: "right" as const,
    },
  ];

  return (
    <section id="industries" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E5E5E5] overflow-hidden">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Subtitle */}
        <ScrollReveal direction="down" duration={600}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
            <span className="text-[12px] font-medium text-[#777777]">
              What We Serve
            </span>
          </div>

          {/* Section Heading Centered */}
          <div className="text-center max-w-[620px] mx-auto mb-12 sm:mb-14">
            <h2 className="text-[36px] sm:text-[44px] font-bold text-[#080808] tracking-tight">
              Industries We Serve
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15px] text-[#555555]">
              Customized tooling and component solutions for specific industrial applications
            </p>
          </div>
        </ScrollReveal>

        {/* 2x2 Grid of Cards with Left & Right Entrances */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {industries.map((ind, idx) => (
            <ScrollReveal
              key={ind.title}
              direction={ind.direction}
              duration={750}
              delay={idx % 2 === 1 ? 150 : 0}
              className="w-full h-full flex"
            >
              <div className="bg-white border border-[#E5E5E5] rounded-[6px] p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between w-full">
                <div>
                  {/* Product/Industry Image Container with Lazy Loading */}
                  <div className="w-full rounded-[4px] overflow-hidden bg-neutral-100 border border-[#E5E5E5]/70 mb-5">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      width={550}
                      height={340}
                      loading="lazy"
                      className="w-full h-auto object-cover hover:scale-103 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-[19px] sm:text-[21px] font-bold text-[#080808]">
                        {ind.title}
                      </h3>
                      <p className="mt-2 text-[13px] sm:text-[13.5px] leading-relaxed text-[#555555]">
                        {ind.description}
                      </p>
                    </div>

                    {/* Red Square Action Button with Arrow */}
                    <Link
                      href="#contact"
                      aria-label={`Inquire about ${ind.title}`}
                      className="flex-shrink-0 w-10 h-10 bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] flex items-center justify-center text-white transition-colors shadow-xs group"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Link Row */}
        <ScrollReveal direction="up" duration={600} delay={200}>
          <div className="mt-12 pt-4 flex items-center justify-between gap-4">
            <div className="flex-1 h-px bg-[#E5E5E5]" />
            <Link
              href="#services"
              className="inline-flex items-center text-[14px] font-medium text-[#E51E2A] hover:text-[#CC1622] transition-colors whitespace-nowrap pl-4"
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
