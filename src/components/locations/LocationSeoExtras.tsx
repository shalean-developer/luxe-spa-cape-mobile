import Link from "next/link";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import {
  LocationTrustStrip,
  NearbyAreasProseBlock,
  PopularTreatmentsBlock,
} from "@/components/locations/LocationPageSeoBlocks";

export type LocationNeighbor = { href: string; label: string };

export type LocationFaqItem = {
  question: string;
  answer: string;
};

type LocationSeoExtrasProps = {
  areaLabel: string;
  localLead?: string;
  neighbors?: LocationNeighbor[];
  customFaqs?: readonly LocationFaqItem[];
  skipDefaultArticle?: boolean;
};

function buildFaqs(area: string) {
  return [
    {
      question: `Do you travel to ${area}?`,
      answer: `Yes. Mobile appointments are available in ${area}, subject to therapist availability and travel scheduling. Send your address or location pin when booking so we can confirm the visit.`,
    },
    {
      question: `What treatments can I book in ${area}?`,
      answer: `Available treatments include massage, facials, manicures and pedicures, and selected body or beauty treatments. The services page shows the current menu and pricing.`,
    },
    {
      question: `Can I request a same-day appointment in ${area}?`,
      answer: `Same-day appointments may be possible when a therapist and the required treatment equipment are available. Booking ahead gives you a better choice of times, especially for couples or multiple treatments.`,
    },
    {
      question: `What should I prepare before the therapist arrives?`,
      answer: `Please provide a suitable treatment space and any parking, security, hotel, or estate-access instructions. We will confirm anything else needed for your chosen treatment when the booking is arranged.`,
    },
    {
      question: `Can you visit a hotel, Airbnb, or guest house in ${area}?`,
      answer: `Yes, where the property permits outside service providers. Please check access rules with the host or front desk and share the relevant room, unit, parking, or check-in details with us.`,
    },
    {
      question: `How do I book an appointment in ${area}?`,
      answer: `Choose your treatment, preferred date and time, and provide your ${area} address or location pin. We will confirm availability and any travel details before the appointment.`,
    },
  ];
}

function LocationGuide({ areaLabel }: { areaLabel: string }) {
  return (
    <section
      className="border-t border-border/50 bg-background py-12 md:py-16"
      aria-labelledby={`local-guide-${areaLabel.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="container mx-auto max-w-4xl px-4">
        <h2
          id={`local-guide-${areaLabel.replace(/\s+/g, "-").toLowerCase()}`}
          className="font-serif text-2xl font-bold tracking-tight md:text-3xl"
        >
          Mobile spa appointments in {areaLabel}
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            We travel to homes, hotels, guest houses, and other suitable private accommodation in {areaLabel}. Your
            therapist brings the equipment and products needed for the treatment you booked, so you can enjoy the
            appointment without travelling to a salon or spa.
          </p>
          <p>
            Massage, facial, nail, and selected beauty appointments can be arranged individually or combined when timing
            and therapist availability allow. If you are booking for two people or a small group, share the number of
            guests and preferred treatments in advance so we can plan the visit properly.
          </p>
          <p>
            Access details matter for mobile appointments. Please tell us about parking, estate security, hotel reception,
            apartment intercoms, or other arrival requirements when you book. For addresses outside our usual route, we
            will confirm travel availability before finalising the appointment.
          </p>
          <p>
            You can review the{" "}
            <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
              treatment menu
            </Link>
            , browse the{" "}
            <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
              areas we serve
            </Link>
            , or go directly to the{" "}
            <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
              booking page
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export function LocationSeoExtras({
  areaLabel,
  localLead,
  neighbors = [],
  customFaqs,
  skipDefaultArticle = false,
}: LocationSeoExtrasProps) {
  const faqs = customFaqs ?? buildFaqs(areaLabel);
  const coreLinks: LocationNeighbor[] = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Spa services" },
    { href: "/booking", label: "Book now" },
    { href: "/locations", label: "All areas" },
    { href: "/blog", label: "Wellness blog" },
  ];

  return (
    <>
      <FaqJsonLd items={faqs} />
      {skipDefaultArticle ? null : <LocationGuide areaLabel={areaLabel} />}
      <section
        className="border-t border-border/60 bg-muted/20 py-12 md:py-16"
        aria-labelledby={`local-info-${areaLabel.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <div className="container mx-auto max-w-4xl px-4">
          <h2
            id={`local-info-${areaLabel.replace(/\s+/g, "-").toLowerCase()}`}
            className="font-serif text-2xl font-bold tracking-tight md:text-3xl"
          >
            Plan your {areaLabel} appointment
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
            {localLead ??
              `We provide mobile massage, facial, nail, and selected beauty appointments in ${areaLabel}. Share your address and access details when booking so we can confirm the route and arrive prepared for your treatment.`}
          </p>
          <LocationTrustStrip />
          <PopularTreatmentsBlock areaLabel={areaLabel} />
          <NearbyAreasProseBlock areaLabel={areaLabel} neighbors={neighbors} />
          <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium" aria-label="Important pages">
            {coreLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-primary underline-offset-4 hover:underline">
                {l.label}
              </Link>
            ))}
          </nav>
          {neighbors.length > 0 ? (
            <div className="mt-8">
              <p className="text-sm font-semibold text-foreground">Nearby areas</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {neighbors.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-primary transition-smooth hover:border-primary/40 hover:bg-muted/50"
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section
        className="border-t border-border/40 bg-background py-12 md:py-16"
        aria-labelledby={`faq-${areaLabel.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <div className="container mx-auto max-w-3xl px-4">
          <h2
            id={`faq-${areaLabel.replace(/\s+/g, "-").toLowerCase()}`}
            className="font-serif text-2xl font-bold tracking-tight md:text-3xl"
          >
            Frequently asked questions — {areaLabel}
          </h2>
          <dl className="mt-8 space-y-8">
            {faqs.map((f) => (
              <div key={f.question}>
                <dt className="font-semibold text-foreground">{f.question}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">{f.answer}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 text-center">
            <Link href="/booking" className="font-semibold text-primary underline-offset-4 hover:underline">
              Book your {areaLabel} appointment
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
