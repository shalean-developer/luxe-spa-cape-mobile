const DEFAULT_API_BASE = "https://faraios.vercel.app";
const DEFAULT_BUSINESS_ID = "235e9d72-b5c0-4b6e-b1ae-d6431cd6a992";

export const FARAIOS_API_BASE =
  process.env.NEXT_PUBLIC_FARAIOS_API_BASE ?? DEFAULT_API_BASE;

export const LUXURY_MOBILE_SPA_BUSINESS_ID =
  process.env.NEXT_PUBLIC_LUXURY_MOBILE_SPA_BUSINESS_ID ??
  process.env.NEXT_PUBLIC_FARAIOS_BUSINESS_ID ??
  DEFAULT_BUSINESS_ID;

/** @deprecated Use LUXURY_MOBILE_SPA_BUSINESS_ID */
export const FARAIOS_BUSINESS_ID = LUXURY_MOBILE_SPA_BUSINESS_ID;

export const FARAIOS_BOOKING_CONTAINER_ID = "faraios-booking";

export const FARAIOS_BOOKING_SCRIPT = `${FARAIOS_API_BASE}/embed/booking.js`;
export const FARAIOS_TRACKING_SCRIPT = `${FARAIOS_API_BASE}/tracking.js`;

export const FARAIOS_BOOKING_URL = `${FARAIOS_API_BASE}/book/${LUXURY_MOBILE_SPA_BUSINESS_ID}`;

export function getFaraiosPublicServicesUrl(businessId = LUXURY_MOBILE_SPA_BUSINESS_ID) {
  return `${FARAIOS_API_BASE}/api/public/business/${businessId}/services`;
}

export function getFaraiosPublicBookingsUrl(businessId = LUXURY_MOBILE_SPA_BUSINESS_ID) {
  return `${FARAIOS_API_BASE}/api/public/business/${businessId}/bookings`;
}

/** Iframe embed — services load via public API in FaraiosBookingForm instead. */
export function getFaraiosBookingEmbedUrl(businessId = LUXURY_MOBILE_SPA_BUSINESS_ID) {
  return `${FARAIOS_API_BASE}/book/${businessId}?embed=1`;
}
