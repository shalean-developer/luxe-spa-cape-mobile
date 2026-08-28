import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";

export const metadata: Metadata = {
  title: "At-Home Facials Cape Town | Mobile Facial Treatments",
  description:
    "Book at-home facials in Cape Town for homes, hotels and guest stays. Explore hydrating, deep cleansing and anti-aging facial options.",
  alternates: { canonical: "/services/facials" },
  openGraph: {
    title: "At-Home Facials Cape Town | Mobile Facial Treatments",
    description: "Facial treatments delivered to supported Cape Town homes, hotels and guest stays.",
    url: "/services/facials",
    images: ["/images/facial.jpg"],
  },
};

export default function FacialServicePage() {
  return (
    <ServiceLandingPage
      eyebrow="Mobile Facials"
      title="At-Home Facials in Cape Town"
      intro="Enjoy facial treatments in a familiar private setting, with the treatment setup brought to your home, hotel, or suitable guest accommodation."
      image="/images/facial.jpg"
      imageAlt="At-home facial treatment in Cape Town"
      treatments={["Hydrating facial", "Deep cleansing facial", "Anti-aging facial", "Facial and massage combinations by arrangement"]}
      suitableFor={["Regular skincare appointments", "Pre-event preparation", "Hotel and guest-stay bookings", "At-home spa days", "Private beauty appointments"]}
      preparation={["Arrive with a clean face where practical and mention known sensitivities when booking.", "Choose a well-lit, comfortable room with nearby access to water if available.", "Confirm your preferred facial and any same-visit massage or beauty services in advance."]}
    />
  );
}
