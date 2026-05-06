import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

const siteUrl = "https://www.luxurymspa.co.za";

export const metadata: Metadata = {
  title: "Luxury Mobile Spa Cape Town | At-Home Massage, Facials & Nails",
  description:
    "Book luxury mobile spa services in Cape Town. Professional at-home massage, facials, and nail treatments in Sea Point, Camps Bay, Claremont and more.",
  keywords: [
    "mobile spa Cape Town",
    "at home massage Cape Town",
    "facials Cape Town",
    "mobile beauty services Cape Town",
    "spa at home Sea Point",
    "massage Camps Bay",
    "facials Claremont",
    "luxury mobile spa",
    "at home facial Cape Town",
  ],
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: "Luxury Mobile Spa Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book luxury mobile spa services in Cape Town. Professional at-home massage, facials, and nail treatments in Sea Point, Camps Bay, Claremont and more.",
    url: siteUrl,
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Luxury Mobile Spa Cape Town" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Mobile Spa Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book luxury mobile spa services in Cape Town. Professional at-home massage, facials, and nail treatments in Sea Point, Camps Bay, Claremont and more.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <HomePage />;
}
