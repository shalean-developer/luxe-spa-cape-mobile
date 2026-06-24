# Rejuvenation Mobile Massage – Cape Town

A premium mobile spa booking platform built with Next.js, designed for performance, SEO, and high conversion.

---

## 🚀 Project Overview

Rejuvenation Mobile Massage allows customers in Cape Town to book at-home spa treatments including massages, facials, and nail services.

The platform is optimized for:

* Fast performance
* SEO ranking
* Mobile-first user experience
* High booking conversion

---

## 🧱 Tech Stack

* Next.js (App Router)
* React (Server + Client Components)
* TypeScript
* Tailwind CSS
* shadcn-ui

---

## 📁 Project Structure

```
app/                # Routes (App Router)
  page.tsx          # Homepage
  booking/          # Booking page
  services/         # Services pages

src/
  components/       # UI components
  site-pages/       # Page compositions
  lib/              # Utilities

public/
  images/           # Static assets
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_GIT_URL>
cd luxe-spa-cape-mobile
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

If you hit a stale cache or dev server errors, use a clean start:

```bash
npm run dev:fresh
```

### Internal Server Error (500) in dev

Usually a **broken or half-deleted `.next` folder** (Windows + webpack cache). This project disables webpack’s **persistent disk cache in development** to reduce that.

**Do this:**

1. Stop **every** `next dev` (all terminals) — only one dev server on port 3000.
2. Do **not** run `npm run clean` while `next dev` is still running (two terminals will delete files out from under the server).
3. Start again: `npm run dev:fresh`, wait until you see **“Compiled /”** (or “Ready”), then open the site.

If it still fails, exclude the project folder from aggressive real-time antivirus scanning of `.next` (common on Windows).

---

## 🔐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
PAYSTACK_SECRET_KEY=
```

Public client keys use the `NEXT_PUBLIC_` prefix. Keep secrets (e.g. Paystack) server-only.

---

## 🌍 SEO & Performance

* Server Components used for minimal JS
* Optimized images via Next.js
* Structured metadata + Open Graph
* Location-based SEO pages (Cape Town suburbs)

---

## 📦 Deployment

Recommended:

* Vercel (best for Next.js)

```bash
npm run build
npm start
```

---

## 📌 Roadmap

* [ ] Booking system (Supabase)
* [ ] Payment integration (Paystack)
* [ ] Admin dashboard
* [ ] Customer notifications

---

## 🧠 Notes

* This project was migrated from Vite → Next.js
* Uses App Router (no React Router)
* Tailwind configured via `app/globals.css`

---

## 📞 Business Goal

To become the leading mobile spa booking platform in Cape Town by combining luxury branding with seamless online booking.

---
