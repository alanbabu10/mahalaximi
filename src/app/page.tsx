import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Machinery from "@/components/Machinery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import ReadyBanner from "@/components/ReadyBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#080808] flex flex-col selection:bg-[#E51E2A] selection:text-white">
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

      {/* 8. Manufacturing Process */}
      <Process />

      {/* 9. Client Testimonials */}
      <Testimonials />

      {/* 10. Let's Talk Requirements (Navy Inquiry Section) */}
      <ContactCTA />

      {/* 11. Ready to Work With Us Banner */}
      <ReadyBanner />

      {/* 12. Navy Blue Footer */}
      <Footer />
    </main>
  );
}
