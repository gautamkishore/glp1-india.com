import type { Metadata } from "next";
import TopBar from "@/components/sections/TopBar";
import Footer from "@/components/sections/Footer";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "GLP-1 for PCOS Weight Loss India: Dosage, Cost & Clinical Guide (2026)",
  description: "An authoritative guide on using GLP-1 medications (Semaglutide, Liraglutide) to treat insulin resistance and weight gain in PCOS under medical supervision in India.",
  alternates: {
    canonical: "https://glp1-india.com/pcos-weight-loss",
  },
  keywords: [
    "glp-1 for pcos weight loss india",
    "semaglutide pcos cost india",
    "weight loss injection for pcos in india",
    "pcos insulin resistance treatment",
    "generic semaglutide pcos india",
  ],
};

const PCOS_FAQ = [
  {
    question: "Why do standard diets fail for PCOS weight loss?",
    answer: "PCOS creates severe cellular insulin resistance, meaning glucose gets stored as fat rather than converted to energy, regardless of calorie restriction. GLP-1 agonists address this underlying metabolic dysfunction directly by improving insulin sensitivity and regulating blood sugar levels.",
  },
  {
    question: "Is Semaglutide CDSCO-approved for PCOS in India?",
    answer: "Semaglutide is CDSCO-approved in India for Type 2 Diabetes and chronic weight management. Since obesity and insulin resistance are the driving drivers of PCOS symptoms, endocrinologists frequently prescribe GLP-1s off-label to manage metabolic PCOS weight gain.",
  },
  {
    question: "What is the monthly cost of PCOS GLP-1 treatment in India?",
    answer: "With the introduction of generic semaglutide in March 2026, monthly medication costs start from as low as ₹1,290. However, a complete supervised program (including physician consultations and metabolic health coaching) typically ranges between ₹3,000 to ₹7,000 per month.",
  },
  {
    question: "Will I regain weight if I stop GLP-1 therapy?",
    answer: "PCOS is a chronic metabolic condition. If you stop GLP-1 therapy without establishing metabolic flexibility, weight regain is highly likely. This is why WeightWonder combines the medication with a dedicated nutrition, protein-retention, and behavioral program to ensure long-term maintenance.",
  },
];

export default function PcosWeightLoss() {
  const customWhatsAppUrl = "https://wa.me/918878199499?text=Hi%2C%20found%20you%20on%20GLP1-India.com's%20PCOS%20guide.%20I%20want%20to%20know%20how%20GLP-1%20can%20help%20with%20my%20PCOS%20weight%20loss.";

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <TopBar />

      {/* Cross-site network banner */}
      <div className="bg-blue-950 text-blue-100 text-xs py-2 px-4 text-center">
        <span className="font-semibold">GLP-1 India Research Network:</span>
        {' '}
        <a href="https://glp1compare.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">⚖️ Compare All Indian Brands &amp; Costs</a>
        {' · '}
        <a href="https://semaglutideindia.top" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">💊 Start Supervised Treatment</a>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50/50 to-white py-16 md:py-24 border-b border-gray-100">
        <div className="container-px max-w-4xl text-center">
          <span className="inline-block bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full mb-4">
            Clinical Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            GLP-1 Therapy for PCOS Weight Loss in India (2026)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            How clinical GLP-1 receptor agonists directly target insulin resistance, hormone imbalances, and persistent weight gain associated with Polycystic Ovary Syndrome (PCOS).
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={customWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="wa-cta">
              Check PCOS Eligibility
            </a>
            <a href="#scientific-breakdown" className="inline-flex items-center justify-center border border-gray-300 hover:border-brand-600 hover:text-brand-600 bg-white font-semibold py-3 px-8 rounded-full transition-all duration-300 text-base text-gray-700">
              Read the Science First
            </a>
          </div>
        </div>
      </section>

      {/* Scientific Breakdown */}
      <section id="scientific-breakdown" className="py-16 container-px max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
          The PCOS Metabolic Gridlock: Why Standard Diets Fail
        </h2>
        <div className="prose max-w-none text-gray-600 space-y-6 text-base leading-relaxed">
          <p>
            For individuals with Polycystic Ovary Syndrome (PCOS), losing weight is not a simple matter of willpower or calorie math. The root driver is **hyperinsulinemia** (excessive insulin in the bloodstream) caused by cellular insulin resistance. This hormonal imbalance forces the body to partition incoming calories into fat storage rather than metabolic fuel, triggering constant sugar cravings and exhaustion.
          </p>
          <p>
            Traditional weight loss attempts that only focus on calorie restriction often result in metabolic slowdown, leaving patients fatigued without showing results on the scale.
          </p>

          <div className="my-8 p-6 rounded-2xl bg-blue-50 border border-blue-100">
            <h3 className="text-lg font-bold text-blue-950 mb-2">How GLP-1 Agonists Break the Gridlock</h3>
            <ul className="space-y-3 mt-4 text-blue-900">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✓</span>
                <span><strong>Sensitizes Insulin Pathways:</strong> Optimizes how cells absorb glucose, reducing insulin spikes and fat accumulation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✓</span>
                <span><strong>Regulates Gastric Emptying:</strong> Slows digestive transit, preventing rapid glucose spikes after meals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">✓</span>
                <span><strong>Stops Hormonal Cravings:</strong> Targets GLP-1 receptors in the brain to reduce the obsessive food noise common in PCOS.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="container-px max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 text-center mb-10">
            PCOS Weight Loss Approaches Compared
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <span className="text-xs font-bold uppercase text-red-500 tracking-wider">Traditional Method</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">DIY Calorie Restriction</h3>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex gap-2">❌ Fits poorly with severe insulin resistance.</li>
                <li className="flex gap-2">❌ High risk of muscle wastage and metabolic drop.</li>
                <li className="flex gap-2">❌ High drop-out rates due to constant hormonal hunger.</li>
              </ul>
            </div>
            <div className="bg-white border border-brand-200 rounded-2xl p-6 shadow-sm ring-1 ring-brand-500/25">
              <span className="text-xs font-bold uppercase text-brand-600 tracking-wider">Medical Method</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Supervised GLP-1 Program</h3>
              <ul className="space-y-2.5 text-sm text-gray-600">
                <li className="flex gap-2">✅ Addresses hormone receptor sensitivity directly.</li>
                <li className="flex gap-2">✅ Muscle retention support via personalized nutrition.</li>
                <li className="flex gap-2">✅ High adherence by eliminating chemical sugar cravings.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CDSCO / Generics Section */}
      <section className="py-16 container-px max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
          Domestic Generic Semaglutide: Making PCOS Support Affordable
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Until recently, importing brand-name GLP-1 medications like Ozempic or Wegovy cost Indian patients upwards of ₹15,000–₹25,000 per month. With the patent expiry of Semaglutide in March 2026, leading Indian pharmaceutical manufacturers (such as Sun Pharma, Dr. Reddy’s, Zydus, and Natco) have introduced high-quality, CDSCO-approved generic semaglutide. 
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          These generic treatments start as low as **₹1,290/month**, removing the cost barrier for women managing PCOS symptoms. However, using these medications for PCOS requires a custom titration schedule to minimize side effects and match individual hormone profiles.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-sm text-amber-800">
          <p className="font-semibold mb-1">⚠️ Warning: All GLP-1s are Schedule H Drugs in India</p>
          Self-prescribing or buying from gray market suppliers without clinical supervision is highly unsafe. High-dose mistakes can lead to severe pancreatitis, muscle loss, and thyroid concerns. Always consult an endocrinologist.
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container-px max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 text-center mb-8">
            PCOS GLP-1 FAQ
          </h2>
          <div className="space-y-4">
            {PCOS_FAQ.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-200 open:shadow-sm">
                <summary className="cursor-pointer list-none pr-6 text-base font-bold text-gray-900 leading-tight">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
