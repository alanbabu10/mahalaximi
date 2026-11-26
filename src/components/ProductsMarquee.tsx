import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { products } from "@/data/products";

// Home page: one auto-scrolling row of product photos (same idea as the
// client logo marquee). The full gallery lives on /products.
function ProductRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="product-marquee-row" aria-hidden={hidden || undefined}>
      {products.map((p) => (
        <li key={p.file} className="product-marquee-item">
          <Link
            href="/products"
            tabIndex={hidden ? -1 : undefined}
            className="w-full h-full flex items-center justify-center p-4 sm:p-5 bg-white border border-[#E5E5E5] rounded-[4px] shadow-xs hover:border-[#E51E2A] transition-colors group"
          >
            <Image
              src={`/images/products/${p.file}.webp`}
              alt={hidden ? "" : p.alt}
              width={p.width}
              height={p.height}
              sizes="200px"
              loading="lazy"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function ProductsMarquee() {
  return (
    <section
      id="our-products"
      aria-labelledby="our-products-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E5E5E5] overflow-hidden"
    >
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" duration={600}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
            <span className="text-[12px] font-semibold text-[#777777] uppercase tracking-wider">
              OUR WORK
            </span>
          </div>

          <div className="text-center max-w-[620px] mx-auto mb-10 sm:mb-12">
            <h2
              id="our-products-heading"
              className="text-[30px] sm:text-[38px] font-bold text-[#080808] tracking-tight"
            >
              Our Products
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15px] text-[#555555]">
              Moulds, tools and moulded components we have manufactured for our clients.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-width strip so the row runs edge to edge */}
      <ScrollReveal direction="up" duration={750}>
        <div className="product-marquee">
          <div className="product-marquee-track">
            <ProductRow />
            <ProductRow hidden />
          </div>
        </div>
      </ScrollReveal>

      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={600} delay={150}>
          <div className="mt-10 sm:mt-12 flex justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center h-[42px] px-6 text-[14px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] transition-colors shadow-xs group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A]"
            >
              <span>View all products</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
