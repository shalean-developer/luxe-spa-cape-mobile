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

const GREEN_POINT_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Rejuvenation mobile massage Green Point — at-home massage, facials & nails",
  description:
    "Five-star mobile spa Green Point visits for Atlantic Seaboard apartments, Waterfront-adjacent hotels, and urban townhouses — massage, facials, gel nails, and couples rituals minutes from the V&A Waterfront.",
  url: `${SITE_URL}/locations/green-point`,
  serviceType: ["Mobile massage therapy", "Facial skincare treatments", "Manicure and pedicure", "Couples spa rituals"],
  provider: {
    "@type": "HealthAndBeautyBusiness",
    name: "Rejuvenation Mobile Massage Cape Town",
    url: SITE_URL,
    telephone: "+27681849866",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Atlantic Seaboard, Cape Town" },
    capeTownPlace("Green Point"),
    capeTownPlace("Sea Point"),
    capeTownPlace("Mouille Point"),
    capeTownPlace("De Waterkant"),
    capeTownPlace("Tamboerskloof"),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Green Point mobile spa — signature treatments",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep tissue massage in Green Point",
          description: "Therapeutic massage for urban professionals and visitors near the Waterfront.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury facials in Green Point",
          description: "Hydrating and event-ready facials for seaboard wind and CBD-grade schedules.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile manicure & pedicure in Green Point",
          description: "Gel nails and spa pedicures before harbour dinners or conference galas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Couples massage Green Point",
          description: "Side-by-side massage for staycation apartments and boutique hotel suites.",
        },
      },
    ],
  },
};

const GREEN_POINT_FAQS: LocationFaqItem[] = [
  {
    question: "Do you offer mobile spa services in Green Point apartments and penthouses?",
    answer:
      "Yes — mobile spa Green Point bookings thrive in high-rise Atlantic Seaboard blocks, loft conversions, and harbour-view penthouses. We choreograph portable beds for glass-front lounges, manage ventilation after windy walks, and keep neighbour-aware discretion — core to at-home massage Green Point residents expect between meetings and marina sunsets.",
  },
  {
    question: "Can therapists visit my hotel if I'm staying near the V&A Waterfront?",
    answer:
      "Absolutely. We liaise with concierge teams serving Waterfront-adjacent properties daily. Whether you are on a conference block or a harbour honeymoon, spa at home Green Point timing flexes around keynote schedules and sunset cruises — with facials Green Point delegates book before gala nights.",
  },
  {
    question: "How fast can I book a massage in Green Point on a weekday?",
    answer:
      "Massage Green Point Cape Town routing peaks before dinner reservations and after office clears — WhatsApp your pin near Somerset Road or Rheede Street corridors and we often confirm within the hour when therapists orbit Mouille Point or Sea Point. Limited Atlantic Seaboard slots Friday evenings; message early.",
  },
  {
    question: "Do you support corporate wellness or small events in Green Point?",
    answer:
      "Yes — home spa services Green Point planners use include stacked chair-massage rotations at townhouses, bridal prep facials, and multi-bed villa setups when teams rent adjoining apartments. Share headcount and parking bays when you book your spa appointment so mobile wellness services Cape Town coordinators slot equipment accordingly.",
  },
  {
    question: "What works best after walking the Promenade or Waterfront?",
    answer:
      "Salt-air tightness responds well to sports-flush massage paired with barrier facials — luxury facials in Green Point often focus on hydration after harbour wind. Mobile manicure in Green Point touch-ups keep hands camera-ready for waterfront content without losing your Uber window.",
  },
  {
    question: "How should I brief parking or loading for Green Point complexes?",
    answer:
      "Mention basement levels, visitor discs, and walking distance from bays to lifts — serving residents and visitors in Green Point means preloading trolley-friendly kits so deep tissue massage in Green Point sessions start on schedule, not after a maze through parking pillars.",
  },
];

const GreenPoint = () => {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(GREEN_POINT_SERVICE_JSON_LD) }}
      />

      <section className="relative flex min-h-[340px] items-center justify-center md:min-h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Mobile spa Green Point Cape Town — luxury massage setup at home near V&A Waterfront and Atlantic Seaboard"
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
            <span className="font-medium text-primary">Green Point · Atlantic Seaboard</span>
          </div>
          <h1 className="mx-auto mb-4 max-w-4xl animate-fade-in font-serif text-4xl font-bold leading-tight md:text-5xl">
            Rejuvenation Mobile Massage Services in Green Point, Cape Town
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            <span className="font-medium text-foreground">Available today in Green Point</span> when calendars align ·{" "}
            <span className="font-medium text-primary">Limited Atlantic Seaboard slots</span> — apartments, hotels &amp;
            stays minutes from the V&amp;A Waterfront
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

      <section className="border-b border-border/60 bg-background py-14 md:py-20" aria-labelledby="green-point-guide-heading">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
            <div className="max-w-3xl">
              <h2 id="green-point-guide-heading" className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
                Mobile spa Green Point — harbour energy, apartment-quiet calm
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Green Point sits where the <strong className="font-medium text-foreground">Atlantic Seaboard</strong> meets
                  urban Cape Town — footsteps from the <strong className="font-medium text-foreground">V&amp;A Waterfront</strong>,{" "}
                  the stadium precinct, and Mouille&apos;s lighthouse glow. That blend of conference delegates, design-led
                  apartments, and weekend harbour cyclists is why our{" "}
                  <strong className="font-medium text-foreground">mobile wellness services Cape Town</strong> kits include both
                  express facial stacks for tight agendas and slow Swedish arcs for staycation Sundays.
                </p>
                <p>
                  Searching <strong className="font-medium text-foreground">mobile spa Green Point</strong>,{" "}
                  <strong className="font-medium text-foreground">spa at home Green Point</strong>, or{" "}
                  <strong className="font-medium text-foreground">home spa services Green Point</strong> usually means you want
                  five-star recovery without surrendering your parking bay or jacket dress code. We transform dining alcoves and
                  harbour-view lounges into treatment suites — crisp linens, steam discipline, pro sanitation — so{" "}
                  <strong className="font-medium text-foreground">at-home massage Green Point</strong> feels bespoke to your
                  floor plan.
                </p>
                <p>
                  Located minutes from the <strong className="font-medium text-foreground">Cape Town CBD</strong> yet cooled by
                  seaboard air, Green Point rewards therapists who understand lift logistics, noise etiquette after night matches,
                  and the rush before harbour reservations — every arrival note you share lands in your profile for repeat
                  visits.
                </p>
                <p>
                  We mesh routing with neighbouring hubs — see{" "}
                  <Link href="/locations/sea-point" className="font-medium text-primary underline-offset-4 hover:underline">
                    Sea Point mobile spa
                  </Link>
                  ,{" "}
                  <Link href="/locations/mouille-point" className="font-medium text-primary underline-offset-4 hover:underline">
                    Mouille Point treatments
                  </Link>
                  ,{" "}
                  <Link href="/locations/de-waterkant" className="font-medium text-primary underline-offset-4 hover:underline">
                    De Waterkant at-home wellness
                  </Link>
                  , and{" "}
                  <Link href="/locations/tamboerskloof" className="font-medium text-primary underline-offset-4 hover:underline">
                    Tamboerskloof spa visits
                  </Link>
                  . Hosting guests headed to Bantry ridges or Camps Bay beaches later in the week? Scan{" "}
                  <Link href="/locations/camps-bay" className="font-medium text-primary underline-offset-4 hover:underline">
                    Camps Bay
                  </Link>{" "}
                  for villa-heavy itineraries — coordinators often chain Seaboard suburbs on one therapist orbit.
                </p>
                <p>
                  Long-tail clarity: guests book{" "}
                  <strong className="font-medium text-foreground">deep tissue massage in Green Point</strong>,{" "}
                  <strong className="font-medium text-foreground">luxury facials in Green Point</strong>, and{" "}
                  <strong className="font-medium text-foreground">mobile manicure in Green Point</strong> as distinct intents —
                  we capture each with setup cards so outcomes stay consistent whether you face Signal Hill breezes or harbour
                  halogen glare.
                </p>
                <p>
                  <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
                    Book your spa appointment
                  </Link>{" "}
                  with concierge contacts, loading zones, and quiet-hour preferences — mention Waterfront events when road closures
                  apply so <strong className="font-medium text-foreground">mobile spa Green Point</strong> arrivals stay
                  punctual.
                </p>
                <p>
                  <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
                    Explore our mobile spa services
                  </Link>{" "}
                  for menu depth, then cross-check suburb guides on the{" "}
                  <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
                    Cape Town locations hub
                  </Link>
                  .
                </p>
                <p>
                  <strong className="font-medium text-foreground">Massage Green Point Cape Town</strong> calendars spike around
                  concerts, boat shows, and quarter-close sprints — reserve couples blocks and stacked facial-plus-massage nights
                  early when calendars collide with Atlantic Seaboard event traffic.
                </p>
                <p>
                  Green Point mixes waterfront hotels, loft-style apartments, and Airbnb pivots for conference overflow —
                  meaning therapists balance concierge desks, basement parking, and harbour-night noise curfews. Share whether you
                  are hosting delegates or unwinding after Signal Hill laps — we tailor{" "}
                  <strong className="font-medium text-foreground">facials in Green Point</strong> for flash photography events and{" "}
                  <strong className="font-medium text-foreground">deep tissue massage in Green Point</strong> for cyclists looping
                  the promenade.
                </p>
              </div>

              <h3 className="mt-10 font-serif text-xl font-semibold text-foreground md:text-2xl">
                Why Green Point residents and visitors book in-home spa days
              </h3>
              <ul className="mt-4 space-y-3 text-muted-foreground md:text-lg">
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Waterfront-close without lobby queues:</strong> skip rideshare loops
                    before harbour dinners.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Corporate-grade discretion:</strong> ideal for delegates, founders, and
                    hosting teams in adjoining units.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Event-aware timing:</strong> flex around stadium nights, launches, and
                    sunset harbour cruises.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Seaboard-smart products:</strong> oils and facials tuned for salt breeze,
                    wind, and long summer UV days.
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
                    <span className="font-semibold text-foreground">Available today in Green Point</span> when diaries allow —
                    midday weekday gaps often open between meetings.
                    <span className="font-medium text-primary"> Limited Atlantic Seaboard slots</span> on event weekends —
                    WhatsApp early for evening couples bookings.
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
                    &ldquo;Pre-Waterfront massage without losing our parking spot — exactly the mobile spa Green Point upgrade we
                    wanted.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-medium text-primary">— Priya N., Somerset Road apartment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-gradient-to-br from-primary/10 via-muted/30 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Book Your Spa Experience in Green Point</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Share your building, concierge details, and ideal slot — we align massage, facials, and nails with harbour-side
            schedules.
          </p>
          <p className="mt-2 text-sm font-semibold text-primary">
            Available today in Green Point — limited Atlantic Seaboard slots this week.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Event nights and long weekends fill fast — book couples and hot stone sessions ahead of stadium or Waterfront peaks.
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
        areaLabel="Green Point"
        skipDefaultArticle
        customFaqs={GREEN_POINT_FAQS}
        localLead={
          "Whether you're in a Green Point penthouse, a Waterfront-adjacent hotel, or a townhouse between Somerset and Main, we deliver rejuvenation mobile massage Green Point treatments — massage, facials, and nails — with Atlantic Seaboard routing and concierge-grade discretion."
        }
        neighbors={[
          { href: "/locations/sea-point", label: "Sea Point" },
          { href: "/locations/mouille-point", label: "Mouille Point" },
          { href: "/locations/de-waterkant", label: "De Waterkant" },
          { href: "/locations/tamboerskloof", label: "Tamboerskloof" },
        ]}
      />
    </div>
  );
};

export default GreenPoint;
