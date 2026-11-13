import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge: string;
  title: string;
  titleAccent?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHero({
  badge,
  title,
  titleAccent,
  description,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative bg-[#FAFAFA] border-b border-[#E5E5E5] pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-22 overflow-hidden">
      {/* Engineering blueprint grid watermark */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" duration={600}>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-[#777777] mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-[#080808] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-[#BBBBBB]" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-[#080808] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-[#080808]">
                    {crumb.label}
                  </span>
                )}
              </div>
            ))}
          </nav>

          {/* Section Eyebrow Pill */}
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-[20px] h-[2px] bg-[#E51E2A]" />
            <span className="text-[12px] font-semibold text-[#E51E2A] uppercase tracking-wider">
              {badge}
            </span>
          </div>

          {/* Page Main H1 Heading */}
          <h1 className="text-[36px] sm:text-[46px] lg:text-[54px] font-bold text-[#080808] leading-[1.08] tracking-tight max-w-[850px]">
            {title}
            {titleAccent && (
              <span className="text-[#E51E2A] block sm:inline sm:ml-2">
                {titleAccent}
              </span>
            )}
          </h1>

          {/* Page Description Subtitle */}
          <p className="mt-5 text-[15px] sm:text-[16.5px] leading-[1.65] text-[#555555] max-w-[680px]">
            {description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

