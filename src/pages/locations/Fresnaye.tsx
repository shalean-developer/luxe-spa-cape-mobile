import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const Fresnaye = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Mobile Spa in Fresnaye | Luxury Spa Cape Town"
        description="Premium mobile spa in Fresnaye, Cape Town. Atlantic seaboard luxury massage, facials & treatments at your home. Book now."
        keywords="mobile spa fresnaye, massage fresnaye, spa atlantic seaboard"
        canonical="/locations/fresnaye"
      />
      {/* Hero */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8" />
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Mobile Spa in Fresnaye
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Sophisticated spa services for Fresnaye's upscale apartments and homes
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Luxury Spa Services in Fresnaye</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Located between Sea Point and Bantry Bay, Fresnaye's sophisticated apartments and homes deserve equally refined spa services. We bring premium treatments directly to your residence, transforming your space into a personal wellness sanctuary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Always Available</h3>
              <p className="text-muted-foreground">
                Book your spa session anytime, day or night. Perfect for busy professionals and those with flexible schedules.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Apartment-Friendly</h3>
              <p className="text-muted-foreground">
                Our therapists are experienced in providing luxury treatments in apartment settings, including building access and setup.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Popular Fresnaye Treatments</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Urban Relaxation Massage:</strong> Perfect after a busy day in the city</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Express Facials:</strong> Quick but effective treatments for busy lifestyles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Aromatherapy Sessions:</strong> Transform your apartment into a spa oasis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Manicure & Pedicure:</strong> Convenient nail care in your own space</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Serving All of Fresnaye</h3>
            <p className="text-muted-foreground mb-4">
              From Main Road to Queens Road and all the elegant complexes in between, we provide seamless service throughout Fresnaye. Our team is familiar with the area's building access requirements and parking arrangements.
            </p>
            <p className="text-muted-foreground">
              Ideal for professionals, couples, and anyone seeking luxury spa treatments without leaving home.
            </p>
          </div>

          <div className="text-center">
            <Link to="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your Fresnaye Spa Session
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fresnaye;
