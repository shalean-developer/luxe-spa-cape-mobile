import { getCanonicalSiteUrl } from "@/lib/siteOrigin";

const siteUrl = getCanonicalSiteUrl();

const beautySalonJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Rejuvenation Mobile Massage Cape Town",
  description:
    "Rejuvenation mobile massage in Cape Town — professional at-home massage, facials, and nail treatments across the Atlantic Seaboard, Southern Suburbs, and Winelands.",
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/images/rejuvenation-logo.png`,
  url: siteUrl,
  telephone: "+27681849866",
  email: "info@luxurymspa.co.za",
  priceRange: "R400-R2000",
  currenciesAccepted: "ZAR",
  paymentAccepted: "Cash, Card, EFT",
  openingHours: "Mo-Su 07:00-21:00",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cape Town",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  areaServed: [
    { "@type": "City", name: "Cape Town" },
    { "@type": "AdministrativeArea", name: "Western Cape" },
  ],
  serviceType: ["Massage", "Facials", "Nail treatments", "Body treatments"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile spa services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Massage therapy",
          description: "Swedish, deep tissue, hot stone, and aromatherapy massages at home",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Facial treatments",
          description: "Hydrating, anti-ageing, and deep cleansing facials",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Manicure & pedicure",
          description: "Gel and classic nail care at your location",
        },
      },
    ],
  },
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(beautySalonJsonLd) }}
    />
  );
}
