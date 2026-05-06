import { CalendarDays, Clock, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const STEPS = [
  {
    step: 1,
    title: "Choose Service",
    description:
      "Select massage, facials, nails, or more — we confirm availability for your Cape Town area.",
    micro: "Takes under 2 minutes online or on WhatsApp.",
    icon: CalendarDays,
  },
  {
    step: 2,
    title: "Pick Date & Time",
    description: "Choose a slot that suits you. We coordinate discreetly around your schedule.",
    micro: "Evenings & weekends available — we work around you.",
    icon: Clock,
  },
  {
    step: 3,
    title: "Relax at Home",
    description: "We arrive with everything needed. You unwind while we handle setup and care.",
    micro: "You supply the space — we bring the spa.",
    icon: Home,
  },
] as const;

export function HomeHowItWorks() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="how-it-works-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="how-it-works-heading" className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Three simple steps from enquiry to bliss.</p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((item) => (
            <Card
              key={item.step}
              className="group relative border-border/80 bg-card/90 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-lg"
            >
              <CardContent className="px-6 pb-10 pt-12 md:px-8">
                <div className="absolute -top-4 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md ring-4 ring-background">
                  {item.step}
                </div>
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <item.icon className="h-8 w-8" aria-hidden />
                </div>
                <h3 className="font-serif text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">{item.description}</p>
                <p className="mt-3 border-t border-border/60 pt-3 text-xs font-medium text-primary/90 md:text-sm">
                  {item.micro}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
