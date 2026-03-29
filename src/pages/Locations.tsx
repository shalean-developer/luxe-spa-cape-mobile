import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const locations = [
  // Atlantic Seaboard
  { name: "Camps Bay", link: "/locations/camps-bay", description: "Beachfront luxury spa services" },
  { name: "Clifton", link: "/locations/clifton", description: "Exclusive coastal treatments" },
  { name: "Llandudno", link: "/locations/llandudno", description: "Ultra-exclusive beach community" },
  { name: "Fresnaye", link: "/locations/fresnaye", description: "Atlantic seaboard relaxation" },
  { name: "Bantry Bay", link: "/locations/bantry-bay", description: "Sunset luxury treatments" },
  { name: "Sea Point", link: "/locations/sea-point", description: "Promenade-side pampering" },
  { name: "Green Point", link: "/locations/green-point", description: "Urban waterfront wellness" },
  { name: "Mouille Point", link: "/locations/mouille-point", description: "V&A Waterfront luxury" },
  // City Bowl
  { name: "Higgovale", link: "/locations/higgovale", description: "Mountainside prestige" },
  { name: "Oranjezicht", link: "/locations/oranjezicht", description: "Charming city bowl wellness" },
  { name: "Tamboerskloof", link: "/locations/tamboerskloof", description: "Central elegance" },
  { name: "Gardens", link: "/locations/gardens", description: "Historic district spa services" },
  { name: "De Waterkant", link: "/locations/de-waterkant", description: "Trendy village vibes" },
  // Southern Suburbs
  { name: "Constantia", link: "/locations/constantia", description: "Wine valley wellness" },
  { name: "Bishopscourt", link: "/locations/bishopscourt", description: "Estate spa experiences" },
  { name: "Hout Bay", link: "/locations/hout-bay", description: "Valley and seaside wellness" },
  { name: "Newlands", link: "/locations/newlands", description: "Leafy suburb serenity" },
  { name: "Claremont", link: "/locations/claremont", description: "Southern suburbs luxury" },
  { name: "Rondebosch", link: "/locations/rondebosch", description: "Academic suburb relaxation" },
  { name: "Tokai", link: "/locations/tokai", description: "Forest retreat wellness" },
  // Winelands
  { name: "Stellenbosch", link: "/locations/stellenbosch", description: "Winelands spa services" },
  { name: "Franschhoek", link: "/locations/franschhoek", description: "Wine country luxury" },
  { name: "Paarl", link: "/locations/paarl", description: "Cape Winelands excellence" },
  { name: "Somerset West", link: "/locations/somerset-west", description: "Helderberg luxury treatments" },
  // Northern Suburbs
  { name: "Durbanville", link: "/locations/durbanville", description: "Wine route wellness" },
  { name: "Bloubergstrand", link: "/locations/bloubergstrand", description: "Table Mountain views" },
  { name: "Goodwood", link: "/locations/goodwood", description: "Northern suburbs pampering" },
];

const Locations = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Mobile Spa Locations | Service Areas in Cape Town | Luxury Mobile Spa"
        description="We serve 28+ locations across Cape Town including Camps Bay, Clifton, Constantia, Stellenbosch, Franschhoek & more. Book a mobile spa near you today."
        keywords="mobile spa locations cape town, spa near me, cape town spa areas, mobile massage locations"
        canonical="/locations"
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our Service Locations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Bringing luxury spa experiences to Cape Town's most exclusive neighborhoods
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Link key={index} to={location.link}>
                <Card className="h-full hover:shadow-xl transition-smooth border-2 border-primary/10 hover:border-primary group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                          {location.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">{location.description}</p>
                        <span className="inline-flex items-center text-primary text-sm font-medium">
                          View Details <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Don't See Your Area?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're constantly expanding our service areas. Contact us to check if we can bring our luxury spa experience to your location.
          </p>
          <Link to="/contact">
            <Button size="lg" className="luxury-gradient luxury-glow">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Locations;
