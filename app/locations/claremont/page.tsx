import type { Metadata } from "next";
import Claremont from "@/site-pages/locations/Claremont";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/claremont");

export default function Page() {
  return <Claremont />;
}
