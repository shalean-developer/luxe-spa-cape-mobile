import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles, Users, MapPin } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Wellness",
      description: "We focus on convenient spa treatments that support relaxation and personal wellbeing.",
    },
    {
      icon: Sparkles,
      title: "Professional Care",
      description: "Our mobile treatment experience is designed around respectful service, preparation, and client comfort.",
    },
    {
      icon: Users,
      title: "Client-Centered",
      description: "Your comfort, privacy, preferences, and treatment goals guide each appointment.",
    },
    {
      icon: MapPin,
      title: "Cape Town Service",
      description: "We provide mobile spa appointments across supported Cape Town service areas.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Rejuvenation Mobile Massage</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Mobile massage, facials, and beauty treatments delivered to your chosen Cape Town location
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center">Our Approach</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Rejuvenation Mobile Massage brings spa treatments to homes, hotels, apartments, offices, and other suitable locations across Cape Town.
              </p>
              <p>
                Our aim is to make massage and beauty appointments simpler by reducing travel and bringing the treatment setup to you.
              </p>
              <p>
                Before booking, clients can review the available services, choose a suitable appointment, and share the location details needed for the visit.
              </p>
              <p className="font-semibold text-foreground">
                We bring the spa experience to your doorstep so you can focus on the treatment rather than the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg">What guides the mobile spa experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Why Choose Rejuvenation Mobile Massage?</h2>
            <div className="space-y-4 text-left text-muted-foreground">
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <p><strong>Convenience:</strong> Treatments are delivered to your selected location.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <p><strong>Professional Service:</strong> Appointments are organised around clear service details and treatment preparation.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <p><strong>Treatment Setup:</strong> The mobile service brings the required treatment setup for the booked service.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <p><strong>Flexible Scheduling:</strong> Available appointment times are shown through the booking process.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <p><strong>Client Comfort:</strong> Privacy, preferences, and a tidy treatment setup are central to each visit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
