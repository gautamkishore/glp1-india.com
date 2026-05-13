"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is Ozempic available in India?",
    answer:
      "Ozempic (semaglutide, by Novo Nordisk) is not officially marketed in India. Patients in India primarily access semaglutide through CDSCO-approved Indian generics such as Obeda (Dr. Reddy's), Semanat (Natco), Noveltreat (Sun Pharma), GLIPIQ (Glenmark), Semaglyn (Zydus), Semabolic (Torrent), and Semasize (Alkem). These generics contain the same active molecule and are bioequivalent.",
  },
  {
    question: "How much does semaglutide cost in India?",
    answer:
      "Indian generic semaglutide typically costs approximately ₹1,200–₹1,500 per month, depending on the brand, pharmacy, and region. International branded versions like Ozempic or Wegovy are significantly more expensive and may not be legally available in India without import permits. Always verify pricing with a licensed pharmacy.",
  },
  {
    question: "Is Saxenda safe for weight loss?",
    answer:
      "Saxenda (liraglutide 3mg) is approved by both the FDA and CDSCO for chronic weight management when used alongside a reduced-calorie diet and increased physical activity. Common side effects include nausea, vomiting, diarrhea, and constipation. It is a Schedule H prescription-only medication in India and should only be used under medical supervision.",
  },
  {
    question: "Can I self-medicate with GLP-1 injections?",
    answer:
      "No. GLP-1 receptor agonists are classified as Schedule H drugs under the Drugs and Cosmetics Act, 1940 in India. Self-medication is both illegal and dangerous. These medications can cause serious side effects including pancreatitis, gallbladder issues, and potential thyroid concerns. Always consult a qualified medical specialist before starting any GLP-1 therapy.",
  },
  {
    question: "What are the Indian-specific side effects of GLP-1 drugs?",
    answer:
      "Side effects observed in Indian patients are generally consistent with global clinical data: nausea, vomiting, diarrhea, constipation, and abdominal pain. Some Indian patients may experience heightened gastrointestinal sensitivity due to dietary differences. Long-term population-specific data for India is still emerging. Always report any side effects to your prescribing physician immediately.",
  },
  {
    question: "Are Indian generic GLP-1 drugs safe?",
    answer:
      "Generics from reputed CDSCO-approved manufacturers — including Dr. Reddy's, Natco, Sun Pharma, Glenmark, Zydus Cadila, Torrent, and Alkem — are required to demonstrate bioequivalence and are generally considered safe. However, quality control and cold-chain compliance can vary between pharmacies. Always verify the manufacturer, batch number, and expiry date, and purchase only from licensed pharmacies.",
  },
  {
    question: "How is WeightWonder different from other generic GLP-1 plans?",
    answer:
      "Most generic-only plans provide medication alone without structured clinical oversight or lifestyle guidance. WeightWonder combines specialist-prescribed generic GLP-1 medications with personalised diet coaching, weekly monitoring, metabolic testing, behavioral psychology support, and a structured post-treatment maintenance plan — addressing the full system needed for lasting weight loss.",
  },
  {
    question: "What results can I expect from GLP-1 therapy in India?",
    answer:
      "Clinical trials (including the STEP and SURMOUNT studies) and real-world data show an average of 15–25% body weight loss over 12–18 months with consistent GLP-1 therapy combined with diet and exercise. Individual results vary based on starting weight, medication adherence, dietary habits, and level of medical supervision.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="section-spacing bg-white"
    >
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Honest answers to the most common questions about GLP-1 therapy in India.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="border-b border-gray-100 py-6 last:border-b-0"
            >
              <details>
                <summary className="flex items-center justify-between cursor-pointer list-none text-left">
                  <span className="text-base font-heading font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0 w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 text-sm font-bold transition-transform duration-300 group-open:rotate-180">
                    +
                  </span>
                </summary>
                <div className="mt-3 text-gray-600 text-sm leading-relaxed pr-8">
                  {faq.answer}
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}