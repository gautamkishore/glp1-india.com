# GLP-1 India — Educational Authority Landing Page

Production-ready Next.js 15 landing page for glp1-india.com. Research-backed, SEO-optimized educational resource on GLP-1 receptor agonist therapies in India.

## Tech Stack

- **Next.js 15.5** (App Router)
- **React 19** (Server Components)
- **TypeScript 5.8**
- **Tailwind CSS 3.4**
- **Framer Motion 11** (animations)
- **Google Fonts**: Inter + Outfit via `next/font/google`

## Project Structure

```
glp1-india.com/
├── app/
│   ├── globals.css          # Global styles + Tailwind directives
│   ├── layout.tsx           # Root layout, fonts, schema.org JSON-LD
│   └── page.tsx             # Landing page (all 11 sections)
├── components/sections/
│   ├── TopBar.tsx           # Sticky nav with logo + WhatsApp CTA
│   ├── Hero.tsx             # Hero with badge, H1, CTAs
│   ├── StatsBar.tsx         # 4 key stats
│   ├── WhatAreGLP1s.tsx     # 3 molecule cards + legal warning
│   ├── WhyGLP1Alone.tsx     # 4 risk cards + fear callout
│   ├── ComparisonTable.tsx  # Full comparison table (responsive)
│   ├── WeightWonder.tsx     # Dark section: 6 glassmorphism cards + metrics
│   ├── FAQ.tsx              # 8 FAQ accordion items
│   ├── UrgencyStrip.tsx     # Banner strip with CTA
│   ├── FinalCTA.tsx         # Final CTA with email form + WhatsApp
│   ├── Sources.tsx          # 6 reference links
│   └── Footer.tsx           # Full footer with nav + disclaimer
├── public/
│   └── robots.txt
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## SEO & Structured Data

JSON-LD schemas in `app/layout.tsx`:
- **MedicalWebPage** + **FAQPage**
- **Drug** (Semaglutide, Liraglutide, Tirzepatide)
- **Organization**

SEO metadata:
- Title: `GLP-1 Weight Loss India 2026: Ozempic, Saxenda, Mounjaro — Complete Guide`
- Canonical: `https://glp1-india.com`
- OpenGraph + Twitter Card configured
- Meta keywords: 14 long-tail medical keywords
- `robots.txt` + sitemap reference

## All 11 Sections

1. **Top Bar** — Sticky nav, GLP-1 India branding, WhatsApp link
2. **Hero** — Badge, H1, subtext, dual CTAs, floating stats pills
3. **Stats Bar** — Generic since, cost, molecules, specialist support
4. **What Are GLP-1s** — 3 molecule cards (Semaglutide ✓, Liraglutide, Tirzepatide), full brand + generic lists, Schedule H warning
5. **Why GLP-1 Alone Isn't Enough** — 4 risk cards, ₹15K callout box
6. **Comparison Table** — 10-row table, ✅/⚠️/❌ system, honest WW note
7. **WeightWonder (Brand)** — 6 glassmorphism cards, greed metrics, Dr. Pooja quote
8. **FAQ** — 8 expandable items (accordion)
9. **Urgency Strip** — Animated banner + consultation CTA
10. **Final CTA** — Email button (mailto:glp1@einsteinaura.com) + WhatsApp
11. **Sources + Footer** — 6 references, full footer nav, medical disclaimer

## WhatsApp Integration

Primary CTA links to:
```
https://wa.me/918878199499?text=Hi%2C%20found%20you%20on%20GLP1-India.com.%20I%20want%20to%20know%20about%20GLP-1%20support.
```

Floating WhatsApp button on all pages (fixed bottom-right).

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build
npm run start      # Production server
```

## Content Strategy

- **Before the WeightWonder section**: Independent editorial content (no branding)
- **From WeightWonder onward**: Brand positioning with transparency
- All medical claims backed by STEP/SURMOUNT trial data + CDSCO approvals
- Google AI agent optimization: schema.org markup, FAQPage, clear headings

## Key Design Decisions

- "Medical journal meets modern web" aesthetic
- Brand colors: brand-600 blue, medical-500 green, dark-950 for WeightWonder section
- Glassmorphism cards on dark background for WeightWonder
- Responsive: desktop table view, mobile card view for comparison
- All SVGs inline for performance (no icon library dependency)