import type { Metadata } from "next";
import Clifton from "@/site-pages/locations/Clifton";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/clifton");

export default function Page() {
  return <Clifton />;
}
