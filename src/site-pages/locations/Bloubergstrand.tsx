import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LocationSeoExtras, type LocationFaqItem } from "@/components/locations/LocationSeoExtras";

const heroImage = "/images/hot-stones.jpg";

const SITE_URL = "https://www.luxurymspa.co.za";

const capeTownPlace = (neighbourhood: string) => ({
  "@type": "Place" as const,
  name: neighbourhood,
  containedInPlace: {
    "@type": "City" as const,
    name: "Cape Town",
    containedInPlace: {
      "@type": "AdministrativeArea" as const,
      name: "Western Cape",
    },
  },
});

const BLOUBERG_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Rejuvenation mobile massage Bloubergstrand — at-home massage, facials & nails",
  description:
    "West Coast mobile spa Bloubergstrand visits for beach homes, apartments, and holiday lets: massage, facials, gel nails, and couples rituals — Table Mountain views, sea-air recovery, and discreet arrivals across Big Bay and Table View.",
  url: `${SITE_URL}/locations/bloubergstrand`,
  serviceType: ["Mobile massage therapy", "Facial skincare treatments", "Manicure and pedicure", "Couples spa rituals"],
  provider: {
    "@type": "HealthAndBeautyBusiness",
    name: "Rejuvenation Mobile Massage Cape Town",
    url: SITE_URL,
    telephone: "+27681849866",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Bloubergstrand" },
    { "@type": "AdministrativeArea", name: "West Coast, Cape Town" },
    { "@type": "AdministrativeArea", name: "Cape Town" },
    capeTownPlace("Bloubergstrand"),
    capeTownPlace("Table View"),
    capeTownPlace("Big Bay"),
    capeTownPlace("Parklands"),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bloubergstrand mobile spa — signature treatments",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep tissue massage in Bloubergstrand",
          description: "Sports and restorative massage after kitesurfing, beach walks, and Atlantic breeze exposure.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury facials in Bloubergstrand",
          description: "Hydrating and barrier facials for coastal wind and sun — ideal before evenings out or guest hosting.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile manicure & pedicure in Bloubergstrand",
          description: "Gel manicures and spa pedicures at home — no mall queues between beach days and school runs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Couples massage Bloubergstrand",
          description: "Side-by-side rituals for anniversaries, holiday rentals, and sunset weekends facing Table Mountain.",
        },
      },
    ],
  },
};

const BLOUBERG_FAQS: LocationFaqItem[] = [
  {
    question: "Do you treat beachfront apartments and holiday lets in Bloubergstrand?",
    answer:
      "Yes — mobile spa Bloubergstrand bookings cover sea-facing blocks, duplexes, and short-term lets. Share intercom names, lift rules, and balcony vs lounge preferences so at-home massage Bloubergstrand setups stay quiet for neighbours.",
  },
  {
    question: "Can you help with kitesurf or beach-day muscle recovery?",
    answer:
      "Absolutely. Mention sport load when you book deep tissue massage in Bloubergstrand — therapists adjust pace for shoulders, hips, and calves after wind sports or long sand walks.",
  },
  {
    question: "How quickly can I book facials Bloubergstrand Cape Town slots?",
    answer:
      "WhatsApp your complex or street pin — when calendars align we often confirm same-day visits, especially mid-week. Stacked facial-plus-massage nights and couples blocks fill faster ahead of long weekends.",
  },
  {
    question: "Do you serve Big Bay, Table View, and Parklands from this route?",
    answer:
      "Yes. Home spa services Bloubergstrand routing naturally extends along the West Coast strip — note your suburb at booking so drive time from Atlantic Seaboard or Northern corridors is quoted accurately.",
  },
  {
    question: "What should Airbnb hosts brief before mobile manicure Bloubergstrand appointments?",
    answer:
      "Reserve a ventilated area with stable polish space, confirm parking bays for kits, and share guest access codes early so mobile manicure Bloubergstrand visits start on time without lobby delays.",
  },
  {
    question: "Can we pair a Blouberg stay with treatments elsewhere in Cape Town?",
    answer:
      "Metro-wide coverage means one concierge rhythm — many guests split weeks between the West Coast and seaboard villas; tell us your itinerary so product kits and therapist notes travel logically across suburbs.",
  },
];

const Bloubergstrand = () => {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BLOUBERG_SERVICE_JSON_LD) }}
      />

      <section className="relative flex min-h-[340px] items-center justify-center md:min-h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Rejuvenation mobile massage and hot stone massage at home in Bloubergstrand with Table Bay views, Cape Town"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background" />
        </div>
        <div className="relative z-10 px-4 py-16 text-center md:py-20">
          <div className="mb-4 flex items-center justify-center gap-2">
            <MapPin className="h-6 w-6 text-primary" aria-hidden />
            <span className="font-medium text-primary">Bloubergstrand · West Coast, Cape Town</span>
          </div>
          <h1 className="mx-auto mb-4 max-w-4xl animate-fade-in font-serif text-4xl font-bold leading-tight md:text-5xl">
            Rejuvenation Mobile Massage Services in Bloubergstrand, Cape Town
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            <span className="font-medium text-foreground">Available today in Bloubergstrand</span> when calendars align ·{" "}
            <span className="font-medium text-primary">Limited slots available</span> — apartments, beach houses &amp; coastal
            estates
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book your spa appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Explore our mobile spa services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background py-14 md:py-20" aria-labelledby="blouberg-guide-heading">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
            <div className="max-w-3xl">
              <h2 id="blouberg-guide-heading" className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
                Mobile spa Bloubergstrand — sea air, mountain views, hotel-grade calm at home
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  <strong className="font-medium text-foreground">Bloubergstrand</strong> trades CBD density for wide skies,
                  kitesurf breezes, and one of the world&apos;s most photographed angles on{" "}
                  <strong className="font-medium text-foreground">Table Mountain</strong> across the bay. That lifestyle attracts
                  young families, remote workers, and holiday hosts whose homes face salt air and wind — so{" "}
                  <strong className="font-medium text-foreground">mobile wellness services Cape Town</strong> crews arrive with
                  coastal nuance: ventilation for nail curing, quieter trolley etiquette in apartment blocks, and massage pressure
                  tuned for athletes coming off the beach.
                </p>
                <p>
                  Searching <strong className="font-medium text-foreground">mobile spa Bloubergstrand</strong>,{" "}
                  <strong className="font-medium text-foreground">at-home massage Bloubergstrand</strong>, or{" "}
                  <strong className="font-medium text-foreground">facials Bloubergstrand Cape Town</strong> means you want privacy
                  without sacrificing views — therapists set portable beds to respect lounge sightlines, balcony doors, and guest
                  sleeping schedules.
                </p>
                <p>
                  From compact sea-facing units to freestanding homes toward{" "}
                  <strong className="font-medium text-foreground">Big Bay</strong> and{" "}
                  <strong className="font-medium text-foreground">Table View</strong>, we choreograph{" "}
                  <strong className="font-medium text-foreground">spa at home Bloubergstrand</strong> visits that feel native:
                  visitor discs, basement parking, and lift protocols noted before arrival.
                </p>
                <p>
                  Splitting time between the West Coast strip and the Atlantic Seaboard? Link this guide with{" "}
                  <Link href="/locations/sea-point" className="font-medium text-primary underline-offset-4 hover:underline">
                    Sea Point
                  </Link>
                  ,{" "}
                  <Link href="/locations/camps-bay" className="font-medium text-primary underline-offset-4 hover:underline">
                    Camps Bay
                  </Link>
                  , and{" "}
                  <Link href="/locations/green-point" className="font-medium text-primary underline-offset-4 hover:underline">
                    Green Point
                  </Link>{" "}
                  — identical concierge standards apply. Hosting family from the{" "}
                  <strong className="font-medium text-foreground">Northern Suburbs</strong>? Pair beach weeks with{" "}
                  <Link href="/locations/durbanville" className="font-medium text-primary underline-offset-4 hover:underline">
                    Durbanville
                  </Link>{" "}
                  estate calm so one WhatsApp thread covers both corridors.
                </p>
                <p>
                  Intent phrases — <strong className="font-medium text-foreground">deep tissue massage in Bloubergstrand</strong>,{" "}
                  <strong className="font-medium text-foreground">luxury facials in Bloubergstrand</strong>,{" "}
                  <strong className="font-medium text-foreground">mobile manicure Bloubergstrand</strong> — belong in booking notes
                  so repeat visits resume with oil preferences, peel timing, and gel colours already logged.
                </p>
                <p>
                  <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
                    Book your spa appointment
                  </Link>{" "}
                  with complex names, bay-window orientation, and parking notes — we encode preferences for every{" "}
                  <strong className="font-medium text-foreground">home spa services Bloubergstrand</strong> guest list.
                </p>
                <p>
                  <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
                    Explore our mobile spa services
                  </Link>{" "}
                  for menus and packages, then browse every neighbourhood via the{" "}
                  <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
                    Cape Town locations hub
                  </Link>
                  .
                </p>
                <p>
                  <strong className="font-medium text-foreground">Massage Bloubergstrand Cape Town</strong> demand climbs around
                  summer holidays, long weekends, and event seasons — when{" "}
                  <span className="font-medium text-foreground">limited slots available</span> messaging appears, reserve couples
                  and stacked treatments early.
                </p>
                <p>
                  Blouberg lifestyles rotate around tides, kites, school calendars, and guests chasing Table Mountain balcony
                  shots — mixing owner-occupied duplexes with holiday lets booked months ahead. We coordinate lift etiquette,
                  humid sea-air skincare, and ventilation for polish curing so{" "}
                  <strong className="font-medium text-foreground">deep tissue massage in Bloubergstrand</strong> supports athletic
                  households while <strong className="font-medium text-foreground">facials Bloubergstrand Cape Town</strong> visitors
                  glow before sunset braais without salon Uber loops.
                </p>
              </div>

              <h3 className="mt-10 font-serif text-xl font-semibold text-foreground md:text-2xl">
                Why coastal Blouberg homeowners book mobile spa rituals
              </h3>
              <ul className="mt-4 space-y-3 text-muted-foreground md:text-lg">
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Block-aware arrivals:</strong> discreet branding, lift etiquette, and
                    neighbour-quiet setup.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Wind-and-sun recovery:</strong> massage and skincare tuned for beach days
                    and ocean exposure.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Holiday-host friendly:</strong> Airbnb and guest-house coordination with
                    clear access briefs.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Metro linking:</strong> same standards when you rotate between West Coast
                    and seaboard addresses.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 lg:sticky lg:top-28">
              <Card className="border-primary/20 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="mb-3 flex items-center gap-2 font-serif text-xl font-semibold">
                    <Clock className="h-5 w-5 text-primary" aria-hidden />
                    Availability
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">Available today in Bloubergstrand</span> when coastal routes
                    have open lanes — mid-week lunch windows often freest.
                    <span className="font-medium text-primary"> Limited slots available</span> ahead of holidays and heat-wave
                    weekends — message early for dual therapists.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="mb-3 flex items-center gap-2 font-serif text-xl font-semibold">
                    <Phone className="h-5 w-5 text-primary" aria-hidden />
                    Concierge line
                  </h3>
                  <p className="mb-2 text-sm text-muted-foreground">Call or WhatsApp:</p>
                  <a href="tel:0681849866" className="text-lg font-semibold text-primary">
                    068 184 9866
                  </a>
                </CardContent>
              </Card>
              <Card className="border-primary/20 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="mb-3 flex items-center gap-2 font-serif text-xl font-semibold">
                    <Star className="h-5 w-5 text-primary" aria-hidden />
                    Reviews &amp; trust
                  </h3>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">
                    Rated 4.9★ · Professional certified therapists · Trusted by clients across Cape Town · 500+ bookings
                    metro-wide
                  </p>
                  <p className="text-sm italic leading-relaxed text-muted-foreground">
                    &ldquo;They set up facing the bay without fuss — true rejuvenation mobile massage Bloubergstrand polish for our
                    apartment.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-medium text-primary">— Jason M., Big Bay</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-gradient-to-br from-primary/10 via-muted/30 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Book Your Spa Experience in Bloubergstrand</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Share complex details, parking level, and sunset timing — we align massage, facials, and nails with your coastal
            calendar.
          </p>
          <p className="mt-2 text-sm font-semibold text-primary">
            Available today in Bloubergstrand — limited slots available this week.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Holiday peaks fill couples windows fast — book stacked treatments early.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book your spa appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Explore treatments &amp; packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <LocationSeoExtras
        areaLabel="Bloubergstrand"
        skipDefaultArticle
        customFaqs={BLOUBERG_FAQS}
        localLead={
          "Whether you are cooling down after kitesurfing, hosting guests in a sea-view rental, or balancing remote work above Table Bay, we deliver rejuvenation mobile massage Bloubergstrand treatments — massage, facials, and nails — with coastal-aware routing and apartment-smart etiquette."
        }
        neighbors={[
          { href: "/locations/durbanville", label: "Durbanville" },
          { href: "/locations/sea-point", label: "Sea Point" },
          { href: "/locations/camps-bay", label: "Camps Bay" },
          { href: "/locations/green-point", label: "Green Point" },
        ]}
      />
    </div>
  );
};

export default Bloubergstrand;
