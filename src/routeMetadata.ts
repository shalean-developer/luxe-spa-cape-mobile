import type { Metadata } from "next";

const siteUrl = "https://www.luxurymspa.co.za";
const defaultKeywords =
  "luxury mobile spa cape town, mobile spa services, home spa treatments, massage cape town, mobile beauty services, spa at home";

type RouteSeo = {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
};

const routeSeoMap: Record<string, RouteSeo> = {
  "": {
    title: "Luxury Mobile Spa - Cape Town's Premier On-Demand Spa Service",
    description:
      "Experience luxury spa treatments in the comfort of your home with Cape Town's premier mobile spa service.",
    canonical: "/",
  },
  services: {
    title: "Luxury Mobile Spa Services | Massage, Facials & Beauty",
    description:
      "Browse our premium mobile spa services in Cape Town including massage therapy, facials, body treatments and nail care.",
    canonical: "/services",
  },
  locations: {
    title: "Mobile Spa Locations | Service Areas in Cape Town",
    description:
      "We serve top Cape Town areas including Camps Bay, Clifton, Constantia, Stellenbosch and more.",
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
    title: "Contact Luxury Mobile Spa Cape Town",
    description:
      "Get in touch to book your mobile spa treatment, ask questions, or confirm service availability in your area.",
    canonical: "/contact",
  },
  booking: {
    title: "Book Mobile Spa Treatments | Luxury Mobile Spa",
    description:
      "Book a professional mobile spa treatment in Cape Town. Easy booking for massage, facials and beauty services.",
    canonical: "/booking",
  },
  terms: {
    title: "Terms & Conditions | Luxury Mobile Spa",
    description:
      "Read the terms and conditions for Luxury Mobile Spa services, bookings and treatment policies.",
    canonical: "/terms",
  },
  "locations/camps-bay": {
    title: "Mobile Spa in Camps Bay | Luxury Spa Cape Town",
    description: "Beachfront mobile spa treatments in Camps Bay, including massage, facials and body therapies at your villa or hotel.",
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
    title: "Mobile Spa in Constantia | Luxury Spa Cape Town",
    description: "Luxury mobile massage and beauty treatments in Constantia, perfect for estate homes and wellness weekends.",
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
    title: "Mobile Spa in Sea Point | Luxury Spa Cape Town",
    description: "Convenient at-home spa appointments in Sea Point with professional massage, facials and beauty services.",
    canonical: "/locations/sea-point",
  },
  "locations/green-point": {
    title: "Mobile Spa in Green Point | Luxury Spa Cape Town",
    description: "Urban wellness made simple with mobile spa treatments in Green Point for residents, guests and events.",
    canonical: "/locations/green-point",
  },
  "locations/newlands": {
    title: "Mobile Spa in Newlands | Luxury Spa Cape Town",
    description: "Rejuvenating spa experiences in Newlands with trusted therapists and premium in-home treatment setup.",
    canonical: "/locations/newlands",
  },
  "locations/claremont": {
    title: "Mobile Spa in Claremont | Luxury Spa Cape Town",
    description: "Book mobile spa and massage services in Claremont for stress relief, skincare and relaxation at your convenience.",
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
    title: "Mobile Spa in Goodwood | Luxury Spa Cape Town",
    description: "Affordable-luxury mobile spa services in Goodwood including massage, facials and beauty treatments.",
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
    title: "Mobile Spa in Durbanville | Luxury Spa Cape Town",
    description: "Convenient in-home wellness in Durbanville with luxury massage, facials and restorative treatments.",
    canonical: "/locations/durbanville",
  },
  "locations/bloubergstrand": {
    title: "Mobile Spa in Bloubergstrand | Luxury Spa Cape Town",
    description: "Relaxing mobile spa services in Bloubergstrand with ocean-view treatments and professional therapists.",
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
          title: `Mobile Spa in ${locationTitleFromSlug(routeKey)} | Luxury Spa Cape Town`,
          description: `Luxury mobile spa services in ${locationTitleFromSlug(routeKey)}, Cape Town. Professional massages, facials and beauty treatments at your home or hotel.`,
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
