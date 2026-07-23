import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { contact, routes } from "@/lib/config";

const VisaSectionCta = () => {
  return (
    <div className="relative mt-8 sm:mt-10 md:mt-12 max-w-6xl mx-auto">
      <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-primary/40 via-secondary/40 to-tertiary/40 blur-sm opacity-70" />

      <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-surface shadow-xl shadow-primary/5">
        <div className="absolute inset-0 bg-linear-to-br from-primary/6 via-transparent to-tertiary/8" />
        <div className="absolute -top-24 right-0 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-0 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl" />

        <div className="relative p-5 sm:p-7 md:p-9 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-10 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Expert Visa Assistance
              </span>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-tight mb-3">
                Not sure which visa you need?
              </h3>
              <p className="text-sm sm:text-base text-secondary/75 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-5">
                Our visa specialists will review your travel plans, guide you
                through documents, and handle submission for Singapore and China
                applications.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-secondary/70">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-light/40">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  Embassy-recognized
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-light/40">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  Fast document review
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`tel:${contact.phone.raw}`}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-primary text-white hover:bg-secondary transition-all duration-300 shadow-lg shadow-primary/20"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/15 shrink-0">
                  <Phone className="w-5 h-5" />
                </span>
                <span className="flex-1 text-left min-w-0">
                  <span className="block text-xs text-white/75 font-medium">
                    Talk to a visa expert
                  </span>
                  <span className="block text-base sm:text-lg font-bold truncate">
                    {contact.phone.display}
                  </span>
                </span>
                <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  href={routes.singaporeVisa}
                  className="group flex items-center justify-between gap-2 px-4 py-3.5 rounded-2xl bg-background border border-primary/15 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="text-sm font-semibold text-foreground">
                    Singapore AVA
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href={routes.chinaVisa}
                  className="group flex items-center justify-between gap-2 px-4 py-3.5 rounded-2xl bg-background border border-primary/15 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="text-sm font-semibold text-foreground">
                    China Visa
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>

              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-2xl border-2 border-primary/20 text-primary font-semibold text-sm sm:text-base hover:bg-primary/5 hover:border-primary/35 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaSectionCta;
