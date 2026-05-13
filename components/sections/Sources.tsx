"use client";

import { motion } from "framer-motion";

const sources = [
  {
    name: "STEP Trials",
    org: "New England Journal of Medicine",
    desc: "Semaglutide Treatment Effect in People with Obesity — Phase 3a trials demonstrating 15–20% mean weight loss.",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa203218",
  },
  {
    name: "SURMOUNT-1 Trial",
    org: "New England Journal of Medicine",
    desc: "Tirzepatide for the treatment of obesity — up to 22.5% mean weight loss at 72 weeks.",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
  },
  {
    name: "CDSCO",
    org: "Central Drugs Standard Control Organisation",
    desc: "Regulatory body for drug approvals in India. Database of approved generics and Schedule H drugs.",
    url: "https://cdsco.gov.in",
  },
  {
    name: "ICMR Guidelines",
    org: "Indian Council of Medical Research",
    desc: "Clinical management guidelines for obesity and metabolic disorders in Indian populations.",
    url: "https://main.icmr.org.in",
  },
  {
    name: "ADA Standards of Care 2025",
    org: "American Diabetes Association",
    desc: "Updated standards including GLP-1 RA recommendations for obesity and type 2 diabetes management.",
    url: "https://diabetesjournals.org/care/issue/48/1/S1",
  },
  {
    name: "Lancet Obesity Commission",
    org: "The Lancet",
    desc: "Comprehensive reports on pharmacotherapy for obesity, including GLP-1 receptor agonists.",
    url: "https://www.thelancet.com/commissions/obesity",
  },
];

export default function Sources() {
  return (
    <section
      id="sources"
      className="bg-gray-50 border-t border-gray-100"
    >
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center py-16"
        >
          <h2 className="section-heading text-xl md:text-2xl mb-4">
            Sources &amp; References
          </h2>
          <p className="text-gray-600 text-sm mb-10 max-w-2xl mx-auto">
            This guide is based on peer-reviewed clinical trials, regulatory
            body guidelines, and published medical literature. Last reviewed:
            January 2026.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {sources.map((src, i) => (
              <motion.a
                key={i}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 group"
              >
                <p className="font-heading font-semibold text-gray-900 text-sm group-hover:text-brand-600 transition-colors">
                  {src.name}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{src.org}</p>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                  {src.desc}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}