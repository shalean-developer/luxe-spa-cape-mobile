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

const SEA_POINT_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Luxury mobile spa Sea Point — at-home massage, facials & nails",
  description:
    "Five-star mobile spa Sea Point appointments: therapeutic massage, hydrating and anti-aging facials, gel manicures, and pedicures delivered to apartments, hotels, and Airbnbs along the Atlantic Seaboard.",
  url: `${SITE_URL}/locations/sea-point`,
  serviceType: ["Mobile massage therapy", "Facial skincare treatments", "Manicure and pedicure", "Couples spa rituals"],
  provider: {
    "@type": "HealthAndBeautyBusiness",
    name: "Luxury Mobile Spa Cape Town",
    url: SITE_URL,
    telephone: "+27681849866",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Atlantic Seaboard, Cape Town" },
    capeTownPlace("Sea Point"),
    capeTownPlace("Camps Bay"),
    capeTownPlace("Green Point"),
    capeTownPlace("Clifton"),
    capeTownPlace("Bantry Bay"),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sea Point mobile spa — signature treatments",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep tissue massage in Sea Point",
          description: "Therapeutic deep tissue and sports massage delivered at your Sea Point address.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury facials in Sea Point",
          description: "Hydrating, anti-aging, and deep-cleansing facials for Atlantic Seaboard apartments and hotels.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile manicure & pedicure in Sea Point",
          description: "Gel manicures, luxury pedicures, and nail artistry at home or in your Airbnb.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Couples massage Sea Point",
          description: "Side-by-side massage rituals for Sea Point homes and boutique hotel suites.",
        },
      },
    ],
  },
};

const SEA_POINT_FAQS: LocationFaqItem[] = [
  {
    question: "Do you offer mobile spa services in Sea Point apartments?",
    answer:
      "Yes — compact Atlantic Seaboard apartments are where mobile spa Sea Point visits shine. Our therapists map bed orientation for ocean-facing lounges, manage ventilation after humid days, and keep noise discreet for neighbours. At-home massage Sea Point bookings include portable tables where needed, linens, and premium oils scaled to smaller square footage.",
  },
  {
    question: "Can you come to my hotel or Airbnb in Sea Point?",
    answer:
      "Absolutely. We coordinate with concierge desks, loading bays, and keypad entry daily. Whether you are steps from the Sea Point promenade or tucked toward Fresnaye ridges, we arrive uniform-ready with facial kits and nail sanitation suited to hospitality spaces — ideal when you want facials Sea Point visitors book before galas or long-haul departures.",
  },
  {
    question: "How quickly can I book a massage in Sea Point?",
    answer:
      "Massage Sea Point Cape Town routes are fastest mornings and mid-week: WhatsApp or call with your address pin and we often confirm within the hour when therapists orbit nearby. Evenings and weekends fill quickly — reserve early for deep tissue, hot stone, or couples sessions along Beach Road corridors.",
  },
  {
    question: "Do you treat guests staying near the Sea Point promenade?",
    answer:
      "Whether you are staying near the Sea Point promenade or jogging back from an ocean swim, we schedule buffer time for salty-air showers before facials and align sports massage pressure with your training load. Serving residents and visitors in Sea Point means adapting to sea breezes, elevator logistics, and sunset-hour traffic patterns.",
  },
  {
    question: "Which facials Sea Point clients choose after coastal exposure?",
    answer:
      "Hydrating barrier facials, calming LED-ready protocols, and deep cleansing for SPF buildup are favourites after Atlantic wind. We tailor massage Sea Point Cape Town add-ons — neck and scalp release — so skincare absorbs evenly and redness settles before dinner reservations.",
  },
  {
    question: "How do I confirm parking or estate access for Sea Point?",
    answer:
      "Mention boom gates, visitor bays, and approximate walking distance from parking to your door when you book your spa appointment. We preload trolley-friendly kits so at-home massage Sea Point stairwells never slow your session start.",
  },
];

const SeaPoint = () => {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SEA_POINT_SERVICE_JSON_LD) }}
      />

      <section className="relative flex min-h-[340px] items-center justify-center md:min-h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Mobile spa setup in Sea Point apartment — massage therapist preparing hot stones for at-home treatment, Cape Town Atlantic Seaboard"
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
            <span className="font-medium text-primary">Sea Point · Atlantic Seaboard</span>
          </div>
          <h1 className="mx-auto mb-4 max-w-4xl animate-fade-in font-serif text-4xl font-bold leading-tight md:text-5xl">
            Luxury Mobile Spa Services in Sea Point, Cape Town
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            <span className="font-medium text-foreground">Available today in Sea Point</span> when calendars align ·{" "}
            <span className="font-medium text-primary">Limited slots on the Atlantic Seaboard</span> — apartments,
            boutique hotels &amp; Airbnbs near the promenade
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

      {/* Long-form local SEO + conversion */}
      <section className="border-b border-border/60 bg-background py-14 md:py-20" aria-labelledby="sea-point-guide-heading">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
            <div className="max-w-3xl">
              <h2 id="sea-point-guide-heading" className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
                Mobile spa Sea Point — luxury without crossing town
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Located along the <strong className="font-medium text-foreground">Atlantic Seaboard</strong> in Cape
                  Town, Sea Point sits minutes from the <strong className="font-medium text-foreground">Cape Town CBD</strong>
                  , Bantry Bay ridges, and V&amp;A Waterfront energy — yet still feels like its own calm coastal strip.
                  That geography is why our mobile wellness services Cape Town teams stage kits for salty breeze, urban
                  pollen, and fast-turnaround business trips in one route.
                </p>
                <p>
                  Searching for <strong className="font-medium text-foreground">mobile spa Sea Point</strong>,{" "}
                  <strong className="font-medium text-foreground">spa at home Sea Point</strong>, or broader{" "}
                  <strong className="font-medium text-foreground">home spa services Sea Point</strong> usually means choosing
                  between a hectic salon run or reclaiming your afternoon on the couch. We designed our Seaboard circuit for
                  the second path: therapists glide into secured apartment blocks, heritage conversions, and glass-front
                  penthouses — quiet wheels on hardwood, crisp linens, and facial steam that respects open-plan airflow.
                </p>
                <p>
                  Whether you&apos;re staying near the Sea Point promenade after a week of meetings or you live full-time
                  above Beach Road,{" "}
                  <strong className="font-medium text-foreground">at-home massage Sea Point</strong> visits erase the
                  friction of traffic and parking. Instead of losing ninety minutes to logistics, you slip straight from
                  deadline mode into Swedish flow, targeted deep tissue, or aromatherapy curated for Atlantic humidity.
                </p>
                <p>
                  We also serve nearby Seaboard neighbourhoods — explore{" "}
                  <Link href="/locations/camps-bay" className="font-medium text-primary underline-offset-4 hover:underline">
                    mobile spa Camps Bay
                  </Link>
                  ,{" "}
                  <Link href="/locations/clifton" className="font-medium text-primary underline-offset-4 hover:underline">
                    Clifton at-home massage &amp; facials
                  </Link>
                  , and{" "}
                  <Link href="/locations/green-point" className="font-medium text-primary underline-offset-4 hover:underline">
                    Green Point spa-at-home visits
                  </Link>{" "}
                  — building a linked coverage map that keeps therapist routing efficient for every Atlantic Seaboard
                  booking cluster.
                </p>
                <p>
                  Serving residents and visitors in Sea Point means respecting concierge protocols, basement hauls, and
                  sunset-hour lifts busy with runners returning from the Promenade. Our coordinators capture those micro
                  details when you{" "}
                  <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
                    book your spa appointment
                  </Link>{" "}
                  so setup stays invisible to neighbours and efficient for you.
                </p>
                <p>
                  Skincare-minded guests typing <strong className="font-medium text-foreground">facials Sea Point</strong>{" "}
                  into search want barrier repair after salt spray, vitamin-rich boosts before events, or deep cleansing
                  after SPF layering. We pair those protocols with lymph-friendly neck work so jawlines photograph calm —
                  ideal before Mouille Point dinners or V&amp;A Waterfront launches just minutes away.
                </p>
                <p>
                  Need clarity on which rituals fit your stay?{" "}
                  <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
                    Explore our mobile spa services
                  </Link>{" "}
                  — from gel manicures that survive coastal chip-risk to detox-minded body exfoliation when you want spa
                  depth without leaving your Airbnb keycard behind. Every menu item scales to compact kitchens and hotel
                  suites alike.
                </p>
                <p>
                  Long-tail searches matter: guests specifically book{" "}
                  <strong className="font-medium text-foreground">deep tissue massage in Sea Point</strong>,{" "}
                  <strong className="font-medium text-foreground">luxury facials in Sea Point</strong>, and{" "}
                  <strong className="font-medium text-foreground">mobile manicure in Sea Point</strong> because they want
                  the exact ritual tied to their postcode — not a generic menu. We honour that intent with tailored setup
                  notes every time you return.
                </p>
                <p>
                  <strong className="font-medium text-foreground">Massage Sea Point Cape Town</strong> demand spikes when
                  marathon training peaks or corporate quarters close — we route therapists along proven corridors from
                  Three Anchor Bay through Central Sea Point so arrival estimates stay honest, even when Sea Point Road
                  livens up for summer events.
                </p>
                <p>
                  Sea Point living blends daily Atlantic Seaboard rhythm with frequent hosting — compact apartments, heritage
                  blocks, surf-side Airbnbs, and boulevard hotels all ask for different setup choreography. We brief desk
                  staff when you are in a serviced residence, coordinate luggage delays for guests flying into CPT, and keep
                  treatments whisper-quiet when neighbours share walls — so{" "}
                  <strong className="font-medium text-foreground">deep tissue massage in Sea Point</strong> and evening{" "}
                  <strong className="font-medium text-foreground">facials in Sea Point</strong> feel effortless whether you are
                  home for the season or listing your spare room between travels.
                </p>
                <p>
                  Compare suburb nuances anytime via our{" "}
                  <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
                    Cape Town locations hub
                  </Link>
                  , then return here to secure Atlantic Seaboard priority. Mention Sea Point building names, side-street
                  parking, or estate PINs — we encode them into your file so repeat{" "}
                  <strong className="font-medium text-foreground">mobile spa Sea Point</strong> visits feel even smoother.
                </p>
              </div>

              <h3 className="mt-10 font-serif text-xl font-semibold text-foreground md:text-2xl">
                Why Seaboard guests choose at-home treatments
              </h3>
              <ul className="mt-4 space-y-3 text-muted-foreground md:text-lg">
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">No travel tax:</strong> reclaim the hour you would spend dressing,
                    driving, and queueing — especially precious before flights from CPT.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Luxury on your rugs:</strong> five-star oils, facial modalities,
                    and nail artistry staged beside your own playlist and Nespresso ritual.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Privacy &amp; pace:</strong> no crowded locker rooms — treatments
                    flex to your calls, kids&apos; bedtimes, or post-promenade shower timing.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Hospitality fluent teams:</strong> seamless handoffs with boutique
                    hotels, Airbnb hosts, and apartment security — minimal fuss for Concierge desks.
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
                    <span className="font-semibold text-foreground">Available today in Sea Point</span> when diaries align —
                    especially weekday mornings. Daily Atlantic Seaboard coverage with promenade-adjacent routes prioritized;
                    <span className="font-medium text-primary"> limited slots</span> Friday–Sunday — message early to hold
                    your window.
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
                    &ldquo;After a sunrise walk on the promenade, their therapist had the table ready before my coffee
                    cooled — exactly the mobile spa Sea Point fantasy we wanted.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-medium text-primary">— Helena R., Sea Point Airbnb guest</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="border-b border-border/60 bg-gradient-to-br from-primary/10 via-muted/30 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Book Your Spa Experience in Sea Point</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Lock your arrival window, mention your building or hotel, and we&apos;ll confirm kit lists tailored to your
            treatments.
          </p>
          <p className="mt-2 text-sm font-semibold text-primary">
            Available today in Sea Point — limited Atlantic Seaboard slots this week.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Same-day bookings when therapists have open lanes; peak Seaboard evenings fill fast.
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
        areaLabel="Sea Point"
        skipDefaultArticle
        customFaqs={SEA_POINT_FAQS}
        localLead={
          "Whether you're staying near the Sea Point promenade or hosting guests in a Sea Point apartment, we deliver luxury mobile spa Sea Point treatments — massage, facials, and nails — with punctual Atlantic Seaboard routing and hotel-grade discretion."
        }
        neighbors={[
          { href: "/locations/camps-bay", label: "Camps Bay" },
          { href: "/locations/green-point", label: "Green Point" },
          { href: "/locations/bantry-bay", label: "Bantry Bay" },
          { href: "/locations/clifton", label: "Clifton" },
        ]}
      />
    </div>
  );
};

export default SeaPoint;
