import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
  const phoneNumber = "27681849866"; // Format: country code + number without +
  const message = "Hi, I'd like to book a spa treatment";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-smooth luxury-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppWidget;
