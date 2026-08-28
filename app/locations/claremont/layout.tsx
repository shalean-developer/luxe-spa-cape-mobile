import type { ReactNode } from "react";
import { LocationPageShell } from "@/components/locations/LocationPageShell";

export default function Layout({ children }: { children: ReactNode }) {
  return <LocationPageShell name="Claremont" path="/locations/claremont">{children}</LocationPageShell>;
}
