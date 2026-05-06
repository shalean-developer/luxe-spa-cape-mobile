import type { Metadata } from "next";
import Goodwood from "@/site-pages/locations/Goodwood";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/goodwood");

export default function Page() {
  return <Goodwood />;
}
