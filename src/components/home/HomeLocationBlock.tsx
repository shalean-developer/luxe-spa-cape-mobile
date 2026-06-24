import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const AREA_CHIPS = [
  { label: "Sea Point", href: "/locations/sea-point" },
  { label: "Camps Bay", href: "/locations/camps-bay" },
  { label: "Clifton", href: "/locations/clifton" },
  { label: "Green Point", href: "/locations/green-point" },
  { label: "CBD", href: "/locations/green-point" },
  { label: "Bo-Kaap", href: "/locations/de-waterkant" },
  { label: "Hout Bay", href: "/locations/hout-bay" },
  { label: "Constantia", href: "/locations/constantia" },
  { label: "Newlands", href: "/locations/newlands" },
  { label: "Durbanville", href: "/locations/durbanville" },
  { label: "Blouberg", href: "/locations/bloubergstrand" },
  { label: "Bellville", href: "/locations/goodwood" },
  { label: "Northern Suburbs", href: "/locations/goodwood" },
] as const;

export function HomeLocationBlock() {
  return (
    <section className="bg-[#f8fafc] py-20 md:py-28" aria-labelledby="locations-seo-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/hero-spa.jpg"
                alt="Cape Town coastline and mobile spa service areas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 via-transparent to-transparent" aria-hidden />
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:right-auto sm:max-w-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">30+ suburbs covered</p>
                  <p className="text-xs text-muted-foreground">Atlantic Seaboard to Winelands</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Service Areas"
              title="Mobile spa across Cape Town"
              description="Rejuvenation Mobile Massage brings massage, facials, and nail treatments to your home, hotel, or office — from the Atlantic Seaboard and City Bowl to the Southern and Northern Suburbs."
              align="left"
            />

            <p className="mt-4 text-sm text-muted-foreground">
              Not sure if we cover your area?{" "}
              <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
                Send us your suburb
              </Link>{" "}
              and we&apos;ll confirm availability.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {AREA_CHIPS.map((chip) => (
                <Link
                  key={chip.label}
                  href={chip.href}
                  className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-white"
                >
                  {chip.label}
                </Link>
              ))}
            </div>

            <Link
              href="/locations"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-opacity hover:opacity-90"
            >
              View all service areas
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
