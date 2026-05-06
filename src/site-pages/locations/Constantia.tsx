import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LocationSeoExtras, type LocationFaqItem } from "@/components/locations/LocationSeoExtras";

const heroImage = "/images/facial.jpg";

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

const CONSTANTIA_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Luxury mobile spa Constantia — at-home massage, facials & nails",
  description:
    "Estate-grade mobile spa Constantia visits across the Constantia Valley wine route: therapeutic massage, luxury facials, gel nails, and couples rituals for vineyard-adjacent homes, guest cottages, and heritage properties.",
  url: `${SITE_URL}/locations/constantia`,
  serviceType: ["Mobile massage therapy", "Facial skincare treatments", "Manicure and pedicure", "Couples spa rituals"],
  provider: {
    "@type": "HealthAndBeautyBusiness",
    name: "Luxury Mobile Spa Cape Town",
    url: SITE_URL,
    telephone: "+27681849866",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Constantia Valley, Cape Town" },
    { "@type": "AdministrativeArea", name: "Southern Suburbs, Cape Town" },
    capeTownPlace("Constantia"),
    capeTownPlace("Tokai"),
    capeTownPlace("Bishopscourt"),
    capeTownPlace("Claremont"),
    capeTownPlace("Hout Bay"),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Constantia mobile spa — signature treatments",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep tissue massage in Constantia",
          description: "Sports and restorative massage after hikes, rides, or long lunches on wine estates.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury facials in Constantia",
          description: "Hydrating and anti-aging facials tuned for valley wind, mountain sun, and estate entertaining.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile manicure & pedicure in Constantia",
          description: "Gel manicures and spa pedicures before tastings, weddings, or weekend hosting.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Couples massage Constantia",
          description: "Side-by-side rituals for honeymoons, anniversaries, and vineyard stays.",
        },
      },
    ],
  },
};

const CONSTANTIA_FAQS: LocationFaqItem[] = [
  {
    question: "Do you offer mobile spa services on Constantia wine estates and large properties?",
    answer:
      "Yes — mobile spa Constantia bookings are built for rambling lawns, guest cottages, and secured estate drives. We coordinate with house managers and security booms daily so at-home massage Constantia visits arrive with discreet signage, trolley-friendly kits, and bed orientation mapped for mountain-view lounges.",
  },
  {
    question: "Can we book facials or massage between wine tastings or a wedding weekend?",
    answer:
      "Absolutely. Spa at home Constantia scheduling flexes around cellar bookings, noon tastings, and rehearsal timelines — ideal when you want luxury facials in Constantia before sundowners or deep tissue after vineyard walks. Share gate codes and approximate walking distance from parking when you book your spa appointment.",
  },
  {
    question: "How quickly can I book a massage in Constantia during peak season?",
    answer:
      "Massage Constantia Cape Town routes open fastest mid-week before valley traffic peaks. WhatsApp your estate or suburb pin — we often confirm within the hour when therapists orbit Tokai or Bishopscourt corridors. Summer weekends and harvest-season entertaining fill quickly — reserve couples blocks early.",
  },
  {
    question: "Do you treat dryer valley air differently than seaboard humidity?",
    answer:
      "Constantia Valley microclimates lean cooler and drier than the Atlantic strip — home spa services Constantia guests favour barrier-rich facials, scalp-release massage add-ons, and nourishing oils after hiking Constantia Nek or Tokai Forest loops.",
  },
  {
    question: "Can corporate hosts or retreat planners book multiple therapists?",
    answer:
      "Yes — mobile wellness services Cape Town coordinators stack dual therapists for villa parties, executive offsites, and multi-night guest programmes. Mention bed counts, parking for two vehicles, and quiet-hour preferences so mobile manicure in Constantia touch-ups run parallel without crossover.",
  },
  {
    question: "How should I brief estate security and long driveways?",
    answer:
      "Serving residents and visitors in Constantia means honouring intercom names, visitor discs, and gravel approaches — note these when booking deep tissue massage in Constantia so kits preload correctly and steep driveways never delay table setup.",
  },
];

const Constantia = () => {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CONSTANTIA_SERVICE_JSON_LD) }}
      />

      <section className="relative flex min-h-[340px] items-center justify-center md:min-h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Luxury facial and mobile spa treatment at home in Constantia estate, Cape Town wine valley"
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
            <span className="font-medium text-primary">Constantia · Cape Town wine valley</span>
          </div>
          <h1 className="mx-auto mb-4 max-w-4xl animate-fade-in font-serif text-4xl font-bold leading-tight md:text-5xl">
            Luxury Mobile Spa Services in Constantia, Cape Town
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            <span className="font-medium text-foreground">Available today in Constantia</span> when calendars align ·{" "}
            <span className="font-medium text-primary">Limited valley &amp; estate slots</span> — vineyards, guest cottages
            &amp; heritage homes
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

      <section className="border-b border-border/60 bg-background py-14 md:py-20" aria-labelledby="constantia-guide-heading">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
            <div className="max-w-3xl">
              <h2 id="constantia-guide-heading" className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
                Mobile spa Constantia — estate calm along the wine route
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  The <strong className="font-medium text-foreground">Constantia Valley</strong> folds vineyards, heritage
                  homesteads, and mountain-backed estates into one of Cape Town&apos;s quietest luxury corridors — minutes
                  from <strong className="font-medium text-foreground">Tokai Forest</strong> trails yet still inside the{" "}
                  <strong className="font-medium text-foreground">Southern Suburbs</strong> envelope. That geography drives how
                  we kit <strong className="font-medium text-foreground">mobile wellness services Cape Town</strong> teams:
                  cooler valley air, gravel drives, longer intercom lists, and entertaining calendars built around tastings,
                  polo weekends, and multi-gen family stays.
                </p>
                <p>
                  Searching <strong className="font-medium text-foreground">mobile spa Constantia</strong>,{" "}
                  <strong className="font-medium text-foreground">spa at home Constantia</strong>, or{" "}
                  <strong className="font-medium text-foreground">home spa services Constantia</strong> signals you expect
                  discretion first — no branded vans idling at vineyard gates. We choreograph silent arrivals, respectful parking,
                  and linen discipline so <strong className="font-medium text-foreground">at-home massage Constantia</strong>{" "}
                  honours staff quarters, guest wings, and pool houses alike.
                </p>
                <p>
                  Whether you&apos;re restoring after Constantia Nek walks or hosting friends from abroad for a week of cellar
                  hopping, therapists adapt pressure, facial chemistry, and nail curing times to valley dryness — not generic
                  coastal defaults.
                </p>
                <p>
                  Routing clusters naturally with{" "}
                  <Link href="/locations/tokai" className="font-medium text-primary underline-offset-4 hover:underline">
                    Tokai forest-edge spa visits
                  </Link>
                  ,{" "}
                  <Link href="/locations/bishopscourt" className="font-medium text-primary underline-offset-4 hover:underline">
                    Bishopscourt estate wellness
                  </Link>
                  ,{" "}
                  <Link href="/locations/claremont" className="font-medium text-primary underline-offset-4 hover:underline">
                    Claremont suburban bookings
                  </Link>
                  , and{" "}
                  <Link href="/locations/hout-bay" className="font-medium text-primary underline-offset-4 hover:underline">
                    Hout Bay harbour escapes
                  </Link>
                  . Splitting a week between valley roses and Atlantic sunsets? Pair this guide with{" "}
                  <Link href="/locations/camps-bay" className="font-medium text-primary underline-offset-4 hover:underline">
                    Camps Bay
                  </Link>{" "}
                  or{" "}
                  <Link href="/locations/sea-point" className="font-medium text-primary underline-offset-4 hover:underline">
                    Sea Point
                  </Link>{" "}
                  — coordinators often stitch itineraries for guests who hop ridges mid-week.
                </p>
                <p>
                  Intent-rich phrases —{" "}
                  <strong className="font-medium text-foreground">deep tissue massage in Constantia</strong>,{" "}
                  <strong className="font-medium text-foreground">luxury facials in Constantia</strong>,{" "}
                  <strong className="font-medium text-foreground">mobile manicure in Constantia</strong> — live in your booking
                  notes so each return visit picks up where the last ended: preferred oils, peel cadence, gel colours on file.
                </p>
                <p>
                  <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
                    Book your spa appointment
                  </Link>{" "}
                  with estate names, boom protocols, and tasting schedules — we encode repeat preferences for every{" "}
                  <strong className="font-medium text-foreground">mobile spa Constantia</strong> guest list.
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
                  <strong className="font-medium text-foreground">Massage Constantia Cape Town</strong> demand mirrors harvest
                  entertaining, school holidays, and wedding seasons — reserve stacked facial-plus-massage nights and couples hot
                  stone blocks before calendars collide with long-table Sundays.
                </p>
                <p>
                  Constantia schedules oscillate between quiet homestead weeks and estate weekends packed with tastings,
                  polo hospitality, and multi-gen family stays — plus vineyard cottages listed for discerning Airbnb guests.
                  Therapists adapt table orientation for wraparound verandas, coordinate with house managers when staff are on
                  rotation, and respect gravel-drive arrivals so{" "}
                  <strong className="font-medium text-foreground">mobile manicure in Constantia</strong> curing times stay
                  flawless before sunset hosting.
                </p>
              </div>

              <h3 className="mt-10 font-serif text-xl font-semibold text-foreground md:text-2xl">
                Why valley estates choose in-home spa rituals
              </h3>
              <ul className="mt-4 space-y-3 text-muted-foreground md:text-lg">
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Estate-native etiquette:</strong> security-aware arrivals, subtle branding,
                    respectful staff coordination.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Wine-weekend timing:</strong> flex around tastings, polo luncheons, and
                    sunset hosting without salon runs.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Mountain-valley recovery:</strong> massage pressure and skincare tuned for
                    trails, rides, and cooler nights.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Premium kits on arrival:</strong> hotel-grade linens, facial devices, and
                    nail systems scaled to cottage or manor layouts.
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
                    <span className="font-semibold text-foreground">Available today in Constantia</span> when therapists have
                    valley lanes open — Tuesday–Thursday middays often freest.
                    <span className="font-medium text-primary"> Limited estate slots</span> ahead of long weekends and harvest
                    entertaining — message early for dual-therapist blocks.
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
                    &ldquo;They handled our estate access flawlessly — true mobile spa Constantia polish without disturbing the
                    household rhythm.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-medium text-primary">— Alexandra V., Upper Constantia</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-gradient-to-br from-primary/10 via-muted/30 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Book Your Spa Experience in Constantia</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Share estate details, tasting schedules, and quiet-hour preferences — we align massage, facials, and nails with your
            valley calendar.
          </p>
          <p className="mt-2 text-sm font-semibold text-primary">
            Available today in Constantia — limited valley &amp; estate slots this week.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Harvest weekends and wedding seasons fill dual-therapist windows fast — book couples rituals early.
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
        areaLabel="Constantia"
        skipDefaultArticle
        customFaqs={CONSTANTIA_FAQS}
        localLead={
          "Whether you're hosting on a Constantia wine estate, recovering between tastings, or unwinding in a valley guest cottage, we deliver luxury mobile spa Constantia treatments — massage, facials, and nails — with estate-aware routing and vineyard-country discretion."
        }
        neighbors={[
          { href: "/locations/tokai", label: "Tokai" },
          { href: "/locations/bishopscourt", label: "Bishopscourt" },
          { href: "/locations/hout-bay", label: "Hout Bay" },
          { href: "/locations/claremont", label: "Claremont" },
        ]}
      />
    </div>
  );
};

export default Constantia;
