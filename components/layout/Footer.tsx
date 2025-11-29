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
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/visa", label: "Visa" },
    { href: "#about-us", label: "About Us" },
    { href: "#services", label: "Services" },
  ];

  const services = [
    { href: "#air-tickets", label: "Air Tickets" },
    { href: "#hotel-reservation", label: "Hotel Reservation" },
    { href: "#tour-packages", label: "Tour Packages" },
    { href: "#visa-processing", label: "Visa Processing" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "Room 33-34, (5th floor), Mukto Bangla Shopping Complex, Mirpur-1, Dhaka 1216",
    },
    {
      icon: Phone,
      text: "+880 1819 591 111",
    },
    {
      icon: Mail,
      text: "privilegedworldbd@gmail.com",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ];

  return (
    <footer className="relative w-full bg-surface border-t border-light/20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5"></div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo withText={true} />
            </div>
            <p className="text-sm text-secondary/70 leading-relaxed mb-6">
              Your trusted partner for premium travel experiences. We make your
              travel dreams come true with expert visa processing, luxury
              accommodations, and seamless travel arrangements.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary/70 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-secondary/70 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 mb-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-primary mt-0.5 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-sm text-secondary/70 leading-relaxed">
                      {contact.text}
                    </span>
                  </li>
                );
              })}
            </ul>
            {/* More Contact Info Button */}
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/30 transform hover:scale-105"
            >
              <span>More Contact Information</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-light/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-secondary/60">
              © {currentYear} Privileged World Travel Club. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link
                href="#privacy"
                className="text-sm text-secondary/60 hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="text-sm text-secondary/60 hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#cookies"
                className="text-sm text-secondary/60 hover:text-primary transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
