"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "15–25%", label: "Avg. Weight Loss" },
  { value: "90%", label: "Patient Satisfaction" },
  { value: "₹40K+", label: "Saved vs. Branded" },
  { value: "5,000+", label: "Patients Guided" },
];

const cards = [
  {
    title: "Personalised GLP-1 Protocol",
    desc: "Specialist-prescribed generic GLP-1 medication tailored to your body, health history, and goals.",
    icon: "💊",
  },
  {
    title: "Weekly Dietitian Coaching",
    desc: "One-on-one nutrition guidance to maximise medication effectiveness and build sustainable eating habits.",
    icon: "🥗",
  },
  {
    title: "Metabolic Health Tracking",
    desc: "Regular bloodwork and body composition analysis to monitor progress and adjust your plan.",
    icon: "📊",
  },
  {
    title: "24/7 Side Effect Support",
    desc: "Instant access to clinical support via WhatsApp for any questions, concerns, or side effects.",
    icon: "🩺",
  },
  {
    title: "Behavioural Psychology Sessions",
    desc: "Address emotional eating, build healthy routines, and develop a positive relationship with food.",
    icon: "🧠",
  },
  {
    title: "Post-Treatment Maintenance",
    desc: "A structured taper and maintenance plan to keep the weight off long after medication ends.",
    icon: "🔄",
  },
];

export default function WeightWonder() {
  return (
    <section
      id="weightwonder"
      className="section-spacing relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a1a33 0%, #11284f 30%, #153d8a 70%, #0e0e12 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-medical-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-px relative z-10">
        {/* Brand Reveal Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-300 uppercase tracking-widest mb-4">
            <span className="w-8 h-[2px] bg-brand-400 inline-block" />
            Why Generic GLP-1 Alone Fails
            <span className="w-8 h-[2px] bg-brand-400 inline-block" />
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            The{" "}
            <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-medical-400 bg-clip-text text-transparent">
              WeightWonder
            </span>{" "}
            Advantage
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Medication without a system is just a shot in the dark. WeightWonder
            combines CDSCO-approved generics with the clinical and behavioral
            support that actually delivers lasting results.
          </p>
        </motion.div>

        {/* Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Greed Metrics + Doctor */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-8">
              Proven Results, Real Numbers
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                  <p className="text-3xl md:text-4xl font-heading font-extrabold text-brand-400 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Doctor Photo + Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center lg:text-left"
          >
            <div className="relative mb-6">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-white/10 border border-white/20 overflow-hidden backdrop-blur-sm relative">
                <Image
                  src="/images/dr-pooja-singh.jpg"
                  alt="Dr. Pooja Singh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 192px"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-green-600 rounded-full border-4 border-dark-900 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>
            <p className="text-white/80 text-base italic leading-relaxed mb-2">
              "As a specialist, I've seen patients waste lakhs on unsupervised
              GLP-1 protocols. The difference isn't the drug — it&apos;s the
              system around it. Nutrition, monitoring, behavior change —
              <strong>that's</strong> what delivers lasting results."
            </p>
            <p className="text-brand-400 text-sm font-semibold mt-2">
              — Dr. Pooja Singh, PhD, NCL
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/918878199499?text=Hi%2C%20found%20you%20on%20GLP1-India.com.%20I%20want%20to%20know%20about%20GLP-1%20support."
            target="_blank"
            rel="noopener noreferrer"
            className="wa-cta bg-white text-brand-700 hover:bg-brand-50"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Start Your WeightWonder Journey — Free Consultation
          </a>
          <p className="text-gray-500 text-xs mt-3">
            Free 15-min specialist consultation · No obligation
          </p>
        </motion.div>
      </div>
    </section>
  );
}