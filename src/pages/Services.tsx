import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, Sparkles } from "lucide-react";
import massageImage from "@/assets/massage.jpg";
import facialImage from "@/assets/facial.jpg";
import nailsImage from "@/assets/nails.jpg";
import waxingImage from "@/assets/waxing.jpg";

const Services = () => {
  const services = [
    {
      title: "Swedish Massage",
      category: "Massage Therapy",
      image: massageImage,
      duration: "60 min",
      price: "R 450",
      description: "Relaxing full-body massage using long, flowing strokes to ease tension and promote circulation.",
    },
    {
      title: "Deep Tissue Massage",
      category: "Massage Therapy",
      image: massageImage,
      duration: "60 min",
      price: "R 500",
      description: "Therapeutic massage targeting deep muscle layers to relieve chronic pain and muscle knots.",
    },
    {
      title: "Hot Stone Massage",
      category: "Massage Therapy",
      image: massageImage,
      duration: "90 min",
      price: "R 650",
      description: "Luxurious massage using heated stones to deeply relax muscles and improve blood flow.",
    },
    {
      title: "Aromatherapy Massage",
      category: "Massage Therapy",
      image: massageImage,
      duration: "60 min",
      price: "R 480",
      description: "Gentle massage combined with essential oils to enhance relaxation and wellbeing.",
    },
    {
      title: "Hydrating Facial",
      category: "Facial Treatments",
      image: facialImage,
      duration: "45 min",
      price: "R 380",
      description: "Deep moisturizing treatment perfect for dry, dehydrated skin.",
    },
    {
      title: "Anti-Aging Facial",
      category: "Facial Treatments",
      image: facialImage,
      duration: "60 min",
      price: "R 550",
      description: "Advanced facial targeting fine lines, wrinkles, and signs of aging.",
    },
    {
      title: "Deep Cleansing Facial",
      category: "Facial Treatments",
      image: facialImage,
      duration: "45 min",
      price: "R 400",
      description: "Purifying treatment to clear pores and refresh oily or congested skin.",
    },
    {
      title: "Classic Manicure",
      category: "Nail Care",
      image: nailsImage,
      duration: "30 min",
      price: "R 180",
      description: "Complete nail care with shaping, cuticle work, and polish application.",
    },
    {
      title: "Gel Manicure",
      category: "Nail Care",
      image: nailsImage,
      duration: "45 min",
      price: "R 250",
      description: "Long-lasting gel polish that stays chip-free for weeks.",
    },
    {
      title: "Luxury Pedicure",
      category: "Nail Care",
      image: nailsImage,
      duration: "60 min",
      price: "R 320",
      description: "Indulgent foot treatment with exfoliation, massage, and polish.",
    },
    {
      title: "Full Body Wax",
      category: "Waxing Services",
      image: waxingImage,
      duration: "90 min",
      price: "R 750",
      description: "Complete body hair removal using premium wax for smooth skin.",
    },
    {
      title: "Brazilian Wax",
      category: "Waxing Services",
      image: waxingImage,
      duration: "30 min",
      price: "R 350",
      description: "Professional intimate area waxing in a comfortable, private setting.",
    },
  ];

  const categories = [...new Set(services.map(s => s.category))];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="h-12 w-12 mx-auto mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Professional spa treatments delivered to your home by certified therapists
          </p>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter(s => s.category === category)
                  .map((service, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-smooth group flex flex-col">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition-smooth"
                        />
                      </div>
                      <CardContent className="p-6 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-serif text-xl font-semibold">{service.title}</h3>
                          <span className="text-lg font-semibold text-primary">{service.price}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Link to="/booking" className="w-full">
                          <Button className="w-full luxury-gradient luxury-glow">
                            Book This Service
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Special Packages</h2>
            <p className="text-muted-foreground text-lg">Save more with our curated spa packages</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-2xl font-bold mb-2">Relaxation Day</h3>
                <p className="text-3xl font-bold text-primary mb-4">R 850</p>
                <p className="text-sm text-muted-foreground mb-4">Save R 100</p>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  <li>✓ 60min Swedish Massage</li>
                  <li>✓ 45min Hydrating Facial</li>
                  <li>✓ Aromatherapy Oils</li>
                </ul>
                <Link to="/booking">
                  <Button className="w-full">Book Package</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary shadow-lg scale-105">
              <CardContent className="p-8 text-center">
                <div className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  MOST POPULAR
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">Ultimate Pamper</h3>
                <p className="text-3xl font-bold text-primary mb-4">R 1,450</p>
                <p className="text-sm text-muted-foreground mb-4">Save R 200</p>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  <li>✓ 90min Hot Stone Massage</li>
                  <li>✓ 60min Anti-Aging Facial</li>
                  <li>✓ Luxury Pedicure</li>
                  <li>✓ Complimentary Refreshments</li>
                </ul>
                <Link to="/booking">
                  <Button className="w-full luxury-gradient luxury-glow">Book Package</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-2xl font-bold mb-2">Beauty Boost</h3>
                <p className="text-3xl font-bold text-primary mb-4">R 680</p>
                <p className="text-sm text-muted-foreground mb-4">Save R 80</p>
                <ul className="text-left space-y-2 mb-6 text-sm">
                  <li>✓ Deep Cleansing Facial</li>
                  <li>✓ Gel Manicure</li>
                  <li>✓ Eyebrow Shaping</li>
                </ul>
                <Link to="/booking">
                  <Button className="w-full">Book Package</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
