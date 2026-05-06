import type { Metadata } from "next";
import CampsBay from "@/site-pages/locations/CampsBay";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/camps-bay");

export default function Page() {
  return <CampsBay />;
}
