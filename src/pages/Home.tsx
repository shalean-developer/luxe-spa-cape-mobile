import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, MapPin, Users, Heart, Star } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";
import massageImage from "@/assets/massage.jpg";
import facialImage from "@/assets/facial.jpg";
import nailsImage from "@/assets/nails.jpg";
import hotStonesImage from "@/assets/hot-stones.jpg";
import spaSetupImage from "@/assets/spa-setup.jpg";

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: "Convenience",
      description: "We bring the spa experience to your doorstep, wherever you are in Cape Town.",
    },
    {
      icon: Users,
      title: "Professional Therapists",
      description: "Certified and experienced therapists dedicated to your wellbeing.",
    },
    {
      icon: Heart,
      title: "Luxury Experience",
      description: "Premium products and treatments that rival the best spas.",
    },
    {
      icon: Star,
      title: "Affordable Packages",
      description: "Competitive pricing with flexible packages for all budgets.",
    },
  ];

  const services = [
    {
      title: "Massage Therapy",
      image: hotStonesImage,
      duration: "60-90 min",
      description: "Swedish, deep tissue, hot stone, and aromatherapy massages",
    },
    {
      title: "Facials",
      image: facialImage,
      duration: "45-60 min",
      description: "Hydrating, anti-aging, and deep cleansing treatments",
    },
    {
      title: "Body Treatments",
      image: spaSetupImage,
      duration: "45-60 min",
      description: "Exfoliating scrubs and detox body treatments",
    },
    {
      title: "Manicure & Pedicure",
      image: nailsImage,
      duration: "30-60 min",
      description: "Professional nail care with gel and regular polish",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Absolutely incredible experience! The therapist was professional and the massage was heaven. Will definitely book again.",
    },
    {
      name: "Jennifer K.",
      rating: 5,
      text: "Such convenience having a spa treatment at home. The quality was just as good as any high-end spa I've visited.",
    },
    {
      name: "Thandiwe N.",
      rating: 5,
      text: "The facial was transformative! My skin has never looked better. Highly recommend Luxury Mobile Spa.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Luxury spa experience"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Relax. Rejuvenate. Recharge
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Wherever You Are
          </p>
          <p className="text-lg mb-10 max-w-xl mx-auto opacity-90">
            Experience luxury spa treatments in the comfort of your home with Cape Town's premier mobile spa service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 luxury-glow">
                Book Your Treatment
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Signature Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our range of premium treatments designed to restore your mind, body, and spirit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-smooth group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-xl font-semibold">{service.title}</h3>
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button size="lg" className="luxury-gradient luxury-glow">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg">
              Experience the difference with Luxury Mobile Spa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Premium Locations We Serve</h2>
            <p className="text-muted-foreground text-lg">
              Bringing luxury spa experiences to Cape Town's most exclusive areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Camps Bay", link: "/locations/camps-bay" },
              { name: "Clifton", link: "/locations/clifton" },
              { name: "Constantia", link: "/locations/constantia" },
              { name: "Bishopscourt", link: "/locations/bishopscourt" },
              { name: "Fresnaye", link: "/locations/fresnaye" },
            ].map((location, index) => (
              <Link key={index} to={location.link}>
                <Card className="hover:shadow-lg transition-smooth border-2 border-primary/20 hover:border-primary group">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-smooth" />
                    <h3 className="font-serif text-lg font-semibold">{location.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Real experiences from real people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 luxury-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <Sparkles className="h-12 w-12 mx-auto mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Book your appointment today and discover why we're Cape Town's favorite mobile spa
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              Book Your Spa Day
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
