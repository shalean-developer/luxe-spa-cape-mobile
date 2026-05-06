import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LocationSeoExtras, type LocationFaqItem } from "@/components/locations/LocationSeoExtras";

const heroImage = "/images/hero-spa.jpg";

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

const GOODWOOD_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Luxury mobile spa Goodwood — at-home massage, facials & nails",
  description:
    "Northern Suburbs mobile spa Goodwood visits for family homes and apartments: therapeutic massage, facials, gel nails, and couples rituals — Parow and Bellville corridor routing with metro-wide Cape Town coverage.",
  url: `${SITE_URL}/locations/goodwood`,
  serviceType: ["Mobile massage therapy", "Facial skincare treatments", "Manicure and pedicure", "Couples spa rituals"],
  provider: {
    "@type": "HealthAndBeautyBusiness",
    name: "Luxury Mobile Spa Cape Town",
    url: SITE_URL,
    telephone: "+27681849866",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Goodwood" },
    { "@type": "AdministrativeArea", name: "Northern Suburbs, Cape Town" },
    { "@type": "AdministrativeArea", name: "Cape Town" },
    capeTownPlace("Goodwood"),
    capeTownPlace("Parow"),
    capeTownPlace("Bellville"),
    capeTownPlace("Thornton"),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Goodwood mobile spa — signature treatments",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep tissue massage in Goodwood",
          description: "Desk-week and commuter recovery — pressure tuned for shoulders, neck, and lower back.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury facials in Goodwood",
          description: "Hydrating and clarifying facials for event prep, parent self-care, and repeat monthly rituals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile manicure & pedicure in Goodwood",
          description: "Gel manicures and spa pedicures at home — ideal before weekends toward Blouberg or the CBD.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Couples massage Goodwood",
          description: "Side-by-side rituals for date nights, anniversaries, and guests visiting from across Cape Town.",
        },
      },
    ],
  },
};

const GOODWOOD_FAQS: LocationFaqItem[] = [
  {
    question: "Do you visit Vasco Estate and surrounding Goodwood neighbourhoods?",
    answer:
      "Yes — mobile spa Goodwood routing covers Vasco, Elsies River edges, Thornton, and links toward Parow. Share gate codes and street context so at-home massage Goodwood visits quote accurate drive time from Bellville or Blouberg corridors.",
  },
  {
    question: "How fast can I book facials Goodwood Cape Town appointments?",
    answer:
      "WhatsApp your pin and preferred window — same-day opens when therapists already orbit the Northern Suburbs. Couples blocks and stacked facial-plus-massage nights book faster mid-week before weekend social calendars fill.",
  },
  {
    question: "What should families prepare for mobile manicure Goodwood evenings?",
    answer:
      "Choose a ventilated room, note Wi-Fi for playlists if teens join, and keep pets settled — therapists carry linens and sanitation kits while you focus on homework and meal timing.",
  },
  {
    question: "Can corporate hosts or repeat households lock preferred therapists?",
    answer:
      "Absolutely. We log pressure, facial peel cadence, and gel colours so spa at home Goodwood returns feel consistent — valuable for busy households splitting weeks between Northern bases and Atlantic Seaboard stays.",
  },
  {
    question: "Do you coordinate complex parking and visitor protocols?",
    answer:
      "Yes — mention basement levels, visitor discs, and quiet-hour preferences when booking deep tissue massage in Goodwood so kits and timing align before arrival.",
  },
  {
    question: "Is coverage limited to Goodwood or the whole Cape Town metro?",
    answer:
      "Goodwood is a Northern hub — the same concierge team serves Sea Point to Stellenbosch corridors. Tell coordinators if you rotate suburbs so mobile wellness services Cape Town itineraries stay seamless.",
  },
];

const Goodwood = () => {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(GOODWOOD_SERVICE_JSON_LD) }}
      />

      <section className="relative flex min-h-[340px] items-center justify-center md:min-h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Luxury mobile spa treatment at home in Goodwood, Northern Suburbs Cape Town"
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
            <span className="font-medium text-primary">Goodwood · Northern Suburbs, Cape Town</span>
          </div>
          <h1 className="mx-auto mb-4 max-w-4xl animate-fade-in font-serif text-4xl font-bold leading-tight md:text-5xl">
            Luxury Mobile Spa Services in Goodwood, Cape Town
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            <span className="font-medium text-foreground">Available today in Goodwood</span> when calendars align ·{" "}
            <span className="font-medium text-primary">Limited slots available</span> — apartments, family homes &amp; quiet
            suburban visits
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

      <section className="border-b border-border/60 bg-background py-14 md:py-20" aria-labelledby="goodwood-guide-heading">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
            <div className="max-w-3xl">
              <h2 id="goodwood-guide-heading" className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
                Mobile spa Goodwood — Northern Suburbs access with full Cape Town coverage
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  <strong className="font-medium text-foreground">Goodwood</strong> sits in the practical heart of the{" "}
                  <strong className="font-medium text-foreground">Northern Suburbs</strong> — close to{" "}
                  <strong className="font-medium text-foreground">Parow</strong>,{" "}
                  <strong className="font-medium text-foreground">Bellville</strong>, and arterials toward the CBD — where
                  households value time saved over salon runs. That shapes how we deliver{" "}
                  <strong className="font-medium text-foreground">mobile wellness services Cape Town</strong>: punctual WhatsApp
                  coordination, parking-aware kits, and treatment plans for commuters, parents, and multi-gen homes who want luxury
                  without leaving the driveway.
                </p>
                <p>
                  When you search <strong className="font-medium text-foreground">mobile spa Goodwood</strong>,{" "}
                  <strong className="font-medium text-foreground">at-home massage Goodwood</strong>, or{" "}
                  <strong className="font-medium text-foreground">facials Goodwood Cape Town</strong>, you expect respectful,
                  low-profile arrivals — not loud branding at complex gates. We note intercom names, visitor protocols, and quiet
                  hours so <strong className="font-medium text-foreground">spa at home Goodwood</strong> feels effortless after long
                  days or school-term sprint weeks.
                </p>
                <p>
                  Vasco Estate tree lines, compact apartments, and busier thoroughfare-adjacent streets each need different setup
                  discipline — portable beds for lounge spacing, facial lighting away from street glare, and{" "}
                  <strong className="font-medium text-foreground">mobile manicure Goodwood</strong> stations with airflow for gel
                  curing.
                </p>
                <p>
                  Northern routing clusters naturally with{" "}
                  <Link href="/locations/durbanville" className="font-medium text-primary underline-offset-4 hover:underline">
                    Durbanville
                  </Link>{" "}
                  valley estates and{" "}
                  <Link href="/locations/bloubergstrand" className="font-medium text-primary underline-offset-4 hover:underline">
                    Bloubergstrand
                  </Link>{" "}
                  beach weeks — many families alternate weekends west toward the bay and weekdays near Goodwood. Splitting work
                  between here and the Atlantic Seaboard? Bookmark{" "}
                  <Link href="/locations/sea-point" className="font-medium text-primary underline-offset-4 hover:underline">
                    Sea Point
                  </Link>{" "}
                  and{" "}
                  <Link href="/locations/claremont" className="font-medium text-primary underline-offset-4 hover:underline">
                    Claremont
                  </Link>{" "}
                  so one concierge thread spans your metro footprint.
                </p>
                <p>
                  Intent phrases — <strong className="font-medium text-foreground">deep tissue massage in Goodwood</strong>,{" "}
                  <strong className="font-medium text-foreground">luxury facials in Goodwood</strong>,{" "}
                  <strong className="font-medium text-foreground">mobile manicure Goodwood</strong> — belong in booking notes so
                  return visits resume with preferences on file.
                </p>
                <p>
                  <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
                    Book your spa appointment
                  </Link>{" "}
                  with street context, parking level, and household timing — we encode repeat detail for every{" "}
                  <strong className="font-medium text-foreground">home spa services Goodwood</strong> guest list.
                </p>
                <p>
                  <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
                    Explore our mobile spa services
                  </Link>{" "}
                  for treatment menus, then browse everywhere we drive via the{" "}
                  <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
                    Cape Town locations hub
                  </Link>
                  .
                </p>
                <p>
                  <strong className="font-medium text-foreground">Massage Goodwood Cape Town</strong> demand lifts around school
                  holidays, year-end hosting, and long weekends toward the coast — when{" "}
                  <span className="font-medium text-foreground">limited slots available</span> messaging appears, reserve couples
                  and stacked nights early.
                </p>
                <p>
                  Goodwood rhythms blend shift work, school sport, and weekend hops toward Blouberg beaches — often across
                  multi-gen homes or rented rooms listed between semesters. Therapists arrive with kits tuned for compact lounges,
                  estate boom lists, and pets darting through kitchens — making{" "}
                  <strong className="font-medium text-foreground">spa at home Goodwood</strong> visits predictable for repeat hosts
                  who also book{" "}
                  <strong className="font-medium text-foreground">deep tissue massage in Goodwood</strong> after Parow office
                  weeks.
                </p>
              </div>

              <h3 className="mt-10 font-serif text-xl font-semibold text-foreground md:text-2xl">
                Why Northern Suburbs households book Goodwood mobile spa rituals
              </h3>
              <ul className="mt-4 space-y-3 text-muted-foreground md:text-lg">
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Time saved:</strong> five-star treatments without mall parking or queue
                    friction.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Family-aware scheduling:</strong> flex around school runs, shift work, and
                    weekend coastal hops.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Repeat-ready detail:</strong> oils, skincare, and nail colours tracked for
                    loyal Northern guests.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Metro linking:</strong> same standards when you rotate between Goodwood
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
                    <span className="font-semibold text-foreground">Available today in Goodwood</span> when Northern lanes have
                    openings — Tuesday–Thursday middays often freest.
                    <span className="font-medium text-primary"> Limited slots available</span> ahead of long weekends — message
                    early for dual-therapist blocks.
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
                    &ldquo;Professional, punctual, and beautifully equipped — luxury mobile spa Goodwood visits finally match how
                    we like to unwind at home.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-medium text-primary">— Michelle R., Goodwood</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-gradient-to-br from-primary/10 via-muted/30 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Book Your Spa Experience in Goodwood</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Share complex or street details, parking notes, and treatment goals — we align massage, facials, and nails with your
            Northern Suburbs week.
          </p>
          <p className="mt-2 text-sm font-semibold text-primary">
            Available today in Goodwood — limited slots available this week.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Peak weekends fill couples windows fast — book stacked treatments early.
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
        areaLabel="Goodwood"
        skipDefaultArticle
        customFaqs={GOODWOOD_FAQS}
        localLead={
          "Whether you are recovering after Bellville meetings, juggling school-term logistics, or hosting family from elsewhere in Cape Town, we deliver luxury mobile spa Goodwood treatments — massage, facials, and nails — with Northern Suburbs routing discipline and the same five-star standards as our seaboard routes."
        }
        neighbors={[
          { href: "/locations/durbanville", label: "Durbanville" },
          { href: "/locations/bloubergstrand", label: "Bloubergstrand" },
          { href: "/locations/sea-point", label: "Sea Point" },
          { href: "/locations/claremont", label: "Claremont" },
        ]}
      />
    </div>
  );
};

export default Goodwood;
