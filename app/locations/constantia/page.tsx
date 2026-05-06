import type { Metadata } from "next";
import Constantia from "@/site-pages/locations/Constantia";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/constantia");

export default function Page() {
  return <Constantia />;
}
