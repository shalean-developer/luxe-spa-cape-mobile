import type { Metadata } from "next";
import Home from "@/site-pages/Home";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("");

export default function Page() {
  return <Home />;
}
