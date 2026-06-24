"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  getFaraiosPublicBookingsUrl,
  getFaraiosPublicServicesUrl,
  LUXURY_MOBILE_SPA_BUSINESS_ID,
} from "@/lib/faraios";

type FaraiosService = {
  id: string;
  name: string;
  description?: string | null;
  basePriceCents?: number;
  durationMinutes?: number;
};

type Props = {
  businessId?: string;
};

function formatPrice(cents?: number) {
  if (cents == null) return "";
  return `R ${(cents / 100).toFixed(0)}`;
}

export function FaraiosBookingForm({
  businessId = LUXURY_MOBILE_SPA_BUSINESS_ID,
}: Props) {
  const { toast } = useToast();
  const [services, setServices] = useState<FaraiosService[]>([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    serviceId: "",
    bookingDate: "",
    preferredTime: "",
    address: "",
    notes: "",
    consent: false,
  });

  useEffect(() => {
    let cancelled = false;

    async function loadServices() {
      try {
        const response = await fetch(getFaraiosPublicServicesUrl(businessId));
        const data = (await response.json()) as {
          ok?: boolean;
          services?: FaraiosService[];
        };

        if (!cancelled && data.ok && Array.isArray(data.services)) {
          setServices(data.services);
        }
      } catch {
        if (!cancelled) {
          toast({
            title: "Could not load services",
            description: "Please refresh the page or contact us to book.",
            variant: "destructive",
          });
        }
      } finally {
        if (!cancelled) setLoadingServices(false);
      }
    }

    loadServices();
    return () => {
      cancelled = true;
    };
  }, [businessId, toast]);

  const selectedService = services.find((service) => service.id === form.serviceId);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!form.customerName || !form.customerEmail || !form.serviceId || !form.bookingDate || !form.consent) {
      toast({
        title: "Missing information",
        description: "Please complete all required fields.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(getFaraiosPublicBookingsUrl(businessId), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: form.customerName,
          customerEmail: form.customerEmail,
          customerPhone: form.customerPhone || undefined,
          serviceId: form.serviceId,
          service: selectedService?.name,
          bookingDate: form.bookingDate,
          preferredTime: form.preferredTime || undefined,
          address: form.address || undefined,
          notes: form.notes || undefined,
          consentGiven: form.consent,
          sourceWebsite: window.location.href,
        }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Booking request failed.");
      }

      setSubmitted(true);
      toast({
        title: "Booking request sent",
        description: "We will confirm your appointment shortly.",
      });
    } catch (error) {
      toast({
        title: "Could not submit booking",
        description: error instanceof Error ? error.message : "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
        <p className="font-serif text-xl font-semibold text-foreground">Thank you for your request</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Our team will confirm your booking by email or phone shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="booking-name">Full name *</Label>
          <Input
            id="booking-name"
            required
            value={form.customerName}
            onChange={(event) => setForm((current) => ({ ...current, customerName: event.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-email">Email *</Label>
          <Input
            id="booking-email"
            type="email"
            required
            value={form.customerEmail}
            onChange={(event) => setForm((current) => ({ ...current, customerEmail: event.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-phone">Phone</Label>
          <Input
            id="booking-phone"
            type="tel"
            value={form.customerPhone}
            onChange={(event) => setForm((current) => ({ ...current, customerPhone: event.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-service">Service *</Label>
          <Select
            value={form.serviceId}
            onValueChange={(value) => setForm((current) => ({ ...current, serviceId: value }))}
            disabled={loadingServices || services.length === 0}
          >
            <SelectTrigger id="booking-service">
              <SelectValue placeholder={loadingServices ? "Loading services..." : "Select a service"} />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.name}
                  {service.basePriceCents != null ? ` — ${formatPrice(service.basePriceCents)}` : ""}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-date">Preferred date *</Label>
          <Input
            id="booking-date"
            type="date"
            required
            value={form.bookingDate}
            onChange={(event) => setForm((current) => ({ ...current, bookingDate: event.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-time">Preferred time</Label>
          <Input
            id="booking-time"
            type="time"
            value={form.preferredTime}
            onChange={(event) => setForm((current) => ({ ...current, preferredTime: event.target.value }))}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="booking-address">Service address</Label>
        <Textarea
          id="booking-address"
          rows={3}
          value={form.address}
          onChange={(event) => setForm((current) => ({ ...current, address: event.target.value }))}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="booking-notes">Additional notes</Label>
        <Textarea
          id="booking-notes"
          rows={3}
          value={form.notes}
          onChange={(event) => setForm((current) => ({ ...current, notes: event.target.value }))}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))}
          className="mt-1"
        />
        <span>I agree to be contacted about this booking request.</span>
      </label>

      <Button type="submit" className="w-full luxury-gradient luxury-glow" disabled={submitting || loadingServices}>
        {submitting ? "Sending request..." : "Request booking"}
      </Button>
    </form>
  );
}
