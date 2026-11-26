import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const clients = [
  { name: "Godrej", file: "godrej.png", width: 162, height: 82 },
  { name: "Crompton", file: "crompton.png", width: 148, height: 94 },
  { name: "Bajaj Electricals", file: "bajaj-electricals.png", width: 109, height: 80 },
  { name: "Symphony", file: "symphony.png", width: 176, height: 56 },
  { name: "Luminous", file: "luminous.png", width: 160, height: 41 },
  { name: "BPL", file: "bpl.png", width: 154, height: 106 },
  { name: "Marico", file: "marico.png", width: 104, height: 89 },
  { name: "RR Kabel", file: "rr-kabel.png", width: 165, height: 83 },
  { name: "The Times of India", file: "times-of-india.png", width: 174, height: 68 },
  { name: "BARC", file: "barc.png", width: 124, height: 126 },
  { name: "Arun Icecreams", file: "arun-icecreams.png", width: 122, height: 78 },
  { name: "Genus Electrotech", file: "genus.png", width: 95, height: 85 },
  { name: "Sejal Glass", file: "sejal-glass.png", width: 162, height: 74 },
  { name: "Adico Escorts Agri Equipments", file: "adico-escorts.png", width: 132, height: 111 },
];

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="client-marquee-row" aria-hidden={hidden || undefined}>
      {clients.map((client) => (
        <li key={client.file} className="client-marquee-item">
          <Image
            src={`/images/clients/${client.file}`}
            alt={hidden ? "" : client.name}
            width={client.width}
            height={client.height}
            loading="lazy"
            className="object-contain"
          />
        </li>
      ))}
    </ul>
  );
}

export default function ClientLogos() {
  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E5E5E5] overflow-hidden"
    >
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="down" duration={600}>
          <div className="text-center max-w-[620px] mx-auto mb-10 sm:mb-12">
            <h2 id="clients-heading" className="text-[36px] sm:text-[44px] font-bold text-[#080808] tracking-tight">
              Our Clients
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" duration={750}>
          <div className="client-marquee">
            <div className="client-marquee-track">
              <LogoRow />
              <LogoRow hidden />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
