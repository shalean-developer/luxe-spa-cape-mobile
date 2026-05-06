import type { Metadata } from "next";
import Blog from "@/site-pages/Blog";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("blog");

export default function Page() {
  return <Blog />;
}
