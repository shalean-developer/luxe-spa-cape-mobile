import type { Metadata } from "next";
import Oranjezicht from "@/site-pages/locations/Oranjezicht";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/oranjezicht");

export default function Page() {
  return <Oranjezicht />;
}
