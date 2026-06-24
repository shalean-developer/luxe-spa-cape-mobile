import { Button } from "@/components/ui/button";
import { BookButton } from "@/components/BookButton";
import { MessageCircle, Phone, Sparkles } from "lucide-react";

const WHATSAPP_HREF =
  "https://wa.me/27681849866?text=Hi%2C%20I'd%20like%20to%20book%20a%20massage%20treatment%20today";

export function HomeFinalCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" aria-labelledby="final-cta-heading">
      <div className="absolute inset-0 luxury-gradient" aria-hidden />
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" aria-hidden />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Book today
          </span>

          <h2
            id="final-cta-heading"
            className="mt-6 font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            Relax. We&apos;ll handle the rest.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
            Your therapy, your pause, your calm — we bring the full spa experience to you.
          </p>

          <div className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <BookButton
              size="lg"
              className="h-14 rounded-2xl bg-accent px-10 text-base font-bold text-accent-foreground shadow-xl hover:bg-accent/90"
            >
              Book Now
            </BookButton>
            <Button
              asChild
              size="lg"
              className="h-14 rounded-2xl border-2 border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20"
            >
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-14 rounded-2xl border-2 border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20"
            >
              <a href="tel:0681849866" className="inline-flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" aria-hidden />
                Call 068 184 9866
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
