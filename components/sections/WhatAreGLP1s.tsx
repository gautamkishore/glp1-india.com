"use client";

import { motion } from "framer-motion";

const molecules = [
  {
    name: "Semaglutide",
    brandNames: [
      "Ozempic (Novo Nordisk)",
      "Wegovy (Novo Nordisk - higher dose, obesity-specific)",
      "Rybelsus (Novo Nordisk - oral tablet)",
    ],
    indianGenerics: [
      { brand: "Obeda", manufacturer: "Dr. Reddy's Laboratories" },
      { brand: "Semanat", manufacturer: "Natco Pharma" },
      { brand: "Noveltreat", manufacturer: "Sun Pharmaceutical" },
      { brand: "GLIPIQ", manufacturer: "Glenmark Pharmaceuticals" },
      { brand: "Semaglyn", manufacturer: "Zydus Cadila" },
      { brand: "Sembolic", manufacturer: "Torrent Pharmaceuticals" },
      { brand: "Semasize", manufacturer: "Alkem Laboratories" },
    ],
    description:
      "The most widely studied and prescribed GLP-1 RA. Available in once-weekly injection and daily oral tablet forms. The injectable version for weight management is typically prescribed at 2.4mg weekly dose.",
    highlight: true,
  },
  {
    name: "Liraglutide",
    brandNames: [
      "Saxenda (Novo Nordisk - obesity, 3mg dose)",
      "Victoza (Novo Nordisk - diabetes, 1.8mg dose)",
    ],
    indianGenerics: [
      { brand: "Victonza", manufacturer: "Cipla" },
      { brand: "Liraglu", manufacturer: "Biocon" },
      { brand: "LiraFit", manufacturer: "Mankind Pharma" },
    ],
    description:
      "An earlier-generation GLP-1 receptor agonist. Effective for weight loss at the 3mg dose (Saxenda). Requires daily injection. Generally more affordable but has a smaller weight-loss effect compared to semaglutide.",
    highlight: false,
  },
  {
    name: "Tirzepatide",
    brandNames: [
      "Mounjaro (Eli Lilly - diabetes + weight management)",
      "Zepbound (Eli Lilly - obesity-specific, higher dose)",
    ],
    indianGenerics: [
      { brand: "Tirzepan", manufacturer: "Dr. Reddy's Laboratories" },
      { brand: "Glytiz", manufacturer: "Cipla" },
      { brand: "Tirzo", manufacturer: "Sun Pharmaceutical" },
    ],
    description:
      "A dual GIP/GLP-1 receptor agonist — the newest class. Clinical trials show potentially greater weight loss than semaglutide. Now FDA and CDSCO approved for both type 2 diabetes and chronic weight management.",
    highlight: false,
  },
];

export default function WhatAreGLP1s() {
  return (
    <section
      id="what-are-glp1s"
      className="section-spacing bg-white"
    >
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-heading">
            What Are GLP-1 Receptor Agonists?
          </h2>
          <p className="section-subheading">
            A clear, no-hype explanation of the science behind the most
            prescribed weight-loss medications of 2025–2026.
          </p>

          {/* Lead paragraph — snippet optimized */}
          <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 md:p-8 mb-12">
            <p className="text-gray-800 text-lg leading-relaxed">
              GLP-1 receptor agonists (GLP-1 RAs) are a class of medications
              originally developed for type 2 diabetes that have been shown in
              large clinical trials — including the landmark{" "}
              <strong>STEP</strong> and <strong>SURMOUNT</strong> studies — to
              produce significant, sustained weight loss. They work by mimicking
              the hormone glucagon-like peptide-1 (GLP-1), which slows gastric
              emptying, reduces appetite, and improves insulin sensitivity. In
              India, these medications are now available as both branded
              imports and CDSCO-approved generics, making them more accessible
              than ever — but understanding the options, costs, and risks is
              essential before starting treatment.
            </p>
          </div>

          {/* Molecule cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {molecules.map((mol, idx) => (
              <motion.div
                key={mol.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 md:p-8 ${
                  mol.highlight
                    ? "bg-brand-50 border-2 border-brand-300 shadow-lg shadow-brand-100"
                    : "bg-white border border-gray-100 shadow-sm hover:shadow-md"
                } transition-shadow duration-300`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold text-gray-900">
                    {mol.name}
                  </h3>
                  {mol.highlight && (
                    <span className="inline-flex items-center gap-1 bg-brand-100 text-brand-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      Most Prescribed
                    </span>
                  )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {mol.description}
                </p>

                <div className="mb-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Brand Names
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
                    {mol.brandNames.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Indian Generics (CDSCO Approved)
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
                    {mol.indianGenerics.map((g, i) => (
                      <li key={i}>
                        <strong>{g.brand}</strong> — {g.manufacturer}
                      </li>
                    ))}
                  </ul>
                </div>

                {mol.highlight && (
                  <div className="mt-4 p-3 bg-white/70 rounded-lg border border-brand-200 text-xs text-brand-700">
                    <span className="font-semibold">⚠️ Schedule H:</span>{" "}
                    Prescription-only medication. Always consult a qualified
                    doctor before use.
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Legal warning */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3"
          >
            <svg
              className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            <div>
              <p className="font-semibold text-amber-800 text-sm">
                Schedule H Prescription-Only
              </p>
              <p className="text-sm text-amber-700 mt-0.5">
                All GLP-1 receptor agonists are classified as Schedule H drugs
                under the Drugs and Cosmetics Act, 1940 in India. They can only
                be dispensed on a valid prescription from a registered medical
                practitioner. Self-medication, online purchase without a
                prescription, or unregulated sourcing is illegal and poses
                serious health risks.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}