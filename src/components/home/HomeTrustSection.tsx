"use client";

import { BadgeCheck, Clock, Receipt, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const TRUST_ITEMS = [
  { title: "Professional Therapists", description: "Care-focused mobile service", icon: BadgeCheck },
  { title: "Premium Products", description: "Spa-grade treatment products", icon: Sparkles },
  { title: "Hygienic & Safe", description: "Fresh linens and clean setup", icon: ShieldCheck },
  { title: "Scheduled Appointments", description: "Clear booking windows", icon: Clock },
  { title: "Transparent Pricing", description: "Pricing shown before booking", icon: Receipt },
] as const;

export function HomeTrustSection() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="trust-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Professional mobile spa care in Cape Town"
          description="Simple booking, clear service information, and treatments delivered to your chosen location."
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
      </div>
    </section>
  );
}
