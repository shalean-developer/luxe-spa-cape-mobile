/**
 * Canonical public origin for absolute URLs (metadata, JSON-LD, sitemap, robots).
 * Rejuvenation Mobile Massage is published at rejuvenationmassage.co.za.
 */
export function getCanonicalSiteUrl(): string {
  return "https://rejuvenationmassage.co.za";
}

/** Canonical host only. Retained for callers that need an origin helper. */
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
