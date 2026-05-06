import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_HREF =
  "https://wa.me/27681849866?text=Hi%2C%20I'd%20like%20to%20book%20a%20luxury%20spa%20treatment%20today";

export function HomeFinalCta() {
  return (
    <section className="luxury-gradient py-20 md:py-28" aria-labelledby="final-cta-heading">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 id="final-cta-heading" className="mx-auto max-w-3xl text-balance font-serif text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Relax. We&apos;ll Handle the Rest.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 md:text-xl">
          Your therapist, your products, your calm — we bring the full spa experience to you.
        </p>
        <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-accent md:text-base">
          Limited slots available today — book early to secure your time.
        </p>

        <div className="mx-auto mt-10 flex max-w-xl flex-col items-stretch gap-4 sm:max-w-2xl sm:flex-row sm:flex-wrap sm:justify-center">
          <Button
            asChild
            size="lg"
            className="h-14 min-h-[3.5rem] rounded-full bg-accent px-10 text-base font-semibold text-accent-foreground shadow-xl ring-2 ring-white/20 transition-smooth hover:scale-[1.02] hover:bg-accent/90 luxury-glow sm:min-w-[200px]"
          >
            <Link href="/booking">Book now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 min-h-[3.5rem] rounded-full border-2 border-white/90 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition-smooth hover:bg-white hover:text-primary sm:min-w-[200px]"
          >
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
              <MessageCircle className="h-5 w-5" aria-hidden />
              WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 min-h-[3.5rem] rounded-full border-2 border-white/90 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition-smooth hover:bg-white hover:text-primary sm:min-w-[200px]"
          >
            <a href="tel:0681849866" className="inline-flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" aria-hidden />
              Call 068 184 9866
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
