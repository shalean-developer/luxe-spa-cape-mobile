import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Sparkles } from "lucide-react";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
const massageImage = "/images/massage.jpg";
const facialImage = "/images/facial.jpg";
const nailsImage = "/images/nails.jpg";
const waxingImage = "/images/waxing.jpg";
const hotStonesImage = "/images/hot-stones.jpg";
const spaSetupImage = "/images/spa-setup.jpg";

const SERVICES_FAQ = [
  {
    question: "What makes your mobile spa Cape Town team different?",
    answer:
      "We choreograph every detail — punctual arrivals, refined sanitation, premium oils for massage, and facial protocols suited to Cape Town's climate. Expect the polish of a boutique hotel delivered quietly in your living room.",
  },
  {
    question: "Do you offer at-home massage and facials on the same visit?",
    answer:
      "Yes. Many guests pair therapeutic massage with hydrating or anti-aging facials during one appointment window. Tell us your priorities when you book so we sequence timing and bring the correct kits.",
  },
  {
    question: "Which mobile beauty services Cape Town suburbs do you reach?",
    answer:
      "We travel across the Atlantic Seaboard, City Bowl, Southern Suburbs, Northern suburbs, and selected Winelands routes. Browse every neighbourhood on our locations page or confirm your pin on WhatsApp.",
  },
  {
    question: "How should I prepare my space before arrival?",
    answer:
      "Reserve a calm room with airflow, arrange parking or estate access, and keep pets comfortable elsewhere. Your therapist supplies the treatment bed where needed, linens, and facial or nail products.",
  },
  {
    question: "Can I book couples massage or event spa blocks?",
    answer:
      "Absolutely — couples massage and multi-hour itineraries are popular for celebrations and executive hosting. Share party size, dates, and desired treatments so we coordinate therapists and equipment.",
  },
  {
    question: "How do payments work for mobile spa bookings?",
    answer:
      "Pricing is confirmed upfront per treatment or package. Major cards, cash, and agreed EFT arrangements are accepted unless your confirmation states otherwise — ideal for hospitality or corporate planners.",
  },
] as const;

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
      image: spaSetupImage,
      duration: "60 min",
      price: "R 500",
      description: "Therapeutic massage targeting deep muscle layers to relieve chronic pain and muscle knots.",
    },
    {
      title: "Hot Stone Massage",
      category: "Massage Therapy",
      image: hotStonesImage,
      duration: "90 min",
      price: "R 650",
      description: "Luxurious massage using heated stones to deeply relax muscles and improve blood flow.",
    },
    {
      title: "Aromatherapy Massage",
      category: "Massage Therapy",
      image: facialImage,
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
      image: spaSetupImage,
      duration: "60 min",
      price: "R 550",
      description: "Advanced facial targeting fine lines, wrinkles, and signs of aging.",
    },
    {
      title: "Deep Cleansing Facial",
      category: "Facial Treatments",
      image: massageImage,
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
      image: spaSetupImage,
      duration: "45 min",
      price: "R 250",
      description: "Long-lasting gel polish that stays chip-free for weeks.",
    },
    {
      title: "Luxury Pedicure",
      category: "Nail Care",
      image: hotStonesImage,
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
      image: spaSetupImage,
      duration: "30 min",
      price: "R 350",
      description: "Professional intimate area waxing in a comfortable, private setting.",
    },
    {
      title: "Exfoliating Body Scrub",
      category: "Body Treatments",
      image: hotStonesImage,
      duration: "45 min",
      price: "R 420",
      description: "Luxurious full-body exfoliation to reveal smooth, glowing skin.",
    },
    {
      title: "Detox Body Scrub",
      category: "Body Treatments",
      image: massageImage,
      duration: "60 min",
      price: "R 480",
      description: "Purifying body treatment with detoxifying scrub and nourishing wrap.",
    },
    {
      title: "Couples Swedish Massage",
      category: "Couples Treatments",
      image: spaSetupImage,
      duration: "60 min",
      price: "R 850",
      description: "Relaxing side-by-side massage for two in the comfort of your home.",
    },
    {
      title: "Couples Hot Stone Massage",
      category: "Couples Treatments",
      image: hotStonesImage,
      duration: "90 min",
      price: "R 1,200",
      description: "Indulgent couples massage using heated stones for ultimate relaxation.",
    },
  ];

  const categories = [...new Set(services.map(s => s.category))];

  return (
    <div className="min-h-screen">
      <FaqJsonLd items={SERVICES_FAQ} />
      {/* Hero */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="h-12 w-12 mx-auto mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Rejuvenation Mobile Massage Cape Town — Massage, Facials &amp; At-Home Beauty
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Premium mobile spa Cape Town menus crafted for recovery, radiance, and polished nails — delivered by
            discreet therapists who bring five-star rituals to your door.
          </p>
        </div>
      </section>

      {/* Benefits + keyword-rich intro */}
      <section className="border-b border-border/60 bg-muted/20 py-16 md:py-20" aria-labelledby="services-benefits-heading">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 id="services-benefits-heading" className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
            Why guests choose our at-home massage and facial rituals
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground md:text-lg leading-relaxed">
            <p>
              Searching for <strong className="font-medium text-foreground">mobile spa Cape Town</strong> experiences
              usually means juggling traffic, parking, and crowded reception areas. We eliminate the friction: your
              therapist arrives with spa-grade equipment, curated oils, and facial formulations suited to coastal wind,
              mountain dryness, or inner-city humidity — so every{" "}
              <strong className="font-medium text-foreground">at-home massage</strong> feels intentional rather than
              improvised.
            </p>
            <p>
              Skincare-focused guests looking for <strong className="font-medium text-foreground">facials Cape Town</strong>{" "}
              therapists trust benefit from calm environments where LED glare, noise, and locker-room rushing never
              interrupt lymphatic drainage or peel timing. Nail artistry sits alongside massage and facial protocols as
              part of our broader <strong className="font-medium text-foreground">mobile beauty services Cape Town</strong>{" "}
              calendar — ideal before weddings, editorial shoots, wine weekends, or executive recovery blocks.
            </p>
            <p className="text-center pt-2">
              <Link href="/booking" className="font-semibold text-primary underline-offset-4 hover:underline">
                Reserve your treatment window
              </Link>
              <span className="text-muted-foreground"> · </span>
              <Link href="/locations" className="font-semibold text-primary underline-offset-4 hover:underline">
                View Cape Town service areas
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20" aria-labelledby="services-menu-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 id="services-menu-heading" className="font-serif text-3xl font-bold md:text-4xl">
              Massage, facials &amp; nail treatments
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Each card links straight to booking so you can secure your preferred therapist band and arrival window.
            </p>
          </div>
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center">{category}</h3>
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
                          <h4 className="font-serif text-xl font-semibold">{service.title}</h4>
                          <span className="text-lg font-semibold text-primary">{service.price}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Link href="/booking" className="w-full">
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

      {/* Locations */}
      <section className="border-t border-border/60 py-12 md:py-16" aria-labelledby="services-locations-heading">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 id="services-locations-heading" className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
            Mobile spa coverage across Cape Town
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed">
            From Sea Point and Camps Bay to Claremont, Constantia, the Winelands, and Northern growth suburbs, we route
            therapists efficiently so your appointment starts on time. Explore suburb-specific guides for hyper-local
            tips, then return here to match treatments to your itinerary.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-medium">
            <Link href="/locations/sea-point" className="text-primary underline-offset-4 hover:underline">
              Sea Point
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/locations/camps-bay" className="text-primary underline-offset-4 hover:underline">
              Camps Bay
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/locations/claremont" className="text-primary underline-offset-4 hover:underline">
              Claremont
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/locations/constantia" className="text-primary underline-offset-4 hover:underline">
              Constantia
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/locations" className="text-primary underline-offset-4 hover:underline">
              All areas
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-muted/30" aria-labelledby="services-packages-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="services-packages-heading" className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Special packages
            </h2>
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
                <Link href="/booking">
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
                <Link href="/booking">
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
                <Link href="/booking">
                  <Button className="w-full">Book Package</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-background py-16 md:py-24" aria-labelledby="services-faq-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 id="services-faq-heading" className="font-serif text-2xl font-bold md:text-3xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-muted-foreground md:text-lg">
              Straight answers about mobile spa Cape Town bookings, facials, and at-home massage logistics.
            </p>
          </div>
          <div className="mx-auto max-w-3xl rounded-2xl border border-border/80 bg-card px-4 py-2 shadow-sm md:px-8">
            <Accordion type="single" collapsible className="w-full">
              {SERVICES_FAQ.map((item, index) => (
                <AccordionItem key={item.question} value={`svc-faq-${index}`}>
                  <AccordionTrigger className="py-5 text-left font-serif text-base font-semibold md:text-lg hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="pb-2 text-sm leading-relaxed text-muted-foreground md:text-base">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
            Ready to experience rejuvenation mobile massage Cape Town service?{" "}
            <Link href="/booking" className="font-semibold text-primary underline-offset-4 hover:underline">
              Start your booking
            </Link>{" "}
            or speak with our team on WhatsApp for bespoke itineraries.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
