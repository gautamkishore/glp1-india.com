import TopBar from "@/components/sections/TopBar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import WhatAreGLP1s from "@/components/sections/WhatAreGLP1s";
import WhyGLP1Alone from "@/components/sections/WhyGLP1Alone";
import ComparisonTable from "@/components/sections/ComparisonTable";
import WeightWonder from "@/components/sections/WeightWonder";
import FAQ from "@/components/sections/FAQ";
import UrgencyStrip from "@/components/sections/UrgencyStrip";
import FinalCTA from "@/components/sections/FinalCTA";
import Sources from "@/components/sections/Sources";
import Footer from "@/components/sections/Footer";
import Script from "next/script";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Google Tag Manager - noscript fallback */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>

      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-green-600 focus:text-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to main content
      </a>

      <TopBar />
      <Hero />
      <StatsBar />
      <WhatAreGLP1s />
      <WhyGLP1Alone />
      <ComparisonTable />
      <WeightWonder />
      <FAQ />
      <UrgencyStrip />
      <FinalCTA />
      <Sources />
      <Footer />

      {/* Google tag (gtag.js) — replace with real ID */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        `}
      </Script>
    </main>
  );
}