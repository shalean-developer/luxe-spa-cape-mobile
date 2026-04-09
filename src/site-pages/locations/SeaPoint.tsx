import Link from "next/link";
import { MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const heroImage = "/images/hot-stones.jpg";

const SeaPoint = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium">Sea Point</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Mobile Spa Services in Sea Point
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Promenade-side luxury spa treatments
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Premium Spa Experience in Sea Point</h2>
              <p className="text-muted-foreground mb-6">
                Sea Point, with its vibrant promenade and stunning ocean views, is the perfect setting 
                for relaxation. We bring spa luxury to your apartment or hotel along this iconic stretch.
              </p>
              <p className="text-muted-foreground mb-6">
                Our therapists serve all of Sea Point from Three Anchor Bay to Bantry Bay, 
                including high-rise apartments and boutique hotels.
              </p>
              <div className="space-y-4 mb-8">
                {["Professional certified therapists", "Premium organic products", "Available 24/7", "Hotel and apartment services", "Post-workout recovery treatments"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/booking">
                <Button size="lg" className="luxury-gradient luxury-glow">Book in Sea Point</Button>
              </Link>
            </div>
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />Availability
                  </h3>
                  <p className="text-muted-foreground">We're available 24/7 in Sea Point.</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />Contact Us
                  </h3>
                  <p className="text-muted-foreground mb-2">Call or WhatsApp:</p>
                  <a href="tel:0681849866" className="text-primary font-semibold text-lg">068 184 9866</a>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />Client Reviews
                  </h3>
                  <p className="text-muted-foreground italic">"Perfect after a morning jog on the promenade. The sports massage was exactly what I needed!"</p>
                  <p className="text-sm text-primary mt-2">— Michael B., Sea Point</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeaPoint;
