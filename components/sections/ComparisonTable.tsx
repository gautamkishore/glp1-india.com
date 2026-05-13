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
    wwPlus: "warn",
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
    label: "Metabolic Testing",
    unsupervised: "cross",
    crashDiet: "cross",
    genericPlans: "cross",
    wwPlus: "cross",
    wwGlp1: "check",
  },
  {
    label: "Side Effect Monitoring",
    unsupervised: "cross",
    crashDiet: "cross",
    genericPlans: "cross",
    wwPlus: "warn",
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
    label: "Long-Term Maintenance Plan",
    unsupervised: "cross",
    crashDiet: "cross",
    genericPlans: "cross",
    wwPlus: "warn",
    wwGlp1: "check",
  },
  {
    label: "Average Cost (Monthly)",
    unsupervised: "warn",
    crashDiet: "warn",
    genericPlans: "warn",
    wwPlus: "warn",
    wwGlp1: "check",
  },
  {
    label: "Clinical Outcomes (12 mo)",
    unsupervised: "warn",
    crashDiet: "cross",
    genericPlans: "warn",
    wwPlus: "warn",
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
  unsupervised: "GLP-1 Unsupervised",
  crashDiet: "Crash Diets",
  genericPlans: "Generic Plans",
  wwPlus: "WW Plus",
  wwGlp1: "WW + GLP-1 Care",
};

const colColors = {
  unsupervised: "text-red-500",
  crashDiet: "text-amber-500",
  genericPlans: "text-amber-500",
  wwPlus: "text-blue-500",
  wwGlp1: "text-green-600",
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
                      className={`text-center py-4 px-3 text-sm font-semibold uppercase tracking-wider ${colColors[key as keyof typeof colColors]}`}
                    >
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
                    className={`border-t ${
                      rIdx === rows.length - 1
                        ? "border-gray-200"
                        : "border-gray-50"
                    } ${
                      rIdx === rows.length - 1 || rIdx === rows.length - 2
                        ? "bg-brand-50/30"
                        : ""
                    }`}
                  >
                    <td className="py-4 px-4 font-medium text-gray-900 text-sm">
                      {row.label}
                    </td>
                    {Object.keys(colLabels).map((key) => {
                      const val = row[key as keyof Row];
                      const cellColor =
                        colColors[key as keyof typeof colColors];
                      return (
                        <td
                          key={key}
                          className="py-4 px-3 text-center align-middle"
                        >
                          <span
                            className={`inline-flex items-center justify-center ${
                              val === "check"
                                ? cellColor.replace("text-", "text-")
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
            className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-6 flex items-start gap-4"
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-green-600"
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
              <p className="font-heading font-semibold text-green-800 text-base">
                Honest note on WW (WeightWatchers)
              </p>
              <p className="text-sm text-green-700 mt-1 leading-relaxed">
                WW is a solid lifestyle program for general wellness, but it
                does <strong>not</strong> include GLP-1 medication, metabolic
                testing, or specialist medical oversight as standard. The
                &quot;WW + GLP-1 Care&quot; model combines the structure of
                lifestyle coaching with the clinical power of GLP-1 therapy —
                giving you the best of both worlds.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}