import type { Metadata } from "next";
import DeWaterkant from "@/site-pages/locations/DeWaterkant";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/de-waterkant");

export default function Page() {
  return <DeWaterkant />;
}
