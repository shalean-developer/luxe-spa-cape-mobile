import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { FaraiosScripts } from "@/components/FaraiosScripts";
import { JsonLd } from "./json-ld";
import { getSiteMetadataConfig } from "@/lib/siteMetadata";

const site = getSiteMetadataConfig();

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
  metadataBase: new URL(site.siteUrl),
  title: {
    default: site.defaultTitle,
    template: `%s | ${site.siteName}`,
  },
  description: site.defaultDescription,
  keywords: [
    "mobile massage Cape Town",
    "at home massage Cape Town",
    "facials Cape Town",
    "mobile beauty services Cape Town",
    "rejuvenation mobile massage",
    "massage at home",
  ],
  authors: [{ name: site.author }],
  creator: site.author,
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: site.siteUrl,
    siteName: site.siteName,
    title: site.defaultTitle,
    description: site.defaultDescription,
    images: [{ url: site.defaultOgImageUrl, width: 1200, height: 630, alt: site.siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.defaultTitle,
    description: site.defaultDescription,
    images: [site.defaultOgImageUrl],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
        <FaraiosScripts />
      </body>
    </html>
  );
}
