import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahalaxmi Tools & Plastic Industries | Precision Manufacturing Solutions",
  description:
    "A considered approach to engineering, precision injection molding, tooling, and industrial manufacturing solutions.",
  keywords: [
    "Mahalaxmi Tools",
    "Plastic Industries",
    "MTPI",
    "injection molding",
    "precision engineering",
    "CNC tooling",
    "industrial manufacturing",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="min-h-screen bg-white text-[#080808] font-sans antialiased selection:bg-[#E51E2A] selection:text-white">
        {children}
      </body>
    </html>
  );
}
