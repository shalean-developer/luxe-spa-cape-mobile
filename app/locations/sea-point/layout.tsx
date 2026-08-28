import type { ReactNode } from "react";
import { LocationPageShell } from "@/components/locations/LocationPageShell";

export default function Layout({ children }: { children: ReactNode }) {
  return <LocationPageShell name="Sea Point" path="/locations/sea-point">{children}</LocationPageShell>;
}
