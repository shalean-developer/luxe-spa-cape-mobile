import type { Metadata } from "next";
import Booking from "@/site-pages/Booking";
import { getRouteMetadata } from "@/routeMetadata";

export const metadata: Metadata = getRouteMetadata("booking");

export default function Page() {
  return <Booking />;
}
