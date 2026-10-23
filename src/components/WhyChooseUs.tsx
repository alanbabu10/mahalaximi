import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E5E5E5] overflow-hidden">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Subtitle */}
        <ScrollReveal direction="down" duration={600}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
            <span className="text-[12px] font-medium text-[#777777]">
              Why Chose Us
            </span>
          </div>

          {/* Section Heading Centered */}
          <div className="text-center max-w-[680px] mx-auto mb-12 sm:mb-16">
            <h2 className="text-[36px] sm:text-[44px] font-bold text-[#080808] tracking-tight">
              Precision and Expertise in Molding
            </h2>
          </div>
        </ScrollReveal>

        {/* 3-Column Asymmetric Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Column 1: Tall Vertical CNC Machining Image (Slides in from Left) */}
          <div className="md:col-span-4 flex">
            <ScrollReveal direction="left" duration={800} delay={100} className="w-full flex">
              <div className="rounded-[4px] overflow-hidden border border-[#E5E5E5] bg-neutral-100 h-[420px] sm:h-[460px] md:h-auto min-h-[420px] w-full shadow-xs">
                <Image
                  src="/images/why-cnc-machining.png"
                  alt="High precision CNC vertical machining milling gears"
                  width={480}
                  height={720}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Column 2: 2 Stacked Cards (Slides in from Bottom) */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <ScrollReveal direction="up" duration={750} delay={150}>
              {/* Card 1: 20+ Years Experience */}
              <div className="p-7 sm:p-8 bg-white border border-[#E5E5E5] rounded-[4px] shadow-xs flex flex-col justify-center">
                <div className="text-[48px] sm:text-[54px] font-bold text-[#E51E2A] leading-none tracking-tight">
                  20+
                </div>
                <h3 className="text-[20px] font-bold text-[#080808] mt-2">
                  Years Experience
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#555555]">
                  Proven manufacturing expertise with consistent performance
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" duration={750} delay={300} className="flex-1 flex">
              {/* Card 2: In-House Tool Room with Factory Image */}
              <div className="p-6 bg-white border border-[#E5E5E5] rounded-[4px] shadow-xs flex-1 flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-[18px] font-bold text-[#E51E2A]">
                    In-House Tool Room
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#555555]">
                    Mould design, development &amp; maintenance under one roof
                  </p>
                </div>
                <div className="mt-4 w-full rounded-[3px] overflow-hidden border border-[#E5E5E5]">
                  <Image
                    src="/images/why-toolroom-floor.png"
                    alt="In-house tool room and injection molding machine line"
                    width={400}
                    height={225}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Column 3: 2 Stacked Cards (Slides in from Right) */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <ScrollReveal direction="right" duration={800} delay={150}>
              {/* Card 1: ISO Certified Facility */}
              <div className="p-7 sm:p-8 bg-white border border-[#E5E5E5] rounded-[4px] shadow-xs">
                <h3 className="text-[20px] font-bold text-[#080808]">
                  <span className="text-[#E51E2A]">ISO</span> Certified Facility
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[#555555]">
                  Standardized processes ensuring high quality output
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={800} delay={300} className="flex-1 flex">
              {/* Card 2: Fast Prototyping (Dark Navy Card) */}
              <div className="p-7 sm:p-8 bg-[#2A3E74] text-white rounded-[4px] shadow-xs flex-1 flex flex-col justify-end w-full">
                <h3 className="text-[22px] font-bold text-white">
                  Fast Prototyping
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-neutral-200">
                  Rapid samples &amp; testing for quicker launch cycles
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
