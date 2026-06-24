"use client";

import { useEffect } from "react";
import {
  FARAIOS_BOOKING_CONTAINER_ID,
  FARAIOS_BOOKING_SCRIPT,
  FARAIOS_BUSINESS_ID,
} from "@/lib/faraios";

export function FaraiosBookingEmbed() {
  useEffect(() => {
    if (document.querySelector('script[data-faraios="booking"]')) {
      return;
    }

    const container = document.getElementById(FARAIOS_BOOKING_CONTAINER_ID);
    if (!container) {
      return;
    }

    const script = document.createElement("script");
    script.src = FARAIOS_BOOKING_SCRIPT;
    script.setAttribute("data-business-id", FARAIOS_BUSINESS_ID);
    script.setAttribute("data-faraios", "booking");
    container.insertAdjacentElement("afterend", script);
  }, []);

  return (
    <div
      id={FARAIOS_BOOKING_CONTAINER_ID}
      className="mx-auto min-h-[28rem] w-full max-w-xl"
      aria-label="Online booking form"
    />
  );
}
