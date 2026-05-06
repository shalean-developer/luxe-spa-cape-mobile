import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { JsonLd } from "./json-ld";

const siteUrl = "https://www.luxurymspa.co.za";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luxury Mobile Spa Cape Town | At-Home Massage, Facials & Mobile Beauty",
    template: "%s | Luxury Mobile Spa Cape Town",
  },
  description:
    "Luxury mobile spa Cape Town—book at-home massage, facials Cape Town loves for events, and mobile beauty services across Sea Point, Camps Bay, Claremont & beyond.",
  keywords: [
    "mobile spa Cape Town",
    "at home massage Cape Town",
    "facials Cape Town",
    "mobile beauty services Cape Town",
    "luxury mobile spa",
    "spa at home",
  ],
  authors: [{ name: "Luxury Mobile Spa" }],
  creator: "Luxury Mobile Spa",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "Luxury Mobile Spa Cape Town",
    title: "Luxury Mobile Spa Cape Town | At-Home Massage, Facials & Mobile Beauty",
    description:
      "Book mobile spa Cape Town therapists for hotel-standard massage, facials, and nails—delivered to your home, hotel, or Airbnb.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Luxury Mobile Spa Cape Town" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LuxuryMobileSpa",
    title: "Luxury Mobile Spa Cape Town | At-Home Massage, Facials & Mobile Beauty",
    description:
      "Luxury mobile spa Cape Town—at-home massage, facials, and mobile beauty services when you want five-star calm without leaving home.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.jpeg",
  },
  verification: {
    google: "8RmmQRWM_xWTt3198_6RXjO61xMfGSm5LlYp0Cz31XQ",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">
        <JsonLd />
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppWidget />
          </div>
        </Providers>
      </body>
    </html>
  );
}
