import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import {
  keralaUnit,
  mapsDirectionsUrl,
  mumbaiUnit,
  type Location,
} from "@/data/company";

function LocationDetails({ loc }: { loc: Location }) {
  return (
    <>
      <span className="text-[11px] font-bold uppercase tracking-wider text-[#E51E2A] block">
        {loc.unit} · {loc.label}
      </span>
      <h3 className="mt-1.5 text-[20px] sm:text-[22px] font-bold text-[#080808] tracking-tight">
        {loc.name}
      </h3>

      <div className="mt-5 space-y-3.5 pt-4 border-t border-[#F0F0F0]">
        <div className="flex items-start gap-3 text-[13.5px] text-[#555555] leading-relaxed">
          <MapPin className="w-4 h-4 text-[#E51E2A] flex-shrink-0 mt-1" />
          <address className="not-italic">
            {loc.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block">
              {loc.locality}, {loc.region} {loc.postalCode}
            </span>
          </address>
        </div>

        <div className="flex items-center gap-3 text-[13.5px]">
          <Phone className="w-4 h-4 text-[#E51E2A] flex-shrink-0" />
          <a
            href={loc.phoneHref}
            className="font-semibold text-[#080808] hover:text-[#E51E2A] transition-colors"
          >
            {loc.phoneDisplay}
          </a>
        </div>

        <div className="flex items-center gap-3 text-[13.5px] min-w-0">
          <Mail className="w-4 h-4 text-[#E51E2A] flex-shrink-0" />
          <a
            href={`mailto:${loc.email}`}
            className="font-semibold text-[#080808] hover:text-[#E51E2A] transition-colors break-all"
          >
            {loc.email}
          </a>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <a
          href={mapsDirectionsUrl(loc)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-[38px] px-[18px] text-[13.5px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] transition-colors shadow-xs whitespace-nowrap group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A]"
          aria-label={`Get directions to ${loc.name}, ${loc.locality}`}
        >
          <span>Get Directions</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </>
  );
}

export default function Locations({ className = "" }: { className?: string }) {
  return (
    <section
      id="locations"
      className={`py-16 sm:py-20 lg:py-24 bg-[#FAFAFA] border-t border-[#E5E5E5] overflow-hidden ${className}`}
    >
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" duration={600}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
            <span className="text-[12px] font-semibold text-[#777777] uppercase tracking-wider">
              Where to Find Us
            </span>
          </div>

          <div className="text-center max-w-[620px] mx-auto mb-12 sm:mb-14">
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#080808] tracking-tight">
              Our Locations
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15px] text-[#555555]">
              Our manufacturing works in Kerala and corporate office in Mumbai.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Unit 2: Kerala works, shown first and larger with the office photo */}
          <ScrollReveal
            direction="left"
            duration={750}
            className="lg:col-span-7 flex"
          >
            <div className="bg-white border border-[#E5E5E5] rounded-[6px] overflow-hidden shadow-xs hover:border-[#E51E2A] transition-colors flex flex-col w-full group">
              <div className="relative w-full h-[220px] sm:h-[280px] bg-neutral-100 overflow-hidden">
                <Image
                  src="/images/office-kerala.jpg"
                  alt="Kerala office"
                  width={1600}
                  height={908}
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <LocationDetails loc={keralaUnit} />
              </div>
            </div>
          </ScrollReveal>

          {/* Unit 1: Mumbai corporate office */}
          <ScrollReveal
            direction="right"
            duration={750}
            delay={100}
            className="lg:col-span-5 flex"
          >
            <div className="bg-white border border-[#E5E5E5] rounded-[6px] p-6 sm:p-7 shadow-xs hover:border-[#E51E2A] transition-colors flex flex-col w-full">
              <LocationDetails loc={mumbaiUnit} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
