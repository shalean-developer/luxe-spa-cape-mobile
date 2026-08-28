import Image from "next/image";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gem, Hand, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const PREVIEW_SERVICES = [
  {
    title: "Massage",
    fromPrice: "R650",
    description: "Swedish, deep tissue, and hot stone — melt tension without leaving home.",
    image: "/images/massage.jpg",
    imageAlt: "Relaxing mobile massage therapy in Cape Town",
    icon: Hand,
    accent: "from-primary/80 to-primary/40",
  },
  {
    title: "Facials",
    fromPrice: "R550",
    description: "Tailored facials for hydration, glow, and deep cleansing on your schedule.",
    image: "/images/facial.jpg",
    imageAlt: "Professional facial treatment at home",
    icon: Sparkles,
    accent: "from-secondary/80 to-secondary/40",
  },
  {
    title: "Nails",
    fromPrice: "R350",
    description: "Manicures and pedicures with gel or classic finishes — zero commute required.",
    image: "/images/nails.jpg",
    imageAlt: "Mobile manicure and nail care service",
    icon: Gem,
    accent: "from-primary/70 to-secondary/50",
  },
] as const;

export function HomeServicesPreview() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="services-preview-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Signature treatments"
          description="Our most-booked experiences — each delivered by qualified therapists with spa-grade products and setup."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {PREVIEW_SERVICES.map((service, index) => (
            <article
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  quality={65}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.accent} to-transparent opacity-60`} aria-hidden />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-primary shadow-md">
                    <service.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white drop-shadow-sm">{service.title}</h3>
                </div>
                <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-primary shadow-md">
                  From {service.fromPrice}
                </span>
                <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/90 text-xs font-bold text-white">
                  {index + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <BookButton className="mt-5 w-full rounded-xl py-5 font-semibold luxury-gradient text-primary-foreground">
                  Book Now
                </BookButton>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-2xl border-primary/25 px-8 hover:bg-primary/5">
            <Link href="/services" className="inline-flex items-center gap-2">
              Browse all services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
