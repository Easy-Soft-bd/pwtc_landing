import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Singapore Visa for Bangladeshi 2026: Official Requirements & Guide",
  description:
    "Complete guide on Singapore visa requirements for Bangladeshi citizens. Learn about the application process, required documents, and authorized submission via Privileged World.",
  alternates: {
    canonical: "https://www.privilegedworld.com/singapore-visa-bangladesh",
  },
  openGraph: {
    title: "Singapore Visa for Bangladeshi 2026 Guide",
    description:
      "Step-by-step Singapore visa application guide for Bangladeshi passport holders following official consulate guidelines.",
    url: "https://www.privilegedworld.com/singapore-visa-bangladesh",
    type: "article",
    images: [{ url: "/images/singapore-visa-guide.jpg" }],
  },
};

const SingaporeVisaBangladeshPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Singapore Visa Application Process for Bangladeshis",
    step: [
      {
        "@type": "HowToStep",
        text: "Verify passport validity (minimum 6 months).",
      },
      {
        "@type": "HowToStep",
        text: "Gather professional documents (NOC/Trade License) as per official consulate requirements.",
      },
      {
        "@type": "HowToStep",
        text: "Submit application through Privileged World, an authorized partner.",
      },
    ],
  };

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] min-h-screen font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-[var(--primary)] pt-16 pb-28 md:pt-24 md:pb-40 text-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-[var(--accent)] text-[var(--primary)] px-4 py-1 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest mb-6">
            Official 2026 Requirements Guide
          </div>
          <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight">
            Singapore Visa for <br className="hidden md:block" />
            <span className="text-[var(--light)]">Bangladeshi Citizens</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--light)] max-w-3xl mx-auto opacity-90 leading-relaxed">
            Navigate the application process with precision. We provide expert
            assistance for
            <strong> Singapore visa for Bangladeshi</strong> travelers based on
            the latest guidelines from the Consulate-General of the Republic of
            Singapore in Dhaka.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--background)] to-transparent"></div>
      </section>

      {/* --- STATUS CARDS --- */}
      <section className="max-w-6xl mx-auto px-4 -mt-12 md:-mt-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              label: "Standard Processing",
              val: "3-5 Working Days",
              color: "var(--primary)",
            },
            {
              label: "Compliance",
              val: "Official Guidelines",
              color: "var(--secondary)",
            },
            {
              label: "Submission",
              val: "Authorized Agent",
              color: "var(--success)",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-[var(--accent)] flex flex-col items-center text-center transition-transform hover:-translate-y-2"
            >
              <span className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">
                {card.label}
              </span>
              <span className="text-xl font-bold" style={{ color: card.color }}>
                {card.val}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <article className="max-w-5xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          {/* Official Reference Section (Strategic for EEAT) */}
          <section className="bg-[var(--light)] bg-opacity-10 border border-[var(--light)] p-6 rounded-2xl italic">
            <p className="text-[var(--primary)] text-sm leading-relaxed">
              <strong>Note:</strong> The information provided on this page is
              curated in accordance with the official visa application
              procedures detailed by the{" "}
              <strong>Singapore Consulate-General in Dhaka</strong>{" "}
              (dhaka.mfa.gov.sg/consular-services/visa-information/visa-application/).
              Our experts ensure your application aligns perfectly with these
              standards.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-[var(--primary)] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[var(--accent)] rounded-full"></span>
              Document Checklist for 2026
            </h2>
            <div className="grid sm:grid-cols-1 gap-4">
              {[
                {
                  t: "Valid Passport",
                  d: "Must have at least 6 months validity from the date of entry.",
                },
                {
                  t: "Visa Application Form (Form 14A)",
                  d: "Duly completed and signed by the applicant.",
                },
                {
                  t: "Recent Photographs",
                  d: "Two color passport-sized photos taken within the last 3 months (White background).",
                },
                {
                  t: "Professional Documents",
                  d: "NOC from employer or valid Trade License for business owners.",
                },
                {
                  t: "Financial Documents",
                  d: "Personal bank statement for the last 6 months.",
                },
                {
                  t: "LOI (Form V39A)",
                  d: "Letter of Introduction may be required for certain visa categories.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col p-5 bg-white rounded-xl border border-gray-100 shadow-sm"
                >
                  <span className="font-bold text-[var(--primary)] text-lg mb-1">
                    {item.t}
                  </span>
                  <span className="text-gray-600 text-sm">{item.d}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-[var(--primary)] text-white p-8 rounded-3xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Authorized Visa Assistance
              </h3>
              <p className="opacity-90 leading-relaxed">
                As a premier travel partner, <strong>Privileged World</strong>{" "}
                facilitates the submission of your Singapore visa application
                through the appropriate authorized channels, ensuring all
                documents meet the stringent requirements of the Consulate.
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[var(--accent)] opacity-10 rounded-full"></div>
          </section>
        </div>

        {/* --- STICKY CONVERSION ASIDE --- */}
        <aside className="md:col-span-1">
          <div className="sticky top-24 p-1 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-3xl shadow-2xl">
            <div className="bg-white p-8 rounded-[calc(1.5rem-4px)] text-center">
              <h3 className="text-2xl font-black text-[var(--primary)] mb-4">
                Apply Through Experts
              </h3>
              <p className="text-gray-500 mb-8 text-sm">
                Ensure your documentation is error-free before submission to the
                consulate.
              </p>

              <Link
                href="/visa/singapore-visa-processing"
                className="group w-full flex flex-col gap-3"
              >
                <div className="bg-[var(--primary)] text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all group-hover:bg-[var(--secondary)] group-hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  Start Application
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </Link>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-2">
                  Verified Channels
                </p>
                <div className="flex justify-center gap-4 opacity-50 grayscale">
                  <div className="text-[var(--primary)] font-bold text-xs underline decoration-[var(--accent)]">
                    Consulate Compliance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </article>

      {/* --- GUIDELINES FOOTER --- */}
      <footer className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">
            Need Personalized Guidance?
          </h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Requirements can vary based on individual profiles. Contact our visa
            concierge for a detailed assessment of your documents.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="tel:+880 1819 591 111"
              className="px-8 py-3 bg-[var(--primary)] text-white rounded-xl font-bold hover:bg-[var(--secondary)] transition-all"
            >
              Call an Expert
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-[var(--primary)] text-[var(--primary)] rounded-xl font-bold hover:bg-[var(--primary)] hover:text-white transition-all"
            >
              Visit Our Office
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default SingaporeVisaBangladeshPage;
