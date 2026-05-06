import type { Metadata } from "next";
import HoutBay from "@/site-pages/locations/HoutBay";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/hout-bay");

export default function Page() {
  return <HoutBay />;
}
