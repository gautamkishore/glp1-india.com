"use client";

import { motion } from "framer-motion";

const footerLinks = {
  About: [
    { label: "About GLP-1 India", href: "#about" },
    { label: "Our Methodology", href: "#methodology" },
    { label: "Medical Review Board", href: "#reviewers" },
  ],
  Resources: [
    { label: "GLP-1 Medications", href: "#what-are-glp1s" },
    { label: "Comparison", href: "#comparison" },
    { label: "FAQ", href: "#faq" },
  ],
  Support: [
    { label: "Contact Us", href: "https://wa.me/918878199499" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-dark-950 text-gray-400 border-t border-dark-900"
      role="contentinfo"
    >
      <div className="container-px pt-16 pb-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-600/80 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-heading font-bold text-white">
                GLP-1<span className="text-brand-400">.India</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              India&apos;s independent educational resource for evidence-based
              information on GLP-1 receptor agonist therapies.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-brand-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* WeightWonder attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-dark-800 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()}{" "}
              <a
                href="https://weightwonder.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-500 hover:text-brand-400 font-semibold"
              >
                WeightWonder
              </a>
              . All rights reserved. An independent educational resource — not
              a substitute for professional medical advice.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/918878199499"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-dark-800 pt-6 mt-6"
        >
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>Medical Disclaimer:</strong> The information on this website is
            for educational purposes only and does not constitute medical advice,
            diagnosis, or treatment. Always seek the advice of your physician or
            other qualified health provider with any questions you may have
            regarding a medical condition. GLP-1 receptor agonists are Schedule
            H prescription drugs in India and must only be used under medical
            supervision. Results vary between individuals.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}