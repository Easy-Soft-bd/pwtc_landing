import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Plane,
} from "lucide-react";
import { contact, routes, company } from "@/lib/config";

const trustPoints = [
  "100K+ Happy Clients",
  "98% Visa Success Rate",
  "16+ Years Experience",
];

const Cta = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="relative max-w-6xl mx-auto rounded-3xl sm:rounded-4xl overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-primary via-secondary to-tertiary" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full border border-white/20" />
            <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full border border-white/15" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider">
                  <Plane className="w-3.5 h-3.5" />
                  Start Your Journey
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-4">
                Ready to Plan Your Next Trip?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                From Singapore AVA and China visa processing to flights, hotels,
                and tours — {company.shortName} handles every detail with care.
              </p>

              <ul className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-4 lg:gap-2.5 mb-0 lg:mb-6">
                {trustPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center justify-center lg:justify-start gap-2 text-white/90 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-light shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-5">
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-3">
                  Quick Visa Links
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href={routes.singaporeVisa}
                    className="flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-white text-primary text-sm font-semibold hover:bg-white/95 transition-colors"
                  >
                    <span>Singapore AVA</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                  <Link
                    href={routes.chinaVisa}
                    className="flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-white/15 text-white border border-white/25 text-sm font-semibold hover:bg-white/25 transition-colors"
                  >
                    <span>China Visa</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </Link>
                </div>
              </div>

              <a
                href={`tel:${contact.phone.raw}`}
                className="flex items-center gap-4 px-4 sm:px-5 py-4 rounded-2xl bg-white text-primary hover:bg-white/95 transition-all duration-300 shadow-lg shadow-black/10"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs text-secondary/70 font-medium">
                    Call us now
                  </p>
                  <p className="text-base sm:text-lg font-bold truncate">
                    {contact.phone.display}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto shrink-0 hidden sm:block" />
              </a>

              <a
                href={`mailto:${contact.email.raw}`}
                className="flex items-center gap-4 px-4 sm:px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/15 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs text-white/60 font-medium">Email us</p>
                  <p className="text-sm sm:text-base font-semibold truncate">
                    {contact.email.display}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 px-4 sm:px-5 py-4 rounded-2xl bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-light shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-white/60 font-medium mb-1">
                    Visit our office
                  </p>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {contact.address.full}
                  </p>
                </div>
              </div>

              <Link
                href={routes.visa}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl bg-white text-primary font-bold text-sm sm:text-base hover:bg-light transition-colors shadow-lg shadow-black/10"
              >
                <span>Explore All Visa Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
