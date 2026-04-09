import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";

const Gardens = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8" />
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Mobile Spa in Gardens
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Sophisticated spa services in Cape Town's historic Gardens district
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Heritage Spa Services in Gardens</h2>
            <p className="text-muted-foreground text-lg mb-6">
              The Gardens neighborhood, named after the Company's Garden, is one of Cape Town's most historic and prestigious areas. Our mobile spa services honor this heritage by delivering treatments that blend timeless elegance with modern wellness techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Historic Setting</h3>
              <p className="text-muted-foreground">
                Experience spa luxury in the heart of Cape Town's cultural district, surrounded by museums, galleries, and beautiful architecture.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">All-Day Availability</h3>
              <p className="text-muted-foreground">
                Whether you're a local resident or staying at one of the area's boutique hotels, we're available when you need us.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Signature Gardens Treatments</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Garden Retreat Massage:</strong> Inspired by the tranquility of the Company's Garden</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Heritage Facial:</strong> Timeless skincare for modern life</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Afternoon Tea Spa Package:</strong> Relaxation with a touch of tradition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Cultural District Detox:</strong> Reset after exploring the museums</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Serving the Gardens District</h3>
            <p className="text-muted-foreground mb-4">
              From the grand homes along Government Avenue to the apartments near the Gardens Centre, we bring spa luxury to every corner of this distinguished neighborhood.
            </p>
            <p className="text-muted-foreground">
              Ideal for residents, hotel guests, and visitors seeking authentic Cape Town hospitality.
            </p>
          </div>

          <div className="text-center">
            <Link href="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your Gardens Spa Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gardens;
