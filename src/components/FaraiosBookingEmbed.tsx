import { FaraiosBookingForm } from "@/components/FaraiosBookingForm";

type Props = {
  businessId?: string;
};

/** Loads services from FaraiOS public API (iframe SSR omits them due to RLS). */
export function FaraiosBookingEmbed({ businessId }: Props) {
  return <FaraiosBookingForm businessId={businessId} />;
}
