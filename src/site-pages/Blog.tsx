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

type BlogPostCard = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  /** Present when the full article is published */
  href?: string;
};

const blogPosts: BlogPostCard[] = [
  {
    href: "/blog/home-cleaning-before-spa-cape-town",
    title: "Why a Clean Home Enhances Your At-Home Spa Experience in Cape Town",
    excerpt:
      "How a tidy, organised space sets the tone for at-home massage and facials — and why pairing professional cleaning with your spa booking elevates the whole experience.",
    image: spaSetupImage,
    date: "February 4, 2026",
    readTime: "5 min read",
    category: "Home & Wellness",
  },
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
            {blogPosts.map((post) => {
              const card = (
                <Card className="h-full overflow-hidden transition-smooth hover:shadow-xl group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" aria-hidden />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" aria-hidden />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mb-3 font-serif text-xl font-semibold transition-smooth group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mb-4 line-clamp-3 text-muted-foreground">{post.excerpt}</p>
                    <span className="inline-flex cursor-pointer items-center text-sm font-medium text-primary">
                      Read more <ArrowRight className="ml-1 h-4 w-4 transition-smooth group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              );

              return post.href ? (
                <Link
                  key={post.title}
                  href={post.href}
                  className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {card}
                </Link>
              ) : (
                <div key={post.title} className="h-full">
                  {card}
                </div>
              );
            })}
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
