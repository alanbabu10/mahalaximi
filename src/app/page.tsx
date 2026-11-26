import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Machinery from "@/components/Machinery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import ProductsMarquee from "@/components/ProductsMarquee";
import Process from "@/components/Process";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import OfficeShowcase from "@/components/OfficeShowcase";
import { locations } from "@/data/company";
import ReadyBanner from "@/components/ReadyBanner";
import Footer from "@/components/Footer";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mahalaxmi Tools & Plastic Industries LLP",
  alternateName: "MTPI",
  description:
    "Precision tooling, mould development and plastic injection moulding.",
  location: locations.map((loc) => ({
    "@type": "LocalBusiness",
    name: `${loc.name} (${loc.unit}, ${loc.locality})`,
    telephone: loc.phoneHref.replace("tel:", ""),
    email: loc.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.addressLines.join(", "),
      addressLocality: loc.locality,
      addressRegion: loc.region,
      postalCode: loc.postalCode,
      addressCountry: "IN",
    },
  })),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#080808] flex flex-col selection:bg-[#E51E2A] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* 1. Top Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Us Section */}
      <About />

      {/* 4. Our Capabilities (Services) */}
      <Services />

      {/* 5. Our Machinery Showcase */}
      <Machinery />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Industries We Serve */}
      <Industries />

      {/* 7b. Our Products (auto-scrolling strip, full gallery on /products) */}
      <ProductsMarquee />

      {/* 8. Manufacturing Process */}
      <Process />

      {/* 9. Client Logos Marquee */}
      <ClientLogos />

      {/* 10. Client Testimonials */}
      <Testimonials />

      {/* 11. Our Facility (Kerala works photo; both units on /contact) */}
      <OfficeShowcase />

      {/* 12. Ready to Work With Us Banner */}
      <ReadyBanner />

      {/* 13. Navy Blue Footer */}
      <Footer />
    </main>
  );
}
