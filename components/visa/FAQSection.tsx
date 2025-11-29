"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, ExternalLink, Phone, Mail, MapPin } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  links?: Array<{ text: string; url: string }>;
  contactInfo?: {
    phone: string;
    email: string;
    address: string;
  };
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What are the requirements for Bangladeshi to apply for Singapore Visa?",
      answer: "Documents required to apply for Singapore Visa can be found on the ICA official website. Bangladesh holding diplomatic, official and service passports do not require a visa for entry.",
      links: [
        {
          text: "ICA Visa Requirements - Bangladesh",
          url: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements/visa-detail-page/bangladesh",
        },
      ],
    },
    {
      question: "How can I apply for Singapore Visa in Bangladesh?",
      answer: "Applicants may submit the applications through Singapore Authorised Visa Agents located in Dhaka. The contacts can be found on the High Commission website.",
      links: [
        {
          text: "Authorised Visa Agents",
          url: "https://www.mfa.gov.sg/Overseas-Mission/Dhaka/Consular-Services/Overview-visa-information/visa-information",
        },
      ],
    },
    {
      question: "What can I do if my visa application is still pending after 5 working days?",
      answer: "Applicant may approach the AVA (Authorised Visa Agent) for assistance. Singapore High Commission will consider the application on case-by-case basis.",
    },
    {
      question: "Why was my visa application been rejected?",
      answer: "Singapore High Commission will not reveal the reason for rejection. Applicant may submit the appeal for reassessment through the AVA. Singapore High Commission will consider the application on case-by-case basis.",
    },
    {
      question: "Why am I issued with Double or Single Journey Visa (DJV/SJV) when I applied for Multiple Journey Visa (MJV)?",
      answer: "Singapore High Commission follows the set of requirements matrix and applications are assessed on case-by-case basis. Applicant will not be guaranteed with the MJV applied for.",
    },
    {
      question: "Can I apply for medical visa or business visa with tourism agency letter of invitation (LOI)?",
      answer: "No. Medical visa will require LOI from the medical industry and business visa will require LOI from Singapore business company.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-background via-primary/3 to-background overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-10 left-10 w-72 h-72 border border-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-12 sm:w-16 md:w-24 h-px bg-linear-to-r from-transparent via-primary/40 to-primary/60"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
              <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
              <div className="w-12 sm:w-16 md:w-24 h-px bg-linear-to-r from-primary/60 via-primary/40 to-transparent"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto leading-relaxed">
              Common questions about Singapore visa application process
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-linear-to-br from-primary via-primary/70 to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
                <div className="relative bg-surface/90 backdrop-blur-xl border border-light/20 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-primary/25 group-hover:shadow-lg">
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-6 text-left hover:bg-primary/5 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20">
                        <span className="text-sm sm:text-base font-bold text-primary">
                          Q{index + 1}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground flex-1 leading-relaxed">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-primary transition-transform duration-300 shrink-0 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pl-12 sm:pl-16 md:pl-20">
                      <div className="pt-2 border-t border-primary/10">
                        <p className="text-sm sm:text-base md:text-lg text-secondary/80 leading-relaxed mb-3">
                          <span className="font-semibold text-primary">A:</span> {faq.answer}
                        </p>
                        {faq.links && faq.links.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {faq.links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 text-sm sm:text-base font-semibold"
                              >
                                <span>{link.text}</span>
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            ))}
                          </div>
                        )}
                        {faq.contactInfo && (
                          <div className="mt-6 p-4 sm:p-5 bg-primary/5 rounded-xl border border-primary/10">
                            <h4 className="text-sm sm:text-base font-bold text-foreground mb-4">
                              Contact Privileged World Travel Club:
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 shrink-0" />
                                <div>
                                  <p className="text-xs sm:text-sm text-secondary/70 mb-1">Phone</p>
                                  <a
                                    href={`tel:${faq.contactInfo.phone.replace(/\s/g, '')}`}
                                    className="text-sm sm:text-base text-primary hover:text-secondary transition-colors font-semibold"
                                  >
                                    {faq.contactInfo.phone}
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 shrink-0" />
                                <div>
                                  <p className="text-xs sm:text-sm text-secondary/70 mb-1">Email</p>
                                  <a
                                    href={`mailto:${faq.contactInfo.email}`}
                                    className="text-sm sm:text-base text-primary hover:text-secondary transition-colors font-semibold break-all"
                                  >
                                    {faq.contactInfo.email}
                                  </a>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 shrink-0" />
                                <div>
                                  <p className="text-xs sm:text-sm text-secondary/70 mb-1">Address</p>
                                  <p className="text-sm sm:text-base text-secondary/80 leading-relaxed">
                                    {faq.contactInfo.address}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

