import Script from "next/script";
import { FARAIOS_BUSINESS_ID, FARAIOS_TRACKING_SCRIPT } from "@/lib/faraios";

export function FaraiosScripts() {
  return (
    <Script
      src={FARAIOS_TRACKING_SCRIPT}
      strategy="afterInteractive"
      data-business-id={FARAIOS_BUSINESS_ID}
    />
  );
}
