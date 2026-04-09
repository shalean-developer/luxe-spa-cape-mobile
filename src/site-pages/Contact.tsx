"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
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
      title: "Service Area",
      content: "Woodstock, Cape Town & Surrounding Areas",
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
      {/* Hero */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <MessageSquare className="h-12 w-12 mx-auto mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
              <h2 className="font-serif text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours. For immediate assistance,
                please call us directly.
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
                    placeholder="Tell us about your spa needs..."
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
              <h2 className="font-serif text-3xl font-bold mb-4">Service Area</h2>
              <p className="text-muted-foreground mb-6">
                We proudly serve Woodstock and surrounding Cape Town areas. Our mobile spa brings luxury
                treatments directly to your location.
              </p>

              {/* Map Placeholder */}
              <Card className="overflow-hidden mb-6">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Woodstock, Cape Town
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Service area map
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Quick Booking</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ready to book? Call us now for same-day and next-day appointments.
                  </p>
                  <a href="tel:0681849866">
                    <Button variant="outline" className="w-full gap-2">
                      <Phone className="h-4 w-4" />
                      Call 068 184 9866
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What areas do you service?</h3>
                  <p className="text-sm text-muted-foreground">
                    We primarily service Woodstock and surrounding Cape Town areas. Contact us to confirm if
                    we service your specific location.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How far in advance should I book?</h3>
                  <p className="text-sm text-muted-foreground">
                    We recommend booking at least 24-48 hours in advance. However, we often accommodate
                    same-day bookings based on availability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What do I need to prepare at home?</h3>
                  <p className="text-sm text-muted-foreground">
                    Just a comfortable space! We bring all necessary equipment including massage tables, oils,
                    and towels. We'll discuss your space requirements when you book.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What are your payment methods?</h3>
                  <p className="text-sm text-muted-foreground">
                    We accept cash, card payments, and EFT. Payment is due at the time of service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
