import type { Metadata } from "next";
import SomersetWest from "@/site-pages/locations/SomersetWest";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/somerset-west");

export default function Page() {
  return <SomersetWest />;
}
