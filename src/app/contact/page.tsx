import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Mahalaxmi Tools & Plastic Industries LLP",
  description:
    "Get in touch with Mahalaxmi Tools & Plastic Industries (MTPI). Send project requirements for tools & dies, custom mould development, or precision plastic injection moulding.",
  openGraph: {
    title: "Contact Us | Mahalaxmi Tools & Plastic Industries LLP",
    description:
      "Direct technical consultation and RFQ evaluation for precision tooling and injection moulding.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#080808] flex flex-col selection:bg-[#E51E2A] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Interactive Contact Form & Facility Information */}
      <ContactContent />

      {/* 3. Global Footer */}
      <Footer />
    </main>
  );
}
