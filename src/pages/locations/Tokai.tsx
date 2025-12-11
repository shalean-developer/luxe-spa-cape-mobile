import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-spa.jpg";

const Tokai = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium">Tokai</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Mobile Spa Services in Tokai
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Forest-inspired wellness at your Tokai residence
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">
                Tranquil Spa Experience in Tokai
              </h2>
              <p className="text-muted-foreground mb-6">
                Tokai, known for its beautiful forest and mountain trails, provides the ideal 
                setting for relaxation and rejuvenation. Let us bring the spa experience to 
                your peaceful Tokai home after a day of hiking or cycling.
              </p>
              <p className="text-muted-foreground mb-6">
                We serve the entire Tokai area including Tokai Forest, Steenberg, 
                and neighboring Kirstenhof and Bergvliet communities.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Professional certified therapists",
                  "Premium organic products",
                  "Available 24/7",
                  "Post-hike recovery massages",
                  "Family packages available",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/booking">
                <Button size="lg" className="luxury-gradient luxury-glow">
                  Book in Tokai
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Availability
                  </h3>
                  <p className="text-muted-foreground">
                    We're available 24/7 in Tokai. Perfect after your forest adventures.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Contact Us
                  </h3>
                  <p className="text-muted-foreground mb-2">Call or WhatsApp:</p>
                  <a href="tel:0681849866" className="text-primary font-semibold text-lg">
                    068 184 9866
                  </a>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Client Reviews
                  </h3>
                  <p className="text-muted-foreground italic">
                    "After mountain biking in Tokai Forest, the sports massage was exactly 
                    what I needed. The therapist was fantastic!"
                  </p>
                  <p className="text-sm text-primary mt-2">— David K., Tokai</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tokai;
