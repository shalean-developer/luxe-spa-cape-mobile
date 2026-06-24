import type { Metadata } from "next";

const siteUrl = "https://www.luxurymspa.co.za";
const defaultKeywords =
  "mobile massage Cape Town, at home massage Cape Town, facials Cape Town, mobile beauty services Cape Town, rejuvenation mobile massage, massage at home";

type RouteSeo = {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
};

const routeSeoMap: Record<string, RouteSeo> = {
  "": {
    title: "Rejuvenation Mobile Massage Cape Town | At-Home Massage, Facials & Mobile Beauty",
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
      "See where we deliver rejuvenation mobile massage Cape Town treatments—from Camps Bay & Sea Point to Claremont, Constantia, Stellenbosch & Northern suburbs.",
    canonical: "/locations",
  },
  blog: {
    title: "Mobile Spa Blog | Wellness Tips & Insights",
    description:
      "Read wellness, skincare and mobile spa insights from Rejuvenation Mobile Massage Cape Town.",
    canonical: "/blog",
  },
  "blog/home-cleaning-before-spa-cape-town": {
    title: "Why a Clean Home Enhances Your At-Home Spa Experience in Cape Town",
    description:
      "Discover why a clean home improves your at-home spa experience. Learn how professional cleaning and mobile spa services work together in Cape Town.",
    canonical: "/blog/home-cleaning-before-spa-cape-town",
  },
  about: {
    title: "About Rejuvenation Mobile Massage Cape Town",
    description:
      "Learn about Rejuvenation Mobile Massage, our therapists and our mission to bring premium wellness to your doorstep.",
    canonical: "/about",
  },
  contact: {
    title: "Contact Mobile Spa Cape Town | Book At-Home Massage & Facials",
    description:
      "WhatsApp, call, or email Rejuvenation Mobile Massage Cape Town for mobile beauty services, facials, and at-home massage routing across the Atlantic Seaboard, City Bowl & Winelands.",
    canonical: "/contact",
  },
  booking: {
    title: "Book Mobile Spa Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Reserve rejuvenation mobile massage Cape Town appointments—same-day when available. Secure facials, massage, couples rituals & mobile beauty services at your address.",
    canonical: "/booking",
  },
  terms: {
    title: "Terms & Conditions | Rejuvenation Mobile Massage",
    description:
      "Read the terms and conditions for Rejuvenation Mobile Massage services, bookings and treatment policies.",
    canonical: "/terms",
  },
  "locations/camps-bay": {
    title: "Mobile Spa Camps Bay Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book rejuvenation mobile massage services in Camps Bay, Cape Town. Enjoy at-home massage, facials, and nail treatments delivered to your beachfront villa, hotel, or Airbnb on the Atlantic Seaboard.",
    canonical: "/locations/camps-bay",
  },
  "locations/clifton": {
    title: "Mobile Spa in Clifton | Rejuvenation Mobile Massage Cape Town",
    description: "Exclusive in-home spa services in Clifton with professional therapists, luxury products and flexible booking times.",
    canonical: "/locations/clifton",
  },
  "locations/llandudno": {
    title: "Mobile Spa in Llandudno | Rejuvenation Mobile Massage Cape Town",
    description: "Private, high-end mobile spa experiences in Llandudno for relaxation, recovery and special occasions.",
    canonical: "/locations/llandudno",
  },
  "locations/hout-bay": {
    title: "Mobile Spa in Hout Bay | Rejuvenation Mobile Massage Cape Town",
    description: "On-demand spa services in Hout Bay, from deep tissue massage to facials, delivered directly to your home.",
    canonical: "/locations/hout-bay",
  },
  "locations/constantia": {
    title: "Mobile Spa Constantia Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book rejuvenation mobile massage services in Constantia, Cape Town. Enjoy at-home massage, facials, and nail treatments delivered to your wine estate, villa, or guest cottage in the Constantia Valley.",
    canonical: "/locations/constantia",
  },
  "locations/bishopscourt": {
    title: "Mobile Spa in Bishopscourt | Rejuvenation Mobile Massage Cape Town",
    description: "Premium mobile spa care in Bishopscourt with discreet therapists and five-star treatment standards.",
    canonical: "/locations/bishopscourt",
  },
  "locations/fresnaye": {
    title: "Mobile Spa in Fresnaye | Rejuvenation Mobile Massage Cape Town",
    description: "Professional mobile spa treatments in Fresnaye including couples massage, facials and body therapies.",
    canonical: "/locations/fresnaye",
  },
  "locations/bantry-bay": {
    title: "Mobile Spa in Bantry Bay | Rejuvenation Mobile Massage Cape Town",
    description: "Book rejuvenation mobile massage services in Bantry Bay for calming massages and premium wellness treatments at home.",
    canonical: "/locations/bantry-bay",
  },
  "locations/sea-point": {
    title: "Mobile Spa Sea Point Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book rejuvenation mobile massage services in Sea Point, Cape Town. Enjoy at-home massage, facials, and nail treatments delivered to your home, hotel, or Airbnb.",
    canonical: "/locations/sea-point",
  },
  "locations/green-point": {
    title: "Mobile Spa Green Point Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book rejuvenation mobile massage services in Green Point, Cape Town. Enjoy at-home massage, facials, and nail treatments delivered to your apartment, hotel, or Airbnb near the V&A Waterfront and Atlantic Seaboard.",
    canonical: "/locations/green-point",
  },
  "locations/newlands": {
    title: "Mobile Spa in Newlands | Rejuvenation Mobile Massage Cape Town",
    description: "Rejuvenating spa experiences in Newlands with trusted therapists and premium in-home treatment setup.",
    canonical: "/locations/newlands",
  },
  "locations/claremont": {
    title: "Mobile Spa Claremont Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book rejuvenation mobile massage services in Claremont, Cape Town. Enjoy at-home massage, facials, and nail treatments delivered to your home, townhouse, or guest suite near Cavendish and the Southern Suburbs.",
    canonical: "/locations/claremont",
  },
  "locations/rondebosch": {
    title: "Mobile Spa in Rondebosch | Rejuvenation Mobile Massage Cape Town",
    description: "Tailored in-home spa treatments in Rondebosch for professionals, families and wellness-focused lifestyles.",
    canonical: "/locations/rondebosch",
  },
  "locations/somerset-west": {
    title: "Mobile Spa in Somerset West | Rejuvenation Mobile Massage Cape Town",
    description: "Luxury mobile wellness in Somerset West with massage therapy, facials and restorative body treatments.",
    canonical: "/locations/somerset-west",
  },
  "locations/stellenbosch": {
    title: "Mobile Spa in Stellenbosch | Rejuvenation Mobile Massage Cape Town",
    description: "Premium mobile spa treatments in Stellenbosch for homes, guesthouses and wine country retreats.",
    canonical: "/locations/stellenbosch",
  },
  "locations/tokai": {
    title: "Mobile Spa in Tokai | Rejuvenation Mobile Massage Cape Town",
    description: "Relax with rejuvenation mobile massage sessions in Tokai, delivered by experienced therapists to your doorstep.",
    canonical: "/locations/tokai",
  },
  "locations/goodwood": {
    title: "Mobile Spa Goodwood Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book rejuvenation mobile massage Goodwood — at-home massage, facials & nails for Northern Suburbs homes and apartments. Available today; limited slots. Parow, Bellville corridor & greater Cape Town.",
    canonical: "/locations/goodwood",
  },
  "locations/higgovale": {
    title: "Mobile Spa in Higgovale | Rejuvenation Mobile Massage Cape Town",
    description: "Exclusive mobile spa in Higgovale with calming treatments and luxury service in your own private space.",
    canonical: "/locations/higgovale",
  },
  "locations/oranjezicht": {
    title: "Mobile Spa in Oranjezicht | Rejuvenation Mobile Massage Cape Town",
    description: "Book bespoke mobile spa experiences in Oranjezicht for deep relaxation and skin-focused rejuvenation.",
    canonical: "/locations/oranjezicht",
  },
  "locations/tamboerskloof": {
    title: "Mobile Spa in Tamboerskloof | Rejuvenation Mobile Massage Cape Town",
    description: "Professional in-home spa treatments in Tamboerskloof, available daily with simple online booking.",
    canonical: "/locations/tamboerskloof",
  },
  "locations/gardens": {
    title: "Mobile Spa in Gardens | Rejuvenation Mobile Massage Cape Town",
    description: "On-demand mobile spa services in Gardens, perfect for city professionals and weekend self-care.",
    canonical: "/locations/gardens",
  },
  "locations/de-waterkant": {
    title: "Mobile Spa in De Waterkant | Rejuvenation Mobile Massage Cape Town",
    description: "High-quality mobile spa treatments in De Waterkant for apartments, boutique stays and private events.",
    canonical: "/locations/de-waterkant",
  },
  "locations/mouille-point": {
    title: "Mobile Spa in Mouille Point | Rejuvenation Mobile Massage Cape Town",
    description: "Luxury massage and spa services in Mouille Point, delivered directly to your apartment or hotel.",
    canonical: "/locations/mouille-point",
  },
  "locations/franschhoek": {
    title: "Mobile Spa in Franschhoek | Rejuvenation Mobile Massage Cape Town",
    description: "Book mobile spa treatments in Franschhoek for wine farm stays, guesthouses and private retreats.",
    canonical: "/locations/franschhoek",
  },
  "locations/paarl": {
    title: "Mobile Spa in Paarl | Rejuvenation Mobile Massage Cape Town",
    description: "Professional mobile spa sessions in Paarl with premium products, trained therapists and flexible hours.",
    canonical: "/locations/paarl",
  },
  "locations/durbanville": {
    title: "Mobile Spa Durbanville Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book rejuvenation mobile massage Durbanville — at-home massage, facials & nails for Northern Suburbs estates and family homes. Available today; limited slots. Serving Durbanville, Bellville corridor & greater Cape Town.",
    canonical: "/locations/durbanville",
  },
  "locations/bloubergstrand": {
    title: "Mobile Spa Bloubergstrand Cape Town | At-Home Massage, Facials & Nails",
    description:
      "Book rejuvenation mobile massage Bloubergstrand — at-home massage, facials & nails for beach homes & apartments. Table Bay & West Coast. Available today; limited slots. Big Bay, Table View & greater Cape Town.",
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
          title: "Rejuvenation Mobile Massage Cape Town",
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
