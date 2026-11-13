"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 border-b border-[#E5E5E5] ${
        scrolled ? "shadow-xs" : ""
      }`}
    >
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Company Logo Left */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#E51E2A] rounded-xs"
              aria-label="Mahalaxmi Tools & Plastic Industries Home"
            >
              <div className="w-[42px] h-[42px] relative flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Mahalaxmi Tools & Plastic Industries (MTPI)"
                  width={42}
                  height={42}
                  priority
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <span className="font-bold text-[16px] sm:text-[17px] text-[#080808] tracking-tight leading-tight hidden sm:block">
                MAHALAXMI
                <span className="text-[#E51E2A] block text-[11px] font-semibold tracking-wider uppercase">
                  Tools &amp; Plastics
                </span>
              </span>
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <nav
            className="hidden md:flex items-center justify-center space-x-9"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors duration-150 relative py-1 ${
                    active
                      ? "text-[#E51E2A] font-semibold"
                      : "text-[#555555] hover:text-[#080808]"
                  }`}
                >
                  <span>{link.name}</span>
                  {active && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E51E2A] rounded-full animate-in fade-in duration-150"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[38px] px-[20px] text-[13.5px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] transition-colors duration-150 shadow-xs whitespace-nowrap flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A] group"
            >
              <span className="whitespace-nowrap">Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-[4px] text-[#555555] hover:text-[#080808] hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#E51E2A] cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[#E5E5E5] bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-[4px] text-base font-medium transition-colors ${
                  active
                    ? "text-[#E51E2A] bg-red-50/70 font-semibold"
                    : "text-[#555555] hover:text-[#080808] hover:bg-neutral-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#E5E5E5]/70">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] transition-colors"
            >
              Get in touch
              <ArrowUpRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
