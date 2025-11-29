import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  Clock,
  FileText,
  Award,
  ExternalLink,
  Info,
  ArrowLeft,
  DollarSign,
  AlertCircle,
  Calendar,
  Send,
  Package,
  MapPin,
  Building2,
  Download,
  FileDown,
  Mail,
} from "lucide-react";
import FAQSection from "@/components/visa/FAQSection";

export const metadata: Metadata = {
  title: "Singapore Visa Processing - Privileged World Travel Club | Authorized Visa Agent",
  description:
    "Apply for your Singapore visa through Privileged World Travel Club, a Singapore Authorized Visa Agent (AVA). Professional visa processing services in Dhaka, Bangladesh. Get expert assistance with your Singapore visa application.",
  keywords: [
    "Singapore visa",
    "Singapore visa processing",
    "Singapore visa requirements",
    "Singapore visa from Bangladesh",
    "Singapore Authorized Visa Agent",
    "AVA Singapore",
    "Privileged World Travel Club",
  ],
};

const SingaporeVisaPage = () => {
  const requiredDocuments = [
    {
      icon: FileText,
      title: "Valid Passport",
      description: "Passport valid for at least 6 months from the date of arrival in Singapore",
    },
    {
      icon: FileText,
      title: "Application Form (Form 14A)",
      description: "One set of completed application form, duly completed",
    },
    {
      icon: FileText,
      title: "Letter of Introduction (LOI) - Form V39A",
      description: "A completed Form V39A (Letter of Introduction for Visa Application), which may be issued by a local contact in Singapore (Singapore Citizen or Permanent Resident, at least 21 years old with Singpass account)",
    },
    {
      icon: FileText,
      title: "Passport Photo",
      description: "Recent passport-sized photograph (taken within 3 months, white background, full face without headgear)",
    },
    {
      icon: FileText,
      title: "Passport Bio-data Page",
      description: "Photocopy of the bio-data page of the applicant's passport",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Authorized Agent Banner */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] border-4 border-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] border-4 border-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 border-2 border-white/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10 px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white animate-pulse" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white tracking-wide">
                Singapore Authorized Visa Agent (AVA)
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight drop-shadow-lg">
              Apply for Singapore Visa with<br className="hidden sm:block" /> Privileged World Travel Club
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed font-medium px-4 sm:px-6">
              As a Singapore Authorized Visa Agent, we provide professional visa processing services to help you get your Singapore visa quickly and efficiently. Visit our office or contact us to start your application today.
            </p>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-8 md:pt-10">
        <Link
          href="/visa"
          className="inline-flex items-center gap-2 sm:gap-3 text-secondary/70 hover:text-primary transition-all duration-300 group font-semibold text-sm sm:text-base md:text-lg"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Countries</span>
        </Link>
      </div>

      {/* Official Information Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-primary/60 to-primary"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                  <Info className="relative w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-l from-transparent via-primary/60 to-primary"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight px-4 leading-tight">
                Singapore Visa Information
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-secondary/80 max-w-3xl mx-auto mb-4 sm:mb-6 px-4 leading-relaxed font-medium">
                Official information from the High Commission of the Republic of Singapore in Dhaka
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
                <a
                  href="https://dhaka.mfa.gov.sg/consular-services/visa-information/visa-application/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 sm:gap-3 text-primary font-bold hover:text-secondary transition-all duration-300 text-sm sm:text-base md:text-lg px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-primary/10 hover:scale-105"
                >
                  <span>High Commission Website</span>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-secondary/40 text-xl">•</span>
                <a
                  href="https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements/visa-detail-page/bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 sm:gap-3 text-primary font-bold hover:text-secondary transition-all duration-300 text-sm sm:text-base md:text-lg px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-primary/10 hover:scale-105"
                >
                  <span>ICA Official Information</span>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-12 md:space-y-16">
              {/* Visa Requirement */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 md:w-1 bg-linear-to-b from-primary via-primary/60 to-primary rounded-full hidden sm:block"></div>
                <div className="pl-0 sm:pl-6 md:pl-12">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Visa Requirement
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base md:text-lg text-secondary/80 leading-relaxed">
                    <p>
                      Visitors holding ordinary Bangladeshi passports must apply for an entry visa prior to their arrival in Singapore. Holders of Bangladeshi Diplomatic and Official passports are exempted from visa requirements.
                    </p>
                    <div className="relative pl-4 sm:pl-6 border-l-2 border-primary/30 mt-4 sm:mt-6">
                      <p className="text-foreground font-medium text-sm sm:text-base">
                        <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></span>
                        <strong className="text-primary">Important:</strong> A Singapore visa is not an immigration pass but a pre-entry permission. The grant of an immigration pass is determined by ICA officers at the point of entry. Possession of a valid visa does not guarantee entry into Singapore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visa Fees Section */}
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl group">
                {/* Professional Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface/95 to-surface border border-primary/10 shadow-xl"></div>
                {/* Subtle Hover Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                
                <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
                  {/* Header Section */}
                  <div className="flex items-center gap-4 mb-8 md:mb-10 pb-6 border-b border-primary/10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                      <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1">
                        Visa Fees
                      </h2>
                      <p className="text-sm sm:text-base text-secondary/70">
                        Total visa fees payable per applicant
                      </p>
                    </div>
                  </div>

                  {/* Total Fee Card - Premium Design */}
                  <div className="mb-8 md:mb-10">
                    <div className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 p-6 sm:p-8 transition-all duration-300 hover:border-secondary/30 hover:shadow-lg hover:-translate-y-0.5">
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full blur-2xl"></div>
                      
                      {/* Classic Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      
                      <div className="relative text-center z-10">
                        <p className="text-xs sm:text-sm text-secondary/60 uppercase tracking-wider font-semibold mb-2 transition-colors duration-300">
                          Total Visa Fees Payable
                        </p>
                        <div className="mb-2">
                          <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary tracking-tight">BDT</span>
                          <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary ml-2 tracking-tight">3,990</span>
                        </div>
                        <p className="text-xs sm:text-sm text-secondary/60 font-medium transition-colors duration-300">
                          per applicant
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Professional Fees Breakdown Table */}
                  <div className="mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 uppercase tracking-wide">
                      Fee Breakdown
                    </h3>
                    <div className="space-y-3">
                      {/* Visa Cost Row */}
                      <div className="group relative flex items-center justify-between p-4 sm:p-5 bg-surface/50 rounded-lg border border-primary/10 overflow-hidden transition-all duration-300 hover:border-secondary/30 hover:bg-surface hover:shadow-md hover:-translate-y-0.5">
                        {/* Classic Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <div className="relative flex items-center gap-3 z-10">
                          <div className="w-1.5 h-1.5 bg-secondary/60 rounded-full group-hover:bg-secondary transition-colors duration-300"></div>
                          <span className="text-sm sm:text-base text-secondary/80 font-medium group-hover:text-foreground transition-colors duration-300">Visa Cost (Equivalent to SGD $30)</span>
                        </div>
                        <span className="relative text-base sm:text-lg md:text-xl font-bold text-foreground transition-colors duration-300 z-10">BDT 2,690</span>
                      </div>

                      {/* Service Charge Row */}
                      <div className="group relative flex items-center justify-between p-4 sm:p-5 bg-surface/50 rounded-lg border border-primary/10 overflow-hidden transition-all duration-300 hover:border-secondary/30 hover:bg-surface hover:shadow-md hover:-translate-y-0.5">
                        {/* Classic Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <div className="relative flex items-center gap-3 z-10">
                          <div className="w-1.5 h-1.5 bg-secondary/60 rounded-full group-hover:bg-secondary transition-colors duration-300"></div>
                          <span className="text-sm sm:text-base text-secondary/80 font-medium group-hover:text-foreground transition-colors duration-300">Service Charge</span>
                        </div>
                        <span className="relative text-base sm:text-lg md:text-xl font-bold text-foreground transition-colors duration-300 z-10">BDT 1,300</span>
                      </div>

                      {/* Total Cost Row - Highlighted */}
                      <div className="group relative flex items-center justify-between p-5 sm:p-6 bg-gradient-to-r from-primary/10 via-primary/8 to-primary/10 rounded-lg border-2 border-primary/30 mt-4 overflow-hidden transition-all duration-300 hover:border-secondary/40 hover:shadow-lg hover:-translate-y-0.5">
                        {/* Classic Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <div className="relative flex items-center gap-3 z-10">
                          <Award className="w-5 h-5 text-primary transition-colors duration-300" />
                          <span className="text-base sm:text-lg font-bold text-foreground transition-colors duration-300">Total Cost</span>
                        </div>
                        <span className="relative text-xl sm:text-2xl md:text-3xl font-bold text-primary transition-colors duration-300 z-10">BDT 3,990</span>
                      </div>
                    </div>
                  </div>

                  {/* Professional Notice */}
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border-l-4 border-primary/50 mb-4">
                    <AlertCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm sm:text-base text-secondary/80 font-medium leading-relaxed">
                        <strong className="text-foreground">Important:</strong> Visa fees are non-refundable regardless of application outcome.
                      </p>
                    </div>
                  </div>

                  {/* Warning Notice with Last Updated Date */}
                  <div className="p-4 bg-warning/10 rounded-xl border-l-4 border-warning/50">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-warning mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm sm:text-base font-semibold text-foreground mb-2">
                          Important Notice
                        </p>
                        <p className="text-xs sm:text-sm text-secondary/80 mb-3 leading-relaxed">
                          Visa fees are subject to change without notice. Please verify the current fees directly from the official sources before submitting your application.
                        </p>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-secondary/70">
                          <Clock className="w-4 h-4 text-secondary/60" />
                          <span className="font-medium">Last Updated: <time dateTime="2024-12-19">November 30, 2025</time></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processing Time & Hours Section */}
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface/95 to-surface border border-primary/10 shadow-xl"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 via-secondary/10 to-secondary/20 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
                    <div className="relative group/icon">
                      <div className="absolute inset-0 bg-primary/30 rounded-2xl md:rounded-3xl blur-xl group-hover/icon:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary/25 via-primary/15 to-accent/20 rounded-2xl md:rounded-3xl flex items-center justify-center shrink-0 border-2 border-primary/30 shadow-lg group-hover/icon:scale-110 transition-transform duration-500">
                        <Clock className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-2 sm:mb-3 tracking-tight">
                        Singapore Visa Processing Time
                      </h2>
                      <p className="text-base sm:text-lg md:text-xl text-secondary/70 font-medium">
                        Processing timeline and office hours
                      </p>
                    </div>
                  </div>

                  {/* Processing Time Details */}
                  <div className="mb-6 md:mb-8">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-1 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3">
                          Processing Duration
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                          <p className="text-sm sm:text-base md:text-lg text-secondary/80 leading-relaxed">
                            According to <a href="https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements/visa-detail-page/bangladesh" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">ICA official website</a>, your visa application will be processed within <strong className="text-foreground">three working days</strong> (excluding the day of submission). However, some applications may take longer to process.
                          </p>
                          <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl border border-primary/15">
                            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                            <p className="text-xs sm:text-sm md:text-base text-secondary/80">
                              <strong className="text-foreground">Note:</strong> Processing time at the Singapore High Commission in Dhaka may vary. Minimum 5 (five) working days to 1 month or more, depending on the Singapore Embassy Dhaka. You are advised to apply for an entry visa within 30 days prior to arrival in Singapore.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Hours Grid */}
                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                    {/* Application Receiving Hours */}
                    <div className="relative group/item">
                      <div className="relative p-5 sm:p-6 md:p-8 border-2 border-light/20 rounded-2xl sm:rounded-3xl backdrop-blur-md bg-surface/60 overflow-hidden transition-all duration-300 group-hover/item:border-secondary/30 group-hover/item:bg-surface/80 group-hover/item:-translate-y-0.5 shadow-lg group-hover/item:shadow-xl">
                        {/* Classic Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-700"></div>
                        
                        <div className="relative flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 z-10">
                          <div className="relative">
                            <div className="absolute inset-0 bg-secondary/10 rounded-xl blur-md"></div>
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 border-2 border-secondary/20 shadow-lg transition-all duration-300">
                              <Send className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-secondary transition-colors duration-300" />
                            </div>
                          </div>
                          <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-foreground transition-colors duration-300">
                            Application Receiving Hours
                          </h3>
                        </div>
                        <div className="relative space-y-2 z-10">
                          <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-secondary/80">
                            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary/60 rounded-full shrink-0 transition-colors duration-300"></span>
                            <span><strong className="text-foreground font-bold transition-colors duration-300">Sunday – Thursday</strong></span>
                          </div>
                          <div className="pl-3 sm:pl-4 text-base sm:text-lg md:text-xl font-extrabold text-secondary transition-colors duration-300">
                            9:00 AM – 2:00 PM
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Passport Delivery Hours */}
                    <div className="relative group/item">
                      <div className="relative p-5 sm:p-6 md:p-8 border-2 border-light/20 rounded-2xl sm:rounded-3xl backdrop-blur-md bg-surface/60 overflow-hidden transition-all duration-300 group-hover/item:border-secondary/30 group-hover/item:bg-surface/80 group-hover/item:-translate-y-0.5 shadow-lg group-hover/item:shadow-xl">
                        {/* Classic Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-700"></div>
                        
                        <div className="relative flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 z-10">
                          <div className="relative">
                            <div className="absolute inset-0 bg-secondary/10 rounded-xl blur-md"></div>
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 border-2 border-secondary/20 shadow-lg transition-all duration-300">
                              <Package className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-secondary transition-colors duration-300" />
                            </div>
                          </div>
                          <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-foreground transition-colors duration-300">
                            Passport Delivery Hours
                          </h3>
                        </div>
                        <div className="relative space-y-2 z-10">
                          <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-secondary/80">
                            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary/60 rounded-full shrink-0 transition-colors duration-300"></span>
                            <span><strong className="text-foreground font-bold transition-colors duration-300">Sunday – Thursday</strong></span>
                          </div>
                          <div className="pl-3 sm:pl-4 text-base sm:text-lg md:text-xl font-extrabold text-secondary transition-colors duration-300">
                            9:00 AM – 4:00 PM
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submission Method */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 md:w-1 bg-linear-to-b from-primary via-primary/60 to-primary rounded-full hidden sm:block"></div>
                <div className="pl-0 sm:pl-6 md:pl-12">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Submission of Visa Application
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base md:text-lg text-secondary/80 leading-relaxed">
                    <div className="p-4 sm:p-6 bg-primary/10 rounded-xl sm:rounded-2xl border-2 border-primary/20 mb-4">
                      <p className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2">
                        Apply Through Privileged World Travel Club
                      </p>
                      <p className="text-sm sm:text-base md:text-lg text-secondary/80 leading-relaxed">
                        As a <strong className="text-primary">Singapore Authorized Visa Agent (AVA)</strong>, Privileged World Travel Club is authorized by the High Commission of Singapore in Dhaka to process and submit visa applications. We provide professional, reliable, and efficient visa processing services to help you get your Singapore visa approved.
                      </p>
                    </div>
                    <p>
                      According to <a href="https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements/visa-detail-page/bangladesh" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">ICA guidelines</a>, your visa application can be submitted:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                        <span><strong className="text-foreground">Through an Authorized Visa Agent (Recommended):</strong> In Dhaka, applications must be submitted online through one of the High Commission&apos;s <strong className="text-primary">Authorised Visa Agents</strong>. <strong className="text-primary">Privileged World Travel Club</strong> is an authorized agent and can handle your complete visa application process. Visit our office or contact us to get started.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                        <span><strong className="text-foreground">Online in Singapore:</strong> Your visa application can be submitted online using the e-Service through a strategic partner or a local contact in Singapore.</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-3 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl border border-primary/15">
                      <p className="text-xs sm:text-sm md:text-base text-secondary/80">
                        <strong className="text-foreground">Important:</strong> You are advised to apply for an entry visa within <strong className="text-foreground">30 days prior to arrival</strong> in Singapore. <strong className="text-primary">Contact Privileged World Travel Club today</strong> to start your visa application process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Where to Apply Section */}
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
                <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-primary/4 to-primary/8 border border-primary/10"></div>
                <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br from-primary/20 to-accent/20 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                        Where to Apply
                      </h2>
                      <p className="text-sm sm:text-base text-secondary/70">
                        Visit Privileged World Travel Club - Singapore Authorized Visa Agent
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="p-4 sm:p-5 bg-primary/10 rounded-xl border border-primary/20 mb-4">
                      <p className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-2">
                        Apply at Privileged World Travel Club
                      </p>
                      <p className="text-sm sm:text-base md:text-lg text-secondary/80 leading-relaxed">
                        As a <strong className="text-primary">Singapore Authorized Visa Agent (AVA)</strong>, we are authorized by the High Commission of Singapore in Dhaka to process and submit visa applications. Visit our office to submit your application and get professional assistance throughout the process.
                      </p>
                    </div>
                    
                    <div className="relative group">
                      <div className="absolute inset-0 bg-primary/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative p-4 sm:p-6 md:p-8 border border-primary/15 rounded-xl sm:rounded-2xl bg-surface/50 backdrop-blur-sm group-hover:border-primary/25 transition-colors duration-300">
                        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 border border-primary/20">
                            <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                                Privileged World Travel Club
                              </h3>
                              <span className="px-2 sm:px-3 py-1 bg-primary text-white text-xs sm:text-sm font-semibold rounded-full">
                                Authorized AVA
                              </span>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                              <div className="flex items-start gap-2 sm:gap-3">
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 shrink-0" />
                                <div className="text-sm sm:text-base md:text-lg text-secondary/80 leading-relaxed min-w-0">
                                  <p className="font-semibold text-foreground mb-1">Office Address:</p>
                                  <p className="break-words">Room 33-34, (5th floor), Mukto Bangla Shopping Complex, Mirpur-1, Dhaka 1216</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2 sm:gap-3">
                                <Send className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 shrink-0" />
                                <div className="text-sm sm:text-base md:text-lg text-secondary/80 leading-relaxed">
                                  <p className="font-semibold text-foreground mb-1">Application Hours:</p>
                                  <p>Sunday – Thursday: 9:00 AM – 2:00 PM</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-2 sm:gap-3">
                                <Package className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 shrink-0" />
                                <div className="text-sm sm:text-base md:text-lg text-secondary/80 leading-relaxed">
                                  <p className="font-semibold text-foreground mb-1">Passport Collection Hours:</p>
                                  <p>Sunday – Thursday: 9:00 AM – 4:00 PM</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Letter of Introduction Details */}
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
                <div className="absolute inset-0 bg-linear-to-br from-primary/6 via-primary/3 to-primary/6 border border-primary/10"></div>
                <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
                  <div className="flex items-start justify-between gap-4 mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2 sm:gap-3">
                      <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-success shrink-0" />
                      <span className="break-words">Letter of Introduction (LOI) - Form V39A</span>
                    </h2>
                    <a
                      href="https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements/visa-detail-page/bangladesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-secondary transition-colors duration-300 text-xs sm:text-sm shrink-0"
                    >
                      <span>ICA Info</span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-2">
                          For social visitors:
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-secondary/80 leading-relaxed">
                          The local contact must be either a <strong className="text-foreground">Singapore Citizen (SC) or a Singapore Permanent Resident (PR) who is at least 21 years old with a Singpass account</strong>. LOIs issued by your Embassy can also be accepted if you are unable to secure an LOI from a local contact.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-2">
                          For business visitors:
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-secondary/80 leading-relaxed">
                          If you are applying for an entry visa for business visit (attending business negotiations or discussions), the local contact must be acting on behalf of a <strong className="text-foreground">Singapore-registered business entity</strong>. The LOI must be signed by a Singapore Citizen or Singapore Permanent Resident, who is at least 21 years old.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 sm:p-4 bg-success/5 rounded-lg sm:rounded-xl border border-success/15">
                      <p className="text-xs sm:text-sm md:text-base text-secondary/80">
                        <strong className="text-foreground">Reference:</strong> Information based on <a href="https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements/visa-detail-page/bangladesh" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">ICA official website</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
        {/* Enhanced Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 sm:w-[500px] sm:h-[500px] border-2 border-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 sm:w-[400px] sm:h-[400px] border-2 border-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-primary/60 to-primary"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full relative"></div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                  <FileText className="relative w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full relative"></div>
                </div>
                <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-primary/60 to-primary"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-foreground mb-4 sm:mb-6 tracking-tight leading-tight">
                Required Documents
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto leading-relaxed font-medium px-4">
                Essential documents for your Singapore visa application
              </p>
            </div>

            {/* Documents Grid - Premium Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {requiredDocuments.map((doc, index) => {
                const IconComponent = doc.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Premium Card with Gradient Border */}
                    <div className="relative h-full">
                      {/* Enhanced Gradient Border Effect */}
                      <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-700"></div>
                      
                      {/* Main Card */}
                      <div className="relative h-full bg-gradient-to-br from-surface/95 via-surface/90 to-surface/95 backdrop-blur-2xl border-2 border-light/30 rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] p-7 sm:p-9 md:p-11 lg:p-12 transition-all duration-700 group-hover:border-primary/40 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                        {/* Enhanced Number Badge */}
                        <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary via-primary/90 to-primary rounded-full flex items-center justify-center shadow-2xl border-4 border-surface backdrop-blur-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white drop-shadow-lg">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="space-y-4 sm:space-y-5">
                          {/* Icon and Title */}
                          <div className="flex items-start gap-4 sm:gap-5">
                            <div className="relative group/icon">
                              <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl group-hover/icon:blur-2xl transition-all duration-500"></div>
                              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/20 via-primary/15 to-primary/25 rounded-2xl flex items-center justify-center border-2 border-primary/30 shadow-xl group-hover/icon:border-primary/50 group-hover/icon:bg-primary/20 transition-all duration-500 group-hover/icon:scale-110 group-hover/icon:rotate-3">
                                <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary transition-all duration-500 group-hover/icon:text-accent" />
                              </div>
                            </div>
                            <div className="flex-1 pt-1">
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground mb-2 sm:mb-3 leading-tight group-hover:text-primary transition-colors duration-300 tracking-tight">
                                {doc.title}
                              </h3>
                            </div>
                          </div>

                          {/* Description */}
                          <div className="pl-0 sm:pl-20 md:pl-24">
                            <p className="text-sm sm:text-base md:text-lg text-secondary/80 leading-relaxed">
                              {doc.description}
                            </p>
                          </div>

                          {/* Photo Specifications (Special Case) */}
                          {doc.title === "Passport Photo" && (
                            <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-linear-to-r from-transparent via-primary/15 to-transparent pl-0 sm:pl-20 md:pl-24">
                              <div className="bg-primary/5 rounded-xl p-4 sm:p-5 border border-primary/10">
                                <p className="text-xs sm:text-sm text-secondary/70 leading-relaxed">
                                  <strong className="text-foreground font-semibold">Photo Specifications:</strong> Taken within 3 months, color photo against white background with matt or semi-matt finish, full face without headgear (religious/racial headgear acceptable but must not hide facial features), facial image between 25mm and 35mm from chin to crown.
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Decorative Bottom Line */}
                          <div className="pt-4 sm:pt-5">
                            <div className="h-px bg-linear-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary/40 transition-all duration-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] border-4 border-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] border-4 border-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 border-2 border-white/10 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-white/15 backdrop-blur-md rounded-full border-2 border-white/30 shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-500">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white animate-pulse" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-white tracking-wide">
                Singapore Authorized Visa Agent
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight drop-shadow-2xl">
              Ready to Apply for Your Singapore Visa?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-medium px-4">
              Visit Privileged World Travel Club, a Singapore Authorized Visa Agent, and let our experienced team handle your visa application. We provide professional, reliable, and efficient visa processing services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
              <a
                href="tel:+8801819591111"
                className="group inline-flex items-center gap-3 bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-extrabold text-base sm:text-lg hover:bg-white/95 hover:shadow-2xl hover:shadow-white/30 transform hover:scale-105 transition-all duration-300 border-2 border-white/50"
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                <span>Call Us: +880 1819 591 111</span>
              </a>
              <a
                href="mailto:privilegedworldbd@gmail.com"
                className="group inline-flex items-center gap-3 bg-white/15 backdrop-blur-md text-white border-2 border-white/40 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-extrabold text-base sm:text-lg hover:bg-white/25 hover:border-white/60 hover:shadow-2xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                <span>Email Us</span>
              </a>
            </div>
            <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl border-2 border-white/30 shadow-2xl max-w-2xl mx-auto hover:bg-white/20 hover:scale-[1.02] transition-all duration-500">
              <p className="text-sm sm:text-base md:text-lg text-white/95 mb-3 sm:mb-4 font-extrabold">
                Visit Our Office:
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed font-medium mb-3 sm:mb-4">
                Room 33-34, (5th floor), Mukto Bangla Shopping Complex, Mirpur-1, Dhaka 1216
              </p>
              <p className="text-xs sm:text-sm md:text-base text-white/80 font-semibold">
                Application Hours: Sunday – Thursday, 9:00 AM – 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Important Download Links Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-background via-primary/3 to-background overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-10 left-20 w-72 h-72 border border-primary/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 border border-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 md:w-24 h-px bg-linear-to-r from-transparent via-primary/40 to-primary/60"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
                <Download className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
                <div className="w-12 sm:w-16 md:w-24 h-px bg-linear-to-r from-primary/60 via-primary/40 to-transparent"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
                Important Download Links
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto leading-relaxed">
                Download the required forms and templates for your visa application
              </p>
            </div>

            {/* Download Buttons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Application Form 14A */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-linear-to-br from-primary via-primary/70 to-primary rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
                <div className="relative h-full bg-surface/90 backdrop-blur-xl border border-light/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-500 group-hover:border-primary/25 group-hover:shadow-xl group-hover:shadow-primary/5 group-hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5">
                    {/* Icon */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:border-primary/30 group-hover:bg-primary/15 transition-all duration-500 group-hover:scale-110">
                        <FileDown className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary transition-colors duration-500" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        Application Form 14A
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-secondary/80 leading-relaxed">
                        Official Singapore visa application form
                      </p>
                    </div>

                    {/* Download Button */}
                    <a
                      href="/Form 14A.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Form-14A.pdf"
                      className="w-full mt-4 sm:mt-6 inline-flex items-center justify-center gap-3 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-secondary hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105 transition-all duration-300"
                    >
                      <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span>Download Form 14A</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Letter of Introduction Template */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-linear-to-br from-primary via-primary/70 to-primary rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
                <div className="relative h-full bg-surface/90 backdrop-blur-xl border border-light/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-500 group-hover:border-primary/25 group-hover:shadow-xl group-hover:shadow-primary/5 group-hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5">
                    {/* Icon */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:border-primary/30 group-hover:bg-primary/15 transition-all duration-500 group-hover:scale-110">
                        <FileText className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary transition-colors duration-500" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        Letter of Introduction Template
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-secondary/80 leading-relaxed">
                        Template for Letter of Introduction (LOI)
                      </p>
                    </div>

                    {/* Download Button */}
                    <a
                      href="/LOI template.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download="LOI-template.pdf"
                      className="w-full mt-4 sm:mt-6 inline-flex items-center justify-center gap-3 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-secondary hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105 transition-all duration-300"
                    >
                      <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span>Download LOI Template</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official References Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-background border-t border-light/10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/10">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Official References
              </h3>
              <p className="text-sm sm:text-base text-secondary/80 mb-4 leading-relaxed">
                For the most up-to-date and comprehensive information, please refer to the official sources:
              </p>

              {/* Last Updated Time & Warning Note */}
              <div className="mb-6 p-4 bg-warning/10 rounded-xl border-l-4 border-warning/50">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-warning mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm sm:text-base font-semibold text-foreground mb-2">
                      Important Notice
                    </p>
                    <p className="text-xs sm:text-sm text-secondary/80 mb-3 leading-relaxed">
                      Visa requirements and procedures may change without notice. Please verify all information directly from the official sources before submitting your application.
                    </p>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-secondary/70">
                      <Clock className="w-4 h-4 text-secondary/60" />
                      <span className="font-medium">Last Updated: <time dateTime="2024-12-19">November 30, 2025</time></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements/visa-detail-page/bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-primary/10 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-secondary transition-colors shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      Immigration & Checkpoints Authority (ICA) - Bangladesh Visa Requirements
                    </p>
                    <p className="text-xs sm:text-sm text-secondary/70 mt-1">
                      Official visa requirements and procedures
                    </p>
                  </div>
                </a>
                <a
                  href="https://dhaka.mfa.gov.sg/consular-services/visa-information/visa-application/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-primary/10 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-secondary transition-colors shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      High Commission of Singapore in Dhaka
                    </p>
                    <p className="text-xs sm:text-sm text-secondary/70 mt-1">
                      Local application procedures and authorized agents
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingaporeVisaPage;
