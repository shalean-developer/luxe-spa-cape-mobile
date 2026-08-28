import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getCanonicalSiteUrl } from "@/lib/siteOrigin";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: readonly BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const siteUrl = getCanonicalSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? new URL(item.href, siteUrl).toString() : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
                {index > 0 ? <ChevronRight className="h-3.5 w-3.5" aria-hidden /> : null}
                {item.href && !isLast ? (
                  <Link href={item.href} className="underline-offset-4 hover:text-foreground hover:underline">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-foreground" : undefined}>
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
