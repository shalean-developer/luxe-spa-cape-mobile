import type { Metadata } from "next";
import Bishopscourt from "@/site-pages/locations/Bishopscourt";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/bishopscourt");

export default function Page() {
  return <Bishopscourt />;
}
