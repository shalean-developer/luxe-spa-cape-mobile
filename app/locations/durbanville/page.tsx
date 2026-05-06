import type { Metadata } from "next";
import Durbanville from "@/site-pages/locations/Durbanville";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/durbanville");

export default function Page() {
  return <Durbanville />;
}
