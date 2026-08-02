"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import CantonFairCtaModal from "./CantonFairCtaModal";
import { CANTON_FAIR_ROUTE } from "../data/cantonFairSeo";

const SESSION_KEY = "pwtc-canton-fair-cta-dismissed";

const CantonFairHomeCta = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(SESSION_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => setModalOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    setModalOpen(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  };

  return (
    <>
      <section
        aria-label="2026 Autumn Canton Fair promotion"
        className="relative w-full bg-linear-to-r from-primary via-secondary to-tertiary overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-10 right-10 w-40 h-40 rounded-full border-2 border-white/30" />
          <div className="absolute -bottom-8 left-20 w-32 h-32 rounded-full border border-white/20" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-5 sm:py-6 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-white/15 border border-white/25 items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-light" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-light mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Autumn 2026
                </div>
                <p className="text-white font-bold text-sm sm:text-base leading-snug">
                  2026 Autumn Canton Fair — B2B Packages for Bangladeshi Buyers
                </p>
                <p className="text-white/75 text-xs sm:text-sm mt-0.5">
                  Hotel · Airport Transfers · Fair Vehicle · From ৳41,000/person
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-white/15 border border-white/30 text-white text-sm font-semibold hover:bg-white/25 transition-colors"
              >
                Quick View
              </button>
              <Link
                href={CANTON_FAIR_ROUTE}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-primary text-sm font-bold hover:bg-light transition-colors shadow-lg"
              >
                View Packages
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CantonFairCtaModal isOpen={modalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default CantonFairHomeCta;
