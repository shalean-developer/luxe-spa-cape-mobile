import type { Metadata } from "next";
import Franschhoek from "@/site-pages/locations/Franschhoek";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/franschhoek");

export default function Page() {
  return <Franschhoek />;
}
