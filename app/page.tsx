import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("");

export default function Page() {
  return <HomePage />;
}
