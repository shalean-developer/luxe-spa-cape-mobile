import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Mobile Massage Cape Town | At-Home Massage Services",
  description:
    "Book mobile massage in Cape Town for homes, hotels and guest stays. Explore Swedish, deep tissue, hot stone, aromatherapy and couples massage options.",
  alternates: { canonical: "/services/massage" },
  openGraph: {
    title: "Mobile Massage Cape Town | At-Home Massage Services",
    description: "Mobile massage treatments delivered to supported Cape Town homes, hotels and guest stays.",
    url: "/services/massage",
    images: ["/images/massage.jpg"],
  },
};

export default function MassageServicePage() {
  return (
    <ServiceLandingPage
      eyebrow="Mobile Massage"
      title="Mobile Massage in Cape Town"
      pathname="/services/massage"
      intro="Book massage treatments at your home, hotel, guest stay, or suitable private venue without travelling to a spa."
      image="/images/massage.jpg"
      imageAlt="Mobile massage treatment setup in Cape Town"
      treatments={["Swedish massage", "Deep tissue massage", "Hot stone massage", "Aromatherapy massage", "Couples massage by arrangement"]}
      suitableFor={["At-home relaxation", "Hotel and guest-stay appointments", "Couples bookings", "Post-travel wind-down", "Private wellness appointments"]}
      preparation={["Share parking, estate, hotel, or reception access details.", "Choose a quiet treatment space with enough room for setup.", "Tell us your preferred treatment and any comfort considerations when booking."]}
    />
  );
}
