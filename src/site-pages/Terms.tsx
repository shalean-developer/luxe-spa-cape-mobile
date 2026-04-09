import { Sparkles } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="h-12 w-12 mx-auto mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Please read these terms carefully before booking our services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-2xl font-bold mb-4">1. Booking and Payment</h2>
            <p className="text-muted-foreground mb-6">
              All bookings must be made in advance via our website, phone, or WhatsApp. Full payment is required at the time of booking. We accept card payments through secure payment gateways.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">2. Cancellation Policy</h2>
            <p className="text-muted-foreground mb-6">
              Cancellations must be made at least 24 hours before the scheduled appointment. Cancellations made less than 24 hours in advance will incur a 50% cancellation fee. No-shows will be charged the full service amount.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">3. Service Area</h2>
            <p className="text-muted-foreground mb-6">
              We provide mobile spa services throughout Cape Town's premium areas including Camps Bay, Clifton, Constantia, Bishopscourt, Fresnaye, and surrounding suburbs. A travel fee may apply for locations outside our primary service area.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">4. Service Requirements</h2>
            <p className="text-muted-foreground mb-6">
              Clients must provide a suitable, clean space for treatments. For massage services, a quiet room with adequate space is required. Clients must inform us of any health conditions, allergies, or concerns prior to treatment.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">5. Professional Conduct</h2>
            <p className="text-muted-foreground mb-6">
              Our therapists are certified professionals committed to providing exceptional service. We expect clients to treat our staff with respect. Inappropriate behavior will result in immediate termination of service without refund.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">6. Liability</h2>
            <p className="text-muted-foreground mb-6">
              While we take every precaution, Luxury Mobile Spa is not liable for any allergic reactions, injuries, or complications arising from treatments. Clients are responsible for disclosing all relevant health information.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">7. Product Usage</h2>
            <p className="text-muted-foreground mb-6">
              We use premium, professional-grade products. If you have specific product preferences or allergies, please inform us at the time of booking.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">8. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              Luxury Mobile Spa reserves the right to update these terms and conditions at any time. Continued use of our services constitutes acceptance of any changes.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">9. Contact</h2>
            <p className="text-muted-foreground mb-6">
              For questions about these terms, please contact us at 068 184 9866 or info@luxurymspa.co.za
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
