import type { Metadata } from "next";
import Rondebosch from "@/site-pages/locations/Rondebosch";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("locations/rondebosch");

export default function Page() {
  return <Rondebosch />;
}
