import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ReadyBanner() {
  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E5E5E5] rounded-[6px] overflow-hidden p-6 sm:p-10 lg:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Slides from Left */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" duration={800}>
              <h2 className="text-[32px] sm:text-[38px] font-bold text-[#080808] leading-[1.15] tracking-tight">
                Ready to work with us?
              </h2>
              <p className="mt-3.5 text-[14.5px] sm:text-[15px] leading-relaxed text-[#555555] max-w-[440px]">
                We are committed to delivering unmatched service and reliable
                solutions that keep your operations running smoothly.
              </p>
              <div className="mt-7">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-[22px] py-[13px] text-[15px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] transition-colors shadow-xs group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A]"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Slides from Right with CNC Spark Photo */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" duration={800} delay={150}>
              <div className="rounded-[4px] overflow-hidden border border-[#E5E5E5] bg-neutral-900">
                <Image
                  src="/images/ready-cnc-spark.png"
                  alt="High-speed precision CNC tooling and machining sparks"
                  width={700}
                  height={394}
                  loading="lazy"
                  className="w-full h-auto object-cover hover:scale-103 transition-transform duration-300"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
