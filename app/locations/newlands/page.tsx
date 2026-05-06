import type { Metadata } from "next";
import Newlands from "@/site-pages/locations/Newlands";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/newlands");

export default function Page() {
  return <Newlands />;
}
