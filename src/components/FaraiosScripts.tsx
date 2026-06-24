"use client";

import { useEffect } from "react";
import { FARAIOS_BUSINESS_ID, FARAIOS_TRACKING_SCRIPT } from "@/lib/faraios";

export function FaraiosScripts() {
  useEffect(() => {
    if (document.querySelector('script[data-faraios="tracking"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = FARAIOS_TRACKING_SCRIPT;
    script.setAttribute("data-business-id", FARAIOS_BUSINESS_ID);
    script.setAttribute("data-faraios", "tracking");
    document.body.appendChild(script);
  }, []);

  return null;
}
