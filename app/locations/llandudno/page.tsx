import type { Metadata } from "next";
import Llandudno from "@/site-pages/locations/Llandudno";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/llandudno");

export default function Page() {
  return <Llandudno />;
}
