import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductsGallery from "@/components/ProductsGallery";
import ReadyBanner from "@/components/ReadyBanner";

export const metadata: Metadata = {
  title: "Our Products | Mahalaxmi Tools & Plastic Industries LLP",
  description:
    "Injection moulds, blow moulds, PET moulds and precision moulded plastic components manufactured by Mahalaxmi Tools & Plastic Industries (MTPI).",
  openGraph: {
    title: "Our Products | Mahalaxmi Tools & Plastic Industries LLP",
    description:
      "Moulds, tools and moulded components manufactured for our clients.",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-[#080808] flex flex-col selection:bg-[#E51E2A] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Page Hero */}
      <PageHero
        badge="OUR PRODUCTS"
        title="Moulds, Tools &"
        titleAccent="Moulded Components"
        description="A selection of the injection moulds, blow moulds, PET moulds and precision plastic components we have manufactured for our clients."
        breadcrumbs={[{ label: "Products" }]}
      />

      {/* 3. Full Products Gallery */}
      <ProductsGallery showHeading={false} className="border-b border-[#E5E5E5]" />

      {/* 4. Ready To Work With Us CTA */}
      <ReadyBanner />

      {/* 5. Global Footer */}
      <Footer />
    </main>
  );
}
