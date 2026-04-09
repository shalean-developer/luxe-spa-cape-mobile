import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";

const CampsBay = () => {
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
            Mobile Spa in Camps Bay
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Premium spa services delivered to your luxury Camps Bay residence
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Luxury Spa Services in Camps Bay</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Experience world-class spa treatments in the comfort of your Camps Bay home or holiday villa. Our certified therapists bring premium equipment and products to create the ultimate relaxation experience against the backdrop of stunning ocean views.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Available 24/7</h3>
              <p className="text-muted-foreground">
                Book your spa treatment anytime that suits your schedule. Perfect for early morning wellness sessions or evening relaxation after a beach day.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Premium Service</h3>
              <p className="text-muted-foreground">
                All treatments include luxury products, professional equipment, and highly trained therapists specializing in exclusive spa experiences.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Popular Treatments in Camps Bay</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Couples Massage:</strong> Perfect for romantic getaways with ocean views</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Hot Stone Therapy:</strong> Ultimate relaxation after a day at the beach</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Luxury Facials:</strong> Refresh and rejuvenate your skin in the coastal climate</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Body Scrubs:</strong> Exfoliate and glow after sun exposure</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Why Choose Us in Camps Bay?</h3>
            <p className="text-muted-foreground mb-4">
              We understand the high standards expected in Camps Bay. Our service matches the luxury of your surroundings with discreet, professional therapists who arrive fully equipped to transform any space into a five-star spa.
            </p>
            <p className="text-muted-foreground">
              Serving the entire Camps Bay area including The Promenade, Victoria Road, and surrounding hills.
            </p>
          </div>

          <div className="text-center">
            <Link href="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your Camps Bay Spa Session
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampsBay;
