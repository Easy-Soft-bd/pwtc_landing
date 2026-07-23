import { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  CheckCircle,
  Clock,
  ExternalLink,
  Info,
  ArrowLeft,
  AlertCircle,
  Send,
  Mail,
  MapPin,
  Building2,
  FileText,
  Phone,
  Shield,
} from "lucide-react";
import ChinaVisaFeeTable from "@/components/visa/ChinaVisaFeeTable";
import { contact, company } from "@/lib/config";
import {
  chinaVisa,
  externalLinks,
  faqs,
  visaRequirements,
  applicationSteps,
  bangladeshPassportFees,
  hongKongMacaoFees,
  otherPassportFees,
  formatBdt,
} from "@/lib/config/visa/china";

export const metadata: Metadata = {
  title: `China Visa Processing - ${company.name} | Authorized Travel Agency`,
  description: `Apply for your China visa through ${company.name}. Complete visa fee guide, requirements, and expert COVA & CVASC assistance in Dhaka, Bangladesh.`,
  keywords: [
    "China visa",
    "China visa fees Bangladesh",
    "China visa processing Dhaka",
    "CVASC Dhaka",
    "COVA China visa",
    "Privileged World Travel Club",
    company.name,
  ],
};

const ChinaVisaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 border-4 border-white/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-white/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30">
              <Award className="w-5 h-5 text-white" />
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                {chinaVisa.agency.title}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              China Visa Processing
              <br className="hidden sm:block" />
              <span className="text-white"> with {company.name}</span>
            </h1>
            <p className="text-base sm:text-lg text-white max-w-3xl mx-auto leading-relaxed">
              {chinaVisa.agency.fullDescription}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-6 sm:pt-8">
        <Link
          href="/visa"
          className="inline-flex items-center gap-2 text-foreground/85 hover:text-primary transition-colors font-semibold text-sm sm:text-base group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to All Countries
        </Link>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-14 max-w-6xl">
        {/* About PWTC */}
        <section className="mb-12 sm:mb-16">
          <div className="rounded-3xl border border-primary/10 bg-surface p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                  Apply Through {company.name}
                </h2>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                  {chinaVisa.agency.about}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "COVA online application assistance",
                "Document checklist & verification",
                "CVASC submission & biometrics",
                "Visa tracking & passport delivery",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-primary/5 border border-primary/10"
                >
                  <CheckCircle className="w-4 h-4 text-success shrink-0" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processing */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
            Processing Time
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                label: "Preliminary Review",
                value: chinaVisa.processingTime.preliminaryReview,
                icon: FileText,
              },
              {
                label: "Regular Processing",
                value: chinaVisa.processingTime.regular,
                icon: Clock,
              },
              {
                label: "Express Processing",
                value: chinaVisa.processingTime.express,
                icon: Clock,
              },
            ].map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl border border-primary/15 bg-surface p-5 text-center"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="text-xs font-bold text-foreground/75 uppercase tracking-wide mb-1">
                  {label}
                </p>
                <p className="text-lg font-bold text-foreground">{value}</p>
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-base text-foreground/85 text-center mt-4 font-medium">
            {chinaVisa.processingTime.note}
          </p>
        </section>

        {/* Visa Fees */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              China Visa Fees
            </h2>
            <p className="text-sm sm:text-base text-foreground/90 max-w-2xl mx-auto">
              Fee schedule for CVASC Dhaka. Bangladesh passport single-entry
              regular total:{" "}
              <strong className="text-primary">
                {formatBdt(bangladeshPassportFees[0].regular.total)}
              </strong>
            </p>
          </div>

          <div className="space-y-6">
            <ChinaVisaFeeTable
              title="Bangladesh Passport"
              rows={bangladeshPassportFees}
            />
            <ChinaVisaFeeTable
              title="Hong Kong / Macao Visa"
              rows={hongKongMacaoFees}
            />
            <ChinaVisaFeeTable
              title="Other Passport Types"
              rows={otherPassportFees}
            />
          </div>

          <div className="mt-6 rounded-2xl border-2 border-primary/20 bg-primary/8 p-5 sm:p-6 md:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="flex items-start gap-3 flex-1">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground text-base mb-1">
                    Pricing Subject to Change
                  </p>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    Visa and service fees listed above are indicative and may
                    change without notice due to embassy updates, exchange rates,
                    or CVASC policy changes. For{" "}
                    <strong className="text-foreground">
                      confirmed, up-to-date pricing
                    </strong>
                    , please contact {company.name} before submitting your
                    application.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href={`tel:${contact.phone.raw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-secondary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call for Pricing
                </a>
                <a
                  href={`mailto:${contact.email.raw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-primary/25 bg-surface text-primary text-sm font-semibold hover:bg-primary/5 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-warning/40 bg-warning/10 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="font-bold text-foreground text-base">
                  China Consulate Instructions
                </p>
                <ul className="space-y-2">
                  {chinaVisa.consulateInstructions.map((note) => (
                    <li
                      key={note}
                      className="text-sm text-foreground/90 leading-relaxed flex gap-2"
                    >
                      <span className="text-primary shrink-0">•</span>
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">
            China Visa Requirements
          </h2>
          <p className="text-sm text-foreground/80 text-center mb-8 max-w-2xl mx-auto">
            Document requirements may vary by visa category. Our team will
            confirm the exact checklist for your application.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visaRequirements.map((req, i) => (
              <div
                key={req.title}
                className="flex gap-4 p-5 rounded-2xl border border-primary/15 bg-surface hover:border-primary/25 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{req.title}</h3>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {req.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Steps */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Application Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {applicationSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 p-5 rounded-2xl bg-surface border border-primary/15"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact: PWTC + CVASC */}
        <section className="mb-12 sm:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-primary/15 bg-primary/5 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <Building2 className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                {company.name}
              </h2>
            </div>
            <p className="text-sm text-foreground/90 mb-5 leading-relaxed">
              Visit us for China visa consultation and application support.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-foreground/75 uppercase mb-1">
                    Office Address
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {contact.address.full}
                  </p>
                </div>
              </div>
              <a
                href={`tel:${contact.phone.raw}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-primary/10 hover:border-primary/25 transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs font-semibold text-foreground/80">Phone</p>
                  <p className="font-semibold text-foreground">
                    {contact.phone.display}
                  </p>
                </div>
              </a>
              <a
                href={`mailto:${contact.email.raw}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-primary/10 hover:border-primary/25 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs font-semibold text-foreground/80">Email</p>
                  <p className="font-semibold text-foreground break-all">
                    {contact.email.display}
                  </p>
                </div>
              </a>
              <p className="text-sm font-medium text-foreground/85">
                Application Hours: Sunday – Thursday, 9:00 AM – 2:00 PM
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-primary/15 bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">CVASC Dhaka</h2>
            </div>
            <p className="text-sm text-foreground/90 mb-5 leading-relaxed">
              Chinese Visa Application Service Center — official passport
              submission location.
            </p>
            <div className="space-y-3 text-sm text-foreground/90">
              <p>{chinaVisa.cvasc.address}</p>
              <p>
                <strong className="text-foreground">Submission:</strong>{" "}
                {chinaVisa.cvasc.applicationHours}
              </p>
              <p>
                <strong className="text-foreground">Pick-up:</strong>{" "}
                {chinaVisa.cvasc.pickupHours}
              </p>
            </div>
            <a
              href={externalLinks.cvasc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-primary font-semibold text-sm hover:text-secondary transition-colors"
            >
              Visit CVASC Website
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-primary/15 bg-surface p-5 sm:p-6"
              >
                <h3 className="font-bold text-foreground mb-2">{faq.question}</h3>
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {faq.answer}
                </p>
                {faq.links && faq.links.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {faq.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:text-secondary"
                      >
                        {link.text}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="relative py-12 sm:py-16 bg-linear-to-br from-primary via-primary/95 to-primary overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Ready to Apply for Your China Visa?
            </h2>
            <p className="text-white mb-8 leading-relaxed">
              Contact {company.name} today for expert assistance with your China
              visa application.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${contact.phone.raw}`}
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3.5 rounded-xl font-bold hover:bg-white/95 transition-colors w-full sm:w-auto justify-center"
              >
                <Send className="w-5 h-5" />
                {contact.phone.display}
              </a>
              <a
                href={`mailto:${contact.email.raw}`}
                className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-6 py-3.5 rounded-xl font-bold hover:bg-white/15 transition-colors w-full sm:w-auto justify-center"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-10 bg-background border-t border-light/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              Official References
            </h3>
            <div className="space-y-2">
              {Object.values(externalLinks).map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-primary shrink-0" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChinaVisaPage;
