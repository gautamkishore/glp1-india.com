"use client";

import { motion } from "framer-motion";

const risks = [
  {
    title: "No Medical Supervision",
    desc: "Self-administered GLP-1s without monitoring can mask serious side effects including pancreatitis, gallbladder disease, and thyroid tumors.",
    icon: "🔬",
  },
  {
    title: "Muscle & Bone Loss",
    desc: "Rapid weight loss without structured nutrition can cause up to 40% lean mass loss, leading to metabolic slowdown and rebound weight gain.",
    icon: "⚡",
  },
  {
    title: "Unregulated Sourcing",
    desc: "GLP-1s purchased without a verified supply chain may be counterfeit, improperly stored, or contaminated. Cold-chain integrity is critical.",
    icon: "🚫",
  },
  {
    title: "Rebound Weight Gain",
    desc: "Patients who stop GLP-1 therapy without behavioral change regain an average of ⅔ of lost weight within 12 months.",
    icon: "📉",
  },
];

export default function WhyGLP1Alone() {
  return (
    <section
      id="why-glp1-alone"
      className="section-spacing bg-gray-50"
    >
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="section-heading">
            Why GLP-1 Medication Alone Isn&apos;t Enough
          </h2>
          <p className="section-subheading">
            The drug is only one piece of the puzzle. Without the right
            support system, results are temporary — and sometimes dangerous.
          </p>
        </motion.div>

        {/* Risk Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {risks.map((risk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{risk.icon}</div>
              <h3 className="text-base font-heading font-bold text-gray-900 mb-2">
                {risk.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {risk.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Fear Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 max-w-3xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm border border-red-100 rounded-2xl p-6 md:p-8 shadow-lg shadow-red-100/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -translate-y-8 translate-x-8 opacity-50" />
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-heading font-bold text-red-600 mb-2">
                ₹15,000 Spent... 12 kg Regained
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                This is the most common outcome we hear from patients who buy
                generic GLP-1s online without medical guidance. They lose weight
                quickly on the medication — then gain it all back (and sometimes
                more) once they stop, because the underlying habits, metabolism,
                and nutrition were never addressed. The money, the effort, the
                side effects — all for temporary results.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <svg
                  className="w-4 h-4 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  Sustainable weight loss requires medication + behavior change +
                  expert monitoring.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}