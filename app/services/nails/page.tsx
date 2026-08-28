import type { Metadata } from "next";
import { getRouteMetadata } from "@/routeMetadata";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";

export const metadata: Metadata = getRouteMetadata("services/nails");

export default function NailServicePage() {
  return (
    <ServiceLandingPage
      eyebrow="Mobile Nail Care"
      title="Mobile Manicure & Pedicure Services in Cape Town"
      intro="Book nail care at your home, hotel, guest stay, or suitable private venue, with manicure and pedicure setup brought to you."
      image="/images/nails.jpg"
      imageAlt="Mobile manicure and nail care appointment in Cape Town"
      treatments={["Classic manicure", "Gel manicure", "Pedicure", "Nail care combined with other spa treatments by arrangement"]}
      suitableFor={["At-home nail appointments", "Pre-event preparation", "Hotel and guest-stay bookings", "Small private spa sessions", "Combined beauty appointments"]}
      preparation={["Remove old polish beforehand where possible or tell us if removal is needed.", "Choose a stable, well-lit seating area with a nearby surface for products.", "Confirm manicure, pedicure, gel, or combination needs before the appointment."]}
    />
  );
}
