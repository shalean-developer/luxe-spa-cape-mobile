import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const MouillePoint = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Mobile Spa in Mouille Point | Luxury Spa Cape Town"
        description="Mobile spa services in Mouille Point, Cape Town. Luxury massage, facials & treatments near the V&A Waterfront. Book now."
        keywords="mobile spa mouille point, massage mouille point, spa v&a waterfront"
        canonical="/locations/mouille-point"
      />
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8" />
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Mobile Spa in Mouille Point
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Oceanfront luxury spa services near the V&A Waterfront
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Waterfront Spa Services in Mouille Point</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Mouille Point offers some of Cape Town's most spectacular ocean views, with the historic lighthouse and promenade as your backdrop. Our mobile spa services bring luxury treatments to your seaside apartment or penthouse, enhancing the already stunning atmosphere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Ocean Views</h3>
              <p className="text-muted-foreground">
                Experience massage with waves crashing outside your window. The ultimate in coastal relaxation.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Promenade Perfect</h3>
              <p className="text-muted-foreground">
                After your morning walk along the famous promenade, unwind with a therapeutic treatment at home.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Signature Mouille Point Treatments</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Lighthouse View Massage:</strong> Relaxation with Cape Town's iconic landmark</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Sea Mineral Facial:</strong> Ocean-inspired skincare treatments</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Post-Workout Recovery:</strong> Perfect after a promenade run</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Sunset Spa Session:</strong> Time your treatment with the golden hour</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Premium Mouille Point Coverage</h3>
            <p className="text-muted-foreground mb-4">
              From the luxury high-rises along Beach Road to the exclusive properties near the Waterfront, we provide seamless service throughout Mouille Point.
            </p>
            <p className="text-muted-foreground">
              Ideal for residents, Waterfront visitors, and anyone seeking spa luxury with Atlantic Ocean views.
            </p>
          </div>

          <div className="text-center">
            <Link to="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your Mouille Point Spa Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MouillePoint;
