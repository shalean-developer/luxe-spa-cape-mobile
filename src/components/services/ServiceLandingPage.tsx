import Image from "next/image";
import Link from "next/link";
import { CheckCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ServiceLandingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  treatments: readonly string[];
  suitableFor: readonly string[];
  preparation: readonly string[];
};

export function ServiceLandingPage({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  treatments,
  suitableFor,
  preparation,
}: ServiceLandingPageProps) {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0">
          <Image src={image} alt={imageAlt} fill priority quality={70} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/35" />
        </div>
        <div className="container relative mx-auto px-4 py-24 text-white md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold md:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/booking">Book a treatment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/70 bg-white/10 text-white hover:bg-white/20">
              <Link href="/services">View full service menu</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold">Treatment options</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Treatment availability can vary by therapist, route, and appointment window. Confirm your preferred option when booking.
            </p>
            <ul className="mt-7 space-y-3">
              {treatments.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold">A good fit for</h2>
            <ul className="mt-7 space-y-3">
              {suitableFor.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="font-serif text-3xl font-bold">How to prepare</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Mobile appointments work best when access and setup details are shared before arrival.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {preparation.map((item) => (
              <div key={item} className="rounded-2xl border border-border/60 bg-background p-5 text-sm leading-relaxed text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <MapPin className="mx-auto h-7 w-7 text-primary" aria-hidden />
          <h2 className="mt-4 font-serif text-3xl font-bold">Mobile appointments across Cape Town</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            We serve homes, hotels, guest stays, and suitable private venues across supported Cape Town routes, subject to therapist and travel availability.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline"><Link href="/locations">View service areas</Link></Button>
            <Button asChild><Link href="/booking">Check booking availability</Link></Button>
          </div>
        </div>
      </section>
    </main>
  );
}
