import type { Metadata } from "next";
import MouillePoint from "@/site-pages/locations/MouillePoint";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/mouille-point");

export default function Page() {
  return <MouillePoint />;
}
