import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";

const Durbanville = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8" />
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Mobile Spa in Durbanville
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Family-friendly luxury spa services in Cape Town's northern gem
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Premium Spa Services in Durbanville</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Durbanville combines wine country charm with suburban convenience, offering spacious homes, excellent schools, and a strong community spirit. Our mobile spa services bring relaxation to your family home or estate, fitting seamlessly into your busy lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Wine Route Access</h3>
              <p className="text-muted-foreground">
                Enjoy the benefits of living near the Durbanville Wine Route with spa treatments to complement your wine lifestyle.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Family Scheduling</h3>
              <p className="text-muted-foreground">
                We work around school runs and family activities, bringing spa time to you when it suits your schedule.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Popular Durbanville Treatments</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Busy Parent Relief:</strong> Quick, effective treatments for time-pressed moms and dads</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Weekend Wine & Wellness:</strong> Combine wine tasting with spa relaxation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Teen Pamper Parties:</strong> Age-appropriate treatments for special occasions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Couples Date Night:</strong> Romance without the babysitter drive</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Covering All Durbanville Areas</h3>
            <p className="text-muted-foreground mb-4">
              From Durbanville Hills and Vierlanden to Sonstraal and Aurora, we serve all the prestigious suburbs in this sought-after area.
            </p>
            <p className="text-muted-foreground">
              Perfect for families, professionals, and anyone seeking quality spa services in Cape Town's northern suburbs.
            </p>
          </div>

          <div className="text-center">
            <Link to="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your Durbanville Spa Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Durbanville;
