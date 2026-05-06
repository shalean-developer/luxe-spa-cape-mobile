import type { Metadata } from "next";
import Contact from "@/site-pages/Contact";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("contact");

export default function Page() {
  return <Contact />;
}
