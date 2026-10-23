import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="relative bg-[#283B6D] text-white pt-16 pb-12 overflow-hidden">
      {/* Background Watermark Text matching reference */}
      <div
        className="absolute left-6 bottom-10 select-none pointer-events-none text-white/[0.04] text-[80px] sm:text-[110px] font-black tracking-tight font-sans whitespace-nowrap leading-none z-0"
        aria-hidden="true"
      >
        MAHALAXMI
      </div>

      <div className="relative z-10 max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={700}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Left Column: Brand & Tagline (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-[44px] h-[44px] relative flex-shrink-0 bg-white/10 rounded-full p-1 border border-white/20">
                <Image
                  src="/images/logo.png"
                  alt="Mahalaxmi Tools & Plastic Industries (MTPI)"
                  width={44}
                  height={44}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-semibold text-[15px] sm:text-[16px] text-white tracking-tight">
                Mahalaxmi Tools &amp; Plastic Industries LLP
              </span>
            </div>

            <p className="mt-4 text-[13.5px] leading-relaxed text-neutral-300 max-w-sm">
              Precision engineering.
              <br />
              A considered manufacturing conversation.
            </p>
          </div>

          {/* Middle Column: Explore (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-neutral-300 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link
                  href="#home"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Products &amp; Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-neutral-300 mb-4">
              Contact
            </h4>
            <p className="text-[13px] leading-relaxed text-neutral-300">
              Contact pending.
              <br />
              Verified contact details and location to follow.
            </p>
            <div className="mt-4">
              <Link
                href="#contact"
                className="inline-flex items-center text-[13.5px] font-medium text-white hover:text-red-300 transition-colors group"
              >
                <span>make an inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12px] text-neutral-400 gap-3">
          <p>Mahalaxmi Tools &amp; Plastic Industries LLP</p>
          <p>Industrial photography by our clients &amp; partners.</p>
        </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
