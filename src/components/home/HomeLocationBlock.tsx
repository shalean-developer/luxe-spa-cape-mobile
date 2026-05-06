import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const SUBURB_LINKS = [
  { label: "Sea Point", href: "/locations/sea-point" },
  { label: "Camps Bay", href: "/locations/camps-bay" },
  { label: "Claremont", href: "/locations/claremont" },
  { label: "Constantia", href: "/locations/constantia" },
  { label: "Green Point", href: "/locations/green-point" },
  { label: "Bishopscourt", href: "/locations/bishopscourt" },
  { label: "Hout Bay", href: "/locations/hout-bay" },
  { label: "Stellenbosch", href: "/locations/stellenbosch" },
] as const;

function SuburbInlineList() {
  return (
    <>
      {SUBURB_LINKS.map((s, i) => (
        <span key={s.href}>
          {i > 0 && (i === SUBURB_LINKS.length - 1 ? ", and " : ", ")}
          <Link href={s.href} className="font-medium text-primary underline-offset-4 hover:underline">
            {s.label}
          </Link>
        </span>
      ))}
    </>
  );
}

export function HomeLocationBlock() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="locations-seo-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/80 bg-gradient-to-br from-card via-card to-muted/30 p-8 shadow-sm md:p-12 md:text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary md:mx-auto">
            <MapPin className="h-6 w-6" aria-hidden />
          </div>
          <h2 id="locations-seo-heading" className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
            Mobile spa across Cape Town
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <strong className="font-medium text-foreground">Luxury Mobile Spa</strong> brings{" "}
            <strong className="font-medium text-foreground">massages, facials, and nail treatments</strong> to your
            home. We are <strong className="font-medium text-foreground">serving Cape Town</strong>, including{" "}
            <SuburbInlineList />
            , and surrounding suburbs — so you can book premium wellness without leaving your door.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Atlantic Seaboard, Southern Suburbs, Northern Suburbs, and Winelands —{" "}
            <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
              view all service areas
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
            <Button asChild variant="secondary" size="sm" className="rounded-full transition-smooth hover:border-primary/30">
              <Link href="/locations/camps-bay">Camps Bay</Link>
            </Button>
            <Button asChild variant="secondary" size="sm" className="rounded-full transition-smooth hover:border-primary/30">
              <Link href="/locations/sea-point">Sea Point</Link>
            </Button>
            <Button asChild variant="secondary" size="sm" className="rounded-full transition-smooth hover:border-primary/30">
              <Link href="/locations/claremont">Claremont</Link>
            </Button>
            <Button asChild variant="secondary" size="sm" className="rounded-full transition-smooth hover:border-primary/30">
              <Link href="/locations/constantia">Constantia</Link>
            </Button>
            <Button asChild variant="secondary" size="sm" className="rounded-full transition-smooth hover:border-primary/30">
              <Link href="/locations/green-point">Green Point</Link>
            </Button>
            <Button asChild variant="secondary" size="sm" className="rounded-full transition-smooth hover:border-primary/30">
              <Link href="/locations/franschhoek">Franschhoek</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
