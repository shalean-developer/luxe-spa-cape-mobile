import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const Franschhoek = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Mobile Spa in Franschhoek | Luxury Spa Winelands"
        description="Luxury mobile spa services in Franschhoek, Cape Winelands. Wine estate massage, facials & pampering treatments. Book 24/7."
        keywords="mobile spa franschhoek, massage franschhoek, spa cape winelands"
        canonical="/locations/franschhoek"
      />
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8" />
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Mobile Spa in Franschhoek
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center opacity-90">
            Wine country spa experiences in South Africa's culinary capital
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold mb-6">Vineyard Spa Services in Franschhoek</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Franschhoek, the French Corner, is renowned for its world-class wines, gourmet restaurants, and breathtaking mountain scenery. Our mobile spa services complement this luxurious lifestyle, bringing vineyard-inspired treatments to your wine estate, boutique hotel, or holiday home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/30 p-8 rounded-lg">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Wine Estate Service</h3>
              <p className="text-muted-foreground">
                We travel to wine estates and guest houses throughout the Franschhoek Valley for your convenience.
              </p>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <Sparkles className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-3">Gourmet Wellness</h3>
              <p className="text-muted-foreground">
                After a day of wine tasting and fine dining, complete your experience with rejuvenating spa treatments.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold mb-6">Signature Franschhoek Treatments</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Vinotherapy Massage:</strong> Grape seed oil and wine-inspired relaxation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Mountain View Hot Stones:</strong> Deep heat therapy with valley vistas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Antioxidant Facial:</strong> Wine-country skincare with local ingredients</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span><strong>Couples Estate Experience:</strong> Romantic spa for wine-loving pairs</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary/10 p-8 rounded-lg mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Covering the Franschhoek Valley</h3>
            <p className="text-muted-foreground mb-4">
              From the village center along Huguenot Road to the prestigious wine estates in the surrounding valley, we bring spa luxury to every corner of this world-famous destination.
            </p>
            <p className="text-muted-foreground">
              Perfect for wine tourists, wedding parties, and residents of South Africa's most celebrated valley.
            </p>
          </div>

          <div className="text-center">
            <Link to="/booking">
              <Button size="lg" className="luxury-gradient luxury-glow">
                Book Your Franschhoek Spa Experience
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franschhoek;
