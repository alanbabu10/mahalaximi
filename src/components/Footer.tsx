import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import PrakashGroupLogo from "./PrakashGroupLogo";
import { keralaUnit } from "@/data/company";

export default function Footer() {
  return (
    <>
      {/* Prakash Group badge (animated group logo) */}
      <section
        aria-label="A Prakash Group company"
        className="bg-white border-t border-[#E5E5E5] py-12 sm:py-14 overflow-hidden"
      >
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <PrakashGroupLogo className="w-[200px] sm:w-[240px]" />
          <div className="mt-6 flex items-center gap-2">
            <div className="w-[18px] h-[2px] bg-[#C8102E]" />
            <span className="text-[12px] font-semibold text-[#777777] uppercase tracking-wider">
              A Prakash Group Company
            </span>
            <div className="w-[18px] h-[2px] bg-[#C8102E]" />
          </div>
        </div>
      </section>

    <footer className="relative bg-[#283B6D] text-white pt-16 pb-12 overflow-hidden">
      {/* Background Watermark Text */}
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
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="w-[44px] h-[44px] relative flex-shrink-0 bg-white/10 rounded-full p-1 border border-white/20">
                  <Image
                    src="/images/logo.png"
                    alt="Mahalaxmi Tools & Plastic Industries (MTPI)"
                    width={44}
                    height={44}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
                <span className="font-semibold text-[15px] sm:text-[16px] text-white tracking-tight">
                  Mahalaxmi Tools &amp; Plastic Industries LLP
                </span>
              </Link>

              <p className="mt-4 text-[13.5px] leading-relaxed text-neutral-300 max-w-sm">
                Precision engineering.
                <br />
                A considered manufacturing conversation.
              </p>

              <div className="mt-4 text-[12px] text-neutral-400">
                Specializing in Injection, Blow &amp; PET Moulds, Moulding, and Precision Tool Manufacturing.
              </div>
            </div>

            {/* Middle Column: Explore Pages (3 cols) */}
            <div className="md:col-span-3">
              <h4 className="text-[12px] font-bold uppercase tracking-widest text-neutral-300 mb-4">
                Pages
              </h4>
              <ul className="space-y-2.5 text-[13.5px]">
                <li>
                  <Link
                    href="/"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    Services &amp; Capabilities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    Industries We Serve
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Column: Contact & Quick Inquiry (4 cols) */}
            <div className="md:col-span-4">
              <h4 className="text-[12px] font-bold uppercase tracking-widest text-neutral-300 mb-4">
                Project Inquiries
              </h4>
              <p className="text-[13px] leading-relaxed text-neutral-300">
                Direct manufacturing coordination desk for tooling, mould development, and component production inquiries.
              </p>
              <ul className="mt-4 space-y-2.5 text-[13px] text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-300" />
                  <address className="not-italic leading-relaxed">
                    {keralaUnit.name}, {keralaUnit.addressLines.join(", ")}, {keralaUnit.locality}, {keralaUnit.region} {keralaUnit.postalCode}
                  </address>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 flex-shrink-0 text-red-300" />
                  <a href={keralaUnit.phoneHref} className="hover:text-white transition-colors">
                    {keralaUnit.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 flex-shrink-0 text-red-300" />
                  <a href={`mailto:${keralaUnit.email}`} className="hover:text-white transition-colors break-all">
                    {keralaUnit.email}
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[13.5px] font-medium text-white hover:text-red-300 transition-colors group"
                >
                  <span>Submit project requirements</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
              <div className="mt-3 text-[12px] text-neutral-400">
                Inquiries reviewed under strict mutual non-disclosure.
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12px] text-neutral-400 gap-3">
            <p>&copy; {new Date().getFullYear()} Mahalaxmi Tools &amp; Plastic Industries LLP. All rights reserved.</p>
            <p>
              Designed &amp; developed by{" "}
              <a
                href="https://www.weboxdigital.in"
                target="_blank"
                rel="noopener"
                className="font-semibold text-neutral-200 hover:text-white underline-offset-2 hover:underline transition-colors"
              >
                Webox Digital
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
    </>
  );
}
