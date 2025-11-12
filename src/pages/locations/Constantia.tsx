import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";

const Constantia = () => {
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
            Mobile Spa in Constantia
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Tranquil spa experiences for Constantia's prestigious wine estates and luxury homes
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Premium Spa Services in Constantia</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Nestled in the heart of Cape Town's wine country, Constantia estates deserve spa services that match their elegance. Our mobile spa brings luxury treatments to your private residence, complete with serene professionalism and premium products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Flexible Scheduling</h3>
              <p className="text-muted-foreground">
                Available 24/7 to accommodate your lifestyle. Perfect before or after a wine tasting tour, or as part of your weekend wellness routine.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Estate-Level Service</h3>
              <p className="text-muted-foreground">
                We understand the privacy and standards expected in Constantia. Discreet, professional service tailored to estate living.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Recommended Treatments</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Vineyard Relaxation Package:</strong> Full-body massage with aromatherapy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Luxury Facials:</strong> Rejuvenate in your private space</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Deep Tissue Massage:</strong> Perfect after horseback riding or hiking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Couples Packages:</strong> Romantic spa experiences at your estate</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Serving All of Constantia</h3>
            <p className="text-muted-foreground mb-4">
              From Upper Constantia to Lower Constantia, including Constantia Nek, we provide comprehensive coverage throughout this prestigious area. Our therapists are experienced in navigating estate properties and security protocols.
            </p>
            <p className="text-muted-foreground">
              Ideal for special events, weekend getaways, or regular wellness maintenance in the tranquility of your Constantia home.
            </p>
          </div>

          <div className="text-center">
            <Link to="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your Constantia Spa Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Constantia;
