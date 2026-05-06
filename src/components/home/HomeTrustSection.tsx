import { BadgeCheck, Clock, Home, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TRUST_BADGES = [
  {
    title: "Certified therapists",
    description: "Qualified, vetted professionals — the same calibre you expect from top Cape Town spas.",
    icon: BadgeCheck,
  },
  {
    title: "Hygienic & safe",
    description: "Fresh linens, sanitised tools, and strict hygiene protocols for every visit.",
    icon: ShieldCheck,
  },
  {
    title: "On-time guarantee",
    description: "We respect your schedule — clear arrival windows and proactive communication.",
    icon: Clock,
  },
] as const;

const TRUST_PILLARS = [
  {
    title: "At-home convenience",
    description: "Full mobile setup across Cape Town — minimal disruption, maximum comfort in your own space.",
    icon: Home,
  },
  {
    title: "Premium experience",
    description: "Luxury products, calm rituals, and attention to detail from booking to aftercare.",
    icon: Sparkles,
  },
  {
    title: "Transparent booking",
    description: "Clear pricing, simple scheduling, and friendly support when you need it.",
    icon: BadgeCheck,
  },
] as const;

const TESTIMONIALS = [
  {
    name: "Sarah",
    location: "Sea Point",
    quote: "Absolutely incredible — professional, punctual, and the massage was heaven. I’ll book again.",
  },
  {
    name: "Jennifer",
    location: "Claremont",
    quote: "Quality matched any high-end spa I’ve visited — except I never left my lounge.",
  },
  {
    name: "Thandiwe",
    location: "Constantia",
    quote: "The facial was transformative. Discreet, luxurious, and worth every minute.",
  },
] as const;

export function HomeTrustSection() {
  return (
    <section
      className="border-y border-border/60 bg-muted/25 py-20 md:py-28"
      aria-labelledby="trust-heading"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs font-medium uppercase tracking-wide">
            Loved in Cape Town
          </Badge>
          <h2 id="trust-heading" className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Why guests trust us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real reviews from clients who chose at-home luxury — no compromise on quality.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border/80 bg-card/90 px-6 py-8 text-center shadow-sm md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-2" aria-label="Average rating 4.9 out of 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" aria-hidden />
            ))}
          </div>
          <p className="mt-3 font-serif text-2xl font-bold text-foreground md:text-3xl">4.9 / 5</p>
          <p className="mt-1 text-sm text-muted-foreground md:text-base">
            Rated <strong className="text-foreground">4.9/5</strong> by <strong className="text-foreground">120+</strong>{" "}
            Cape Town clients
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TRUST_BADGES.map((item) => (
            <Card
              key={item.title}
              className="border-border/80 bg-background/80 shadow-sm transition-smooth hover:border-primary/25 hover:shadow-md"
            >
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TRUST_PILLARS.map((pillar) => (
            <Card
              key={pillar.title}
              className="border-border/80 bg-background/80 shadow-sm transition-smooth hover:border-primary/20 hover:shadow-md"
            >
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <pillar.icon className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card
              key={`${t.name}-${t.location}`}
              className="border-border/60 bg-card shadow-sm transition-smooth hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-3 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-sm italic leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  — {t.name}
                  <span className="font-normal text-muted-foreground">, {t.location}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
