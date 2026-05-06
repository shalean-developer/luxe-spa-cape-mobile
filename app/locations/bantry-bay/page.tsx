import type { Metadata } from "next";
import BantryBay from "@/site-pages/locations/BantryBay";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/bantry-bay");

export default function Page() {
  return <BantryBay />;
}
