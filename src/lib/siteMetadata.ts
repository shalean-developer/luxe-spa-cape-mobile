import { getCanonicalSiteUrl } from "@/lib/siteOrigin";

export const SITE_NAME = "Rejuvenation Mobile Massage Cape Town";
export const SITE_AUTHOR = "Rejuvenation Mobile Massage";
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export const DEFAULT_SITE_TITLE =
  "Rejuvenation Mobile Massage Cape Town | At-Home Massage, Facials & Mobile Beauty";

export const DEFAULT_SITE_DESCRIPTION =
  "Rejuvenation mobile massage Cape Town—book at-home massage, facials and mobile beauty services across Cape Town, subject to therapist and route availability.";

export function getSiteMetadataConfig() {
  const siteUrl = getCanonicalSiteUrl();

  return {
    siteUrl,
    siteName: SITE_NAME,
    author: SITE_AUTHOR,
    defaultTitle: DEFAULT_SITE_TITLE,
    defaultDescription: DEFAULT_SITE_DESCRIPTION,
    defaultOgImageUrl: new URL(DEFAULT_OG_IMAGE, siteUrl).toString(),
  } as const;
}
