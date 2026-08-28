import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="border-b border-border/60 bg-background">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Mobile Massage Cape Town: What to Expect", href: "/blog/mobile-massage-cape-town-what-to-expect" }]} />
        </div>
      </div>
      {children}
    </>
  );
}
