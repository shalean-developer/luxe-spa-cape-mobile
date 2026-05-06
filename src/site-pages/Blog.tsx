import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const massageImage = "/images/massage.jpg";
const facialImage = "/images/facial.jpg";
const nailsImage = "/images/nails.jpg";
const hotStonesImage = "/images/hot-stones.jpg";
const spaSetupImage = "/images/spa-setup.jpg";
const heroSpaImage = "/images/hero-spa.jpg";

const blogPosts = [
  {
    title: "How Much Does a Massage Cost in Cape Town? (2026 Guide)",
    excerpt:
      "Typical pricing for mobile vs spa massage in Cape Town, what affects your quote, and how to compare value when booking at home.",
    image: massageImage,
    date: "January 15, 2026",
    readTime: "8 min read",
    category: "Cape Town",
  },
  {
    title: "Best Mobile Spa Services in Cape Town",
    excerpt:
      "What to look for in a luxury mobile spa — therapist credentials, hygiene, products, and areas served from the Atlantic Seaboard to the Southern Suburbs.",
    image: spaSetupImage,
    date: "January 8, 2026",
    readTime: "7 min read",
    category: "Guides",
  },
  {
    title: "At-Home Spa vs Traditional Spa: Which Is Better?",
    excerpt:
      "Compare convenience, privacy, atmosphere, and cost so you can choose the right experience for recovery, events, or regular self-care in Cape Town.",
    image: facialImage,
    date: "January 2, 2026",
    readTime: "6 min read",
    category: "Wellness",
  },
  {
    title: "Couples Spa Treatments: Reconnect and Relax",
    excerpt: "Why sharing a spa experience with your partner can strengthen your bond and create lasting memories together.",
    image: heroSpaImage,
    date: "November 20, 2024",
    readTime: "4 min read",
    category: "Relationships",
  },
  {
    title: "The Art of Hot Stone Massage",
    excerpt: "Learn about the ancient practice of hot stone therapy and how it can melt away tension and restore balance.",
    image: hotStonesImage,
    date: "November 15, 2024",
    readTime: "5 min read",
    category: "Treatments",
  },
  {
    title: "Pre-Wedding Beauty Preparation Guide",
    excerpt: "A comprehensive timeline for brides-to-be to ensure you look and feel your absolute best on your special day.",
    image: nailsImage,
    date: "November 8, 2024",
    readTime: "7 min read",
    category: "Bridal",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Wellness & Beauty Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Expert tips, insights, and inspiration for your wellness journey
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Planning an at-home spa day in{" "}
            <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
              Cape Town
            </Link>
            ? Browse our{" "}
            <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
              mobile spa services
            </Link>{" "}
            — massage, facials, and nails — then{" "}
            <Link href="/booking" className="font-medium text-primary underline-offset-4 hover:underline">
              book your treatment
            </Link>{" "}
            in Sea Point, Camps Bay, Claremont, and beyond.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-smooth group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-primary text-sm font-medium cursor-pointer">
                    Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest wellness tips, exclusive offers, and spa insights.
          </p>
          <Link href="/contact">
            <Button size="lg" className="luxury-gradient luxury-glow">
              Subscribe Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
