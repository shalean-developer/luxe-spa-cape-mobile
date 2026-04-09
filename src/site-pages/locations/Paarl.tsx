import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";

const Paarl = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8" />
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Mobile Spa in Paarl
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Premium spa treatments in the heart of the Cape Winelands
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Winelands Spa Services in Paarl</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Paarl, named after the giant granite boulders that shimmer like pearls, is one of the Cape's most established wine regions. Our mobile spa services bring relaxation to your wine farm, estate home, or the prestigious Val de Vie and Pearl Valley areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Estate Lifestyle</h3>
              <p className="text-muted-foreground">
                We understand the refined lifestyle of Paarl's residents and deliver service that matches your expectations.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Post-Golf Recovery</h3>
              <p className="text-muted-foreground">
                After a round at Pearl Valley or Val de Vie, treat yourself to therapeutic massage at home.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Popular Paarl Treatments</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Mountain View Massage:</strong> Relaxation with Paarl Rock as backdrop</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Estate Owner's Package:</strong> Full-day spa experience at home</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Sports Recovery:</strong> Perfect for golfers and polo players</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Family Wellness Day:</strong> Treatments for the whole family</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Serving Greater Paarl</h3>
            <p className="text-muted-foreground mb-4">
              From historic Main Street to the exclusive estates of Val de Vie, Pearl Valley, and Boschenmeer, we bring spa excellence to all of Paarl's finest addresses.
            </p>
            <p className="text-muted-foreground">
              Ideal for estate residents, wine tourists, and anyone seeking winelands wellness at its finest.
            </p>
          </div>

          <div className="text-center">
            <Link href="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your Paarl Spa Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Paarl;
