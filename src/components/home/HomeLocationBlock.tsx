import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const SUBURB_LINKS = [
  { label: "Sea Point", href: "/locations/sea-point" },
  { label: "Camps Bay", href: "/locations/camps-bay" },
  { label: "Claremont", href: "/locations/claremont" },
  { label: "Constantia", href: "/locations/constantia" },
  { label: "Green Point", href: "/locations/green-point" },
  { label: "Durbanville", href: "/locations/durbanville" },
  { label: "Bloubergstrand", href: "/locations/bloubergstrand" },
  { label: "Goodwood", href: "/locations/goodwood" },
  { label: "Bantry Bay", href: "/locations/bantry-bay" },
  { label: "Clifton", href: "/locations/clifton" },
  { label: "Hout Bay", href: "/locations/hout-bay" },
  { label: "Bishopscourt", href: "/locations/bishopscourt" },
  { label: "Stellenbosch", href: "/locations/stellenbosch" },
] as const;

/** Keyword-style anchors for long-tail internal links (body + SEO). */
const KEYWORD_AREA_LINKS = [
  { href: "/locations/sea-point", text: "mobile spa in Sea Point" },
  { href: "/locations/camps-bay", text: "massage in Camps Bay" },
  { href: "/locations/durbanville", text: "spa services in Durbanville" },
  { href: "/locations/claremont", text: "at-home facials in Claremont" },
  { href: "/locations/constantia", text: "mobile spa Constantia" },
  { href: "/locations/green-point", text: "massage in Green Point" },
  { href: "/locations/bloubergstrand", text: "Bloubergstrand at-home massage" },
  { href: "/locations/goodwood", text: "Goodwood mobile spa" },
  { href: "/locations/hout-bay", text: "Hout Bay spa at home" },
  { href: "/locations/bantry-bay", text: "Bantry Bay luxury massage" },
] as const;

const QUICK_CHIPS = [
  { href: "/locations/sea-point", label: "Sea Point" },
  { href: "/locations/camps-bay", label: "Camps Bay" },
  { href: "/locations/durbanville", label: "Durbanville" },
  { href: "/locations/claremont", label: "Claremont" },
  { href: "/locations/constantia", label: "Constantia" },
  { href: "/locations/green-point", label: "Green Point" },
  { href: "/locations/bloubergstrand", label: "Bloubergstrand" },
  { href: "/locations/goodwood", label: "Goodwood" },
  { href: "/locations/fresnaye", label: "Fresnaye" },
  { href: "/locations/de-waterkant", label: "De Waterkant" },
  { href: "/locations/tokai", label: "Tokai" },
  { href: "/locations/franschhoek", label: "Franschhoek" },
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

function KeywordLinksSentence() {
  return (
    <p className="mt-5 text-left text-base leading-relaxed text-muted-foreground md:text-lg">
      Popular searches we match every week:{" "}
      {KEYWORD_AREA_LINKS.map((item, i) => (
        <span key={item.href}>
          {i > 0 && (i === KEYWORD_AREA_LINKS.length - 1 ? ", and " : ", ")}
          <Link href={item.href} className="font-medium text-primary underline-offset-4 hover:underline">
            {item.text}
          </Link>
        </span>
      ))}
      . Each suburb page lists local routing notes — start here, then{" "}
      <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
        book your appointment
      </Link>{" "}
      with your address.
    </p>
  );
}

export function HomeLocationBlock() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="locations-seo-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/80 bg-gradient-to-br from-card via-card to-muted/30 p-8 shadow-sm md:p-12">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary md:mx-auto">
            <MapPin className="h-6 w-6" aria-hidden />
          </div>
          <h2 id="locations-seo-heading" className="text-center font-serif text-2xl font-bold tracking-tight md:text-3xl">
            Mobile spa across Cape Town
          </h2>
          <p className="mt-4 text-center text-base leading-relaxed text-muted-foreground md:text-lg">
            <strong className="font-medium text-foreground">Luxury Mobile Spa</strong> brings{" "}
            <strong className="font-medium text-foreground">massages, facials, and nail treatments</strong> to your home,
            Airbnb, or hotel. We are <strong className="font-medium text-foreground">serving Cape Town</strong>, including{" "}
            <SuburbInlineList />
            , and dozens more suburbs — premium wellness without leaving your door.
          </p>
          <KeywordLinksSentence />
          <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
            Atlantic Seaboard, Southern Suburbs, Northern Suburbs, West Coast, City Bowl, and Winelands —{" "}
            <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
              view all service areas
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
            {QUICK_CHIPS.map((c) => (
              <Button
                key={c.href}
                asChild
                variant="secondary"
                size="sm"
                className="rounded-full transition-smooth hover:border-primary/30"
              >
                <Link href={c.href}>{c.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
