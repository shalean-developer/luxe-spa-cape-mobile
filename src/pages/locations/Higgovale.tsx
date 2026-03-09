import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";

const Higgovale = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8" />
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Mobile Spa in Higgovale
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Luxury spa treatments in Cape Town's most exclusive mountainside enclave
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Premium Spa Services in Higgovale</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Nestled against the slopes of Table Mountain, Higgovale is home to some of Cape Town's most prestigious properties. Our mobile spa services bring five-star treatments directly to your elegant home, complementing the serene mountain atmosphere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Flexible Scheduling</h3>
              <p className="text-muted-foreground">
                Book treatments at your convenience. We accommodate busy professionals and families with 24/7 availability.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Mountain Retreat Experience</h3>
              <p className="text-muted-foreground">
                Enjoy spa treatments with views of Table Mountain. Your home becomes your private wellness sanctuary.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Popular Treatments in Higgovale</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Executive Stress Relief:</strong> Deep tissue massage for busy professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Mountain Air Aromatherapy:</strong> Essential oils inspired by fynbos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Luxury Facials:</strong> Premium skincare treatments at home</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Couples Spa Day:</strong> Share relaxation in your private setting</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Serving Upper Higgovale & Surrounds</h3>
            <p className="text-muted-foreground mb-4">
              From the prestigious homes along Upper Orange Street to the quiet lanes near De Waal Park, we provide discreet, professional service throughout Higgovale.
            </p>
            <p className="text-muted-foreground">
              Perfect for residents who value privacy and world-class service in one of Cape Town's most sought-after addresses.
            </p>
          </div>

          <div className="text-center">
            <Link to="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your Higgovale Spa Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Higgovale;
