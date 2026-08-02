"use client";

import { useEffect, useCallback } from "react";
import Link from "next/link";
import { X, Calendar, MapPin, Users, ArrowRight, MessageCircle } from "lucide-react";
import { partnerContact } from "../data/cantonFairData";
import { CANTON_FAIR_ROUTE } from "../data/cantonFairSeo";

interface CantonFairCtaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const highlights = [
  { icon: Calendar, text: "15 Oct – 4 Nov 2026 · 3 Fair Phases" },
  { icon: MapPin, text: "Guangzhou — Hotel, Airport & Fair Transfers" },
  { icon: Users, text: "Private B2B Groups from 2 to 10 Guests" },
];

const CantonFairCtaModal = ({ isOpen, onClose }: CantonFairCtaModalProps) => {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="canton-fair-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div className="relative w-full max-w-lg rounded-3xl bg-surface shadow-2xl border border-primary/15 overflow-hidden">
        <div className="bg-linear-to-br from-primary via-secondary to-tertiary px-6 py-8 text-white relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10" />
          <div className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full bg-white/5" />

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/15 border border-white/25 px-3 py-1 rounded-full mb-4">
            Limited B2B Offer
          </span>
          <h2
            id="canton-fair-modal-title"
            className="text-xl sm:text-2xl font-extrabold leading-tight mb-2 pr-8"
          >
            2026 Autumn Canton Fair
          </h2>
          <p className="text-sm text-white/85">
            China Registration & B2B Packages for Bangladeshi Buyers
          </p>
        </div>

        <div className="px-6 py-6 space-y-5">
          <p className="text-sm text-foreground/85 leading-relaxed">
            Hotel with breakfast, Baiyun airport transfers, private fair-day
            vehicle and local English/Chinese support. Starting from{" "}
            <strong className="text-primary">৳41,000/person</strong> (twin
            sharing, subject to written confirmation).
          </p>

          <ul className="space-y-3">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-foreground/90">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                {text}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 pt-2">
            <Link
              href={CANTON_FAIR_ROUTE}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-secondary transition-colors"
            >
              View Full Packages & Rates
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${partnerContact.wechat.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl border-2 border-primary/20 text-primary font-semibold text-sm hover:bg-primary/5 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Contact {partnerContact.name}
            </a>

            <button
              type="button"
              onClick={onClose}
              className="text-xs text-foreground/50 hover:text-foreground/70 transition-colors py-1"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CantonFairCtaModal;
