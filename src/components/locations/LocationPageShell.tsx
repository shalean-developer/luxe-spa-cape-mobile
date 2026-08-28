import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export function LocationPageShell({ name, path, children }: { name: string; path: string; children: ReactNode }) {
  return (
    <>
      <div className="border-b border-border/60 bg-background">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations" },
              { label: name, href: path },
            ]}
          />
        </div>
      </div>
      {children}
    </>
  );
}
