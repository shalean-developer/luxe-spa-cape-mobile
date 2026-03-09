import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";

const Tamboerskloof = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8" />
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Mobile Spa in Tamboerskloof
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Refined spa services for Tamboerskloof's discerning residents
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Elegant Spa Services in Tamboerskloof</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Tamboerskloof offers the perfect blend of city convenience and residential tranquility. Our mobile spa brings luxury treatments to your doorstep, whether you live in a renovated Victorian, a sleek apartment, or a charming cottage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Central Convenience</h3>
              <p className="text-muted-foreground">
                Just minutes from the city center, enjoy world-class spa treatments without the commute. We come to you.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Personalized Service</h3>
              <p className="text-muted-foreground">
                Each treatment is tailored to your preferences. Your home, your schedule, your perfect spa day.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Popular Tamboerskloof Treatments</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>After-Work Relaxation:</strong> Unwind from your busy day with therapeutic massage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Weekend Indulgence:</strong> Full spa packages for lazy Saturdays</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Express Treatments:</strong> Quick rejuvenation for busy professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Prenatal Massage:</strong> Gentle care for expecting mothers</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Serving All of Tamboerskloof</h3>
            <p className="text-muted-foreground mb-4">
              From Kloof Street's vibrant energy to the peaceful residential streets above, we provide premium service throughout this beloved neighborhood.
            </p>
            <p className="text-muted-foreground">
              Perfect for professionals, couples, and anyone seeking a touch of luxury in their daily routine.
            </p>
          </div>

          <div className="text-center">
            <Link to="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your Tamboerskloof Spa Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tamboerskloof;
