import { CalendarDays, Clock, Home } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const STEPS = [
  {
    step: 1,
    title: "Choose Service",
    description: "Pick massage, facials, nails, or more — we confirm availability for your area.",
    icon: CalendarDays,
  },
  {
    step: 2,
    title: "Pick Date & Time",
    description: "Select a slot that suits you. Evenings and weekends available.",
    icon: Clock,
  },
  {
    step: 3,
    title: "Relax at Home",
    description: "We arrive with everything needed. You unwind — we handle the rest.",
    icon: Home,
  },
] as const;

export function HomeHowItWorks() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eef4fc] to-[#f4f8fd] py-20 md:py-28" aria-labelledby="how-it-works-heading">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent max-md:hidden" aria-hidden />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Simple Process"
          title="Your spa moment in 3 simple steps"
          description="From booking to bliss — we make at-home wellness effortless."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="relative rounded-3xl border border-white/80 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                <item.icon className="h-7 w-7" aria-hidden />
              </div>
              <span className="absolute right-6 top-6 font-serif text-4xl font-bold text-primary/10">
                0{item.step}
              </span>
              <h3 className="font-serif text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
