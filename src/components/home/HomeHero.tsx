import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const HERO_IMAGE = "/images/hero-spa.jpg";
const WHATSAPP_HREF =
  "https://wa.me/27681849866?text=Hi%2C%20I'd%20like%20to%20book%20a%20luxury%20spa%20treatment%20at%20home";

export function HomeHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden md:min-h-[90vh]">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Luxury mobile spa treatment in Cape Town — therapist setting up at home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-secondary/70"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative z-10 container mx-auto animate-fade-in px-4 py-20 text-center text-white md:py-28">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/90">
          Cape Town&apos;s premier at-home spa
        </p>
        <h1 className="mx-auto max-w-4xl text-balance font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Luxury Mobile Spa Cape Town — At-Home Massage, Facials &amp; Nails
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/95 md:text-xl">
          Arrive stressed, leave floating — five-star massage, facials, and nails without traffic, parking, or
          crowded spas.
        </p>

        <ul className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-white/95 md:text-base">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            Same-day bookings when available
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            Certified therapists
          </li>
        </ul>

        <div className="mx-auto mt-10 flex max-w-lg flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:justify-center sm:items-center">
          <Button
            asChild
            size="lg"
            className="h-14 min-h-[3.5rem] rounded-full bg-accent px-10 text-base font-semibold text-accent-foreground shadow-xl ring-2 ring-white/20 transition-smooth hover:scale-[1.02] hover:bg-accent/90 hover:shadow-2xl luxury-glow sm:min-w-[220px]"
          >
            <Link href="/booking">Book now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 min-h-[3.5rem] rounded-full border-2 border-white/90 bg-white/10 px-10 text-base font-semibold text-white backdrop-blur-md transition-smooth hover:bg-white hover:text-primary sm:min-w-[220px]"
          >
            <Link href="/services">View services</Link>
          </Button>
        </div>

        <div className="mt-6">
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="h-12 rounded-full border border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
          >
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
              Chat on WhatsApp
            </a>
          </Button>
        </div>

        <p className="mt-6 text-xs text-white/70 md:text-sm">
          Prefer voice?{" "}
          <a href="tel:0681849866" className="inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline">
            <Phone className="inline h-3.5 w-3.5" aria-hidden />
            068 184 9866
          </a>
        </p>
      </div>
    </section>
  );
}
