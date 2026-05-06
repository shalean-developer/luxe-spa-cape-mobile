import type { Metadata } from "next";
import Terms from "@/site-pages/Terms";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("terms");

export default function Page() {
  return <Terms />;
}
