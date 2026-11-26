import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { products } from "@/data/products";

interface ProductsGalleryProps {
  id?: string;
  limit?: number;
  viewAllHref?: string;
  className?: string;
  showHeading?: boolean;
}

export default function ProductsGallery({
  id = "products",
  limit,
  viewAllHref,
  className = "",
  showHeading = true,
}: ProductsGalleryProps) {
  const items = limit ? products.slice(0, limit) : products;

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 bg-white overflow-hidden scroll-mt-24 ${className}`}
    >
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
        <ScrollReveal direction="down" duration={600}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-[18px] h-[2px] bg-[#E51E2A]" />
            <span className="text-[12px] font-semibold text-[#777777] uppercase tracking-wider">
              OUR WORK
            </span>
          </div>

          <div className="text-center max-w-[620px] mx-auto mb-10 sm:mb-12">
            <h2 className="text-[30px] sm:text-[38px] font-bold text-[#080808] tracking-tight">
              Our Products
            </h2>
            <p className="mt-3 text-[14px] sm:text-[15px] text-[#555555]">
              Moulds, tools and moulded components we have manufactured for our clients.
            </p>
          </div>
        </ScrollReveal>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 max-w-[900px] mx-auto">
          {items.map((product, idx) => (
            <ScrollReveal
              key={product.file}
              direction="up"
              duration={700}
              delay={(idx % 3) * 80}
            >
              <div className="aspect-square bg-white border border-[#E5E5E5] rounded-[4px] shadow-xs overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8 group hover:border-[#E51E2A] transition-colors">
                <Image
                  src={`/images/products/${product.file}.webp`}
                  alt={product.alt}
                  width={product.width}
                  height={product.height}
                  loading="lazy"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-103"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {viewAllHref && (
          <ScrollReveal direction="up" duration={600} delay={200}>
            <div className="mt-12 pt-4 flex items-center justify-between gap-4">
              <div className="flex-1 h-px bg-[#E5E5E5]" />
              <Link
                href={viewAllHref}
                className="inline-flex items-center text-[14px] font-medium text-[#E51E2A] hover:text-[#CC1622] transition-colors whitespace-nowrap pl-4"
              >
                <span>view all products</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
