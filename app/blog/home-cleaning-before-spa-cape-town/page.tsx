import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getRouteMetadata } from "@/routeMetadata";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = getRouteMetadata("blog/home-cleaning-before-spa-cape-town");

const SHALEAN_URL = "https://shalean.co.za";

export default function HomeCleaningBeforeSpaPostPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border/60 bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to blog
          </Link>
          <p className="text-sm font-medium uppercase tracking-wide text-primary">Wellness · Cape Town</p>
          <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Why a Clean Home Enhances Your At-Home Spa Experience in Cape Town
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" aria-hidden />
              February 4, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden />
              5 min read
            </span>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
        <div
          className="prose prose-lg max-w-none text-muted-foreground prose-headings:font-serif prose-headings:text-foreground prose-strong:text-foreground prose-a:text-primary prose-li:marker:text-primary"
        >
          <p className="text-xl text-muted-foreground">
            There&apos;s nothing quite like enjoying a luxury mobile spa experience in the comfort of your own home.
            Whether you&apos;re booking a deep tissue massage, a relaxing facial, or a full spa session, your environment
            plays a huge role in how you feel.
          </p>
          <p>
            One often overlooked detail? The cleanliness of your space.
          </p>

          <h2>A calm space creates a better experience</h2>
          <p>
            A clean and organised home helps you relax faster. When your surroundings are tidy, your mind follows. Clutter,
            dust, or lingering mess can subconsciously create stress — even during a massage.
          </p>
          <p>
            This is especially important for at-home spa treatments, where your living space becomes your sanctuary.
          </p>

          <h2>Why clients combine cleaning and spa services</h2>
          <p>
            Many clients in Cape Town choose to prepare their homes before their spa appointment. It allows them to:
          </p>
          <ul>
            <li>Fully unwind without distractions</li>
            <li>Enjoy a premium, hotel-like atmosphere</li>
            <li>Feel more comfortable hosting a therapist at home</li>
          </ul>
          <p>
            For busy professionals, families, or Airbnb hosts, this combination makes a big difference.
          </p>

          <h2>Professional cleaning before your spa session</h2>
          <p>
            If you don&apos;t have time to clean yourself, working with a professional cleaning service can transform your
            space quickly.
          </p>
          <p>
            We often recommend{" "}
            <a href={SHALEAN_URL} target="_blank" rel="noopener noreferrer">
              Shalean Cleaning Services
            </a>{" "}
            for reliable home cleaning in Cape Town. Their team prepares homes to a high standard, making it the perfect setup
            for a relaxing spa session.
          </p>

          <h2>The ultimate at-home luxury</h2>
          <p>
            Imagine stepping into a freshly cleaned home, soft music playing, and your spa therapist ready to begin your
            treatment. This is the level of comfort and luxury that mobile spa services are designed to deliver.
          </p>
          <p>
            Pairing professional cleaning with your spa booking turns a simple treatment into a full experience.
          </p>

          <h2>Book your spa experience</h2>
          <p>
            At Luxury Mobile Spa Cape Town, we bring massages, facials, and beauty treatments directly to your home.
          </p>
          <p>
            Whether you&apos;re in{" "}
            <Link href="/locations/sea-point">Sea Point</Link>, <Link href="/locations/camps-bay">Camps Bay</Link>,{" "}
            <Link href="/locations/constantia">Constantia</Link>, or <Link href="/locations/durbanville">Durbanville</Link>, you
            can enjoy a premium spa experience without leaving your space. Explore our{" "}
            <Link href="/services">mobile spa services</Link> — then{" "}
            <Link href="/booking">book your next session</Link> today and enjoy true relaxation at home.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3 border-t border-border/60 pt-10">
          <Button asChild size="lg" className="luxury-gradient luxury-glow">
            <Link href="/booking">Book your spa appointment</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">Explore treatments</Link>
          </Button>
        </div>
      </article>
    </div>
  );
}
