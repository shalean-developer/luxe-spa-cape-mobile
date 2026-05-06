import type { MetadataRoute } from "next";
import { getApexSiteUrl, getCanonicalSiteUrl } from "@/lib/siteOrigin";

export default function robots(): MetadataRoute.Robots {
  const canonical = getCanonicalSiteUrl();
  const apex = getApexSiteUrl(canonical);

  const sitemapUrls =
    apex === canonical ? [`${canonical}/sitemap.xml`] : [`${canonical}/sitemap.xml`, `${apex}/sitemap.xml`];

  return {
    rules: [
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    host: new URL(canonical).host,
    sitemap: sitemapUrls,
  };
}
