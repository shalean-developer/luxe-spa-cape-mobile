import type { ReactNode } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

type LocalReference = {
  label: string;
  href: string;
};

const LOCAL_REFERENCES: Record<string, readonly LocalReference[]> = {
  "/locations/sea-point": [
    { label: "Mojo Market", href: "https://www.capetown.travel/sea-point/" },
    { label: "Sea Point Pavilion", href: "https://www.capetown.travel/sea-point/" },
  ],
  "/locations/camps-bay": [
    { label: "Theatre on the Bay", href: "https://www.capetown.travel/your-neighbourhood-guide-to-camps-bay/" },
    { label: "Camps Bay beachfront", href: "https://www.capetown.travel/neighbourhood/camps-bay/" },
  ],
  "/locations/constantia": [
    { label: "Groot Constantia", href: "https://www.capetown.travel/listing/groot-constantia-a-wine-lovers-paradise/" },
    { label: "The Constantia Village", href: "https://www.capetown.travel/need-some-retail-therapy-visit-these-cape-town-shopping-malls/" },
  ],
  "/locations/claremont": [
    { label: "Cavendish Square", href: "https://www.capetown.travel/claremont/" },
  ],
  "/locations/durbanville": [
    { label: "Durbanville Wine Valley", href: "https://www.capetown.travel/travel-like-a-local-your-neighbourhood-guide-to-durbanville/" },
    { label: "Majik Forest", href: "https://www.capetown.travel/travel-like-a-local-your-neighbourhood-guide-to-durbanville/" },
  ],
  "/locations/goodwood": [
    { label: "GrandWest", href: "https://www.capetown.travel/listing/c_grandwest-casino-and-entertainment-world/" },
  ],
  "/locations/green-point": [
    { label: "DHL Stadium", href: "https://www.capetown.travel/travel-like-a-local-your-neighbourhood-guide-to-green-point/" },
    { label: "V&A Waterfront", href: "https://www.capetown.travel/neighbourhood/green-point/" },
  ],
  "/locations/bloubergstrand": [
    { label: "Blue Peter Hotel", href: "https://www.capetown.travel/neighbourhood/bloubergstrand/" },
    { label: "Big Bay", href: "https://www.capetown.travel/travel-like-a-local-your-neighbourhood-guide-to-blouberg/" },
  ],
};

export function LocationPageShell({ name, path, children }: { name: string; path: string; children: ReactNode }) {
  const references = LOCAL_REFERENCES[path] ?? [];

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

      {references.length > 0 && (
        <aside className="border-b border-border/60 bg-muted/20" aria-label={`Local reference points in ${name}`}>
          <div className="container mx-auto flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:gap-5">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <MapPin className="h-4 w-4 text-primary" aria-hidden />
              Local reference points
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {references.map((reference) => (
                <a
                  key={reference.label}
                  href={reference.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline"
                >
                  {reference.label}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </aside>
      )}

      {children}
    </>
  );
}
