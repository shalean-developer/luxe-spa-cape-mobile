import type { Metadata } from "next";
import Services from "@/site-pages/Services";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("services");

export default function Page() {
  return <Services />;
}
