import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { getCanonicalSiteUrl } from "@/lib/siteOrigin";

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

const STATIC_ENTRIES: { pathname: string; changeFrequency: ChangeFreq; priority: number }[] = [
  { pathname: "/", changeFrequency: "weekly", priority: 1 },
  { pathname: "/services", changeFrequency: "weekly", priority: 0.9 },
  { pathname: "/locations", changeFrequency: "weekly", priority: 0.9 },
  { pathname: "/booking", changeFrequency: "monthly", priority: 0.8 },
  { pathname: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { pathname: "/about", changeFrequency: "monthly", priority: 0.7 },
  { pathname: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { pathname: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

function locationPathnames(): string[] {
  const dir = path.join(process.cwd(), "app", "locations");
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .filter((e) => fs.existsSync(path.join(dir, e.name, "page.tsx")))
    .map((e) => `/locations/${e.name}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getCanonicalSiteUrl();
  const lastModified = new Date();

  const staticUrls = STATIC_ENTRIES.map(({ pathname, changeFrequency, priority }) => ({
    url: `${siteUrl}${pathname}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const locationUrls = locationPathnames().map((pathname) => ({
    url: `${siteUrl}${pathname}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticUrls, ...locationUrls];
}
