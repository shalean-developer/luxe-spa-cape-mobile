import type { Metadata } from "next";
import Locations from "@/site-pages/Locations";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations");

export default function Page() {
  return <Locations />;
}
