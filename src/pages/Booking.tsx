import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Mail } from "lucide-react";
import SEO from "@/components/SEO";

const Booking = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Book a Mobile Spa Treatment | Luxury Mobile Spa Cape Town"
        description="Book your luxury mobile spa treatment in Cape Town. Easy online booking for massages, facials, nails & more. Available 24/7 across all Cape Town areas."
        keywords="book mobile spa cape town, spa booking, massage appointment, facial booking cape town"
        canonical="/booking"
      />
      {/* Hero */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="h-12 w-12 mx-auto mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Book Your Treatment</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Experience luxury spa services in the comfort of your home
          </p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4">How to Book</h2>
              <p className="text-muted-foreground text-lg">
                Choose your preferred booking method below
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone Booking */}
              <Card className="hover:shadow-lg transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <Phone className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">Call to Book</h3>
                  <p className="text-muted-foreground mb-6">
                    Speak directly with our booking team for personalized service and same-day appointments
                  </p>
                  <a href="tel:0681849866">
                    <Button size="lg" className="luxury-gradient luxury-glow w-full">
                      Call 068 184 9866
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    Available Mon-Sat: 9am-8pm, Sun: 10am-6pm
                  </p>
                </CardContent>
              </Card>

              {/* Email Booking */}
              <Card className="hover:shadow-lg transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">Email Request</h3>
                  <p className="text-muted-foreground mb-6">
                    Send us your booking details and we'll confirm your appointment within 24 hours
                  </p>
                  <a href="mailto:info@luxurymspa.co.za?subject=Booking Request">
                    <Button size="lg" variant="outline" className="w-full">
                      Send Email
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    info@luxurymspa.co.za
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp Option */}
            <Card className="mt-8 bg-accent/10 border-accent/30">
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-2xl font-bold mb-3">WhatsApp Us</h3>
                <p className="text-muted-foreground mb-6">
                  Quick and easy booking via WhatsApp
                </p>
                <a 
                  href="https://wa.me/27681849866?text=Hi%2C%20I%27d%20like%20to%20book%20a%20spa%20treatment"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Message on WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Booking Information */}
            <div className="mt-12 p-8 bg-muted/30 rounded-lg">
              <h3 className="font-serif text-xl font-bold mb-4">Booking Information</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>We recommend booking 24-48 hours in advance for best availability</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Same-day bookings may be available based on therapist schedules</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Please provide your preferred date, time, service, and location</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Cancellations must be made 24 hours in advance to avoid fees</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Payment is due at the time of service (cash, card, or EFT accepted)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
