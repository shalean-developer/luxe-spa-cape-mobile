import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-spa.jpg";
import SEO from "@/components/SEO";

const SomersetWest = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Mobile Spa in Somerset West | Luxury Spa Cape Town"
        description="Premium mobile spa in Somerset West. Professional massage, facials & treatments in the Helderberg area. Book online."
        keywords="mobile spa somerset west, massage somerset west, spa helderberg"
        canonical="/locations/somerset-west"
      />
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
            <span className="text-primary font-medium">Somerset West</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Mobile Spa Services in Somerset West
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Luxury spa treatments at your doorstep in the heart of Helderberg
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">
                Premium Spa Experience in Somerset West
              </h2>
              <p className="text-muted-foreground mb-6">
                Somerset West, nestled at the foot of the Helderberg Mountain, offers the perfect backdrop 
                for our luxury mobile spa services. We bring professional treatments directly to your 
                home, office, or accommodation in this beautiful Helderberg region.
              </p>
              <p className="text-muted-foreground mb-6">
                Our experienced therapists serve all areas of Somerset West including Erinvale, 
                Helderberg Village, Somerset Lakes, and surrounding wine estates.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Professional certified therapists",
                  "Premium organic products",
                  "Available 24/7",
                  "All equipment provided",
                  "Couples and group bookings welcome",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/booking">
                <Button size="lg" className="luxury-gradient luxury-glow">
                  Book in Somerset West
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
                    We're available 24/7 in Somerset West. Book anytime that suits your schedule.
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
                    "Wonderful service in Somerset West! The therapist was professional and the 
                    hot stone massage was absolutely divine."
                  </p>
                  <p className="text-sm text-primary mt-2">— Lisa M., Erinvale</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SomersetWest;
