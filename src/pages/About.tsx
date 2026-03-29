import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
const About = () => {
  const values = [{
    icon: Heart,
    title: "Passion for Wellness",
    description: "We believe everyone deserves access to premium spa treatments that nurture both body and mind."
  }, {
    icon: Award,
    title: "Professional Excellence",
    description: "Our team consists of certified therapists with years of experience in luxury spa services."
  }, {
    icon: Users,
    title: "Client-Centered",
    description: "Your comfort, privacy, and satisfaction are at the heart of everything we do."
  }, {
    icon: MapPin,
    title: "Local Expertise",
    description: "Proudly serving Cape Town communities with personalized mobile spa experiences."
  }];
  const team = [{
    name: "Thandi Nkosi",
    role: "Founder & Master Therapist",
    bio: "With 15 years in the spa industry, Thandi brings international training and a passion for holistic wellness."
  }, {
    name: "Lisa van der Merwe",
    role: "Senior Massage Therapist",
    bio: "Specializing in deep tissue and sports massage, Lisa helps clients recover and rejuvenate."
  }, {
    name: "Zara Petersen",
    role: "Facial & Beauty Specialist",
    bio: "Certified aesthetician with expertise in anti-aging treatments and skin health."
  }];
  return <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Bringing the luxury spa experience to your doorstep since 2020
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Luxury Mobile Spa was born from a simple belief: everyone deserves to experience the
                rejuvenating power of professional spa treatments, without the hassle of traveling to a spa.
              </p>
              <p>
                Founded in Woodstock, Cape Town, we've built a reputation for bringing five-star spa experiences
                directly to our clients' homes, offices, and special events. Our mission is to make luxury
                wellness accessible, convenient, and personalized.
              </p>
              <p>
                What started as a small team of passionate therapists has grown into Cape Town's premier mobile
                spa service, serving hundreds of satisfied clients who trust us with their wellness and relaxation needs.
              </p>
              <p className="font-semibold text-foreground">
                We bring the spa experience to your doorstep, so you can relax in your own sanctuary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <Card key={index} className="border-none shadow-md hover:shadow-lg transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Team */}
      

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Why Choose Luxury Mobile Spa?</h2>
            <div className="space-y-4 text-left text-muted-foreground">
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <p><strong>Convenience:</strong> No travel time, no traffic—just pure relaxation in your own space.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <p><strong>Professional Service:</strong> All therapists are certified, insured, and background-checked.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <p><strong>Premium Products:</strong> We use only high-quality, hypoallergenic products and oils.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <p><strong>Flexible Scheduling:</strong> Book treatments at times that work for you, including evenings and weekends.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <p><strong>Hygiene Excellence:</strong> Strict sanitation protocols and fresh linens for every appointment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;