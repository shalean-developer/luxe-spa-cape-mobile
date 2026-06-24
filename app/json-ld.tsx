const beautySalonJsonLd = {
  "@context": "https://schema.org",
  "@type": ["BeautySalon", "HealthAndBeautyBusiness"],
  "@id": "https://www.luxurymspa.co.za/#business",
  name: "Rejuvenation Mobile Massage Cape Town",
  description:
    "Rejuvenation mobile massage in Cape Town — professional at-home massage, facials, and nail treatments across the Atlantic Seaboard, Southern Suburbs, and Winelands.",
  image: "https://www.luxurymspa.co.za/og-image.jpg",
  logo: "https://www.luxurymspa.co.za/images/rejuvenation-logo.png",
  url: "https://www.luxurymspa.co.za",
  telephone: "+27681849866",
  email: "info@luxurymspa.co.za",
  priceRange: "R400-R2000",
  currenciesAccepted: "ZAR",
  paymentAccepted: "Cash, Card, EFT",
  openingHours: "Mo-Su 09:00-20:00",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cape Town",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.9249,
    longitude: 18.4241,
  },
  areaServed: [{ "@type": "City", name: "Cape Town" }],
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
