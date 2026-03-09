import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import luxuryLogo from "@/assets/luxury-logo.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Locations", path: "/locations" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/98 backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-smooth hover:opacity-80">
            <img src={luxuryLogo} alt="Luxury Mobile Spa" className="h-28 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-medium text-foreground/80 transition-smooth hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <a href="tel:0681849866">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                068 184 9866
              </Button>
            </a>
            <a
              href="https://wa.me/27681849866?text=Hi%2C%20I'd%20like%20to%20book%20a%20spa%20treatment"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="luxury-gradient luxury-glow">Book Now</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="pb-4 md:hidden animate-fade-in">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-smooth hover:bg-muted hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
              <a href="tel:0681849866" className="w-full">
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  068 184 9866
                </Button>
              </a>
              <a
                href="https://wa.me/27681849866?text=Hi%2C%20I'd%20like%20to%20book%20a%20spa%20treatment"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full luxury-gradient luxury-glow">Book Now</Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
