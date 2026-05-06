import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const PREVIEW_SERVICES = [
  {
    title: "Massage",
    fromPrice: "From R650",
    description:
      "Melt tension away — deeper sleep, looser shoulders, and that ‘I just left a five-star spa’ feeling without leaving your sofa.",
    image: "/images/massage.jpg",
    imageAlt: "Relaxing mobile massage therapy in Cape Town",
  },
  {
    title: "Facials",
    fromPrice: "From R550",
    description:
      "Wake up glowing — tailored facials for hydration, fine lines, or deep cleansing so your skin looks event-ready on your timeline.",
    image: "/images/facial.jpg",
    imageAlt: "Professional facial treatment at home",
  },
  {
    title: "Nails",
    fromPrice: "From R350",
    description:
      "Polished hands and feet, zero commute — gel or classic finishes so you look put-together for work, weekends, or special occasions.",
    image: "/images/nails.jpg",
    imageAlt: "Mobile manicure and nail care service",
  },
] as const;

export function HomeServicesPreview() {
  return (
    <section
      className="border-y border-border/60 bg-muted/20 py-20 md:py-28"
      aria-labelledby="services-preview-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="services-preview-heading" className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Signature treatments
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our most-booked experiences — each delivered by qualified therapists with spa-grade products and setup.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {PREVIEW_SERVICES.map((service) => (
            <Card
              key={service.title}
              className="group flex flex-col overflow-hidden border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-1 pb-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-xl font-semibold">{service.title}</h3>
                  <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary md:text-sm">
                    {service.fromPrice}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 pb-4">
                <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">{service.description}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  asChild
                  className="w-full font-semibold shadow-md transition-smooth hover:shadow-lg luxury-gradient text-primary-foreground"
                >
                  <Link href="/booking">Book</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 transition-smooth hover:border-primary/50">
            <Link href="/services">Browse all services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
