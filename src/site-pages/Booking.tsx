import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaraiosBookingEmbed } from "@/components/FaraiosBookingEmbed";
import { Calendar, Phone, Mail, MessageCircle } from "lucide-react";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

const BOOKING_FAQ = [
  {
    question: "How quickly can I book mobile spa Cape Town appointments?",
    answer:
      "Online booking is instant. WhatsApp and phone are fastest for same-day slots. Email works well for multi-day itineraries — we respond within 24 hours.",
  },
  {
    question: "What details should I include when I book?",
    answer:
      "Share your suburb or estate name, treatment choices, ideal times, and parking or access instructions. Mention allergies, injuries, or pregnancy so we match products and pressure correctly.",
  },
  {
    question: "Do you offer mobile beauty services Cape Town wide?",
    answer:
      "Yes — from the Atlantic Seaboard to the Southern Suburbs, Winelands guesthouses, and key Northern suburbs. Send your pin if you are between hubs and we will confirm scheduling.",
  },
  {
    question: "Can I switch treatments after booking?",
    answer:
      "Adjustments are welcome when notice allows. Swapping facials, extending massage time, or adding gel nails may change pricing — we confirm before therapists depart.",
  },
  {
    question: "Is a deposit required?",
    answer:
      "Peak dates, multi-therapist events, or destination bookings may need a holding deposit. Standard home visits are invoiced or charged at the time of service.",
  },
] as const;

const Booking = () => {
  return (
    <div className="min-h-screen">
      <FaqJsonLd items={BOOKING_FAQ} />

      <section className="py-14 luxury-gradient text-white md:py-16">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="mx-auto mb-4 h-10 w-10" />
          <h1 className="mb-3 font-serif text-3xl font-bold md:text-4xl">
            Book Your Treatment
          </h1>
          <p className="mx-auto max-w-2xl text-base opacity-90 md:text-lg">
            Complete the form below to request massage, facials, or nail treatments at your home, hotel, or office in
            Cape Town.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16" aria-labelledby="booking-form-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <h2 id="booking-form-heading" className="sr-only">
              Online booking form
            </h2>
            <Card className="border-primary/20 shadow-lg">
              <CardContent className="p-6 md:p-10">
                <FaraiosBookingEmbed />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/20 py-14 md:py-16" aria-labelledby="booking-alt-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 id="booking-alt-heading" className="font-serif text-2xl font-bold md:text-3xl">
              Prefer to book another way?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Our team is happy to help by phone, WhatsApp, or email.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h3 className="font-serif text-lg font-semibold">Call</h3>
                <p className="mt-2 text-sm text-muted-foreground">Mon–Sun, 7am–9pm</p>
                <a href="tel:0681849866" className="mt-4 inline-block font-semibold text-primary hover:underline">
                  068 184 9866
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MessageCircle className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h3 className="font-serif text-lg font-semibold">WhatsApp</h3>
                <p className="mt-2 text-sm text-muted-foreground">Fastest for same-day requests</p>
                <a
                  href="https://wa.me/27681849866?text=Hi%2C%20I%27d%20like%20to%20book%20a%20mobile%20spa%20treatment%20in%20Cape%20Town"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-semibold text-primary hover:underline"
                >
                  Message us
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h3 className="font-serif text-lg font-semibold">Email</h3>
                <p className="mt-2 text-sm text-muted-foreground">We reply within 24 hours</p>
                <a
                  href="mailto:info@luxurymspa.co.za?subject=Booking%20Request"
                  className="mt-4 inline-block font-semibold text-primary hover:underline"
                >
                  info@luxurymspa.co.za
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-14 md:py-16" aria-labelledby="booking-faq-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 id="booking-faq-heading" className="font-serif text-2xl font-bold md:text-3xl">
              Booking FAQs
            </h2>
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
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Browse{" "}
            <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
              services
            </Link>{" "}
            or{" "}
            <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
              service areas
            </Link>{" "}
            before you book.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Booking;
