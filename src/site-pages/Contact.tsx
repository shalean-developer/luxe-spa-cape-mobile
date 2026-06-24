"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookButton } from "@/components/BookButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

const CONTACT_FAQ = [
  {
    question: "How quickly do you respond to mobile spa Cape Town enquiries?",
    answer:
      "Phone and WhatsApp messages receive replies during business hours within minutes when possible. Email requests are answered within 24 hours with treatment options, travel notes, and suggested arrival windows.",
  },
  {
    question: "Which suburbs do you cover for at-home massage and facials?",
    answer:
      "We route across the Atlantic Seaboard, City Bowl, Southern Suburbs, Winelands escapes, and multiple Northern suburbs. Share your estate or hotel name — we confirm feasibility before you commit.",
  },
  {
    question: "Can you coordinate corporate or hospitality spa blocks?",
    answer:
      "Yes. Concierge teams use our contact form to brief guest counts, room layouts, and preferred facials or massage cadence. We assign lead therapists for seamless property communication.",
  },
  {
    question: "What information helps you quote mobile beauty services accurately?",
    answer:
      "Include suburb, treatment wish list, ideal dates, parking constraints, and allergies. Photos of treatment spaces help us plan bed orientation — especially for couples massage or multi-bed setups.",
  },
  {
    question: "Do you offer voice notes or video walk-throughs for estate access?",
    answer:
      "Absolutely — send WhatsApp voice notes or short clips detailing boom gates, lifts, and loading bays. It prevents delays so your facials Cape Town itinerary starts exactly on time.",
  },
  {
    question: "What if I need to reschedule?",
    answer:
      "Reply on the same channel you used to book. We honour emergencies whenever possible and transparently outline fees when cancellations fall inside the 24-hour policy window.",
  },
] as const;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "068 184 9866",
      link: "tel:0681849866",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@luxurymspa.co.za",
      link: "mailto:info@luxurymspa.co.za",
    },
    {
      icon: MapPin,
      title: "Service area",
      content: "Mobile spa Cape Town — Atlantic Seaboard to Winelands",
      link: null,
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sat: 9am-8pm, Sun: 10am-6pm",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <FaqJsonLd items={CONTACT_FAQ} />
      {/* Hero */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="h-12 w-12 mx-auto mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Contact Rejuvenation Mobile Massage Cape Town — At-Home Massage &amp; Facials
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Speak with our concierge team about{" "}
            <strong className="font-semibold text-white">mobile spa Cape Town</strong> routing, bespoke{" "}
            <strong className="font-semibold text-white">facials Cape Town</strong> protocols, or last-minute{" "}
            <strong className="font-semibold text-white">at-home massage</strong> coverage — we reply with calm,
            precision, and zero fluff.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <Link href="/booking" className="rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur hover:bg-white/20">
              Jump to booking
            </Link>
            <Link href="/services" className="rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur hover:bg-white/20">
              Browse services
            </Link>
          </div>
        </div>
      </section>

      {/* SEO intro */}
      <section className="border-b border-border/60 bg-muted/20 py-14 md:py-20" aria-labelledby="contact-intro-heading">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 id="contact-intro-heading" className="font-serif text-2xl font-bold md:text-3xl">
            Concierge support for mobile beauty services Cape Town wide
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground md:text-lg leading-relaxed">
            <p>
              Every enquiry lands with therapists who understand estate etiquette, boutique hotel standards, and Airbnb
              hosting rhythms. Whether you are aligning{" "}
              <strong className="font-medium text-foreground">mobile beauty services Cape Town</strong> timelines with a
              wedding planner or securing NDAs for executive guests, we document preferences meticulously.
            </p>
            <p>
              Expect guidance on pairing treatments — perhaps lymphatic-friendly massage before LED facials — plus honest
              advice when traffic or load shedding might affect arrival buffers. Ready to skip email altogether?{" "}
              <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
                Start a structured booking
              </Link>{" "}
              or{" "}
              <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
                cross-check suburb notes
              </Link>{" "}
              while you wait for our reply.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20" aria-labelledby="contact-channels-heading">
        <div className="container mx-auto px-4">
          <h2 id="contact-channels-heading" className="sr-only">
            Contact channels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Send us a message</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Outline your ideal treatments, suburb, and timing — we respond with tailored recommendations for luxury{" "}
                <span className="font-medium text-foreground">mobile spa Cape Town</span> visits.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="068 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about treatments, suburb, and preferred dates..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full luxury-gradient luxury-glow">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Cape Town coverage overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Unlike single-neighbourhood studios, our{" "}
                <strong className="font-medium text-foreground">mobile spa Cape Town</strong> fleet rotates daily across
                coastal, urban, and vineyard terrain — bringing consistent polish to Sea Point penthouses, Claremont
                family homes, and Franschhoek escapes alike.
              </p>

              <Card className="overflow-hidden mb-6">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">Greater Cape Town &amp; Winelands</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Mention your suburb for precise routing when we reply.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Prefer instant booking?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Call or WhatsApp for same-day at-home massage when calendars align — especially weekdays before 3pm.
                  </p>
                  <div className="flex flex-col gap-2">
                    <a href="tel:0681849866">
                      <Button variant="outline" className="w-full gap-2">
                        <Phone className="h-4 w-4" />
                        Call 068 184 9866
                      </Button>
                    </a>
                    <BookButton className="w-full luxury-gradient luxury-glow">Book now</BookButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30 border-t border-border/60" aria-labelledby="contact-faq-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 id="contact-faq-heading" className="font-serif text-3xl font-bold mb-4 text-center">
              Frequently asked questions
            </h2>
            <p className="text-center text-muted-foreground mb-10 md:text-lg">
              Answers before you email — covering response times, coverage, and how we coordinate luxury{" "}
              <span className="font-medium text-foreground">mobile spa Cape Town</span> logistics.
            </p>
            <div className="rounded-2xl border border-border/80 bg-card px-4 py-2 shadow-sm md:px-8">
              <Accordion type="single" collapsible className="w-full">
                {CONTACT_FAQ.map((item, index) => (
                  <AccordionItem key={item.question} value={`contact-faq-${index}`}>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
