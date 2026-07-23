import Logo from "../assets/logo/Logo";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  Plane,
  Shield,
} from "lucide-react";
import {
  navigation,
  contact,
  socialMedia,
  company,
  routes,
} from "@/lib/config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = navigation.footer.quickLinks;
  const services = navigation.footer.services;

  const socialLinks = [
    { name: socialMedia.facebook.name, href: socialMedia.facebook.href, icon: Facebook },
    { name: socialMedia.instagram.name, href: socialMedia.instagram.href, icon: Instagram },
    { name: socialMedia.linkedin.name, href: socialMedia.linkedin.href, icon: Linkedin },
    { name: socialMedia.twitter.name, href: socialMedia.twitter.href, icon: Twitter },
  ];

  const visaLinks = [
    { href: routes.singaporeVisa, label: "Singapore AVA" },
    { href: routes.chinaVisa, label: "China Visa" },
  ];

  return (
    <footer className="relative w-full mt-auto overflow-hidden">
      {/* CTA strip */}
      <div className="relative overflow-hidden bg-linear-to-r from-primary via-secondary to-tertiary">
        {/* Background shapes */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-white/8 blur-3xl" />
          <div className="absolute top-1/2 -right-20 w-64 h-64 rounded-full border-2 border-white/20" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border border-white/25" />
          <div className="absolute top-8 left-1/3 w-20 h-20 rotate-45 border border-white/15 rounded-xl" />
          <div className="absolute bottom-6 right-12 w-14 h-14 rotate-12 bg-white/10 rounded-2xl" />
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.07]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="footer-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-dots)" />
          </svg>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-3">
                <Plane className="w-3.5 h-3.5" />
                Start Your Journey
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-2">
                Ready to travel or apply for a visa?
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Get expert help with Singapore, China, and worldwide visa processing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={`tel:${contact.phone.raw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-primary font-bold text-sm sm:text-base hover:bg-white/95 transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4" />
                {contact.phone.display}
              </a>
              <Link
                href={routes.contact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/40 text-white font-bold text-sm sm:text-base hover:bg-white/10 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative bg-surface border-t border-primary/10 overflow-hidden">
        {/* Background shapes */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-32 -left-24 w-80 h-80 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute top-1/2 -right-28 w-96 h-96 rounded-full bg-tertiary/10 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 w-md h-md rounded-full bg-secondary/6 blur-3xl" />
          <div className="absolute top-16 right-[12%] w-32 h-32 rounded-full border border-primary/10" />
          <div className="absolute bottom-24 left-[8%] w-24 h-24 rounded-full border border-primary/8" />
          <div className="absolute top-1/3 left-[18%] w-16 h-16 rotate-45 border border-primary/10 rounded-lg" />
          <div className="absolute bottom-32 right-[20%] w-12 h-12 rotate-12 bg-primary/5 rounded-xl" />
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
          <svg
            className="absolute bottom-0 left-0 w-full h-32 opacity-[0.04]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,64 C200,120 400,0 600,48 C800,96 1000,24 1200,64 L1200,120 L0,120 Z"
              fill="currentColor"
              className="text-primary"
            />
          </svg>
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-primary/4 via-transparent to-primary/6 pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 xl:col-span-4">
              <Link href={routes.home} className="inline-block mb-5 max-w-60">
                <Logo withText={true} />
              </Link>
              <p className="text-sm text-foreground/90 leading-relaxed mb-6 max-w-sm font-medium">
                {company.tagline}
              </p>

              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-foreground/80 uppercase tracking-wide">
                  Singapore AVA & China Visa Agent
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {visaLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/8 border border-primary/15 text-primary text-xs sm:text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
                  >
                    {link.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Icon className="w-[18px] h-[18px]" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="xl:col-span-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-5">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group text-sm text-foreground/90 hover:text-primary font-medium transition-colors inline-flex items-center gap-2"
                    >
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="xl:col-span-2">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-5">
                Services
              </h3>
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="group text-sm text-foreground/90 hover:text-primary font-medium transition-colors inline-flex items-center gap-2"
                    >
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="sm:col-span-2 xl:col-span-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-5">
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-background/80 border border-primary/10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground/75 uppercase mb-1">
                      Office
                    </p>
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      {contact.address.full}
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${contact.phone.raw}`}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-background/80 border border-primary/10 hover:border-primary/25 hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground/75 uppercase mb-1">
                      Phone
                    </p>
                    <p className="text-sm text-foreground font-bold">
                      {contact.phone.display}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${contact.email.raw}`}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-background/80 border border-primary/10 hover:border-primary/25 hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-foreground/75 uppercase mb-1">
                      Email
                    </p>
                    <p className="text-sm text-foreground font-bold break-all">
                      {contact.email.display}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-primary/15">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <p className="text-sm text-foreground/80 font-medium">
                © {currentYear} {company.name}. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                {[
                  { href: "#privacy", label: "Privacy Policy" },
                  { href: "#terms", label: "Terms of Service" },
                  { href: "#cookies", label: "Cookie Policy" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-foreground/80 hover:text-primary font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
