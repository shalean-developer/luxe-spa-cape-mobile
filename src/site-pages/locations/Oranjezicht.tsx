import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";

const Oranjezicht = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8" />
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Mobile Spa in Oranjezicht
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Boutique spa experiences in Cape Town's charming City Bowl neighborhood
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Artisan Spa Services in Oranjezicht</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Oranjezicht combines historic charm with contemporary sophistication. Our mobile spa services complement this unique neighborhood, bringing bespoke treatments to your Victorian home, modern apartment, or stylish townhouse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Weekend Wellness</h3>
              <p className="text-muted-foreground">
                After visiting the famous OzCF Market, unwind with a relaxing treatment in the comfort of your home.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Neighborhood Character</h3>
              <p className="text-muted-foreground">
                We understand the unique vibe of Oranjezicht and tailor our service to match its sophisticated, community-focused atmosphere.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Signature Oranjezicht Treatments</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Urban Retreat Massage:</strong> Escape city stress without leaving home</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Organic Facials:</strong> Natural products for the health-conscious</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Hot Stone Therapy:</strong> Deep relaxation in your private space</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Mani-Pedi Perfection:</strong> Salon-quality nail care at home</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Covering All of Oranjezicht</h3>
            <p className="text-muted-foreground mb-4">
              From the tree-lined streets near De Waal Park to the slopes beneath Table Mountain, we serve all corners of this beloved neighborhood.
            </p>
            <p className="text-muted-foreground">
              Ideal for young professionals, families, and anyone who appreciates the finer things in Cape Town living.
            </p>
          </div>

          <div className="text-center">
            <Link href="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your Oranjezicht Spa Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Oranjezicht;
