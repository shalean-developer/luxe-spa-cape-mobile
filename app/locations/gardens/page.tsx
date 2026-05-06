import type { Metadata } from "next";
import Gardens from "@/site-pages/locations/Gardens";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/gardens");

export default function Page() {
  return <Gardens />;
}
