import type { Metadata } from "next";
import Stellenbosch from "@/site-pages/locations/Stellenbosch";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/stellenbosch");

export default function Page() {
  return <Stellenbosch />;
}
