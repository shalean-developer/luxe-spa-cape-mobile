import { getCanonicalSiteUrl } from "@/lib/siteOrigin";

export function JsonLd() {
  const siteUrl = getCanonicalSiteUrl();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Rejuvenation Mobile Massage Cape Town",
    url: siteUrl,
    logo: `${siteUrl}/images/rejuvenation-logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    description:
      "Mobile massage, facials and nail treatments delivered to homes, hotels and short-stay accommodation across Cape Town and selected Winelands areas.",
    email: "info@luxurymspa.co.za",
    telephone: "+27681849866",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27681849866",
      contactType: "customer service",
      areaServed: "ZA",
      availableLanguage: "English",
    },
    areaServed: [
      { "@type": "City", name: "Cape Town" },
      { "@type": "AdministrativeArea", name: "Cape Winelands" },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${siteUrl}/services#massage`,
          name: "Mobile massage",
          serviceType: "Massage therapy",
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: { "@type": "City", name: "Cape Town" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${siteUrl}/services#facials`,
          name: "Mobile facial treatments",
          serviceType: "Facial treatments",
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: { "@type": "City", name: "Cape Town" },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `${siteUrl}/services#nails`,
          name: "Mobile manicure and pedicure",
          serviceType: "Nail treatments",
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: { "@type": "City", name: "Cape Town" },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}
