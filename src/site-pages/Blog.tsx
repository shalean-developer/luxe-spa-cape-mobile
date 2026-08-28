import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, MapPin, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const publishedPosts = [
  {
    href: "/blog/home-cleaning-before-spa-cape-town",
    title: "Why a Clean Home Enhances Your At-Home Spa Experience in Cape Town",
    excerpt:
      "How a tidy, organised space sets the tone for at-home massage and facials, with practical preparation tips before your therapist arrives.",
    image: "/images/spa-setup.jpg",
    category: "At-Home Spa Planning",
  },
] as const;

const topicClusters = [
  {
    title: "Massage in Cape Town",
    icon: Sparkles,
    description:
      "Practical guides for choosing treatments, understanding pricing, and preparing for a mobile massage appointment.",
    topics: [
      "Mobile massage Cape Town: what to expect",
      "Swedish vs deep tissue massage",
      "Massage pricing in Cape Town",
      "Couples massage at home",
    ],
  },
  {
    title: "At-Home Spa & Beauty",
    icon: BookOpen,
    description:
      "Helpful preparation and treatment guides covering facials, nails, home setup, events, and private spa experiences.",
    topics: [
      "How to prepare for an at-home spa appointment",
      "Facial treatments: choosing the right option",
      "Mobile spa for birthdays and small events",
      "Pre-event beauty planning",
    ],
  },
  {
    title: "Cape Town Travel & Local Wellness",
    icon: MapPin,
    description:
      "Location-aware wellness content for residents, hotel guests, Airbnb visitors, and travellers across Cape Town.",
    topics: [
      "Mobile spa for Cape Town hotels and Airbnbs",
      "Massage after a long-haul flight",
      "Atlantic Seaboard wellness guide",
      "Winelands mobile spa planning",
    ],
  },
] as const;

const Blog = () => {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 animate-fade-in font-serif text-4xl font-bold md:text-5xl">
            Wellness &amp; Beauty Guides
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Practical guidance for mobile massage, at-home spa treatments, beauty care, and wellness planning in Cape Town.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Explore our{" "}
            <Link href="/services" className="font-medium text-primary underline-offset-4 hover:underline">
              mobile spa services
            </Link>{" "}
            and{" "}
            <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
              Cape Town service areas
            </Link>{" "}
            while you plan your treatment.
          </p>
        </div>
      </section>

      <section className="bg-background py-20" aria-labelledby="published-guides-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Published</p>
            <h2 id="published-guides-heading" className="mt-3 font-serif text-3xl font-bold md:text-4xl">
              Latest guide
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            {publishedPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Card className="overflow-hidden transition-shadow hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden md:h-80">
                    <Image
                      src={post.image}
                      alt="Prepared home spa treatment space in Cape Town"
                      fill
                      quality={65}
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <CardContent className="p-7 md:p-8">
                    <p className="text-sm font-medium text-primary">{post.category}</p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold md:text-3xl">{post.title}</h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
                      Read the guide
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20" aria-labelledby="topic-clusters-heading">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Content roadmap</p>
            <h2 id="topic-clusters-heading" className="mt-3 font-serif text-3xl font-bold md:text-4xl">
              Topics we are building around
            </h2>
            <p className="mt-4 text-muted-foreground">
              New guides will be published only when the content is useful, accurate, and supported by the services we actually provide.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {topicClusters.map((cluster) => (
              <Card key={cluster.title} className="h-full border-primary/10">
                <CardContent className="p-7">
                  <cluster.icon className="h-7 w-7 text-primary" aria-hidden />
                  <h3 className="mt-5 font-serif text-2xl font-semibold">{cluster.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cluster.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                    {cluster.topics.map((topic) => (
                      <li key={topic} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold">Ready to book?</h2>
          <p className="mx-auto mb-8 mt-4 max-w-xl text-muted-foreground">
            Browse available treatments or request a mobile spa appointment at your Cape Town location.
          </p>
          <Button asChild size="lg" className="luxury-gradient luxury-glow">
            <Link href="/booking">Book Your Treatment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
