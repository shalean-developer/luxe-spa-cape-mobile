import Script from "next/script";
import {
  FARAIOS_BOOKING_CONTAINER_ID,
  FARAIOS_BOOKING_SCRIPT,
  FARAIOS_BUSINESS_ID,
} from "@/lib/faraios";

type Props = {
  businessId?: string;
  containerId?: string;
};

export function FaraiosBookingEmbed({
  businessId = FARAIOS_BUSINESS_ID,
  containerId = FARAIOS_BOOKING_CONTAINER_ID,
}: Props) {
  return (
    <>
      <div
        id={containerId}
        className="mx-auto min-h-[28rem] w-full max-w-xl"
        aria-label="Online booking form"
      />
      <Script
        src={FARAIOS_BOOKING_SCRIPT}
        strategy="afterInteractive"
        data-business-id={businessId}
        data-container-id={containerId}
      />
    </>
  );
}
