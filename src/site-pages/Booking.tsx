import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, Phone, Mail } from "lucide-react";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

const BOOKING_FAQ = [
  {
    question: "How quickly can I book mobile spa Cape Town appointments?",
    answer:
      "WhatsApp and phone lines are fastest for same-day at-home massage or express facials. Email requests are perfect for multi-day itineraries — we respond within 24 hours with availability, travel notes, and prep tips.",
  },
  {
    question: "What details should I include when I book?",
    answer:
      "Share your suburb or estate name, treatment choices, ideal times, and parking or access instructions. Mention allergies, injuries, or pregnancy so we match pressure levels and facial products correctly.",
  },
  {
    question: "Do you offer mobile beauty services Cape Town wide?",
    answer:
      "Yes — from the Atlantic Seaboard to the Southern Suburbs, Winelands guesthouses, and key Northern suburbs. If you are between hubs, message us with a pin to confirm drive scheduling.",
  },
  {
    question: "Can I switch treatments after booking?",
    answer:
      "Adjustments are welcome when notice allows. Swapping facials, extending massage time, or adding gel nails may change pricing — we confirm before therapists depart so expectations stay clear.",
  },
  {
    question: "Is a deposit required?",
    answer:
      "Select peak dates, multi-therapist events, or destination bookings may need a holding deposit. Standard home visits are invoiced or charged at the time of service per your confirmation email.",
  },
] as const;

const Booking = () => {
  return (
    <div className="min-h-screen">
      <FaqJsonLd items={BOOKING_FAQ} />
      {/* Hero */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="h-12 w-12 mx-auto mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Book Mobile Spa Cape Town — At-Home Massage &amp; Facials
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Reserve luxury mobile spa Cape Town visits in minutes. Whether you need a grounding at-home massage, a
            radiance-boosting facial, or full mobile beauty services, our coordinators match you with the right
            therapist and arrival window.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium">
            <Link href="/services" className="rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur hover:bg-white/20">
              View treatments
            </Link>
            <Link href="/locations" className="rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur hover:bg-white/20">
              Service areas
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-border/60 bg-muted/20 py-16 md:py-20" aria-labelledby="booking-benefits-heading">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 id="booking-benefits-heading" className="font-serif text-2xl font-bold md:text-3xl">
            Why booking direct unlocks better spa outcomes
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground md:text-lg leading-relaxed">
            <p>
              Coordinating <strong className="font-medium text-foreground">mobile spa Cape Town</strong> logistics is
              half the artistry. When you speak with our team, we capture elevation changes, estate security steps, and
              parking realities — details apps miss — so your therapist glides in calm and leaves composed.
            </p>
            <p>
              Guests blending <strong className="font-medium text-foreground">facials Cape Town</strong> editors love
              with deep tissue recovery appreciate sequencing guidance: we schedule exfoliation before massage when
              relaxation is the goal, or flip the order when muscular release must come first.{" "}
              <strong className="font-medium text-foreground">At-home massage</strong> after long-haul flights simply hits
              different when aromatherapy selections are tuned to jet lag versus athletic fatigue.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-20" aria-labelledby="booking-methods-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="booking-methods-heading" className="font-serif text-3xl font-bold mb-4">
                How to book
              </h2>
              <p className="text-muted-foreground text-lg">
                Choose phone, email, or WhatsApp — each route connects you with humans who understand Cape Town routing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone Booking */}
              <Card className="hover:shadow-lg transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <Phone className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">Call to book</h3>
                  <p className="text-muted-foreground mb-6">
                    Speak directly with our booking team for personalised service and same-day appointments when therapists
                    are available.
                  </p>
                  <a href="tel:0681849866">
                    <Button size="lg" className="luxury-gradient luxury-glow w-full">
                      Call 068 184 9866
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">Available Mon-Sat: 9am-8pm, Sun: 10am-6pm</p>
                </CardContent>
              </Card>

              {/* Email Booking */}
              <Card className="hover:shadow-lg transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">Email request</h3>
                  <p className="text-muted-foreground mb-6">
                    Send itinerary details and we confirm facials, massage, or nail combinations within one business day.
                  </p>
                  <a href="mailto:info@luxurymspa.co.za?subject=Booking%20Request%20-%20Luxury%20Mobile%20Spa%20Cape%20Town">
                    <Button size="lg" variant="outline" className="w-full">
                      Send email
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">info@luxurymspa.co.za</p>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp Option */}
            <Card className="mt-8 bg-accent/10 border-accent/30">
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-2xl font-bold mb-3">WhatsApp concierge</h3>
                <p className="text-muted-foreground mb-6">
                  Fastest channel for snapshot bookings — send suburb, treatment list, and ideal times for instant routing.
                </p>
                <a
                  href="https://wa.me/27681849866?text=Hi%2C%20I%27d%20like%20to%20book%20a%20luxury%20mobile%20spa%20treatment%20in%20Cape%20Town"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Message on WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Booking Information */}
            <div className="mt-12 p-8 bg-muted/30 rounded-lg" aria-labelledby="booking-policies-heading">
              <h3 id="booking-policies-heading" className="font-serif text-xl font-bold mb-4">
                Booking policies &amp; etiquette
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>We recommend booking 24–48 hours ahead for peak slots — couples massage and stacked facials fill quickly.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Same-day bookings depend on therapist proximity across Cape Town — mornings yield the highest success rate.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Include accurate pins, estate rules, and loading zones so mobile beauty teams arrive composed.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Cancellations within 24 hours may incur fees — we honour emergencies case by case.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Payment is due at service unless your confirmation specifies corporate billing or hospitality routing.</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Prefer browsing first? Explore{" "}
                <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
                  massage &amp; facial menus
                </Link>{" "}
                or review{" "}
                <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
                  suburb-specific guides
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="border-t border-border/60 bg-muted/15 py-14 md:py-20" aria-labelledby="booking-locations-heading">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 id="booking-locations-heading" className="font-serif text-2xl font-bold md:text-3xl">
            Cape Town neighbourhoods we route daily
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed">
            Atlantic Seaboard sunsets, City Bowl apartments, Constantia estates, and Winelands retreats all share one thing:
            guests who expect punctual luxury. Mention your zone when booking so we allocate drive buffers and select the
            team member best versed in your area&apos;s access quirks.
          </p>
          <Link href="/locations" className="mt-6 inline-block font-semibold text-primary underline-offset-4 hover:underline">
            Browse every Cape Town mobile spa location
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 py-16 md:py-24" aria-labelledby="booking-faq-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 id="booking-faq-heading" className="font-serif text-2xl font-bold md:text-3xl">
              Booking FAQs
            </h2>
            <p className="mt-3 text-muted-foreground md:text-lg">
              Practical answers before you confirm your next at-home massage or facial block.
            </p>
          </div>
          <div className="mx-auto max-w-3xl rounded-2xl border border-border/80 bg-card px-4 py-2 shadow-sm md:px-8">
            <Accordion type="single" collapsible className="w-full">
              {BOOKING_FAQ.map((item, index) => (
                <AccordionItem key={item.question} value={`book-faq-${index}`}>
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
    </div>
  );
};

export default Booking;
