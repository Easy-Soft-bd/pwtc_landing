import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  CheckCircle,
  Globe,
  Users,
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail,
  Building2,
  Plane,
  Hotel,
  Map,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  Star,
  Target,
  Heart,
} from "lucide-react";
import {
  company,
  contact,
  services as servicesConfig,
  authorizations,
  statistics,
  whyChooseUs,
  routes,
  getPhoneLink,
  getEmailLink,
} from "@/lib/config";

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Plane,
  Hotel,
  Map,
  FileCheck,
  ShieldCheck,
  Building2,
  Award,
  Shield,
  Users,
  Clock,
  Globe,
  Heart,
  CheckCircle,
};

export const metadata: Metadata = {
  title: `About Us - ${company.name} | Premium Travel & Visa Services`,
  description:
    `Learn about ${company.name}, a Singapore Authorized Visa Agent (AVA) and trusted travel partner. We provide premium travel services, visa processing, and expert assistance for your journey.`,
  keywords: [
    company.name,
    "About us",
    "Singapore Authorized Visa Agent",
    "Travel agency Bangladesh",
    "Visa processing services",
    "IATA certified",
    "Tour operator Bangladesh",
  ],
};

const AboutUsPage = () => {
  // Map services with icons
  const services = servicesConfig.map((service) => {
    const IconComponent = iconMap[service.icon] || Building2;
    return {
      ...service,
      icon: IconComponent,
    };
  });

  // Map whyChooseUs with icons
  const whyChooseUsWithIcons = whyChooseUs.map((item) => {
    const IconComponent = iconMap[item.icon] || Award;
    return {
      ...item,
      icon: IconComponent,
    };
  });

  // Map statistics with icons
  const statisticsWithIcons = statistics.map((stat) => {
    const IconComponent = iconMap[stat.icon] || Users;
    return {
      ...stat,
      icon: IconComponent,
    };
  });

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
                Trusted Travel Partner
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight drop-shadow-lg">
              About {company.name}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium px-4">
              {company.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
                  Our Story
                </span>
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Who We Are
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-secondary/80 leading-relaxed">
              <p>
                <strong className="text-foreground">{company.name}</strong> {company.description}
              </p>
              <p>
                We are proud to be recognized as a <strong className="text-primary">Singapore Authorized Visa Agent (AVA)</strong> by the High Commission of Singapore in Dhaka. This authorization reflects our commitment to providing professional, efficient, and trustworthy visa processing services for Singapore visa applications.
              </p>
              <p>
                Our mission is to make travel accessible, seamless, and memorable for our clients. We combine our extensive industry knowledge, official authorizations, and customer-focused approach to deliver exceptional service that exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative w-full py-12 md:py-16 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {statisticsWithIcons.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-surface border border-primary/20 bg-primary/10 rounded-2xl p-6 md:p-8 shadow-md hover:border-primary/40 hover:bg-primary/15 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-secondary/80 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="relative w-full py-12 sm:py-16 md:py-20 bg-background scroll-mt-20">
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
              What Sets Us Apart
            </h2>
            <p className="text-sm md:text-base text-secondary/80 max-w-2xl mx-auto leading-relaxed">
              We combine official authorizations, industry expertise, and personalized service to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUsWithIcons.map((item, index) => {
              const Icon = item.icon;
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
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="relative w-full py-12 sm:py-16 md:py-20 bg-background overflow-hidden scroll-mt-20">
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
              Premium Travel{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Services</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 z-0" />
              </span>
            </h2>
            <p className="text-sm md:text-base text-secondary/80 max-w-3xl mx-auto leading-relaxed">
              Experience world-class travel services tailored to your needs. From flights to accommodations, tours to visas, we handle every detail with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
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
                      {service.title}
                    </h3>
                    <p className="text-sm text-secondary/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teams CTA Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 border-4 border-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 border-4 border-white/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              <span className="text-white/90 font-semibold text-sm sm:text-base tracking-widest uppercase">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Meet Our Expert Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
              Our dedicated team of travel and visa experts is committed to providing you with exceptional service and personalized attention.
            </p>
            <Link
              href={routes.teams}
              className="group inline-flex items-center gap-3 bg-white text-primary px-8 md:px-12 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-white/50 transform hover:scale-105"
            >
              <span>View Our Team</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Authorizations Section */}
      <section id="authorizations" className="relative w-full py-12 md:py-16 bg-background overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
                Trust & Credibility
              </span>
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Official Authorizations &{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Recognition</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 z-0" />
              </span>
            </h2>
            <p className="text-sm md:text-base text-secondary/80 max-w-2xl mx-auto leading-relaxed">
              We are officially recognized and authorized by leading international organizations and government bodies, ensuring trusted and reliable services for all your travel and visa needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {authorizations.map((auth, index) => (
              <div
                key={index}
                className="group relative bg-surface border border-light/20 rounded-2xl p-6 md:p-8 shadow-md hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500">
                  <div className="relative w-full h-full">
                    <Image
                      src={auth.logo}
                      alt={`${auth.title} background`}
                      fill
                      className="object-cover blur-xl scale-90"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-tertiary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative w-full h-20 md:h-24 mb-4">
                    <Image
                      src={auth.logo}
                      alt={auth.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary/15 to-accent/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold mb-3 group-hover:bg-primary/25 group-hover:scale-105 transition-all duration-300 shadow-sm group-hover:shadow-md">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    {auth.badge}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-foreground leading-tight group-hover:text-primary transition-all duration-300 relative">
                    {auth.title}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-10 md:mt-12">
            <Link
              href={routes.authorizations}
              className="group relative bg-primary text-white px-8 md:px-12 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <span>View All Authorizations & Details</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Singapore AVA CTA Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 border-4 border-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 border-4 border-white/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              <span className="text-white/90 font-semibold text-sm sm:text-base tracking-widest uppercase">
                Authorised Visa Agent
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Singapore Authorized Visa Agent (AVA)
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
              We are an authorised visa agent recognized by the High Commission of the Republic of Singapore in Dhaka. Learn more about our AVA services and how we can help with your Singapore visa application.
            </p>
            <Link
              href={routes.singaporeAva}
              className="group inline-flex items-center gap-3 bg-white text-primary px-8 md:px-12 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-white/50 transform hover:scale-105"
            >
              <span>Learn More About AVA Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative w-full py-12 sm:py-16 md:py-20 bg-background border-t border-light/10 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
                  Get In Touch
                </span>
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Visit Our Office
              </h2>
              <p className="text-sm md:text-base text-secondary/80 max-w-2xl mx-auto leading-relaxed">
                We're here to help you with all your travel and visa needs. Visit us at our office or contact us through phone or email.
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-primary/10 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/20 hover:bg-primary/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">Address</h3>
                    <p className="text-sm sm:text-base text-secondary/80 leading-relaxed">
                      {contact.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/20 hover:bg-primary/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">Phone</h3>
                    <a
                      href={getPhoneLink()}
                      className="text-sm sm:text-base text-primary hover:text-secondary transition-colors font-semibold"
                    >
                      {contact.phone.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/20 hover:bg-primary/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">Email</h3>
                    <a
                      href={getEmailLink()}
                      className="text-sm sm:text-base text-primary hover:text-secondary transition-colors font-semibold break-all"
                    >
                      {contact.email.display}
                    </a>
                  </div>
                </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/95 mb-8 leading-relaxed">
              Contact us today to get expert assistance with your travel plans and visa applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={routes.visa}
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-white/50 transform hover:scale-105 inline-block text-center"
              >
                Explore Visa Services
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

export default AboutUsPage;

