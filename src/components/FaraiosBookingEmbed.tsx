import { getFaraiosBookingEmbedUrl } from "@/lib/faraios";

type Props = {
  businessId?: string;
};

/**
 * Iframe embed (works today). After FaraiOS redeploys booking.js, switch to:
 * <div id="faraios-booking" /> + next/script with data-business-id + data-container-id
 */
export function FaraiosBookingEmbed({ businessId }: Props) {
  return (
    <iframe
      src={getFaraiosBookingEmbedUrl(businessId)}
      title="Book an appointment"
      className="w-full min-h-[720px] rounded-xl border-0 bg-transparent"
      loading="lazy"
    />
  );
}
