import type { MetadataRoute } from "next";
import { getCanonicalSiteUrl } from "@/lib/siteOrigin";

export default function robots(): MetadataRoute.Robots {
  const canonical = getCanonicalSiteUrl();

  return {
    rules: [
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Twitterbot", allow: "/" },
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    host: new URL(canonical).host,
    sitemap: `${canonical}/sitemap.xml`,
  };
}
