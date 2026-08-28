import Image from "next/image";
import Link from "next/link";
import { BookButton } from "@/components/BookButton";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE = "/images/massage.jpg";

const HERO_TAGS = [
  "Personalized Mobile Spa Treatments",
  "Professional Mobile Therapists",
] as const;

export function HomeHero() {
  return (
    <section className="px-3 pb-2 pt-3 sm:px-4 sm:pt-4 md:px-5 lg:px-6">
      <div className="relative min-h-[min(88vh,820px)] overflow-hidden rounded-[1.75rem] md:min-h-[min(90vh,880px)] md:rounded-[2rem]">
        <Image
          src={HERO_IMAGE}
          alt="Relaxing mobile massage treatment at home in Cape Town"
          fill
          priority
          quality={70}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/20"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-primary/10"
          aria-hidden
        />

        <div className="relative flex min-h-[min(88vh,820px)] flex-col justify-between px-6 pb-10 pt-28 sm:px-10 sm:pt-32 md:min-h-[min(90vh,880px)] md:px-14 md:pb-14 md:pt-36 lg:px-16">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.75rem]">
              Relieve Stress, Restore Calm &amp;{" "}
              <span className="font-serif font-medium italic">Total Wellness</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg md:mt-6">
              Targeted mobile spa care focused on relieving tension, restoring glow, and bringing
              five-star massage, facials, and nails to your home, hotel, or office.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <BookButton className="group h-12 rounded-full bg-white pl-6 pr-1.5 text-base font-semibold text-primary shadow-lg hover:bg-white/95">
                <span className="flex items-center gap-3">
                  Book Your Treatment
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </span>
              </BookButton>

              <Link
                href="/services"
                className="group inline-flex h-12 items-center justify-center rounded-full border-2 border-white/70 bg-white/10 px-6 pr-1.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <span className="flex items-center gap-3">
                  Our Services
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:flex-wrap sm:items-end sm:justify-end sm:gap-10">
            {HERO_TAGS.map((tag) => (
              <div key={tag} className="flex items-center gap-3 border-l-2 border-white/40 pl-4">
                <p className="max-w-[200px] text-sm font-medium leading-snug text-white/90">{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
