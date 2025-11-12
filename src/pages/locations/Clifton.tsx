import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";

const Clifton = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8" />
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Mobile Spa in Clifton
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Exclusive spa treatments for Clifton's most prestigious beachfront properties
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Elite Spa Services in Clifton</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Clifton's exclusive beach properties deserve equally exclusive spa services. We bring five-star treatments directly to your beachfront villa, apartment, or holiday home. Enjoy the sound of waves while our expert therapists deliver world-class relaxation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Whether you're arriving late from travels or want an early morning beach-side spa session, we're available around the clock.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Discreet & Professional</h3>
              <p className="text-muted-foreground">
                Complete privacy and professionalism. Our therapists understand the exclusivity of Clifton and deliver service to match.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Signature Treatments for Clifton</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Beachside Aromatherapy:</strong> Let ocean breezes enhance your relaxation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Couples Hot Stone Massage:</strong> Share luxury with your partner</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Anti-Aging Facials:</strong> Combat sun exposure with premium skincare</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Post-Beach Body Treatments:</strong> Soothe and hydrate after a day in the sun</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Serving All Clifton Beaches</h3>
            <p className="text-muted-foreground mb-4">
              From First Beach to Fourth Beach and the prestigious properties along Victoria Road, we provide seamless service throughout Clifton. Our therapists are familiar with the area's layout and access requirements.
            </p>
            <p className="text-muted-foreground">
              Perfect for holiday rentals, permanent residents, and special occasions in one of Cape Town's most sought-after locations.
            </p>
          </div>

          <div className="text-center">
            <Link to="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your Clifton Spa Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clifton;
