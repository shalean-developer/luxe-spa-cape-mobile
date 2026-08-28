import type { ReactNode } from "react";
import { LocationPageShell } from "@/components/locations/LocationPageShell";

export default function Layout({ children }: { children: ReactNode }) {
  return <LocationPageShell name="Green Point" path="/locations/green-point">{children}</LocationPageShell>;
}
