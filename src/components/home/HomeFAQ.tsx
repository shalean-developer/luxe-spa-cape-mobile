import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, HelpCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const FAQ_ITEMS = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 24–48 hours ahead for your preferred time slot. Popular evenings and weekends fill quickly — same-day bookings may be possible when therapists are available.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We serve supported areas across Cape Town, including the Atlantic Seaboard, City Bowl, Southern Suburbs, Northern Suburbs, and selected Winelands routes. Share your suburb or pin and we'll confirm coverage.",
  },
  {
    question: "Can I book a same-day appointment?",
    answer:
      "Often yes, subject to therapist availability. For couples or group bookings, we recommend booking ahead so the required therapists and treatment setup can be coordinated.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept the payment methods shown or confirmed during booking. Your booking confirmation should reflect the agreed treatment and applicable charges before the appointment.",
  },
  {
    question: "Do you bring the equipment and products?",
    answer:
      "The mobile treatment setup required for your booked service is brought to your location. If a treatment needs anything from you, that requirement should be confirmed before the appointment.",
  },
  {
    question: "What can I expect from my therapist?",
    answer:
      "Your therapist arrives for the booked treatment with the relevant appointment details and mobile setup. If you have accessibility, privacy, product, or treatment preferences, share them when booking so they can be considered in advance.",
  },
  {
    question: "Can I book for couples or groups?",
    answer:
      "Yes, subject to availability. Tell us your party size, preferred treatments, location, and date so the team can confirm whether the required therapists and timing are available.",
  },
  {
    question: "How long does a typical session last?",
    answer:
      "Treatment duration depends on the service selected. Review the duration shown with your service or booking confirmation, and allow a little additional time for arrival and setup.",
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
  const midpoint = Math.ceil(FAQ_ITEMS.length / 2);
  const leftColumn = FAQ_ITEMS.slice(0, midpoint);
  const rightColumn = FAQ_ITEMS.slice(midpoint);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-white py-20 md:py-28" aria-labelledby="home-faq-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Quick answers before you book your treatment."
          />

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 md:gap-x-8">
            {[leftColumn, rightColumn].map((column, colIndex) => (
              <Accordion key={colIndex} type="single" collapsible className="space-y-3">
                {column.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    value={`faq-${colIndex}-${index}`}
                    className="overflow-hidden rounded-2xl border border-border/70 bg-slate-50/50 px-5 shadow-sm data-[state=open]:border-primary/30 data-[state=open]:bg-white data-[state=open]:shadow-md"
                  >
                    <AccordionTrigger className="py-4 text-left text-sm font-semibold leading-snug text-foreground hover:no-underline md:text-base [&>svg]:text-primary">
                      <span className="flex items-start gap-3">
                        <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pl-7">
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ))}
          </div>

          <p className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              View all FAQs
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
