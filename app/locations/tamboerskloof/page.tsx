import type { Metadata } from "next";
import Tamboerskloof from "@/site-pages/locations/Tamboerskloof";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/tamboerskloof");

export default function Page() {
  return <Tamboerskloof />;
}
