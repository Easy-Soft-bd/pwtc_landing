import { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  CheckCircle,
  Shield,
  FileCheck,
  Clock,
  Users,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Building2,
  MapPin,
  Phone,
  Mail,
  Info,
} from "lucide-react";
import {
  company,
  contact,
  routes,
  getPhoneLink,
  getEmailLink,
} from "@/lib/config";
import { singaporeVisa, externalLinks } from "@/lib/config/visa/singapore";

export const metadata: Metadata = {
  title: `Singapore Authorized Visa Agent (AVA) - ${company.name}`,
  description:
    `${company.name} is a Singapore Authorized Visa Agent (AVA) recognized by the High Commission of Singapore in Dhaka. Professional visa processing services for Singapore visa applications.`,
  keywords: [
    "Singapore Authorized Visa Agent",
    "AVA Singapore",
    "Singapore visa agent Bangladesh",
    "Authorized visa agent Dhaka",
    "Singapore visa processing",
    company.name,
  ],
};

const SingaporeAVAPage = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Official Authorization",
      description: "Recognized and authorized by the High Commission of Singapore in Dhaka",
    },
    {
      icon: FileCheck,
      title: "Expert Processing",
      description: "Experienced team with in-depth knowledge of Singapore visa requirements and procedures",
    },
    {
      icon: Clock,
      title: "Fast & Efficient",
      description: "Streamlined process to help you get your visa quickly and efficiently",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Dedicated support throughout your visa application journey",
    },
  ];

  const services = [
    {
      title: "Visa Application Submission",
      description: "We handle the complete visa application process on your behalf",
    },
    {
      title: "Document Verification",
      description: "Our experts review and verify all required documents before submission",
    },
    {
      title: "Application Tracking",
      description: "We keep you informed about your application status throughout the process",
    },
    {
      title: "Professional Guidance",
      description: "Expert advice and assistance for all your Singapore visa queries",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] border-4 border-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] border-4 border-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              <span className="text-xs sm:text-sm md:text-base font-bold text-white tracking-wide">
                {singaporeVisa.ava.title}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight drop-shadow-lg">
              Singapore Authorized Visa Agent
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium px-4 mb-6">
              {singaporeVisa.ava.description}
            </p>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
              {singaporeVisa.ava.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-8 md:pt-10">
        <Link
          href={routes.aboutUs}
          className="inline-flex items-center gap-2 sm:gap-3 text-secondary/70 hover:text-primary transition-all duration-300 group font-semibold text-sm sm:text-base md:text-lg"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to About Us</span>
        </Link>
      </div>

      {/* Benefits Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
                Why Choose Us
              </span>
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Benefits of Using an{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Authorized Agent</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 z-0" />
              </span>
            </h2>
            <p className="text-sm md:text-base text-secondary/80 max-w-2xl mx-auto leading-relaxed">
              As an authorized visa agent, we provide professional, reliable, and efficient visa processing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-surface border border-light/20 rounded-2xl p-6 md:p-8 shadow-md hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="mb-6 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300 shadow-lg group-hover:shadow-primary/20">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-secondary/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
                Our Services
              </span>
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              What We Offer as an{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">AVA</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 z-0" />
              </span>
            </h2>
            <p className="text-sm md:text-base text-secondary/80 max-w-2xl mx-auto leading-relaxed">
              Comprehensive visa processing services to make your Singapore visa application smooth and hassle-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-surface border border-light/20 rounded-2xl p-6 md:p-8 shadow-md hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-secondary/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Information Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-primary/10 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                  <Info className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                    Processing Information
                  </h3>
                  <p className="text-sm sm:text-base text-secondary/70">
                    Important details about visa processing
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm sm:text-base font-semibold text-foreground mb-2">
                    Processing Time
                  </p>
                  <p className="text-sm sm:text-base text-secondary/80">
                    Minimum {singaporeVisa.processingTime.minimum} (excluding day of submission) to {singaporeVisa.processingTime.maximum}. {singaporeVisa.processingTime.note}
                  </p>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm sm:text-base font-semibold text-foreground mb-2">
                    Office Hours
                  </p>
                  <div className="space-y-2 text-sm sm:text-base text-secondary/80">
                    <p>
                      <strong>{singaporeVisa.officeHours.application.label}:</strong> {singaporeVisa.officeHours.application.days} {singaporeVisa.officeHours.application.time}
                    </p>
                    <p>
                      <strong>{singaporeVisa.officeHours.passport.label}:</strong> {singaporeVisa.officeHours.passport.days} {singaporeVisa.officeHours.passport.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official References Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-background border-t border-light/10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-primary/10 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Official References
              </h3>
              <p className="text-sm sm:text-base text-secondary/80 mb-4 leading-relaxed">
                For more information about Singapore visa requirements and authorized agents, please refer to:
              </p>
              <div className="space-y-3">
                <a
                  href={externalLinks.ica.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-primary/10 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-secondary transition-colors shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {externalLinks.ica.label}
                    </p>
                    <p className="text-xs sm:text-sm text-secondary/70 mt-1">
                      Official visa requirements and procedures
                    </p>
                  </div>
                </a>
                <a
                  href={externalLinks.highCommission.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-primary/10 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-secondary transition-colors shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {externalLinks.highCommission.label}
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

      {/* CTA Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 border-4 border-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 border-4 border-white/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Apply for Your Singapore Visa?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
              Visit our office or contact us to start your Singapore visa application process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={routes.singaporeVisa}
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-white/50 transform hover:scale-105 inline-block text-center"
              >
                View Visa Requirements
              </Link>
              <Link
                href={routes.contact}
                className="bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold text-lg border-2 border-white/40 hover:bg-white/25 hover:border-white/60 transition-all duration-300 inline-block text-center shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingaporeAVAPage;

