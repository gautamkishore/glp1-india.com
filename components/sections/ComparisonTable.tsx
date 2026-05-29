"use client";

import { motion } from "framer-motion";

interface Row {
  label: string;
  unsupervised: "check" | "warn" | "cross";
  crashDiet: "check" | "warn" | "cross";
  genericPlans: "check" | "warn" | "cross";
  wwPlus: "check" | "warn" | "cross";
  wwGlp1: "check" | "warn" | "cross";
}

const rows: Row[] = [
  {
    label: "GLP-1 Medication",
    unsupervised: "check",
    crashDiet: "cross",
    genericPlans: "check",
    wwPlus: "cross",
    wwGlp1: "check",
  },
  {
    label: "Medical Supervision",
    unsupervised: "cross",
    crashDiet: "cross",
    genericPlans: "cross",
    wwPlus: "check",
    wwGlp1: "check",
  },
  {
    label: "Personalized Nutrition Plan",
    unsupervised: "cross",
    crashDiet: "warn",
    genericPlans: "cross",
    wwPlus: "check",
    wwGlp1: "check",
  },
  {
    label: "Behavioral Coaching",
    unsupervised: "cross",
    crashDiet: "cross",
    genericPlans: "cross",
    wwPlus: "check",
    wwGlp1: "check",
  },
  {
    label: "Metabolic Testing (BCA)",
    unsupervised: "cross",
    crashDiet: "cross",
    genericPlans: "cross",
    wwPlus: "check",
    wwGlp1: "check",
  },
  {
    label: "Side Effect Monitoring",
    unsupervised: "cross",
    crashDiet: "cross",
    genericPlans: "cross",
    wwPlus: "check",
    wwGlp1: "check",
  },
  {
    label: "Structured Meal Guidance",
    unsupervised: "cross",
    crashDiet: "warn",
    genericPlans: "cross",
    wwPlus: "check",
    wwGlp1: "check",
  },
  {
    label: "Stabilisation Phase",
    unsupervised: "cross",
    crashDiet: "cross",
    genericPlans: "cross",
    wwPlus: "check",
    wwGlp1: "check",
  },
  {
    label: "Value for Money",
    unsupervised: "warn",
    crashDiet: "warn",
    genericPlans: "warn",
    wwPlus: "check",
    wwGlp1: "check",
  },
  {
    label: "Clinical Outcomes (12 mo)",
    unsupervised: "warn",
    crashDiet: "cross",
    genericPlans: "warn",
    wwPlus: "check",
    wwGlp1: "check",
  },
];

const icons: Record<string, React.ReactElement> = {
  check: (
    <svg
      className="check-icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M5 13l4 4L19 7"
      />
    </svg>
  ),
  warn: (
    <svg
      className="warn-icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
      />
    </svg>
  ),
  cross: (
    <svg
      className="cross-icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
};

const colLabels = {
  unsupervised: "GLP-1 Alone",
  crashDiet: "Crash Diets",
  genericPlans: "Generic Plans",
  wwPlus: "WeightWonder Plus™",
  wwGlp1: "WW Plus + GLP-1",
};

const colColors = {
  unsupervised: "text-red-500",
  crashDiet: "text-amber-500",
  genericPlans: "text-amber-500",
  wwPlus: "text-brand-600",
  wwGlp1: "text-green-600",
};

// Columns that should get a highlight background
const colHighlight: Record<string, string> = {
  wwPlus: "bg-brand-50/60",
  wwGlp1: "bg-green-50/60",
};

export default function ComparisonTable() {
  return (
    <section
      id="comparison"
      className="section-spacing bg-white"
    >
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="section-heading">
            How Do They Compare?
          </h2>
          <p className="section-subheading">
            Not all weight-loss approaches are created equal. Here&apos;s an
            honest breakdown of your options.
          </p>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-6 mt-10">
            {rows.map((row, rIdx) => (
              <motion.div
                key={rIdx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: rIdx * 0.04 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
              >
                <h4 className="font-heading font-semibold text-gray-900 mb-3 text-sm">
                  {row.label}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(colLabels).map(([key, label]) => (
                    <div
                      key={key}
                      className="flex items-center gap-2 text-xs text-gray-600"
                    >
                      {icons[row[key as keyof Row]]}
                      <span className="line-clamp-1">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block mt-10 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider w-1/5">
                    Feature
                  </th>
                  {Object.entries(colLabels).map(([key, label]) => (
                    <th
                      key={key}
                      className={`text-center py-4 px-3 text-sm font-semibold uppercase tracking-wider ${
                        colHighlight[key] ? colHighlight[key] + " rounded-t-xl" : ""
                      } ${colColors[key as keyof typeof colColors]}`}
                    >
                      {key === "wwGlp1" && (
                        <span className="block text-xs font-normal text-green-500 mb-1 normal-case tracking-normal">
                          ✦ Adds GLP-1 layer
                        </span>
                      )}
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rIdx) => (
                  <motion.tr
                    key={rIdx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: rIdx * 0.05 }}
                    viewport={{ once: true }}
                    className={`border-t border-gray-50`}
                  >
                    <td className="py-4 px-4 font-medium text-gray-900 text-sm">
                      {row.label}
                    </td>
                    {Object.keys(colLabels).map((key) => {
                      const val = row[key as keyof Row];
                      const cellColor = colColors[key as keyof typeof colColors];
                      const bgHighlight = colHighlight[key] ?? "";
                      return (
                        <td
                          key={key}
                          className={`py-4 px-3 text-center align-middle ${bgHighlight}`}
                        >
                          <span
                            className={`inline-flex items-center justify-center ${
                              val === "check"
                                ? cellColor
                                : val === "warn"
                                ? "text-amber-500"
                                : "text-red-400"
                            }`}
                          >
                            {icons[val]}
                          </span>
                        </td>
                      );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Highlight box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 bg-brand-50 border border-brand-200 rounded-2xl p-6 flex items-start gap-4"
          >
            <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-brand-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-heading font-semibold text-brand-800 text-base">
                How GLP-1 fits into WeightWonder Plus™
              </p>
              <p className="text-sm text-brand-700 mt-1 leading-relaxed">
                WeightWonder Plus™ is a complete supervised weight loss program — BCA tracking, daily mentor, specialist consultations, nutrition optimization, and a stabilisation phase. For clients who also want GLP-1 medication, we layer it in as a clinical tool within the same framework. The program&apos;s results stand on their own with or without GLP-1.
              </p>
            </div>
          </motion.div>

          {/* Cross-link CTA to glp1compare.in */}
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-blue-900 text-sm">Want to compare specific Indian generic brands?</p>
              <p className="text-blue-700 text-xs mt-1">Use our free GLP-1 cost calculator — compare Obeda, Semanat, Noveltreat &amp; 7 more brands.</p>
            </div>
            <a href="https://glp1compare.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition-colors">
              Open Brand Comparison Tool →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}