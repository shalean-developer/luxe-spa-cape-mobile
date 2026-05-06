import type { Metadata } from "next";
import Bloubergstrand from "@/site-pages/locations/Bloubergstrand";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/bloubergstrand");

export default function Page() {
  return <Bloubergstrand />;
}
