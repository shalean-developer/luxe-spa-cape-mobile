import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import { LocationSeoExtras } from "@/components/locations/LocationSeoExtras";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const heroImage = "/images/hot-stones.jpg";

const BantryBay = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Mobile spa treatment setup for a Bantry Bay appointment in Cape Town"
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
            <span className="text-primary font-medium">Bantry Bay</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Massage &amp; Mobile Spa Services in Bantry Bay, Cape Town
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mobile spa treatments delivered to homes, apartments, hotels, and guest stays
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Mobile Spa in Bantry Bay</h2>
              <p className="text-muted-foreground mb-6">
                Bantry Bay is well suited to private mobile spa appointments at homes, apartments, and hotels along the Atlantic Seaboard.
              </p>
              <p className="text-muted-foreground mb-6">
                Our therapists bring the treatment setup to your location so you can book massage and spa services without travelling to a salon.
              </p>
              <div className="space-y-4 mb-8">
                {["Professional mobile therapists", "Spa treatment products", "Home and hotel appointments", "Private-location service", "Massage and beauty treatments"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/booking">
                <Button size="lg" className="luxury-gradient luxury-glow">Book in Bantry Bay</Button>
              </Link>
            </div>
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />Availability
                  </h3>
                  <p className="text-muted-foreground">Appointments are available daily, subject to therapist availability.</p>
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
            </div>
          </div>
        </div>
      </section>
      <LocationSeoExtras
        areaLabel="Bantry Bay"
        neighbors={[
          { href: "/locations/camps-bay", label: "Camps Bay" },
          { href: "/locations/clifton", label: "Clifton" },
          { href: "/locations/fresnaye", label: "Fresnaye" },
          { href: "/locations/sea-point", label: "Sea Point" },
        ]}
      />
    </div>
  );
};

export default BantryBay;
