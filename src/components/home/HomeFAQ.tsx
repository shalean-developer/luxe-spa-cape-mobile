import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Do you offer mobile spa services across Cape Town?",
    answer:
      "Yes. Luxury Mobile Spa Cape Town brings five-star treatments to homes, apartments, hotels, and Airbnbs throughout the city and surrounds. Our mobile spa Cape Town team specialises in discreet, hotel-quality experiences wherever you are staying—from the Atlantic Seaboard to the Southern Suburbs and beyond.",
  },
  {
    question: "What areas do you cover—Sea Point, Camps Bay, Claremont, and elsewhere?",
    answer:
      "We travel widely across the metro and frequently serve Sea Point, Camps Bay, Claremont, Constantia, Green Point, Bishopscourt, Hout Bay, Stellenbosch, and many other suburbs. If you are unsure whether your address is covered, send us your suburb or pin—we will confirm availability for your preferred date and treatment.",
  },
  {
    question: "Can I book a same-day mobile spa appointment?",
    answer:
      "Often yes, subject to therapist availability. Same-day bookings work best for shorter treatments such as at-home massage or express facials. For couples massage or combined nail care and facial appointments, we recommend booking ahead so we can match your preferred time and bring the right kit.",
  },
  {
    question: "What should I prepare before my therapist arrives?",
    answer:
      "Clear a calm space with room for a portable treatment bed where possible, ensure parking or estate access is arranged, and keep pets in another room during your session. Have fresh towels on hand if you prefer your own; otherwise your therapist arrives with professional linens and hygiene essentials so your mobile spa experience feels effortless.",
  },
  {
    question: "Do you bring all equipment and products?",
    answer:
      "Absolutely. We arrive with a full mobile spa setup—treatment table where suitable, premium oils and creams for massage and facials, sanitation supplies, and tools for manicures and pedicures. Products are chosen for luxury results and safe home use, without compromising the serene atmosphere you expect from an at-home spa.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major cards and other convenient methods confirmed at booking time (including secure arrangements for corporate or hospitality guests). Your quote reflects travel within Cape Town as quoted—there are no surprise fees when your appointment details stay as agreed.",
  },
  {
    question: "Can I book for couples or groups?",
    answer:
      "Yes. Couples massage and small-group celebrations are among our most requested experiences—perfect for anniversaries, bridal mornings, or executive recovery days. Tell us your party size and desired treatments (massage, facials, nails), and we will coordinate therapists and timing so everyone enjoys the same elevated standard.",
  },
  {
    question: "How long does a typical session last?",
    answer:
      "Most mobile appointments range from 60 to 90 minutes per treatment; couples packages or combinations—such as massage followed by facials or nail care—naturally run longer. We build buffer time for setup and breakdown so your luxury mobile spa Cape Town visit feels unrushed from knock-on-door to final goodbye.",
  },
] as const;

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function HomeFAQ() {
  const jsonLd = faqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="border-t border-border/60 bg-muted/15 py-20 md:py-28" aria-labelledby="home-faq-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <h2 id="home-faq-heading" className="font-serif text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Everything you need to know about our mobile spa services in Cape Town
            </p>
          </div>

          <div className="mx-auto max-w-3xl rounded-2xl border border-border/80 bg-card px-4 py-2 shadow-sm md:px-8 md:py-4">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`} className="border-border/70">
                  <AccordionTrigger className="py-5 text-left font-serif text-base font-semibold leading-snug text-foreground hover:no-underline md:text-lg">
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
    </>
  );
}
