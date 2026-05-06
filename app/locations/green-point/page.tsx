import type { Metadata } from "next";
import GreenPoint from "@/site-pages/locations/GreenPoint";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/green-point");

export default function Page() {
  return <GreenPoint />;
}
