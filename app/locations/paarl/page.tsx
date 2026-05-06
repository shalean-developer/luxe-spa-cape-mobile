import type { Metadata } from "next";
import Paarl from "@/site-pages/locations/Paarl";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/paarl");

export default function Page() {
  return <Paarl />;
}
