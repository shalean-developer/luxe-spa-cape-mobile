import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";

const DeWaterkant = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8" />
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Mobile Spa in De Waterkant
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Trendy spa experiences in Cape Town's most vibrant village
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Urban Spa Services in De Waterkant</h2>
            <p className="text-muted-foreground text-lg mb-6">
              De Waterkant is Cape Town's most cosmopolitan neighborhood, known for its colorful Georgian and Cape Dutch houses, world-class restaurants, and vibrant atmosphere. Our mobile spa services match this energy, delivering contemporary treatments to your stylish home or apartment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Village Vibes</h3>
              <p className="text-muted-foreground">
                Enjoy the intimate village atmosphere while we bring world-class spa services directly to your door.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Pre-Event Pampering</h3>
              <p className="text-muted-foreground">
                Get ready for Cape Town's best nightlife with hair, nails, and beauty treatments at home.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Popular De Waterkant Treatments</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Brunch Recovery:</strong> Sunday morning massage after Saturday night</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Urban Glow Facial:</strong> City-proof skincare for the modern lifestyle</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Party-Ready Packages:</strong> Nails, makeup prep, and massage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Couples Connection:</strong> Romantic spa sessions for two</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Serving All of De Waterkant</h3>
            <p className="text-muted-foreground mb-4">
              From the cobblestone streets near Cape Quarter to the trendy apartments along Somerset Road, we bring spa excellence to every address in this iconic neighborhood.
            </p>
            <p className="text-muted-foreground">
              Perfect for locals, visitors, and anyone who appreciates cutting-edge wellness in a historic setting.
            </p>
          </div>

          <div className="text-center">
            <Link to="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your De Waterkant Spa Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeWaterkant;
