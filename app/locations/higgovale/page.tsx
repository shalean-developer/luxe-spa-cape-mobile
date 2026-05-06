import type { Metadata } from "next";
import Higgovale from "@/site-pages/locations/Higgovale";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/higgovale");

export default function Page() {
  return <Higgovale />;
}
