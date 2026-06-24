import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Clock } from "lucide-react";

const WHATSAPP_HREF =
  "https://wa.me/27681849866?text=Hi%2C%20I'd%20like%20to%20book%20a%20massage%20treatment%20at%20home";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Book Now", href: "/booking" },
  { label: "Contact", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
] as const;

const Footer = () => {
  return (
    <footer className="bg-[hsl(221,39%,11%)] text-white">
      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-5">
            <Link href="/">
              <img
                src="/images/rejuvenation-logo.png"
                alt="Rejuvenation Mobile Massage"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/65">
              Cape Town&apos;s premier mobile spa. Professional massage, facials, and nails — brought to your doorstep.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
                { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-secondary hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/50">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/50">Contact</h3>
            <ul className="space-y-4">
              {[
                { href: "tel:0681849866", Icon: Phone, text: "068 184 9866" },
                { href: WHATSAPP_HREF, Icon: MessageCircle, text: "WhatsApp us", external: true },
                { href: "mailto:info@luxurymspa.co.za", Icon: Mail, text: "info@luxurymspa.co.za" },
              ].map(({ href, Icon, text, external }) => (
                <li key={text}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                      <Icon className="h-4 w-4" />
                    </span>
                    {text}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3 text-sm text-white/70">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <MapPin className="h-4 w-4" />
                </span>
                Cape Town, South Africa
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white/50">Hours</h3>
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/30">
                <Clock className="h-4 w-4 text-secondary" />
              </span>
              <div className="text-sm">
                <p className="text-white/70">Mon–Sun</p>
                <p className="mt-0.5 text-lg font-bold text-white">7:00 AM – 9:00 PM</p>
                <p className="mt-2 text-xs text-white/50">We come to you!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Rejuvenation Mobile Massage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
