import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";

const Bishopscourt = () => {
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
            Mobile Spa in Bishopscourt
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Ultra-exclusive spa services for Bishopscourt's most prestigious estates
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Bespoke Spa Services in Bishopscourt</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Bishopscourt's exclusive estates demand the highest level of spa service. Our mobile spa specialists bring world-class treatments to your private residence with complete discretion, professionalism, and luxury that matches your lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Round-the-Clock Service</h3>
              <p className="text-muted-foreground">
                Available 24/7 to accommodate your schedule. Whether early morning wellness or late evening relaxation, we're here.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Estate Expertise</h3>
              <p className="text-muted-foreground">
                Our team understands estate protocols, security requirements, and the privacy standards expected in Bishopscourt.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Executive Wellness Treatments</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Executive Stress Relief:</strong> Deep tissue and hot stone therapy combinations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Premium Couples Packages:</strong> Luxury spa experiences for two</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Anti-Aging Facials:</strong> Advanced skincare treatments with premium products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Full Body Treatments:</strong> Scrubs, wraps, and massages tailored to you</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Discretion & Excellence</h3>
            <p className="text-muted-foreground mb-4">
              We provide the highest level of service for Bishopscourt residents, understanding the importance of privacy, punctuality, and perfection. Our certified therapists arrive fully equipped with luxury products and professional equipment.
            </p>
            <p className="text-muted-foreground">
              Serving the entire Bishopscourt area with seamless coordination with estate management and security.
            </p>
          </div>

          <div className="text-center">
            <Link href="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your Bishopscourt Spa Treatment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bishopscourt;
