import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const Bloubergstrand = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Mobile Spa in Bloubergstrand | Luxury Spa Cape Town"
        description="Mobile spa services in Bloubergstrand, Cape Town. Professional massage, facials & body treatments at your home. Available 24/7."
        keywords="mobile spa bloubergstrand, massage bloubergstrand, spa west coast"
        canonical="/locations/bloubergstrand"
      />
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8" />
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Mobile Spa in Bloubergstrand
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Beachfront spa services with iconic Table Mountain views
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Coastal Spa Services in Bloubergstrand</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Bloubergstrand is famous for its postcard-perfect views of Table Mountain across the bay. Our mobile spa services bring relaxation to your beachfront apartment, family home, or holiday rental, enhancing your coastal lifestyle with premium treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Table Mountain Views</h3>
              <p className="text-muted-foreground">
                Experience massage while gazing at one of the New7Wonders of Nature. Simply spectacular.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Beach Life Balance</h3>
              <p className="text-muted-foreground">
                After kitesurfing, beach walks, or water sports, recover with therapeutic treatments at home.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Signature Blouberg Treatments</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Sunset Massage:</strong> Timed with Blouberg's famous golden hour</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Kitesurf Recovery:</strong> Sports massage for water sports enthusiasts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Sea Salt Scrub:</strong> Ocean-inspired body treatments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Family Beach Day Finale:</strong> Soothing treatments after sun and sand</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Serving the Blouberg Coast</h3>
            <p className="text-muted-foreground mb-4">
              From Big Bay and Bloubergstrand to Table View and Parklands, we bring spa excellence to Cape Town's fastest-growing coastal area.
            </p>
            <p className="text-muted-foreground">
              Perfect for young families, beach lovers, and anyone who chose Blouberg for its incredible lifestyle.
            </p>
          </div>

          <div className="text-center">
            <Link to="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your Blouberg Spa Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bloubergstrand;
