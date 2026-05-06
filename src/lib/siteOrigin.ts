/**
 * Canonical public origin for absolute URLs (metadata, JSON-LD, sitemap, robots).
 * Set NEXT_PUBLIC_SITE_URL in Vercel/hosting (no trailing slash), e.g.
 * https://www.luxurymspa.co.za
 */
export function getCanonicalSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  return raw && /^https?:\/\//i.test(raw) ? raw : "https://www.luxurymspa.co.za";
}

/** Apex host for the same site (no www), used only for robots Sitemap hints. */
export function getApexSiteUrl(canonical: string): string {
  try {
    const u = new URL(canonical);
    if (u.hostname.startsWith("www.")) {
      u.hostname = u.hostname.slice(4);
      return u.origin;
    }
    return canonical;
  } catch {
    return canonical;
  }
}
