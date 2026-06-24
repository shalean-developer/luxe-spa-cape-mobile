import Script from "next/script";
import {
  FARAIOS_BOOKING_CONTAINER_ID,
  FARAIOS_BOOKING_SCRIPT,
  LUXURY_MOBILE_SPA_BUSINESS_ID,
} from "@/lib/faraios";

type Props = {
  businessId?: string;
};

export function FaraiosBookingEmbed({
  businessId = LUXURY_MOBILE_SPA_BUSINESS_ID,
}: Props) {
  return (
    <div className="mx-auto w-full max-w-xl [&_form>div:first-child]:hidden">
      <div
        id={FARAIOS_BOOKING_CONTAINER_ID}
        className="min-h-[28rem] w-full"
        aria-label="Online booking form"
      />
      <Script
        src={FARAIOS_BOOKING_SCRIPT}
        strategy="afterInteractive"
        data-business-id={businessId}
        data-container-id={FARAIOS_BOOKING_CONTAINER_ID}
      />
    </div>
  );
}
