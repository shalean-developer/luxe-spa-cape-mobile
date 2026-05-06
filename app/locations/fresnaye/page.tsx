import type { Metadata } from "next";
import Fresnaye from "@/site-pages/locations/Fresnaye";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/fresnaye");

export default function Page() {
  return <Fresnaye />;
}
