# Maghribi Luxury Real Estate Website

A premium Next.js real-estate website for Maghribi Group of Companies, focused on plotted developments, lead generation, SEO, security, and maintainable project data.

## Stack

- Next.js App Router
- React + TypeScript
- CSS modules-style global design tokens in `src/app/globals.css`
- Framer Motion
- Lucide React
- Zod validation
- Server-side lead API prepared for Google Apps Script or Google Sheets integration

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and update:

```bash
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_CONTACT_PHONE=
NEXT_PUBLIC_CONTACT_EMAIL=
GOOGLE_SHEET_ENDPOINT=
LEAD_RATE_LIMIT_WINDOW_MS=60000
LEAD_RATE_LIMIT_MAX=5
```

`GOOGLE_SHEET_ENDPOINT` must point to a secure Google Apps Script endpoint or a server-owned sheet integration. Do not place Sheet URLs, service-account credentials, or private keys in frontend code.

## Content Replacement

Primary replacement files:

- `src/config/site.ts`: company name, phone, WhatsApp, email, address, social links
- `src/config/navigation.ts`: navigation labels and routes
- `src/data/projects.ts`: project names, locations, approvals, plot sizes, prices, images, SEO text
- `src/data/amenities.ts`: amenity and investment-benefit content
- `src/data/locations.ts`: verified distances, landmarks, and statistics
- `src/data/testimonials.ts`: only replace with verified testimonials before production

Images are currently remote editorial placeholders because no project photos were provided as files. The folder structure under `public/images/` is ready for local production assets.

## Lead API

Forms submit to `POST /api/leads`.

Implemented protections:

- Server-side Zod validation
- Maximum field lengths
- Basic sanitization
- Honeypot spam field
- In-memory rate limiting
- Generic API errors without stack traces
- UTM capture from the browser
- Server-only Google Sheets forwarding

For a serverless production deployment, replace the in-memory limiter with a shared store such as Redis, Upstash, or the platform's edge rate limiting.

## SEO

Implemented:

- App metadata
- Canonical metadata
- Open Graph and Twitter metadata
- `robots.ts`
- `sitemap.ts`
- RealEstateAgent structured data
- Project detail metadata
- Semantic headings and descriptive alt text

## Verification

Run:

```bash
npm run typecheck
npm run build
```

In this workspace, verification was blocked by system disk space: npm could not fully install Next.js dependencies with `ENOSPC: no space left on device`. Free additional disk space, run `npm install`, then run the checks above.
