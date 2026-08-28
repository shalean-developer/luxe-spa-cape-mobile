import Link from "next/link";

type NeighborLink = { href: string; label: string };

export function PopularTreatmentsBlock({ areaLabel }: { areaLabel: string }) {
  return (
    <div className="mt-8 rounded-xl border border-border/60 bg-background/80 p-6 shadow-sm">
      <h3 className="font-serif text-xl font-bold tracking-tight text-foreground md:text-2xl">
        Treatments available in {areaLabel}
      </h3>
      <ul className="mt-4 space-y-3 text-muted-foreground md:text-lg">
        <li>
          <strong className="font-medium text-foreground">Deep tissue massage</strong> — focused work for tired or tense
          muscles, delivered at your home, hotel, or guest accommodation.
        </li>
        <li>
          <strong className="font-medium text-foreground">Facials</strong> — hydrating and skincare-focused treatments
          prepared for your appointment.
        </li>
        <li>
          <strong className="font-medium text-foreground">Manicures and pedicures</strong> — mobile nail care without a
          salon visit.
        </li>
        <li>
          <strong className="font-medium text-foreground">Couples massage</strong> — a convenient option for couples,
          celebrations, or shared relaxation time.
        </li>
      </ul>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        See the full treatment list on our{" "}
        <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
          services page
        </Link>{" "}
        or{" "}
        <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
          book an appointment
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
      We also travel to nearby areas including {linkedList(neighbors)}. If your address is between suburbs or outside the
      usual route, send your location when booking so we can confirm availability and travel details from {areaLabel}.
    </p>
  );
}

export function LocationTrustStrip() {
  return (
    <p className="mt-4 rounded-lg border border-primary/15 bg-primary/5 px-4 py-3 text-sm leading-relaxed text-foreground md:text-base">
      <span className="font-semibold">Mobile appointments across Cape Town</span>
      <span className="text-muted-foreground"> · </span>
      Treatment equipment brought to your location
      <span className="text-muted-foreground"> · </span>
      Home, hotel and guest-accommodation visits
    </p>
  );
}
