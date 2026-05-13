"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Ready to Start Your GLP-1 Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Get a personalised assessment, prescription, and support plan from a
            specialist — all from the comfort of your home.
          </p>

          {/* Email CTA — mailto hidden from display per spec */}
          <a
            href="mailto:glp1@einsteinaura.com?subject=GLP-1%20Inquiry%20via%20GLP1-India.com"
            className="wa-cta inline-flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Send Inquiry Email
          </a>

          <p className="text-sm text-gray-500 mt-4">
            Or WhatsApp us directly:{" "}
            <a
              href="https://wa.me/918878199499?text=Hi%2C%20found%20you%20on%20GLP1-India.com.%20I%20want%20to%20know%20about%20GLP-1%20support."
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold hover:underline"
            >
              +91 8878 199 499
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}