// Company contact details and office locations, used by the home page,
// contact page and structured data. Edit here rather than in the JSX.

export type Location = {
  id: string;
  unit: string;
  label: string;
  name: string;
  addressLines: string[];
  locality: string;
  region: string;
  postalCode: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
};

function mapsQuery(loc: Location) {
  return encodeURIComponent(
    [loc.name, ...loc.addressLines, `${loc.locality}, ${loc.region} ${loc.postalCode}`].join(", ")
  );
}

export function mapsSearchUrl(loc: Location) {
  return `https://www.google.com/maps/search/?api=1&query=${mapsQuery(loc)}`;
}

export function mapsDirectionsUrl(loc: Location) {
  return `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery(loc)}`;
}

export function mapsEmbedUrl(loc: Location) {
  return `https://maps.google.com/maps?q=${mapsQuery(loc)}&z=15&output=embed`;
}

export const mumbaiUnit: Location = {
  id: "mumbai",
  unit: "Unit 1",
  label: "Corporate Office · Mumbai",
  name: "Laxmi Die Works",
  addressLines: [
    "Gala No. 23, 24 & 25, Sai Compound",
    "CTS No. 149, Survey No. 29, Hissa No. 13",
    "Laxmi Nagar, Charkop Village",
  ],
  locality: "Mumbai",
  region: "Maharashtra",
  postalCode: "400067",
  phoneDisplay: "+91 98692 35732",
  phoneHref: "tel:+919869235732",
  email: "laxmidieworks@rediffmail.com",
};

export const keralaUnit: Location = {
  id: "kerala",
  unit: "Unit 2",
  label: "Manufacturing Works · Kerala",
  name: "Mahalaxmi Tools & Plastic Industries LLP",
  addressLines: [
    "Plot No. 57, KSIDC Industrial Growth Centre",
    "KSIDC Road, Kelamangalam, Pallipuram",
  ],
  locality: "Cherthala",
  region: "Kerala",
  postalCode: "688541",
  phoneDisplay: "+91 98201 13605",
  phoneHref: "tel:+919820113605",
  email: "accounts@mahalaxmitoolsandplastic.com",
};

export const locations = [mumbaiUnit, keralaUnit];

// WhatsApp enquiries go to the Kerala unit, which this site represents.
export const whatsappNumber = "919820113605";

export function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
