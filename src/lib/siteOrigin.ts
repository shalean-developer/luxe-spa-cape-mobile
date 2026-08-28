/**
 * Canonical public origin for absolute URLs (metadata, JSON-LD, sitemap, robots).
 * Keep this aligned with the production redirect policy and NEXT_PUBLIC_SITE_URL.
 */
export function getCanonicalSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  return raw && /^https?:\/\//i.test(raw) ? raw : "https://luxurymspa.co.za";
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
