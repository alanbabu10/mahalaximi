import { MessageCircle, Phone } from "lucide-react";
import { keralaUnit, whatsappUrl } from "@/data/company";

// Floating WhatsApp + Call buttons, shown on every page (bottom-right).
export default function FloatingContact() {
  return (
    <div
      className="fixed right-4 sm:right-6 z-40 flex flex-col items-center gap-3"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={keralaUnit.phoneHref}
        aria-label={`Call ${keralaUnit.phoneDisplay}`}
        title={`Call ${keralaUnit.phoneDisplay}`}
        className="w-12 h-12 rounded-full bg-[#E51E2A] hover:bg-[#CC1622] text-white flex items-center justify-center shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E51E2A]"
      >
        <Phone className="w-5 h-5" />
      </a>
      <a
        href={whatsappUrl("Hello Mahalaxmi Tools Team, I would like to discuss a manufacturing requirement.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white flex items-center justify-center shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
