import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

const locations = [
  // Atlantic Seaboard
  { name: "Camps Bay", link: "/locations/camps-bay", description: "Beachfront luxury spa services" },
  { name: "Clifton", link: "/locations/clifton", description: "Exclusive coastal treatments" },
  { name: "Llandudno", link: "/locations/llandudno", description: "Ultra-exclusive beach community" },
  { name: "Fresnaye", link: "/locations/fresnaye", description: "Atlantic seaboard relaxation" },
  { name: "Bantry Bay", link: "/locations/bantry-bay", description: "Sunset luxury treatments" },
  { name: "Sea Point", link: "/locations/sea-point", description: "Promenade-side pampering" },
  { name: "Green Point", link: "/locations/green-point", description: "Urban waterfront wellness" },
  { name: "Mouille Point", link: "/locations/mouille-point", description: "V&A Waterfront luxury" },
  // City Bowl
  { name: "Higgovale", link: "/locations/higgovale", description: "Mountainside prestige" },
  { name: "Oranjezicht", link: "/locations/oranjezicht", description: "Charming city bowl wellness" },
  { name: "Tamboerskloof", link: "/locations/tamboerskloof", description: "Central elegance" },
  { name: "Gardens", link: "/locations/gardens", description: "Historic district spa services" },
  { name: "De Waterkant", link: "/locations/de-waterkant", description: "Trendy village vibes" },
  // Southern Suburbs
  { name: "Constantia", link: "/locations/constantia", description: "Wine valley wellness" },
  { name: "Bishopscourt", link: "/locations/bishopscourt", description: "Estate spa experiences" },
  { name: "Hout Bay", link: "/locations/hout-bay", description: "Valley and seaside wellness" },
  { name: "Newlands", link: "/locations/newlands", description: "Leafy suburb serenity" },
  { name: "Claremont", link: "/locations/claremont", description: "Southern suburbs luxury" },
  { name: "Rondebosch", link: "/locations/rondebosch", description: "Academic suburb relaxation" },
  { name: "Tokai", link: "/locations/tokai", description: "Forest retreat wellness" },
  // Winelands
  { name: "Stellenbosch", link: "/locations/stellenbosch", description: "Winelands spa services" },
  { name: "Franschhoek", link: "/locations/franschhoek", description: "Wine country luxury" },
  { name: "Paarl", link: "/locations/paarl", description: "Cape Winelands excellence" },
  { name: "Somerset West", link: "/locations/somerset-west", description: "Helderberg luxury treatments" },
  // Northern Suburbs
  { name: "Durbanville", link: "/locations/durbanville", description: "Wine route wellness" },
  { name: "Bloubergstrand", link: "/locations/bloubergstrand", description: "Table Mountain views" },
  { name: "Goodwood", link: "/locations/goodwood", description: "Northern suburbs pampering" },
];

const LOCATIONS_FAQ = [
  {
    question: "Do you provide mobile spa Cape Town coverage outside this list?",
    answer:
      "These hubs represent our most-booked corridors — message us with your pin if you sit nearby or between suburbs. We routinely approve bespoke routing when drive economics and therapist availability align.",
  },
  {
    question: "Which neighbourhoods are best for same-day at-home massage?",
    answer:
      "Atlantic Seaboard and City Bowl density helps — therapists are often already orbiting Sea Point, Green Point, or De Waterkant. Southern Suburbs bookings succeed daily too; simply confirm earlier when possible.",
  },
  {
    question: "Can I book facials Cape Town editors recommend outside central Cape Town?",
    answer:
      "Yes — Constantia, Bishopscourt, Tokai, and Winelands retreats frequently host skincare-focused itineraries. We pack booster serums and calming masks suited to vineyard wind and mountain dryness.",
  },
  {
    question: "How does pricing change across mobile beauty services Cape Town routes?",
    answer:
      "Menus stay consistent; travel surcharges apply only when distances exceed agreed zones — disclosed before you confirm. Packages bundle facials, massage, and nails so totals stay predictable.",
  },
  {
    question: "Should I read suburb pages before booking?",
    answer:
      "Each location guide outlines neighbourhood nuances — loading zones, estate etiquette, hotel liaisons — saving time on WhatsApp. Link through to booking once you know your ideal arrival window.",
  },
] as const;

const Locations = () => {
  return (
    <div className="min-h-screen">
      <FaqJsonLd items={LOCATIONS_FAQ} />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Mobile Spa Cape Town Service Areas — At-Home Massage &amp; Facials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in leading-relaxed">
            Luxury Mobile Spa routes therapists across the Atlantic Seaboard, City Bowl, Southern Suburbs, Winelands, and
            Northern growth corridors so every{" "}
            <strong className="font-medium text-foreground">mobile spa Cape Town</strong> appointment arrives composed —
            whether you crave deep{" "}
            <strong className="font-medium text-foreground">at-home massage</strong>, bespoke{" "}
            <strong className="font-medium text-foreground">facials Cape Town</strong> influencers love, or polished nails
            ahead of events.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <Link href="/booking" className="text-primary underline-offset-4 hover:underline">
              Book your suburb visit
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/services" className="text-primary underline-offset-4 hover:underline">
              Explore treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits / SEO body */}
      <section className="border-b border-border/60 bg-muted/20 py-14 md:py-20" aria-labelledby="locations-benefits-heading">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 id="locations-benefits-heading" className="font-serif text-2xl font-bold md:text-3xl">
            Why neighbourhood-specific mobile beauty matters
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground md:text-lg leading-relaxed">
            <p>
              Cape Town&apos;s microclimates shift dramatically within minutes — salty Atlantic gusts in Camps Bay,
              inversion chill in Walmer Estate pockets, dryer Winelands heat in Franschhoek. Our{" "}
              <strong className="font-medium text-foreground">mobile beauty services Cape Town</strong> teams adjust oil
              viscosity, facial masques, and nail curing times accordingly so outcomes stay predictable even when the weather
              is not.
            </p>
            <p>
              Estate roads, boutique hotel lifts, and Airbnb staircases each demand unique choreography. Location guides
              below capture hyper-local nuance — saving you back-and-forth on WhatsApp — while reinforcing internal links to{" "}
              <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
                booking
              </Link>{" "}
              for instant conversion once you know your suburb plan.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-background" aria-labelledby="locations-grid-heading">
        <div className="container mx-auto px-4">
          <h2 id="locations-grid-heading" className="sr-only">
            Cape Town suburbs we serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Link key={index} href={location.link}>
                <Card className="h-full hover:shadow-xl transition-smooth border-2 border-primary/10 hover:border-primary group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                          {location.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">{location.description}</p>
                        <span className="inline-flex items-center text-primary text-sm font-medium">
                          View details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-muted/30 py-16 md:py-24" aria-labelledby="locations-faq-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 id="locations-faq-heading" className="font-serif text-2xl font-bold md:text-3xl">
              Locations FAQ
            </h2>
            <p className="mt-3 text-muted-foreground md:text-lg">
              Routing, pricing, and booking tips for Cape Town mobile spa coverage.
            </p>
          </div>
          <div className="mx-auto max-w-3xl rounded-2xl border border-border/80 bg-card px-4 py-2 shadow-sm md:px-8">
            <Accordion type="single" collapsible className="w-full">
              {LOCATIONS_FAQ.map((item, index) => (
                <AccordionItem key={item.question} value={`loc-faq-${index}`}>
                  <AccordionTrigger className="py-5 text-left font-serif text-base font-semibold md:text-lg hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="pb-2 text-sm leading-relaxed text-muted-foreground md:text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background border-t border-border/60">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Don&apos;t see your area?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            We continuously expand mobile spa Cape Town routing. Send your suburb or estate name — if we cannot service it
            immediately, we will suggest the closest window or partner concierge options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact us
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book mobile spa Cape Town
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
