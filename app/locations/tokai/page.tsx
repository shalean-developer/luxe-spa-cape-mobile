import type { Metadata } from "next";
import Tokai from "@/site-pages/locations/Tokai";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/tokai");

export default function Page() {
  return <Tokai />;
}
