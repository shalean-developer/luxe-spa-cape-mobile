import { NextResponse } from "next/server";

import {
  getFaraiosPublicBookingsUrl,
  getFaraiosPublicServicesUrl,
  LUXURY_MOBILE_SPA_BUSINESS_ID,
} from "@/lib/faraios";

export async function GET() {
  try {
    const response = await fetch(getFaraiosPublicServicesUrl(), {
      next: { revalidate: 60 },
    });
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: data?.error ?? "Failed to load services." },
        { status: response.status },
      );
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to load services." }, { status: 502 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch(getFaraiosPublicBookingsUrl(LUXURY_MOBILE_SPA_BUSINESS_ID), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to submit booking." }, { status: 502 });
  }
}
