import type { Metadata } from "next";
import TopBar from "@/components/sections/TopBar";
import Footer from "@/components/sections/Footer";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Managing GLP-1 Side Effects with an Indian Diet: Nausea & Reflux Tips",
  description: "A complete guide on adjusting traditional Indian foods to manage nausea, constipation, and muscle loss on GLP-1 (Semaglutide) weight loss programs.",
  alternates: {
    canonical: "https://glp1-india.com/glp1-side-effects-indian-diet",
  },
  keywords: [
    "glp-1 nausea relief indian diet",
    "semaglutide constipation management india",
    "what to eat on ozempic indian food",
    "prevent muscle loss semaglutide india",
  ],
};

const DIET_FAQ = [
  {
    question: "Why do GLP-1 medications cause nausea?",
    answer: "GLP-1 receptor agonists slow down gastric emptying, keeping food in your stomach longer. Consuming large meals, fatty/fried foods, or eating too fast can lead to stomach pressure and nausea.",
  },
  {
    question: "How can I prevent muscle loss on generic Semaglutide?",
    answer: "Rapid weight loss on GLP-1s often results in muscle wasting if protein intake is insufficient. Aim for at least 1.2g to 1.5g of protein per kilogram of body weight daily. In an Indian diet, prioritize paneer, sattu, tofu, curd, lentils, and clean whey protein isolate.",
  },
  {
    question: "Is tea or coffee safe to drink while on GLP-1s?",
    answer: "High caffeine intake can exacerbate acid reflux, a common side effect of slowed digestion. It is best to limit tea (chai) and coffee, avoid drinking them on an empty stomach, and switch to soothing alternatives like buttermilk (chaas) or coconut water.",
  },
];

export default function IndianDietGuide() {
  const customWhatsAppUrl = "https://wa.me/918878199499?text=Hi%2C%20found%20you%20on%20GLP1-India.com's%20Indian%20diet%20guide.%20I%20want%20to%20know%20how%20to%20manage%20side%20effects%20safely.";

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
            Dietary Guidance
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            Managing GLP-1 Side Effects with an Indian Diet
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            A practical guide to structuring your traditional Indian meals to eliminate nausea, prevent muscle loss, and support healthy digestion during Semaglutide therapy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={customWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="wa-cta">
              Get Custom Diet Plan
            </a>
            <a href="#diet-rules" className="inline-flex items-center justify-center border border-gray-300 hover:border-brand-600 hover:text-brand-600 bg-white font-semibold py-3 px-8 rounded-full transition-all duration-300 text-base text-gray-700">
              View Food Checklist
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="diet-rules" className="py-16 container-px max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
          Adapting Indian Food for Slowed Digestion
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Because GLP-1 receptor agonists significantly delay gastric emptying, food sits in the stomach for a longer duration. When consuming traditional Indian cooking—which often features complex spices, heavy oils, and carbohydrate-heavy profiles—this delayed digestion can manifest as acid reflux, bloating, and intense nausea.
        </p>

        <div className="grid gap-6 md:grid-cols-2 my-10">
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-red-950 mb-3">⚠️ Foods to Limit or Avoid</h3>
            <ul className="space-y-3 text-sm text-red-900">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>Deep-Fried Items:</strong> Samosas, pakoras, and paranthas prepared with excess oil slow digestion further, worsening nausea.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>Heavy Spices:</strong> Highly acidic gravies (masala curries) can cause severe acid reflux when sitting in the stomach.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>Carbonated Drinks:</strong> Any carbonation increases bloating and stomach distension under delayed gastric transit.</span>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-green-950 mb-3">✅ Foods to Prioritize</h3>
            <ul className="space-y-3 text-sm text-green-900">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>Soothing Liquids:</strong> Salted buttermilk (chaas) with roasted cumin, or fresh coconut water for electrolytes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>Lean Protein:</strong> Grilled paneer, dry dals (moong/masoor), tofu, boiled eggs, and sattu drinks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span><strong>Hydrating Fibers:</strong> Cucumber, bottle gourd (lauki), and ridge gourd (torai) are easy to digest and prevent constipation.</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
          The Protein Challenge: Preventing Muscle Loss in India
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          A common issue during rapid weight loss is muscle wasting (sarcopenia). Since the average Indian vegetarian diet is carbohydrate-dominant, patients on GLP-1s who experience appetite suppression often consume dangerously low amounts of protein. This results in saggy skin, drop in metabolic rate, and rapid weight rebound after stopping therapy.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          WeightWonder programs solve this issue by pairing patients with certified nutritionists who calculate exact macro requirements and track daily targets, ensuring you lose fat, not muscle.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container-px max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 text-center mb-8">
            Dietary FAQ on GLP-1
          </h2>
          <div className="space-y-4">
            {DIET_FAQ.map((faq) => (
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
