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

const CAMPS_BAY_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Luxury mobile spa Camps Bay — at-home massage, facials & nails",
  description:
    "Five-star mobile spa Camps Bay visits for beachfront villas, luxury hotels, and holiday lets: massage, facials, gel nails, and couples rituals along Victoria Road and the Atlantic Seaboard.",
  url: `${SITE_URL}/locations/camps-bay`,
  serviceType: ["Mobile massage therapy", "Facial skincare treatments", "Manicure and pedicure", "Couples spa rituals"],
  provider: {
    "@type": "HealthAndBeautyBusiness",
    name: "Luxury Mobile Spa Cape Town",
    url: SITE_URL,
    telephone: "+27681849866",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Atlantic Seaboard, Cape Town" },
    capeTownPlace("Camps Bay"),
    capeTownPlace("Clifton"),
    capeTownPlace("Bantry Bay"),
    capeTownPlace("Sea Point"),
    capeTownPlace("Llandudno"),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Camps Bay mobile spa — signature treatments",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep tissue massage in Camps Bay",
          description: "Therapeutic and sports massage at your Camps Bay villa or hotel suite.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury facials in Camps Bay",
          description: "Hydrating and rejuvenating facials after beach days and coastal sun.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile manicure & pedicure in Camps Bay",
          description: "Gel manicures and spa pedicures for guests and residents on Victoria Road.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Couples massage Camps Bay",
          description: "Side-by-side massage for honeymoons, anniversaries, and luxury stays.",
        },
      },
    ],
  },
};

const CAMPS_BAY_FAQS: LocationFaqItem[] = [
  {
    question: "Do you offer mobile spa services in Camps Bay villas and apartments?",
    answer:
      "Yes — mobile spa Camps Bay appointments are built for split-level villas, glass-front apartments, and boutique letting blocks along Victoria Road. We bring discreet setup for at-home massage Camps Bay guests expect: portable beds, linens, and oils tuned for ocean breeze and terraced layouts.",
  },
  {
    question: "Can therapists visit my hotel or Airbnb if I'm a tourist in Camps Bay?",
    answer:
      "Absolutely. We liaise with concierge teams, villa managers, and short-let hosts daily. Whether you are here for a summer holiday or a shoot week, spa at home Camps Bay timing flexes around sundowners, beach walks, and Twelve Apostles sunsets — with facials Camps Bay travellers book before fine dining on the strip.",
  },
  {
    question: "How fast can I book a massage in Camps Bay during peak season?",
    answer:
      "Massage Camps Bay Cape Town routes move quickest on weekday mornings before beach crowds peak. WhatsApp your pin on Victoria Road or Beta Road — we often confirm within the hour when therapists are already orbiting the Atlantic Seaboard. Weekends and honeymoon weeks fill fast; reserve couples massage early.",
  },
  {
    question: "What treatments help after a full beach day in Camps Bay?",
    answer:
      "Salt-air dehydrates skin and tightens shoulders — luxury facials in Camps Bay focus on barrier hydration and calming massage Sea Point–style neck releases pair well on the same visit. Mobile manicure in Camps Bay touch-ups keep nails camera-ready for cliff-path content without salon queues.",
  },
  {
    question: "Do you serve homes with steep driveways or shared estate access?",
    answer:
      "Yes. Mention boom gates, intercoms, and luggage-drop bays when you book your spa appointment — we trolley kits across split levels daily. Home spa services Camps Bay estates rely on hinge on clear parking notes so deep tissue massage in Camps Bay starts on time, not after a hike from the street.",
  },
  {
    question: "Can I combine Camps Bay with nearby Seaboard areas?",
    answer:
      "Our therapists route Clifton, Bantry Bay, and Sea Point in tight clusters — ideal if your party splits across neighbouring villas. Explore linked suburb pages when planning multi-night stays so mobile wellness services Cape Town coordinators slot everyone efficiently.",
  },
];

const CampsBay = () => {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CAMPS_BAY_SERVICE_JSON_LD) }}
      />

      <section className="relative flex min-h-[340px] items-center justify-center md:min-h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Luxury mobile spa setup in Camps Bay beachfront villa — massage and facial treatment at home, Cape Town Atlantic Seaboard"
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
            <span className="font-medium text-primary">Camps Bay · Atlantic Seaboard</span>
          </div>
          <h1 className="mx-auto mb-4 max-w-4xl animate-fade-in font-serif text-4xl font-bold leading-tight md:text-5xl">
            Luxury Mobile Spa Services in Camps Bay, Cape Town
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            <span className="font-medium text-foreground">Available today in Camps Bay</span> when calendars align ·{" "}
            <span className="font-medium text-primary">Limited Atlantic Seaboard slots</span> — beachfront villas,
            luxury hotels &amp; holiday Airbnbs
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

      <section className="border-b border-border/60 bg-background py-14 md:py-20" aria-labelledby="camps-bay-guide-heading">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
            <div className="max-w-3xl">
              <h2 id="camps-bay-guide-heading" className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
                Mobile spa Camps Bay — beachfront calm without the salon run
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Camps Bay sits at the crown of the{" "}
                  <strong className="font-medium text-foreground">Atlantic Seaboard</strong>, framed by Lion&apos;s Head
                  drama and the Twelve Apostles — minutes from the <strong className="font-medium text-foreground">Cape Town CBD</strong>{" "}
                  yet worlds away once you dip toward the sand. That mix of international tourists, film crews, and
                  permanent residents is exactly why our <strong className="font-medium text-foreground">mobile wellness services Cape Town</strong>{" "}
                  crews carry dual kits: post-beach recovery for athletes and glow-forward facials for villa dinners spilling
                  onto terraces.
                </p>
                <p>
                  Guests searching <strong className="font-medium text-foreground">mobile spa Camps Bay</strong>,{" "}
                  <strong className="font-medium text-foreground">spa at home Camps Bay</strong>, or{" "}
                  <strong className="font-medium text-foreground">home spa services Camps Bay</strong> rarely want to surrender
                  a parking bay on Victoria Road for a salon sprint — especially after hosting friends around the plunge pool.
                  We choreograph quiet arrivals through boom gates and concierge desks so treatments feel native to your stay,
                  not bolted on.
                </p>
                <p>
                  Whether you&apos;re waking in a cliff-path Airbnb or hosting family in a multi-storey beach house,{" "}
                  <strong className="font-medium text-foreground">at-home massage Camps Bay</strong> removes logistics entirely:
                  Swedish flow for jet lag, deep tissue after hikes, or hot stone layering when the Atlantic wind bites — all
                  staged beside your view.
                </p>
                <p>
                  We actively cluster bookings with neighbouring Seaboard suburbs — link through{" "}
                  <Link href="/locations/sea-point" className="font-medium text-primary underline-offset-4 hover:underline">
                    Sea Point mobile spa
                  </Link>
                  ,{" "}
                  <Link href="/locations/clifton" className="font-medium text-primary underline-offset-4 hover:underline">
                    Clifton at-home treatments
                  </Link>
                  ,{" "}
                  <Link href="/locations/bantry-bay" className="font-medium text-primary underline-offset-4 hover:underline">
                    Bantry Bay spa visits
                  </Link>
                  , and{" "}
                  <Link href="/locations/llandudno" className="font-medium text-primary underline-offset-4 hover:underline">
                    Llandudno wellness routing
                  </Link>{" "}
                  so Google — and your guests — see one cohesive Atlantic Seaboard coverage map.
                </p>
                <p>
                  Ready to lock timing?{" "}
                  <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
                    Book your spa appointment
                  </Link>{" "}
                  with villa name, intercom steps, and whether terraces need wind buffers — we encode repeat preferences for
                  every returning <strong className="font-medium text-foreground">mobile spa Camps Bay</strong> client.
                </p>
                <p>
                  Menu clarity matters: travellers often Google{" "}
                  <strong className="font-medium text-foreground">deep tissue massage in Camps Bay</strong>,{" "}
                  <strong className="font-medium text-foreground">luxury facials in Camps Bay</strong>, or{" "}
                  <strong className="font-medium text-foreground">mobile manicure in Camps Bay</strong> as separate intents —
                  we honour each with bespoke setup notes so outcomes match the Atlantic light pouring through your windows.
                </p>
                <p>
                  Compare broader menus anytime —{" "}
                  <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
                    explore our mobile spa services
                  </Link>{" "}
                  — then cross-check suburb nuances on the{" "}
                  <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
                    Cape Town locations hub
                  </Link>{" "}
                  before you invite friends for stacked nail-and-facial afternoons.
                </p>
                <p>
                  <strong className="font-medium text-foreground">Massage Camps Bay Cape Town</strong> demand mirrors tide
                  charts: holiday peaks, event weekends, and charter-season evenings fill fast along Beta Road curves — message
                  early when you need sunset-adjacent arrivals or dual therapists for villa parties.
                </p>
              </div>

              <h3 className="mt-10 font-serif text-xl font-semibold text-foreground md:text-2xl">
                Why Camps Bay guests choose in-villa spa rituals
              </h3>
              <ul className="mt-4 space-y-3 text-muted-foreground md:text-lg">
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">No Victoria Road parking roulette:</strong> keep your bay for guests,
                    not salon errands.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Villa-grade discretion:</strong> therapists blend with hospitality teams on
                    luxury stays and shoot schedules.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Tourist-ready timing:</strong> flex around beach hours, sunset cocktails,
                    and late airport transfers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Coastal product intelligence:</strong> oils and facials tuned for salt,
                    wind, and summer SPF buildup.
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
                    <span className="font-semibold text-foreground">Available today in Camps Bay</span> when diaries allow —
                    especially mid-week mornings before the beach strip peaks.
                    <span className="font-medium text-primary"> Limited Atlantic Seaboard slots</span> on holiday long weekends;
                    WhatsApp early for couples blocks.
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
                    Rated 4.9★ by clients in Camps Bay · Trusted by 500+ guests across Cape Town
                  </p>
                  <p className="text-sm italic leading-relaxed text-muted-foreground">
                    &ldquo;They transformed our rental lounge into a spa before our rehearsal dinner — true mobile spa Camps Bay
                    luxury without missing the sunset.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-medium text-primary">— Jade &amp; Thomas, Victoria Road villa</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-gradient-to-br from-primary/10 via-muted/30 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Book Your Spa Experience in Camps Bay</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Share your villa or hotel details, terrace access notes, and ideal post-beach timing — we confirm kits for massage,
            facials, and nails in one itinerary.
          </p>
          <p className="mt-2 text-sm font-semibold text-primary">
            Available today in Camps Bay — limited Atlantic Seaboard slots this week.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Peak tourist season fills evenings fast; book couples and hot stone sessions early.
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
        areaLabel="Camps Bay"
        skipDefaultArticle
        customFaqs={CAMPS_BAY_FAQS}
        localLead={
          "Whether you're hosting tourists in a Camps Bay villa or unwinding after a beach day on the Atlantic Seaboard, we deliver luxury mobile spa Camps Bay treatments — massage, facials, and nails — with villa-savvy routing and hotel-grade polish."
        }
        neighbors={[
          { href: "/locations/clifton", label: "Clifton" },
          { href: "/locations/llandudno", label: "Llandudno" },
          { href: "/locations/sea-point", label: "Sea Point" },
          { href: "/locations/bantry-bay", label: "Bantry Bay" },
        ]}
      />
    </div>
  );
};

export default CampsBay;
