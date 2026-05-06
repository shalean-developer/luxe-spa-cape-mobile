import Link from "next/link";

type NeighborLink = { href: string; label: string };

export function PopularTreatmentsBlock({ areaLabel }: { areaLabel: string }) {
  return (
    <div className="mt-8 rounded-xl border border-border/60 bg-background/80 p-6 shadow-sm">
      <h3 className="font-serif text-xl font-bold tracking-tight text-foreground md:text-2xl">
        Popular treatments in {areaLabel}
      </h3>
      <ul className="mt-4 space-y-3 text-muted-foreground md:text-lg">
        <li>
          <strong className="font-medium text-foreground">Deep tissue massage in {areaLabel}</strong> — sports recovery,
          desk-tight shoulders, and restorative full-body work by{" "}
          <span className="text-foreground">professional certified therapists</span>.
        </li>
        <li>
          <strong className="font-medium text-foreground">Facials in {areaLabel}</strong> — hydrating, anti-aging, and
          event-ready skincare using premium products in the privacy of your home.
        </li>
        <li>
          <strong className="font-medium text-foreground">Mobile manicure &amp; pedicure in {areaLabel}</strong> — gel
          manicures and spa pedicures without salon waits.
        </li>
        <li>
          <strong className="font-medium text-foreground">Couples massage in {areaLabel}</strong> — side-by-side rituals
          for date nights, celebrations, or hosting visitors from out of town.
        </li>
      </ul>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        Explore waxing, hot stones, and packages on our{" "}
        <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
          spa services menu
        </Link>{" "}
        — then{" "}
        <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
          book your appointment
        </Link>
        .
      </p>
    </div>
  );
}

function linkedList(neighbors: NeighborLink[]) {
  return neighbors.map((n, i) => (
    <span key={n.href}>
      {i > 0 && (i === neighbors.length - 1 ? " and " : ", ")}
      <Link href={n.href} className="font-medium text-primary underline-offset-4 hover:underline">
        {n.label}
      </Link>
    </span>
  ));
}

export function NearbyAreasProseBlock({
  areaLabel,
  neighbors,
}: {
  areaLabel: string;
  neighbors: NeighborLink[];
}) {
  if (neighbors.length === 0) return null;
  return (
    <p className="mt-6 leading-relaxed text-muted-foreground md:text-lg">
      We also serve nearby areas including {linkedList(neighbors)} — ideal when you split stays between {areaLabel}{" "}
      and neighbouring suburbs, host Airbnb or boutique-hotel guests who move across Cape Town, or want therapists who
      already know parking and access patterns for adjacent pockets.
    </p>
  );
}

export function LocationTrustStrip() {
  return (
    <p className="mt-4 rounded-lg border border-primary/15 bg-primary/5 px-4 py-3 text-sm leading-relaxed text-foreground md:text-base">
      <span className="font-semibold">Trusted by clients across Cape Town</span>
      <span className="text-muted-foreground"> · </span>
      Professional certified therapists
      <span className="text-muted-foreground"> · </span>
      Hotel-standard equipment &amp; hygiene
      <span className="text-muted-foreground"> · </span>
      Rated 4.9★ by guests who book our mobile spa regularly
    </p>
  );
}
