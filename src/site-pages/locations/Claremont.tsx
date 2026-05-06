import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LocationSeoExtras, type LocationFaqItem } from "@/components/locations/LocationSeoExtras";

const heroImage = "/images/massage.jpg";

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

const CLAREMONT_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Luxury mobile spa Claremont — at-home massage, facials & nails",
  description:
    "Premium mobile spa Claremont appointments for Southern Suburbs homes, townhouses, and guest cottages: therapeutic massage, skincare facials, gel nails, and couples treatments near Cavendish and surrounds.",
  url: `${SITE_URL}/locations/claremont`,
  serviceType: ["Mobile massage therapy", "Facial skincare treatments", "Manicure and pedicure", "Couples spa rituals"],
  provider: {
    "@type": "HealthAndBeautyBusiness",
    name: "Luxury Mobile Spa Cape Town",
    url: SITE_URL,
    telephone: "+27681849866",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Southern Suburbs, Cape Town" },
    capeTownPlace("Claremont"),
    capeTownPlace("Newlands"),
    capeTownPlace("Rondebosch"),
    capeTownPlace("Constantia"),
    capeTownPlace("Tokai"),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Claremont mobile spa — signature treatments",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep tissue massage in Claremont",
          description: "Sports and deep tissue massage for professionals and athletes in Claremont homes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury facials in Claremont",
          description: "Hydrating, anti-aging, and deep-cleansing facials tailored to suburban routines.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile manicure & pedicure in Claremont",
          description: "Gel manicures and spa pedicures between meetings or after school runs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Couples massage Claremont",
          description: "Side-by-side massage for date nights and anniversary weekends at home.",
        },
      },
    ],
  },
};

const CLAREMONT_FAQS: LocationFaqItem[] = [
  {
    question: "Do you offer mobile spa services in Claremont houses and townhouses?",
    answer:
      "Yes — mobile spa Claremont visits span freestanding homes, secure complexes, and heritage townhouses from Upper Claremont toward Rondebosch borders. We map portable bed placement for smaller lounges, manage stair-friendly trolleys, and keep noise respectful for neighbours — ideal when you want at-home massage Claremont privacy without salon parking stress.",
  },
  {
    question: "Can I book after shopping or meetings near Cavendish Square?",
    answer:
      "Absolutely. Many guests pair spa at home Claremont sessions with Cavendish errands — we schedule foot therapy, express facials, or gel touch-ups so you walk from retail straight into calm. Mention heel time and loading zones when you book your spa appointment so therapists sync with mall-hour traffic.",
  },
  {
    question: "How quickly can I book a massage in Claremont during the week?",
    answer:
      "Massage Claremont Cape Town routes open fastest on weekday late mornings and early afternoons before school lifts peak. WhatsApp your suburb pin — we often confirm within the hour when therapists orbit Newlands or Rondebosch corridors. Evenings book early for couples massage and hot stone blocks.",
  },
  {
    question: "Do you treat professionals working from home in Claremont?",
    answer:
      "Yes — home spa services Claremont executives rely on include desk-shoulder release, LED-ready facials before video calls, and discreet arrivals between meetings. We coordinate gate remotes and estate rules across leafy avenues so mobile wellness services Cape Town planners can stack half-day recovery without commuting.",
  },
  {
    question: "What facials do Claremont clients choose in dryer inland air?",
    answer:
      "Southern Suburbs microclimates lean drier than the Atlantic strip — luxury facials in Claremont often emphasize barrier hydration, antioxidant boosts, and seasonal peels approved for suburban UV patterns. Add neck and shoulder massage when you need desk relief or you split the week between valley calm and seaboard wind.",
  },
  {
    question: "Can you coordinate visits near schools or shared estates?",
    answer:
      "Serving residents and visitors in Claremont means honouring pickup windows and HOA notices — share boom codes and visitor parking bays when booking mobile manicure in Claremont or deep tissue massage in Claremont back-to-back blocks so household rhythm stays uninterrupted.",
  },
];

const Claremont = () => {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CLAREMONT_SERVICE_JSON_LD) }}
      />

      <section className="relative flex min-h-[340px] items-center justify-center md:min-h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="At-home massage therapist — mobile spa Claremont, Southern Suburbs Cape Town"
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
            <span className="font-medium text-primary">Claremont · Southern Suburbs</span>
          </div>
          <h1 className="mx-auto mb-4 max-w-4xl animate-fade-in font-serif text-4xl font-bold leading-tight md:text-5xl">
            Luxury Mobile Spa Services in Claremont, Cape Town
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            <span className="font-medium text-foreground">Available today in Claremont</span> when calendars align ·{" "}
            <span className="font-medium text-primary">Limited Southern Suburbs slots</span> — homes, townhouses &amp;
            guest cottages near Cavendish
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

      <section className="border-b border-border/60 bg-background py-14 md:py-20" aria-labelledby="claremont-guide-heading">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
            <div className="max-w-3xl">
              <h2 id="claremont-guide-heading" className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
                Mobile spa Claremont — suburban calm, city-close convenience
              </h2>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Claremont anchors the leafier side of Cape Town — minutes from the{" "}
                  <strong className="font-medium text-foreground">Southern Suburbs</strong> spine yet quick to the CBD when
                  deadlines call. That rhythm — school runs, Cavendish errands, UCT-adjacent meetings — is why our{" "}
                  <strong className="font-medium text-foreground">mobile wellness services Cape Town</strong> teams carry
                  suburban kits: quieter aromatherapy for enclosed gardens, facial humidity tweaks for inland dryness, and
                  punctual arrivals that respect boom gates on Oakhurst-style avenues.
                </p>
                <p>
                  Searching <strong className="font-medium text-foreground">mobile spa Claremont</strong>,{" "}
                  <strong className="font-medium text-foreground">spa at home Claremont</strong>, or{" "}
                  <strong className="font-medium text-foreground">home spa services Claremont</strong> usually means you want
                  recovery without surrendering a parking bay or nanny window. We convert dining rooms, studies, and covered
                  patios into treatment suites — linens, steam protocols, and nail ventilation included — so{" "}
                  <strong className="font-medium text-foreground">at-home massage Claremont</strong> feels intentional, not
                  improvised.
                </p>
                <p>
                  Whether you&apos;re restoring after trail runs toward Newlands Forest or hosting parents in a cottage suite,
                  therapists choreograph setup around your calendar — not the other way around — preserving the hush that makes
                  Claremont neighbourhoods desirable.
                </p>
                <p>
                  We cluster routing with neighbouring suburbs for efficiency — browse{" "}
                  <Link href="/locations/newlands" className="font-medium text-primary underline-offset-4 hover:underline">
                    Newlands mobile spa
                  </Link>
                  ,{" "}
                  <Link href="/locations/rondebosch" className="font-medium text-primary underline-offset-4 hover:underline">
                    Rondebosch at-home treatments
                  </Link>
                  ,{" "}
                  <Link href="/locations/constantia" className="font-medium text-primary underline-offset-4 hover:underline">
                    Constantia villa wellness
                  </Link>
                  , and{" "}
                  <Link href="/locations/tokai" className="font-medium text-primary underline-offset-4 hover:underline">
                    Tokai forest-edge visits
                  </Link>
                  . Hosting coastal guests the same week? Peek at{" "}
                  <Link href="/locations/sea-point" className="font-medium text-primary underline-offset-4 hover:underline">
                    Sea Point
                  </Link>{" "}
                  or{" "}
                  <Link href="/locations/camps-bay" className="font-medium text-primary underline-offset-4 hover:underline">
                    Camps Bay
                  </Link>{" "}
                  guides — our coordinators often stitch Seaboard and Southern Suburbs itineraries for split-week stays.
                </p>
                <p>
                  Intent-led searches —{" "}
                  <strong className="font-medium text-foreground">deep tissue massage in Claremont</strong>,{" "}
                  <strong className="font-medium text-foreground">luxury facials in Claremont</strong>,{" "}
                  <strong className="font-medium text-foreground">mobile manicure in Claremont</strong> — get bespoke setup
                  notes each visit so outcomes stay predictable whether you live off Vineyard Road or closer to Main Road
                  buzz.
                </p>
                <p>
                  <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
                    Book your spa appointment
                  </Link>{" "}
                  with estate codes, pet considerations, and preferred quiet hours — we file them for every returning{" "}
                  <strong className="font-medium text-foreground">mobile spa Claremont</strong> guest.
                </p>
                <p>
                  Compare full menus via{" "}
                  <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
                    explore our mobile spa services
                  </Link>{" "}
                  and suburb context on the{" "}
                  <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
                    Cape Town locations hub
                  </Link>
                  .
                </p>
                <p>
                  <strong className="font-medium text-foreground">Massage Claremont Cape Town</strong> demand spikes around
                  quarter-end desk marathons, sports seasons, and long-table entertaining — reserve couples rituals and stacked
                  facial-plus-massage blocks early when calendars collide with southern suburbs school events.
                </p>
              </div>

              <h3 className="mt-10 font-serif text-xl font-semibold text-foreground md:text-2xl">
                Why Claremont households choose in-home spa days
              </h3>
              <ul className="mt-4 space-y-3 text-muted-foreground md:text-lg">
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Zero Main Road loops:</strong> skip salon queues after Cavendish or
                    office commutes.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Family-aware scheduling:</strong> therapists respect homework hours,
                    nap routines, and estate quiet rules.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Workspace recovery:</strong> targeted neck, hand, and facial protocols
                    for hybrid professionals.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Premium products &amp; gear:</strong> hotel-grade oils, facial lines,
                    and nail systems brought to you.
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
                    <span className="font-semibold text-foreground">Available today in Claremont</span> when diaries allow —
                    weekday midday windows often open fastest.
                    <span className="font-medium text-primary"> Limited Southern Suburbs slots</span> ahead of long weekends;
                    message early for evening couples bookings.
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
                    Rated 4.9★ by clients in Claremont · Trusted by 500+ guests across Cape Town
                  </p>
                  <p className="text-sm italic leading-relaxed text-muted-foreground">
                    &ldquo;They turned our study into a spa between conference calls — the mobile spa Claremont experience we
                    needed without losing the afternoon.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-medium text-primary">— David K., Upper Claremont</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 bg-gradient-to-br from-primary/10 via-muted/30 to-background py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Book Your Spa Experience in Claremont</h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Tell us your street, estate access, and ideal window — we&apos;ll align massage, facials, and nails with your
            Southern Suburbs rhythm.
          </p>
          <p className="mt-2 text-sm font-semibold text-primary">
            Available today in Claremont — limited Southern Suburbs slots this week.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Peak-term evenings and pre-event Saturdays fill quickly — book couples and hot stone sessions early.
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
        areaLabel="Claremont"
        skipDefaultArticle
        customFaqs={CLAREMONT_FAQS}
        localLead={
          "Whether you're near Cavendish or tucked into Upper Claremont, we deliver luxury mobile spa Claremont treatments — massage, facials, and nails — with Southern Suburbs routing savvy and quiet estate etiquette."
        }
        neighbors={[
          { href: "/locations/newlands", label: "Newlands" },
          { href: "/locations/rondebosch", label: "Rondebosch" },
          { href: "/locations/constantia", label: "Constantia" },
          { href: "/locations/tokai", label: "Tokai" },
        ]}
      />
    </div>
  );
};

export default Claremont;
