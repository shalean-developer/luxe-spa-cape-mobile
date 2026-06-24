"use client";

import { BadgeCheck, Clock, Quote, Receipt, ShieldCheck, Sparkles, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeader } from "./SectionHeader";

const TRUST_ITEMS = [
  { title: "Certified Therapists", description: "Qualified & vetted", icon: BadgeCheck },
  { title: "Premium Products", description: "Spa-grade quality", icon: Sparkles },
  { title: "Hygienic & Safe", description: "Fresh linens always", icon: ShieldCheck },
  { title: "On-Time Guarantee", description: "We respect your time", icon: Clock },
  { title: "Transparent Pricing", description: "No hidden fees", icon: Receipt },
] as const;

const TESTIMONIALS = [
  {
    name: "Sarah",
    location: "Cape Town",
    quote: "Absolutely incredible — professional, punctual, and the massage was heaven. I'll book again.",
  },
  {
    name: "Jennifer",
    location: "Claremont",
    quote: "Quality matched any high-end spa I've visited — except I never left my lounge.",
  },
  {
    name: "Thandiwe",
    location: "Constantia",
    quote: "The facial was transformative. Discreet, luxurious, and worth every minute.",
  },
] as const;

export function HomeTrustSection() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="trust-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Trusted care. Exceptional experience."
          description="Five reasons guests across Cape Town choose us — and keep coming back."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border/60 bg-slate-50/50 p-5 text-center transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
            >
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <p className="text-sm font-bold text-foreground">{item.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-br from-primary to-[hsl(217,91%,45%)] p-8 md:p-12">
          <div className="mb-10 flex flex-col items-center justify-between gap-6 text-center text-white md:flex-row md:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Loved by our clients</p>
              <div className="mt-3 flex items-center justify-center gap-3 md:justify-start">
                <div className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-serif text-3xl font-bold">4.9/5</span>
                <span className="text-sm text-white/80">from 150+ reviews</span>
              </div>
            </div>
            <Quote className="hidden h-16 w-16 text-white/20 md:block" aria-hidden />
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="mx-auto max-w-5xl">
            <CarouselContent className="-ml-4">
              {TESTIMONIALS.map((t) => (
                <CarouselItem key={`${t.name}-${t.location}`} className="basis-full pl-4 md:basis-1/3">
                  <div className="h-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm ring-1 ring-white/20">
                    <div className="mb-4 flex gap-0.5" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden />
                      ))}
                    </div>
                    <blockquote className="text-sm leading-relaxed text-white/90">&ldquo;{t.quote}&rdquo;</blockquote>
                    <p className="mt-5 text-sm font-semibold text-white">
                      {t.name}
                      <span className="font-normal text-white/70"> · {t.location}</span>
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 border-white/30 bg-white/10 text-white hover:bg-white/20 sm:-left-12" />
            <CarouselNext className="right-0 border-white/30 bg-white/10 text-white hover:bg-white/20 sm:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
