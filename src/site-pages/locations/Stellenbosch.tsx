import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import { LocationSeoExtras } from "@/components/locations/LocationSeoExtras";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const heroImage = "/images/hero-spa.jpg";

const Stellenbosch = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Mobile spa treatment setup for a Stellenbosch appointment in the Cape Winelands"
            fill
            priority
            quality={70}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium">Stellenbosch</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Massage &amp; Mobile Spa Services in Stellenbosch, Western Cape
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mobile treatments for homes, guest accommodation, and suitable private venues in the Cape Winelands
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Mobile wellness in Stellenbosch</h2>
              <p className="text-muted-foreground mb-6">
                We bring booked massage, facial, nail, and selected beauty treatments to suitable locations in and around
                Stellenbosch, including private homes, hotels, guest houses, and wine-estate accommodation where access is
                permitted.
              </p>
              <p className="text-muted-foreground mb-6">
                When you book, share your address, parking details, estate or reception instructions, and preferred time so
                we can confirm route availability before the appointment.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Mobile treatment setup brought to your location",
                  "Appointments subject to therapist and route availability",
                  "Hotel, guest-house, and private-residence visits",
                  "Couples and small-group bookings by arrangement",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/booking">
                <Button size="lg" className="luxury-gradient luxury-glow">
                  Book in Stellenbosch
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
                    Appointment times depend on therapist availability and travel scheduling. Booking ahead is recommended
                    for couples, groups, and multiple-treatment visits.
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
            </div>
          </div>
        </div>
      </section>
      <LocationSeoExtras
        areaLabel="Stellenbosch"
        neighbors={[
          { href: "/locations/somerset-west", label: "Somerset West" },
          { href: "/locations/franschhoek", label: "Franschhoek" },
          { href: "/locations/paarl", label: "Paarl" },
          { href: "/locations/constantia", label: "Constantia" },
        ]}
      />
    </div>
  );
};

export default Stellenbosch;
