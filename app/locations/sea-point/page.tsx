import type { Metadata } from "next";
import SeaPoint from "@/site-pages/locations/SeaPoint";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/sea-point");

export default function Page() {
  return <SeaPoint />;
}
