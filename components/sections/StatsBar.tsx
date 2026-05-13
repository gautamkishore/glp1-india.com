"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Generic Since", value: "Mar 2026" },
  { label: "Avg. Cost", value: "~₹1,300/mo" },
  { label: "Molecules", value: "3" },
  { label: "Monitoring", value: "Specialist-Monitored" },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-10 md:py-14"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-xs md:text-sm font-medium text-brand-600 uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <p className="text-xl md:text-2xl font-heading font-bold text-gray-900">
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}