import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { keralaUnit, mapsDirectionsUrl } from "@/data/company";

// Home page: Kerala works photo. Full address cards for both units live on
// the Contact page.
export default function OfficeShowcase() {
  return (
    <section
      id="our-facility"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAFAFA] border-t border-[#E5E5E5] overflow-hidden"
    >
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" duration={600}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
            <span className="text-[12px] font-semibold text-[#777777] uppercase tracking-wider">
              Our Facility
            </span>
          </div>

          <div className="text-center max-w-[620px] mx-auto mb-10 sm:mb-12">
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#080808] tracking-tight">
              Manufacturing Works, Kerala
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" duration={750}>
          <div className="relative rounded-[6px] overflow-hidden border border-[#E5E5E5] bg-neutral-900 shadow-xs group">
            <Image
              src="/images/office-kerala.jpg"
              alt="Kerala office"
              width={1600}
              height={908}
              loading="lazy"
              sizes="(max-width: 1150px) 100vw, 1100px"
              className="w-full h-[220px] sm:h-[340px] md:h-[400px] lg:h-[460px] object-cover transition-transform duration-500 group-hover:scale-102"
            />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="relative md:absolute md:bottom-0 md:left-0 md:right-0 p-5 sm:p-7 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-white bg-[#283B6D] md:bg-transparent">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-300">
                  {keralaUnit.unit} · {keralaUnit.label}
                </span>
                <h3 className="mt-1 text-[20px] sm:text-[24px] font-bold text-white tracking-tight">
                  {keralaUnit.name}
                </h3>
                <p className="mt-1.5 flex items-start gap-2 text-[13px] text-neutral-200">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-300" />
                  <span>
                    {keralaUnit.locality}, {keralaUnit.region} {keralaUnit.postalCode}
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-[10px]">
                <a
                  href={mapsDirectionsUrl(keralaUnit)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[38px] px-[18px] text-[13.5px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] transition-colors shadow-xs whitespace-nowrap group/btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A]"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
                <Link
                  href="/contact#locations"
                  className="inline-flex items-center justify-center h-[38px] px-[18px] text-[13.5px] font-medium text-[#080808] bg-white hover:bg-neutral-100 rounded-[4px] transition-colors shadow-xs whitespace-nowrap"
                >
                  All locations
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
