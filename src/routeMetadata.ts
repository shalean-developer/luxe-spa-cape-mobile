import type { Metadata } from "next";

const siteUrl = "https://www.luxurymspa.co.za";
const defaultKeywords =
  "mobile spa Cape Town, at home massage Cape Town, facials Cape Town, mobile beauty services Cape Town, luxury mobile spa, spa at home";

type RouteSeo = {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
};

const routeSeoMap: Record<string, RouteSeo> = {
  "": {
    title: "Luxury Mobile Spa Cape Town | At-Home Massage, Facials & Mobile Beauty",
    description:
      "Book mobile spa Cape Town visits with hotel-standard massage, facials, and nail treatments at home—Sea Point, Camps Bay, Claremont, Winelands & more.",
    canonical: "/",
  },
  services: {
    title: "Mobile Spa Cape Town Services | Massage, Facials & Nail Treatments",
    description:
      "Explore at-home massage, facials Cape Town loves for events, mobile beauty services, waxing, and couples packages—then book your Cape Town mobile spa slot.",
    canonical: "/services",
  },
  locations: {
    title: "Mobile Spa Cape Town Areas | At-Home Massage & Facials by Suburb",
    description:
      "See where we deliver luxury mobile spa Cape Town treatments—from Camps Bay & Sea Point to Claremont, Constantia, Stellenbosch & Northern suburbs.",
    canonical: "/locations",
  },
  blog: {
    title: "Mobile Spa Blog | Wellness Tips & Insights",
    description:
      "Read wellness, skincare and mobile spa insights from Luxury Mobile Spa Cape Town.",
    canonical: "/blog",
  },
  about: {
    title: "About Luxury Mobile Spa Cape Town",
    description:
      "Learn about Luxury Mobile Spa, our therapists and our mission to bring premium wellness to your doorstep.",
    canonical: "/about",
  },
  contact: {
    title: "Contact Mobile Spa Cape Town | Book At-Home Massage & Facials",
    description:
      "WhatsApp, call, or email Luxury Mobile Spa Cape Town for mobile beauty services, facials, and at-home massage routing across the Atlantic Seaboard, City Bowl & Winelands.",
    canonical: "/contact",
  },
  booking: {
    title: "Book Mobile Spa Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Reserve luxury mobile spa Cape Town appointments—same-day when available. Secure facials, massage, couples rituals & mobile beauty services at your address.",
    canonical: "/booking",
  },
  terms: {
    title: "Terms & Conditions | Luxury Mobile Spa",
    description:
      "Read the terms and conditions for Luxury Mobile Spa services, bookings and treatment policies.",
    canonical: "/terms",
  },
  "locations/camps-bay": {
    title: "Mobile Spa Camps Bay Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book luxury mobile spa services in Camps Bay, Cape Town. Enjoy at-home massage, facials, and nail treatments delivered to your beachfront villa, hotel, or Airbnb on the Atlantic Seaboard.",
    canonical: "/locations/camps-bay",
  },
  "locations/clifton": {
    title: "Mobile Spa in Clifton | Luxury Spa Cape Town",
    description: "Exclusive in-home spa services in Clifton with professional therapists, luxury products and flexible booking times.",
    canonical: "/locations/clifton",
  },
  "locations/llandudno": {
    title: "Mobile Spa in Llandudno | Luxury Spa Cape Town",
    description: "Private, high-end mobile spa experiences in Llandudno for relaxation, recovery and special occasions.",
    canonical: "/locations/llandudno",
  },
  "locations/hout-bay": {
    title: "Mobile Spa in Hout Bay | Luxury Spa Cape Town",
    description: "On-demand spa services in Hout Bay, from deep tissue massage to facials, delivered directly to your home.",
    canonical: "/locations/hout-bay",
  },
  "locations/constantia": {
    title: "Mobile Spa Constantia Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book luxury mobile spa services in Constantia, Cape Town. Enjoy at-home massage, facials, and nail treatments delivered to your wine estate, villa, or guest cottage in the Constantia Valley.",
    canonical: "/locations/constantia",
  },
  "locations/bishopscourt": {
    title: "Mobile Spa in Bishopscourt | Luxury Spa Cape Town",
    description: "Premium mobile spa care in Bishopscourt with discreet therapists and five-star treatment standards.",
    canonical: "/locations/bishopscourt",
  },
  "locations/fresnaye": {
    title: "Mobile Spa in Fresnaye | Luxury Spa Cape Town",
    description: "Professional mobile spa treatments in Fresnaye including couples massage, facials and body therapies.",
    canonical: "/locations/fresnaye",
  },
  "locations/bantry-bay": {
    title: "Mobile Spa in Bantry Bay | Luxury Spa Cape Town",
    description: "Book luxury mobile spa services in Bantry Bay for calming massages and premium wellness treatments at home.",
    canonical: "/locations/bantry-bay",
  },
  "locations/sea-point": {
    title: "Mobile Spa Sea Point Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book luxury mobile spa services in Sea Point, Cape Town. Enjoy at-home massage, facials, and nail treatments delivered to your home, hotel, or Airbnb.",
    canonical: "/locations/sea-point",
  },
  "locations/green-point": {
    title: "Mobile Spa Green Point Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book luxury mobile spa services in Green Point, Cape Town. Enjoy at-home massage, facials, and nail treatments delivered to your apartment, hotel, or Airbnb near the V&A Waterfront and Atlantic Seaboard.",
    canonical: "/locations/green-point",
  },
  "locations/newlands": {
    title: "Mobile Spa in Newlands | Luxury Spa Cape Town",
    description: "Rejuvenating spa experiences in Newlands with trusted therapists and premium in-home treatment setup.",
    canonical: "/locations/newlands",
  },
  "locations/claremont": {
    title: "Mobile Spa Claremont Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book luxury mobile spa services in Claremont, Cape Town. Enjoy at-home massage, facials, and nail treatments delivered to your home, townhouse, or guest suite near Cavendish and the Southern Suburbs.",
    canonical: "/locations/claremont",
  },
  "locations/rondebosch": {
    title: "Mobile Spa in Rondebosch | Luxury Spa Cape Town",
    description: "Tailored in-home spa treatments in Rondebosch for professionals, families and wellness-focused lifestyles.",
    canonical: "/locations/rondebosch",
  },
  "locations/somerset-west": {
    title: "Mobile Spa in Somerset West | Luxury Spa Cape Town",
    description: "Luxury mobile wellness in Somerset West with massage therapy, facials and restorative body treatments.",
    canonical: "/locations/somerset-west",
  },
  "locations/stellenbosch": {
    title: "Mobile Spa in Stellenbosch | Luxury Spa Cape Town",
    description: "Premium mobile spa treatments in Stellenbosch for homes, guesthouses and wine country retreats.",
    canonical: "/locations/stellenbosch",
  },
  "locations/tokai": {
    title: "Mobile Spa in Tokai | Luxury Spa Cape Town",
    description: "Relax with luxury mobile spa sessions in Tokai, delivered by experienced therapists to your doorstep.",
    canonical: "/locations/tokai",
  },
  "locations/goodwood": {
    title: "Mobile Spa Goodwood Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book luxury mobile spa Goodwood — at-home massage, facials & nails for Northern Suburbs homes and apartments. Available today; limited slots. Parow, Bellville corridor & greater Cape Town.",
    canonical: "/locations/goodwood",
  },
  "locations/higgovale": {
    title: "Mobile Spa in Higgovale | Luxury Spa Cape Town",
    description: "Exclusive mobile spa in Higgovale with calming treatments and luxury service in your own private space.",
    canonical: "/locations/higgovale",
  },
  "locations/oranjezicht": {
    title: "Mobile Spa in Oranjezicht | Luxury Spa Cape Town",
    description: "Book bespoke mobile spa experiences in Oranjezicht for deep relaxation and skin-focused rejuvenation.",
    canonical: "/locations/oranjezicht",
  },
  "locations/tamboerskloof": {
    title: "Mobile Spa in Tamboerskloof | Luxury Spa Cape Town",
    description: "Professional in-home spa treatments in Tamboerskloof, available daily with simple online booking.",
    canonical: "/locations/tamboerskloof",
  },
  "locations/gardens": {
    title: "Mobile Spa in Gardens | Luxury Spa Cape Town",
    description: "On-demand mobile spa services in Gardens, perfect for city professionals and weekend self-care.",
    canonical: "/locations/gardens",
  },
  "locations/de-waterkant": {
    title: "Mobile Spa in De Waterkant | Luxury Spa Cape Town",
    description: "High-quality mobile spa treatments in De Waterkant for apartments, boutique stays and private events.",
    canonical: "/locations/de-waterkant",
  },
  "locations/mouille-point": {
    title: "Mobile Spa in Mouille Point | Luxury Spa Cape Town",
    description: "Luxury massage and spa services in Mouille Point, delivered directly to your apartment or hotel.",
    canonical: "/locations/mouille-point",
  },
  "locations/franschhoek": {
    title: "Mobile Spa in Franschhoek | Luxury Spa Cape Town",
    description: "Book mobile spa treatments in Franschhoek for wine farm stays, guesthouses and private retreats.",
    canonical: "/locations/franschhoek",
  },
  "locations/paarl": {
    title: "Mobile Spa in Paarl | Luxury Spa Cape Town",
    description: "Professional mobile spa sessions in Paarl with premium products, trained therapists and flexible hours.",
    canonical: "/locations/paarl",
  },
  "locations/durbanville": {
    title: "Mobile Spa Durbanville Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book luxury mobile spa Durbanville — at-home massage, facials & nails for Northern Suburbs estates and family homes. Available today; limited slots. Serving Durbanville, Bellville corridor & greater Cape Town.",
    canonical: "/locations/durbanville",
  },
  "locations/bloubergstrand": {
    title: "Mobile Spa Bloubergstrand Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book luxury mobile spa Bloubergstrand — at-home massage, facials & nails for beach homes & apartments. Table Bay & West Coast. Available today; limited slots. Big Bay, Table View & greater Cape Town.",
    canonical: "/locations/bloubergstrand",
  },
};

function locationTitleFromSlug(routeKey: string) {
  const raw = routeKey.replace("locations/", "");
  return raw
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getRouteMetadata(routeKey: string): Metadata {
  const base = routeSeoMap[routeKey];
  const seo =
    base ??
    (routeKey.startsWith("locations/")
      ? {
          title: `Mobile Spa ${locationTitleFromSlug(routeKey)} Cape Town | At-Home Massage & Facials`,
          description: `Book mobile spa Cape Town therapists in ${locationTitleFromSlug(routeKey)}—at-home massage, facials, nails & mobile beauty services with discreet arrival & premium kits.`,
          canonical: `/${routeKey}`,
        }
      : {
          title: "Luxury Mobile Spa Cape Town",
          description:
            "Cape Town's premier on-demand mobile spa service for massage, facials and beauty treatments.",
          canonical: routeKey ? `/${routeKey}` : "/",
        });

  const canonical = `${siteUrl}${seo.canonical ?? "/"}`;
  const ogImage = `${siteUrl}${seo.ogImage ?? "/og-image.jpg"}`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords ?? defaultKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage],
    },
  };
}
