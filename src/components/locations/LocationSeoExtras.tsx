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
  /** Display name, e.g. "Sea Point" */
  areaLabel: string;
  /** Optional extra sentence for the local block */
  localLead?: string;
  /** Nearby location pages for internal linking */
  neighbors?: LocationNeighbor[];
  /** Override default FAQs + FAQ JSON-LD (e.g. hyper-local page copy) */
  customFaqs?: readonly LocationFaqItem[];
  /** Skip the generic long-form article when the page supplies its own editorial section */
  skipDefaultArticle?: boolean;
};

const WINELANDS_AREAS = new Set(["Franschhoek", "Paarl", "Stellenbosch", "Somerset West"]);

function buildFaqs(area: string) {
  const winelands = WINELANDS_AREAS.has(area);
  const place = winelands ? `${area} and the broader Cape Town mobile spa route` : `${area}, Cape Town`;
  return [
    {
      question: `Do you offer mobile spa Cape Town services in ${area}?`,
      answer: `Yes. Our therapists travel to ${place} for discreet, hotel-standard treatments. Whether you want an at-home massage after travel, facials Cape Town guests trust for events, or manicures before dinner, we bring the full mobile spa Cape Town experience to your door.`,
    },
    {
      question: `What areas near ${area} do you cover for at-home massage and facials?`,
      answer: `We serve ${area} and neighbouring suburbs throughout the metro. Explore every neighbourhood on our locations hub, or chat on WhatsApp with your pin — we will confirm drive time and availability for mobile beauty services Cape Town wide.`,
    },
    {
      question: `Can I get a same-day mobile spa appointment in ${area}?`,
      answer: `When calendars allow, we welcome same-day bookings — especially for shorter treatments such as Swedish massage or express facials. For couples sessions or stacked nail and facial appointments, booking ahead keeps equipment and product kits aligned with your goals.`,
    },
    {
      question: `What should I prepare before my mobile spa therapist arrives?`,
      answer: `Reserve a quiet room with space for a portable bed where needed, arrange visitor or estate access, and keep pets relaxed in another area. Fresh towels are welcome but optional — your therapist carries linens and sanitation essentials so your at-home massage feels effortless.`,
    },
    {
      question: `Do you supply professional products and equipment?`,
      answer: `Absolutely. Every appointment includes premium oils and creams for massage and facials, professional nail-care kits, and hygiene supplies suited to private residences, boutique hotels, and Airbnbs — matching the polish guests expect from luxury mobile spa Cape Town teams.`,
    },
    {
      question: `How do I book facials, nails, or massage in ${area}?`,
      answer: `Choose your treatments on our services menu, then confirm timing via our booking page, phone, WhatsApp, or email. Mention ${area} plus parking notes so we quote accurately and arrive prepared — especially when coordinating mobile beauty services Cape Town itineraries.`,
    },
  ];
}

function LocationSeoArticle({ areaLabel }: { areaLabel: string }) {
  const winelands = WINELANDS_AREAS.has(areaLabel);
  const geo = winelands
    ? "the Cape Winelands and Greater Cape Town corridor"
    : "Cape Town's Atlantic Seaboard, City Bowl, Southern Suburbs, and Northern corridors";

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
          Luxury mobile spa Cape Town — tailored for {areaLabel}
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            Guests searching for{" "}
            <strong className="font-medium text-foreground">mobile spa Cape Town</strong> experiences choose us when
            privacy, punctuality, and five-star standards matter. From restorative{" "}
            <strong className="font-medium text-foreground">at-home massage</strong> sessions to glowing{" "}
            <strong className="font-medium text-foreground">facials Cape Town</strong> specialists recommend before
            events, every itinerary is choreographed around your space — whether that is a boutique apartment,
            sea-facing villa, or vineyard retreat.
          </p>
          <p>
            In {areaLabel}, our{" "}
            <strong className="font-medium text-foreground">mobile beauty services Cape Town</strong> portfolio spans
            therapeutic massage, targeted skincare, polished manicures and pedicures, body exfoliation, and waxing.
            Couples celebrating milestones, executives recovering from travel, and hospitality hosts welcoming VIPs all
            rely on the same discreet arrival rhythm: quiet setup, luxurious execution, and a swift breakdown that
            leaves your home exactly as we found it.
          </p>
          <p>
            Because we operate across {geo}, routing is intentional — therapists arrive with the correct kits for your
            altitude, climate, and indoor humidity so oils absorb evenly and facial barriers stay calm. Need guidance on
            pairing hot stone massage with anti-aging facials or gel nails for a weekend itinerary? Ask during booking;
            we curate timing so treatments complement rather than compete with one another.
          </p>
          <p>
            Life in {areaLabel} often blends everyday routines with hosting — family bedrooms one week, spare rooms for
            Airbnb guests the next, or boutique-hotel suites when friends upgrade their stay. Mobile spa visits respect
            those rhythms: we coordinate intercom names, luggage clutter, and housekeeping schedules so{" "}
            <strong className="font-medium text-foreground">at-home massage</strong> never interrupts your hosting flow.
            Whether you are a long-time resident, a recent arrival, or a property manager styling a short-term rental, the
            same <strong className="font-medium text-foreground">professional certified therapists</strong> deliver
            consistent, review-ready experiences that keep guests comfortable and your reputation glowing online.
          </p>
          <p>
            Ready to reserve? Browse{" "}
            <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
              massage, facials, and nail menus
            </Link>
            , explore neighbouring suburbs from{" "}
            <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
              our Cape Town locations hub
            </Link>
            , or skip straight to{" "}
            <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
              secure your appointment
            </Link>
            . Mention {areaLabel} in your note — we will confirm travel logistics and tailor product selections before we
            knock on your door.
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
    { href: "/locations", label: "All Cape Town areas" },
    { href: "/blog", label: "Wellness blog" },
  ];

  return (
    <>
      <FaqJsonLd items={faqs} />
      {skipDefaultArticle ? null : <LocationSeoArticle areaLabel={areaLabel} />}
      <section
        className="border-t border-border/60 bg-muted/20 py-12 md:py-16"
        aria-labelledby={`local-seo-${areaLabel.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <div className="container mx-auto max-w-4xl px-4">
          <h2
            id={`local-seo-${areaLabel.replace(/\s+/g, "-").toLowerCase()}`}
            className="font-serif text-2xl font-bold tracking-tight md:text-3xl"
          >
            Book a mobile spa in {areaLabel}, Cape Town
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
            {localLead ??
              `We provide luxury mobile spa services in ${areaLabel}, including at-home massages, facials, and nail treatments. Our therapists travel to your home, hotel, or Airbnb with a full professional setup.`}
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
              <p className="text-sm font-semibold text-foreground">Nearby areas we also serve</p>
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
              Book your {areaLabel} spa visit
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
