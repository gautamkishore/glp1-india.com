import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "GLP-1 Weight Loss India 2026: Ozempic, Saxenda, Mounjaro — Complete Guide",
    template: "%s | GLP-1 India",
  },
  description:
    "India's most comprehensive, research-backed guide to GLP-1 weight loss injections. Covers Ozempic, Saxenda, Mounjaro, Wegovy & Indian generics — costs, side effects, comparisons.",
  keywords: [
    "GLP-1 India",
    "Ozempic India",
    "Saxenda India",
    "Mounjaro India",
    "GLP-1 weight loss India",
    "semaglutide India",
    "tirzepatide India",
    "liraglutide India",
    "weight loss injection India",
    "obesity treatment India",
    "GLP-1 generics India",
    "Ozempic cost India",
    "Saxenda cost India",
    "Mounjaro cost India",
  ],
  authors: [{ name: "GLP-1 India", url: "https://glp1-india.com" }],
  creator: "GLP-1 India",
  publisher: "GLP-1 India",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://glp1-india.com",
    title: "GLP-1 Weight Loss India 2026: Ozempic, Saxenda, Mounjaro — Complete Guide",
    description:
      "Research-backed guide covering Ozempic, Saxenda, Mounjaro, Wegovy & Indian generics. Costs, side effects, comparisons, and specialist support.",
    images: [
      {
        url: "https://glp1-india.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "GLP-1 Weight Loss India 2026",
      },
    ],
    siteName: "GLP-1 India",
  },
  twitter: {
    card: "summary_large_image",
    site: "@glp1india",
    creator: "@glp1india",
    title: "GLP-1 Weight Loss India 2026: Complete Guide",
    description:
      "The definitive guide to GLP-1 weight loss injections in India.",
    images: ["https://glp1-india.com/og-image.png"],
  },
  alternates: {
    canonical: "https://glp1-india.com",
  },
  category: "Health & Medical",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3570e0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Structured Data */}
        <Script
          id="schema-medical"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalWebPage", "FAQPage"],
              name:
                "GLP-1 Weight Loss India 2026: Ozempic, Saxenda, Mounjaro — Complete Guide",
              description:
                "India's most comprehensive, research-backed guide to GLP-1 weight loss injections — Ozempic, Saxenda, Mounjaro, Wegovy, and Indian generics.",
              url: "https://glp1-india.com",
              canonicalUrl: "https://glp1-india.com",
              inLanguage: "en-IN",
              isAccessibleForFree: true,
              lastReviewed: "2026-01-15",
              reviewedBy: {
                "@type": "MedicalOrganization",
                name: "GLP-1 India Medical Review Board",
              },
              medicalCondition: [
                {
                  "@type": "MedicalCondition",
                  name: "Obesity",
                  code: {
                    "@type": "MedicalCode",
                    code: "E66",
                    codingSystem: "ICD-11",
                  },
                },
              ],
              drug: [
                {
                  "@type": "Drug",
                  name: "Semaglutide",
                  brandName: ["Ozempic", "Wegovy", "Rybelsus"],
                  genericName: "semaglutide",
                  dosageForm: "Injection",
                  isAvailableGenerically: true,
                },
                {
                  "@type": "Drug",
                  name: "Liraglutide",
                  brandName: ["Saxenda", "Victoza"],
                  genericName: "liraglutide",
                  dosageForm: "Injection",
                  isAvailableGenerically: true,
                },
                {
                  "@type": "Drug",
                  name: "Tirzepatide",
                  brandName: ["Mounjaro", "Zepbound"],
                  genericName: "tirzepatide",
                  dosageForm: "Injection",
                  isAvailableGenerically: true,
                },
              ],
              FAQPage: {
                "@type": "FAQPage",
                mainEntity: [],
              },
              about: {
                "@type": "Organization",
                name: "GLP-1 India",
                url: "https://glp1-india.com",
                description:
                  "India's leading independent educational resource on GLP-1 receptor agonist therapies for weight management.",
              },
            }),
          }}
        />
        {/* FAQ Schema - separate block */}
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is Ozempic available in India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ozempic (semaglutide) was not officially available in India via Novo Nordisk. Patients in India primarily access semaglutide through Indian generics like Obeda (Dr. Reddy's), Semanat (Natco), and Noveltreat (Sun Pharma).",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does semaglutide cost in India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Indian generic semaglutide (e.g., Obeda, Semanat) costs approximately ₹1,200–₹1,500 per month. Branded international versions like Ozempic are significantly more expensive. Prices may vary by pharmacy and region.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Saxenda safe for weight loss?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Saxenda (liraglutide 3mg) is approved by the FDA and CDSCO for chronic weight management. Common side effects include nausea, vomiting, diarrhea, and constipation. It requires medical supervision and is a Schedule H prescription-only medication in India.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I self-medicate with GLP-1 injections?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. GLP-1 receptor agonists are Schedule H prescription-only drugs in India. Self-medication is illegal and dangerous. Always consult a qualified medical specialist before starting any GLP-1 therapy.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the Indian-specific side effects of GLP-1 drugs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Side effects are generally similar to global data: nausea, vomiting, diarrhea, constipation, and abdominal pain. Some Indian patients report heightened gastrointestinal sensitivity. Long-term data specific to Indian populations is still emerging. Always report side effects to your prescribing doctor.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are Indian generic GLP-1 drugs safe?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Indian generics from reputed manufacturers (Dr. Reddy's, Natco, Sun Pharma, Glenmark, Zydus Cadila, Torrent, Alkem) are bioequivalent and approved by CDSCO. However, quality and cold-chain compliance can vary. Always verify the manufacturer, batch number, and buy only from licensed pharmacies.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How is WeightWonder different from other generic GLP-1 plans?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "WeightWonder combines specialist-prescribed generic GLP-1 medications with personalised diet coaching, weekly monitoring, metabolic testing, and behavioural support. Most generic-only plans provide medication alone without structured clinical oversight or lifestyle guidance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What results can I expect from GLP-1 therapy in India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Clinical trials and real-world data show 15–25% body weight loss over 12–18 months with consistent GLP-1 therapy, combined with diet and exercise. Individual results vary based on starting weight, adherence, and medical supervision.",
                  },
                },
              ],
            }),
          }}
        />
        {/* Organization Schema */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GLP-1 India",
              url: "https://glp1-india.com",
              description:
                "India's leading independent educational resource on GLP-1 receptor agonist therapies for weight management.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8878-199-499",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "English",
              },
              sameAs: [
                "https://wa.me/918878199499",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
        {/* WhatsApp Floating Button — always visible */}
        <a
          href="https://wa.me/918878199499?text=Hi%2C%20found%20you%20on%20GLP1-India.com.%20I%20want%20to%20know%20about%20GLP-1%20support."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with GLP-1 specialist on WhatsApp"
          className="fixed bottom-6 right-6 z-[1000] flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full shadow-lg shadow-green-600/40 hover:shadow-xl hover:shadow-green-600/60 transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </body>
    </html>
  );
}