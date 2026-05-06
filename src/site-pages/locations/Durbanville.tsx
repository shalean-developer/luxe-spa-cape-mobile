import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LocationSeoExtras, type LocationFaqItem } from "@/components/locations/LocationSeoExtras";

const heroImage = "/images/spa-setup.jpg";

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

const DURBANVILLE_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Luxury mobile spa Durbanville — at-home massage, facials & nails",
  description:
    "Northern Suburbs mobile spa Durbanville visits for family homes and estates: therapeutic massage, luxury facials, gel nails, and couples rituals — quiet driveways, estate protocols, and repeat-friendly scheduling toward Bellville and central Cape Town.",
  url: `${SITE_URL}/locations/durbanville`,
  serviceType: ["Mobile massage therapy", "Facial skincare treatments", "Manicure and pedicure", "Couples spa rituals"],
  provider: {
    "@type": "HealthAndBeautyBusiness",
    name: "Luxury Mobile Spa Cape Town",
    url: SITE_URL,
    telephone: "+27681849866",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Durbanville" },
    { "@type": "AdministrativeArea", name: "Northern Suburbs, Cape Town" },
    { "@type": "AdministrativeArea", name: "Cape Town" },
    capeTownPlace("Durbanville"),
    capeTownPlace("Bellville"),
    capeTownPlace("Bloubergstrand"),
    capeTownPlace("Goodwood"),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Durbanville mobile spa — signature treatments",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep tissue massage in Durbanville",
          description: "Sports and restorative massage after gym sessions, desk weeks, or estate gardening — tuned for suburban recovery.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury facials in Durbanville",
          description: "Hydrating and anti-aging facials Cape Town guests book for events, school calendars, and quiet at-home evenings.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile manicure & pedicure in Durbanville",
          description: "Gel manicures and spa pedicures without salon queues — ideal before weekends on the wine route or family celebrations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Couples massage Durbanville",
          description: "Side-by-side rituals for date nights at home, anniversaries, and guests visiting from Bellville or the Atlantic Seaboard.",
        },
      },
    ],
  },
};

const DURBANVILLE_FAQS: LocationFaqItem[] = [
  {
    question: "Do you visit Durbanville estates and gated suburbs for home spa appointments?",
    answer:
      "Yes — mobile spa Durbanville routing is built for quiet streets, larger suburban plots, and secured complexes. Share boom codes, visitor parking rules, and whether we should use a side entrance so at-home massage Durbanville visits stay discreet and neighbour-friendly.",
  },
  {
    question: "How fast can I book facials Durbanville Cape Town teams when calendars are tight?",
    answer:
      "WhatsApp your suburb pin and preferred window — we often confirm same-day when therapists already orbit the Northern Suburbs or Bellville corridors. Couples blocks and stacked facial-plus-massage nights book faster mid-week; weekends fill around school sport and wine-route hosting.",
  },
  {
    question: "What should families prepare before a mobile manicure Durbanville or kids-at-home evening?",
    answer:
      "Choose a ventilated room with a stable surface for polish curing, keep pets settled elsewhere, and note Wi-Fi names if teens want playlists. Therapists carry linens and sanitation kits — you focus on schedules while we set up a calm, private setting.",
  },
  {
    question: "Do you cover Durbanville Hills, Vierlanden, and Aurora-style neighbourhoods?",
    answer:
      "Absolutely. Search phrases like spa at home Durbanville or deep tissue massage in Durbanville apply across the valley pocket — mention estate or street context when booking so drive times from Cape Town centre or Bellville are quoted accurately.",
  },
  {
    question: "Can repeat guests lock preferred therapists for monthly wellness?",
    answer:
      "Yes — we note pressure preferences, facial peel cadence, and gel colours on file so each return feels consistent. That matters most for busy households pairing Northern Suburbs routines with occasional Atlantic Seaboard stays.",
  },
  {
    question: "How do you coordinate if we split time between Durbanville and Cape Town beaches?",
    answer:
      "Tell coordinators when you shuttle between suburbs — we stitch itineraries across metro-wide coverage so one booking rhythm carries whether you are home near Bellville or hosted closer to the CBD and seaboard.",
  },
];

const Durbanville = () => {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DURBANVILLE_SERVICE_JSON_LD) }}
      />

      <section className="relative flex min-h-[340px] items-center justify-center md:min-h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Luxury mobile spa setup at home in Durbanville estate, Northern Suburbs Cape Town"
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
            <span className="font-medium text-primary">Durbanville · Northern Suburbs, Cape Town</span>
          </div>
          <h1 className="mx-auto mb-4 max-w-4xl animate-fade-in font-serif text-4xl font-bold leading-tight md:text-5xl">
            Luxury Mobile Spa Services in Durbanville, Cape Town
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            <span className="font-medium text-foreground">Available today in Durbanville</span> when calendars align ·{" "}
            <span className="font-medium text-primary">Limited slots available</span> — estates, family homes &amp; quiet suburban
            visits
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

      <section className="border-b border-border/60 bg-background py-14 md:py-20" aria-labelledby="durbanville-guide-heading">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
            <div className="max-w-3xl">
              <h2 id="durbanville-guide-heading" className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
                Mobile spa Durbanville — quiet suburban luxury with metro-wide coverage
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  <strong className="font-medium text-foreground">Durbanville</strong> sits in the{" "}
                  <strong className="font-medium text-foreground">Northern Suburbs</strong> corridor — generous plots, tree-lined
                  estates, and family rhythms that prize privacy over salon queues. That profile shapes how we kit{" "}
                  <strong className="font-medium text-foreground">mobile wellness services Cape Town</strong> teams: longer
                  driveways, school-run timing, and repeat bookings from households who want spa-grade calm without leaving home.
                  Proximity to <strong className="font-medium text-foreground">Bellville</strong> and arterial routes into central{" "}
                  <strong className="font-medium text-foreground">Cape Town</strong> means therapists can orbit Northern pockets
                  efficiently while still serving guests who work or entertain across the wider metro.
                </p>
                <p>
                  When you search <strong className="font-medium text-foreground">mobile spa Durbanville</strong>,{" "}
                  <strong className="font-medium text-foreground">at-home massage Durbanville</strong>, or{" "}
                  <strong className="font-medium text-foreground">facials Durbanville Cape Town</strong>, you are signalling a
                  preference for low-profile arrivals — no loud branding at complex gates. We coordinate visitor discs, intercom
                  names, and estate notes so <strong className="font-medium text-foreground">spa at home Durbanville</strong> feels
                  native to your household, whether you live on a freestanding stand or a manicured cluster.
                </p>
                <p>
                  Suburban homes and lifestyle estates here favour spacious lounges, covered patios, and dedicated spare rooms —
                  ideal for portable beds, facial lighting, and{" "}
                  <strong className="font-medium text-foreground">mobile manicure Durbanville</strong> setups that need ventilation
                  and stable surfaces. Parents stack appointments after homework blocks; professionals book deep tissue after
                  Bellville meetings; hosts schedule glow facials before Durbanville Wine Route weekends — all without fighting
                  traffic back from the CBD.
                </p>
                <p>
                  Our coverage is deliberately metro-wide: the same concierge standards that power{" "}
                  <Link href="/locations/sea-point" className="font-medium text-primary underline-offset-4 hover:underline">
                    Sea Point
                  </Link>{" "}
                  apartments and{" "}
                  <Link href="/locations/camps-bay" className="font-medium text-primary underline-offset-4 hover:underline">
                    Camps Bay
                  </Link>{" "}
                  villas extends to Northern family bases. Splitting work weeks between the seaboard and home near Durbanville?
                  Pair this guide with{" "}
                  <Link href="/locations/constantia" className="font-medium text-primary underline-offset-4 hover:underline">
                    Constantia
                  </Link>{" "}
                  valley stays or{" "}
                  <Link href="/locations/claremont" className="font-medium text-primary underline-offset-4 hover:underline">
                    Claremont
                  </Link>{" "}
                  Southern Suburbs visits — coordinators often stitch itineraries for guests who move across Cape Town monthly.
                </p>
                <p>
                  Intent-rich phrases —{" "}
                  <strong className="font-medium text-foreground">deep tissue massage in Durbanville</strong>,{" "}
                  <strong className="font-medium text-foreground">facials in Durbanville</strong>,{" "}
                  <strong className="font-medium text-foreground">mobile manicure Durbanville</strong> — belong in your booking notes
                  so return visits resume with oils, peel cadence, and gel colours already on file.
                </p>
                <p>
                  <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
                    Book your spa appointment
                  </Link>{" "}
                  with estate or complex names, boom protocols, and quiet-hour preferences — we encode repeat preferences for every{" "}
                  <strong className="font-medium text-foreground">home spa services Durbanville</strong> guest list.
                </p>
                <p>
                  <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
                    Explore our mobile spa services
                  </Link>{" "}
                  for full menus, then browse every suburb via the{" "}
                  <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
                    Cape Town locations hub
                  </Link>
                  .
                </p>
                <p>
                  <strong className="font-medium text-foreground">Massage Durbanville Cape Town</strong> demand spikes around school
                  holidays, wine-route events, and year-end hosting — reserve stacked facial-plus-massage evenings and couples
                  blocks early when{" "}
                  <span className="font-medium text-foreground">limited slots available</span> messaging lights up mid-week.
                </p>
                <p>
                  Durbanville households span quiet cul-de-sacs, newer estates, and guest cottages booked for wine-route
                  weekends — often with grandparents visiting or teens juggling sport fixtures. Therapists respect boom protocols,
                  homework-hour silence, and pantry-foot traffic so{" "}
                  <strong className="font-medium text-foreground">at-home massage Durbanville</strong> sessions restore parents after
                  Bellville commutes without disrupting the household rhythm, while{" "}
                  <strong className="font-medium text-foreground">mobile manicure Durbanville</strong> appointments align with
                  Friday hosts prepping dinner tables.
                </p>
              </div>

              <h3 className="mt-10 font-serif text-xl font-semibold text-foreground md:text-2xl">
                Why Northern Suburbs households choose in-home spa rituals
              </h3>
              <ul className="mt-4 space-y-3 text-muted-foreground md:text-lg">
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Private, quiet setting:</strong> treatments tailored to suburban layouts —
                    no mall parking or waiting rooms.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Family-aware scheduling:</strong> flex around school runs, estate security,
                    and weekend hosting.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Repeat-ready detail:</strong> pressure, skincare, and nail preferences
                    tracked for loyal Northern corridors guests.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Premium kits on arrival:</strong> hotel-grade linens, facial devices, and
                    nail systems scaled to lounge or spare-room setups.
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
                    <span className="font-semibold text-foreground">Available today in Durbanville</span> when therapists have
                    Northern lanes open — Tuesday–Thursday middays often freest before Bellville and CBD commitments stack.
                    <span className="font-medium text-primary"> Limited slots available</span> ahead of long weekends and wine-route
                    Saturdays — message early for dual-therapist blocks.
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
                    &ldquo;Finally a mobile spa that respects our estate boom — luxury mobile spa Durbanville visits feel calm,
                    punctual, and completely private.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-medium text-primary">— Nicole R., Durbanville Hills</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-gradient-to-br from-primary/10 via-muted/30 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Book Your Spa Experience in Durbanville</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Share estate or complex details, preferred quiet hours, and treatment goals — we align massage, facials, and nails with
            your Northern Suburbs calendar.
          </p>
          <p className="mt-2 text-sm font-semibold text-primary">
            Available today in Durbanville — limited slots available this week.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Weekends and school holidays fill dual-therapist windows fast — book couples rituals early.
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
        areaLabel="Durbanville"
        skipDefaultArticle
        customFaqs={DURBANVILLE_FAQS}
        localLead={
          "Whether you are unwinding in a Durbanville estate after Bellville meetings, hosting family from across Cape Town, or stacking self-care around school calendars, we deliver luxury mobile spa Durbanville treatments — massage, facials, and nails — with suburban discretion and Northern Suburbs routing expertise."
        }
        neighbors={[
          { href: "/locations/sea-point", label: "Sea Point" },
          { href: "/locations/constantia", label: "Constantia" },
          { href: "/locations/claremont", label: "Claremont" },
          { href: "/locations/camps-bay", label: "Camps Bay" },
        ]}
      />
    </div>
  );
};

export default Durbanville;
