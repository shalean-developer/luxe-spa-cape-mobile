import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Luxury Mobile Spa",
  description: "Cape Town's premier on-demand mobile spa service.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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
