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

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-green-600 focus:text-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to main content
      </a>

      <TopBar />
      {/* Cross-site network banner */}
      <div className="bg-blue-950 text-blue-100 text-xs py-2 px-4 text-center">
        <span className="font-semibold">GLP-1 India Research Network:</span>
        {' '}
        <a href="https://glp1compare.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">⚖️ Compare All Indian Brands &amp; Costs</a>
        {' · '}
        <a href="https://semaglutideindia.top" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">💊 Start Supervised Treatment</a>
      </div>
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

    </main>
  );
}