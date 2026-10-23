"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = "home" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "industries", "why-us", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Industries", href: "#industries", id: "industries" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

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
              href="#home"
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
                MAHALAXMI<span className="text-[#E51E2A] block text-[11px] font-semibold tracking-wider uppercase">Tools &amp; Plastics</span>
              </span>
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <nav
            className="hidden md:flex items-center justify-center space-x-9"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors duration-150 relative py-1 ${
                    isActive
                      ? "text-[#E51E2A] font-semibold"
                      : "text-[#555555] hover:text-[#080808]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-[22px] py-[9px] text-[14px] font-medium text-white bg-[#E51E2A] hover:bg-[#CC1622] rounded-[4px] transition-colors duration-150 shadow-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A]"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-[4px] text-[#555555] hover:text-[#080808] hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#E51E2A]"
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
            const isActive = currentSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-[4px] text-base font-medium transition-colors ${
                  isActive
                    ? "text-[#E51E2A] bg-red-50/50 font-semibold"
                    : "text-[#555555] hover:text-[#080808] hover:bg-neutral-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#E5E5E5]/70">
            <Link
              href="#contact"
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
