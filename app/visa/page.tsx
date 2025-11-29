import { Metadata } from "next";
import { Shield, CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import CountriesSection from "@/components/visa/CountriesSection";

export const metadata: Metadata = {
  title: "Visa Services - Privileged World Travel Club",
  description:
    "Expert visa processing services for international travel. Fast, reliable, and professional visa assistance.",
};

const VisaPage = () => {
  const features = [
    {
      icon: CheckCircle,
      text: "Expert visa consultation",
    },
    {
      icon: CheckCircle,
      text: "Document preparation assistance",
    },
    {
      icon: CheckCircle,
      text: "Application submission",
    },
    {
      icon: CheckCircle,
      text: "Status tracking",
    },
    {
      icon: CheckCircle,
      text: "98% success rate",
    },
    {
      icon: CheckCircle,
      text: "Fast processing time",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Countries Section - Moved to Top */}
      <CountriesSection />

      {/* Features Section */}
      <section className="relative w-full py-16 md:py-20 bg-linear-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Us?
              </h2>
              <p className="text-base md:text-lg text-secondary/70">
                Experience the difference with our professional visa services
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-surface border border-light/20 rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center text-success shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-sm md:text-base text-foreground font-medium">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Visa Application?
            </h2>
            <p className="text-base md:text-lg text-secondary/70 mb-8">
              Contact our expert team today for personalized visa assistance and
              guidance
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+8801819591111"
                className="bg-surface border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-primary/5 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisaPage;
