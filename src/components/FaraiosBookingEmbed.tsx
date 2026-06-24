import { getFaraiosBookingEmbedUrl } from "@/lib/faraios";

type Props = {
  businessId?: string;
};

export function FaraiosBookingEmbed({ businessId }: Props) {
  return (
    <iframe
      src={getFaraiosBookingEmbedUrl(businessId)}
      title="Online booking form"
      className="mx-auto min-h-[42rem] w-full max-w-xl rounded-lg border-0 bg-transparent"
      loading="lazy"
    />
  );
}
