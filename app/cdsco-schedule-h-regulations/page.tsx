import type { Metadata } from "next";
import TopBar from "@/components/sections/TopBar";
import Footer from "@/components/sections/Footer";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "CDSCO Approved GLP-1 Medications in India: Schedule H Laws (2026)",
  description: "Understand the legal landscape, prescription requirements, and CDSCO approvals for generic and branded GLP-1 medications in India.",
  alternates: {
    canonical: "https://glp1-india.com/cdsco-schedule-h-regulations",
  },
  keywords: [
    "schedule h weight loss injections india",
    "buying semaglutide online legally india",
    "cdsco approved glp-1 list 2026",
    "compounded semaglutide india safety",
  ],
};

const LEGAL_FAQ = [
  {
    question: "Can I buy Semaglutide in India without a prescription?",
    answer: "No. Semaglutide is classified under Schedule H of the Drugs and Cosmetics Rules in India. It is a prescription-only medication and cannot be sold over the counter. A licensed physician must evaluate your metabolic profile and write a prescription before any pharmacy can dispense it.",
  },
  {
    question: "Are generic GLP-1s approved by the CDSCO?",
    answer: "Yes. Following the patent expiry in March 2026, several Indian pharmaceutical companies obtained Central Drugs Standard Control Organisation (CDSCO) approval to manufacture and market generic semaglutide formulations (vials and pens). Brands by Natco, Sun Pharma, Zydus, and Alkem are fully approved for sale in India under clinical prescription.",
  },
  {
    question: "What is compounded semaglutide, and is it legal in India?",
    answer: "Compounded semaglutide is made by mixing raw peptide powders in individual pharmacies. Unlike officially approved generic formulations (which undergo stringent CDSCO testing for sterilization and dosage stability), compounded peptides sold by gray-market suppliers bypass these quality checks. They are not recommended and often operate outside legal safety guidelines.",
  },
];

export default function RegulatoryGuide() {
  const customWhatsAppUrl = "https://wa.me/918878199499?text=Hi%2C%20found%20you%20on%20GLP1-India.com's%20regulatory%20guide.%20I%20want%20to%20get%20started%20safely%20with%20a%20licensed%20prescription.";

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
            Regulatory &amp; Legal Framework
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
            CDSCO Guidelines &amp; Schedule H Compliance for GLP-1s
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Understanding the legal framework governing GLP-1 weight-loss injections in India, prescription requirements, and the dangers of unapproved gray markets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={customWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="wa-cta">
              Consult a Licensed Physician
            </a>
            <a href="#rules-summary" className="inline-flex items-center justify-center border border-gray-300 hover:border-brand-600 hover:text-brand-600 bg-white font-semibold py-3 px-8 rounded-full transition-all duration-300 text-base text-gray-700">
              Read CDSCO Details
            </a>
          </div>
        </div>
      </section>

      {/* Regulatory Details */}
      <section id="rules-summary" className="py-16 container-px max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
          Schedule H Legal Classification: What it Means for Patients
        </h2>
        <div className="prose max-w-none text-gray-600 space-y-6 text-base leading-relaxed">
          <p>
            In India, all GLP-1 receptor agonist medications (including generic semaglutide, liraglutide, and branded tirzepatide) are classified as **Schedule H drugs** under the Drugs and Cosmetics Rules, 1945. 
          </p>
          <p>
            By law, Schedule H drugs carry a mandatory warning on their packaging: <em>&quot;To be sold by retail on the prescription of a Registered Medical Practitioner only.&quot;</em> This classification is designed to protect public health by ensuring these potent medications are only taken under professional supervision.
          </p>

          <div className="my-8 p-6 rounded-2xl bg-amber-50 border border-amber-200">
            <h3 className="text-lg font-bold text-amber-950 mb-2">Risks of Gray Market Sourcing</h3>
            <p className="text-amber-900 mb-4 text-sm">
              Due to high global demand, various online wholesalers, chemical shops, and B2B platforms list &quot;raw peptides&quot; or &quot;research chemicals&quot; labeled <em>&quot;not for human consumption.&quot;</em> Sourcing these raw powders online poses severe medical hazards:
            </p>
            <ul className="space-y-3 text-sm text-amber-900">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span><strong>No Sterility Guarantee:</strong> Injectable substances must be manufactured in ultra-sterile environments. Contaminated vials can cause severe local or systemic infections.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span><strong>Unreliable Dosages:</strong> Research chemicals often have erratic concentration levels, leading to accidental overdosing or lack of efficacy.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✗</span>
                <span><strong>Legal Vulnerabilities:</strong> Importing or purchasing prescription drugs from unlicensed entities violates Indian pharmaceutical and customs laws.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
            How to Sourcing GLP-1s Safely and Legally
          </h2>
          <p>
            To undergo weight loss treatment legally and safely, you must follow the correct medical channel:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Medical Consultation:</strong> Receive an evaluation from an endocrinologist or physician to analyze your HbA1c, thyroid function, and BMI.
            </li>
            <li>
              <strong>Valid Prescription:</strong> Obtain a customized prescription specifying the molecule, starting dose (usually 0.25mg for semaglutide), and titration instructions.
            </li>
            <li>
              <strong>Licensed Dispensation:</strong> Purchase your medication from a registered retail pharmacy selling CDSCO-approved domestic generic brands.
            </li>
          </ol>
          <p className="mt-6">
            The WeightWonder network streamlines this entire compliance cycle. We connect patients with licensed physicians for legal consultations and prescriptions, and help arrange delivery of CDSCO-approved domestic generics under strict titration coaching.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container-px max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 text-center mb-8">
            Legal &amp; Safety FAQ
          </h2>
          <div className="space-y-4">
            {LEGAL_FAQ.map((faq) => (
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
