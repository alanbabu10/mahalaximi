import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E5E5E5] overflow-hidden">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill / Subtitle with fade down */}
        <ScrollReveal direction="down" duration={600}>
          <div className="flex items-center gap-2 mb-8 sm:mb-10">
            <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
            <span className="text-[12px] font-medium text-[#777777]">
              About Us
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Slides from Left */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" duration={800} delay={100}>
              <div className="rounded-[4px] overflow-hidden bg-[#E2E4E8] border border-[#E5E5E5] shadow-xs group">
                <Image
                  src="/images/about-facility.png"
                  alt="Precision manufacturing facility and injection molding production floor"
                  width={640}
                  height={440}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Slides from Right */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <ScrollReveal direction="right" duration={800} delay={150}>
              <h2 className="text-[34px] sm:text-[42px] lg:text-[46px] font-bold leading-[1.12] tracking-tight">
                <span className="text-[#E51E2A] block">Your Trusted Partner</span>
                <span className="text-[#080808] block mt-1">in Industrial Manufacturing</span>
              </h2>

              <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.65] text-[#555555] max-w-[480px]">
                We specialize in precision tooling and industrial manufacturing solutions
                designed to support diverse production requirements.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6 sm:gap-8">
                {/* Primary Action Button */}
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center px-[22px] py-[13px] text-[15px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] transition-colors shadow-xs group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A]"
                >
                  <span>Learn more about us</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Social Proof: 3 Avatars + Trusted by */}
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/about-avatars.png"
                    alt="Trusted partners and client engineering leads"
                    width={78}
                    height={36}
                    loading="lazy"
                    className="h-9 w-auto object-contain flex-shrink-0"
                  />
                  <div className="text-[13px] leading-tight">
                    <span className="block text-[#555555]">Trusted by</span>
                    <span className="block font-semibold text-[#080808]">105 business</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
