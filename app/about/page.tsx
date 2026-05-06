import type { Metadata } from "next";
import About from "@/site-pages/About";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("about");

export default function Page() {
  return <About />;
}
