"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookButton } from "@/components/BookButton";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Locations", path: "/locations" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "z-50 w-full",
        isHome
          ? "pointer-events-none fixed left-0 right-0 top-3 px-3 sm:top-4 sm:px-4 md:px-6"
          : "sticky top-0 border-b border-border/40 bg-white/95 shadow-sm backdrop-blur-md",
      )}
    >
      <nav
        className={cn(
          "pointer-events-auto",
          isHome
            ? "mx-auto flex max-w-6xl flex-col rounded-full bg-white px-4 py-2.5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)] sm:px-5 lg:py-3"
            : "container mx-auto px-4 sm:px-6 lg:px-8",
        )}
      >
        <div className={cn("flex items-center justify-between gap-3", !isHome && "h-16 lg:h-[4.5rem]")}>
          <Link
            href="/"
            className={cn(
              "flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white ring-2 ring-primary/30 shadow-[0_4px_14px_rgba(30,58,138,0.18)] transition-all hover:ring-primary/45 hover:shadow-[0_6px_18px_rgba(30,58,138,0.22)]",
              isHome ? "h-9 sm:h-10" : "h-10 sm:h-11",
            )}
          >
            <img
              src="/images/rejuvenation-logo.png"
              alt="Rejuvenation Mobile Massage"
              className="h-full w-auto max-w-[9.5rem] object-contain object-center contrast-[1.08] saturate-[1.05] sm:max-w-[10.5rem]"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex lg:flex-1 lg:justify-center">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-secondary"
                      : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            {!isHome && (
              <a href="tel:0681849866">
                <Button variant="ghost" size="sm" className="gap-2 rounded-full text-foreground/80 hover:text-primary">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-3.5 w-3.5 text-primary" />
                  </span>
                  068 184 9866
                </Button>
              </a>
            )}
            <BookButton
              size="sm"
              className={cn(
                "group gap-0 rounded-full pl-5 pr-1.5 font-semibold",
                isHome
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "luxury-gradient luxury-glow",
              )}
            >
              <span className="flex items-center gap-2">
                Book Now
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5",
                    isHome ? "bg-white text-primary" : "bg-white/20 text-white",
                  )}
                >
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </span>
            </BookButton>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2.5 text-foreground hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div
            className={cn(
              "pb-4 pt-3 lg:hidden animate-fade-in",
              isHome ? "border-t border-border/30" : "border-t border-border/40",
            )}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium",
                    pathname === item.path ? "text-secondary" : "text-foreground/80 hover:bg-slate-50",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-2 border-t border-border/30 pt-4">
              <a href="tel:0681849866">
                <Button variant="outline" className="w-full gap-2 rounded-full">
                  <Phone className="h-4 w-4" />
                  068 184 9866
                </Button>
              </a>
              <BookButton className="w-full rounded-full bg-primary text-primary-foreground">
                <span className="flex items-center justify-center gap-2">
                  Book Now
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </BookButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
