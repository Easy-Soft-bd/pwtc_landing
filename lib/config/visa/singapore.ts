/**
 * Singapore Visa Configuration
 * 
 * This file contains all Singapore visa-specific configuration data including:
 * - Visa fees and breakdown
 * - Processing times
 * - Office hours
 * - External links
 * - Downloads
 * - FAQs
 */

// ============================================================================
// Singapore Visa Information
// ============================================================================
export const singaporeVisa = {
  ava: {
    title: "Singapore Authorized Visa Agent (AVA)",
    description: "Authorised Visa Agent by High Commission of Singapore in Dhaka",
    fullDescription: "We are an authorised visa agent recognized by the High Commission of the Republic of Singapore in Dhaka. We facilitate Singapore visa applications for Bangladeshi nationals and other foreigners requiring social visas to enter Singapore.",
  },
  fees: {
    total: "BDT 3,990",
    breakdown: {
      visaCost: {
        label: "Visa Cost (Equivalent to SGD $30)",
        amount: "BDT 2,690",
      },
      serviceCharge: {
        label: "Service Charge",
        amount: "BDT 1,300",
      },
    },
    notice: "Visa fees are non-refundable regardless of application outcome.",
  },
  processingTime: {
    minimum: "5 working days",
    maximum: "1 month or more",
    note: "Excluding day of submission. Some applications may require more than 1 month for processing.",
  },
  officeHours: {
    application: {
      days: "Sunday – Thursday",
      time: "9:00 AM – 2:00 PM",
      label: "Application Receiving Hours",
    },
    passport: {
      days: "Sunday – Thursday",
      time: "9:00 AM – 4:00 PM",
      label: "Passport Delivery Hours",
    },
  },
} as const;

// ============================================================================
// External Links
// ============================================================================
export const externalLinks = {
  ica: {
    label: "ICA Visa Requirements - Bangladesh",
    url: "https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements/visa-detail-page/bangladesh",
  },
  highCommission: {
    label: "High Commission of Singapore in Dhaka",
    url: "https://dhaka.mfa.gov.sg/consular-services/visa-information/visa-application/",
  },
  authorizedAgents: {
    label: "Authorised Visa Agents",
    url: "https://www.mfa.gov.sg/Overseas-Mission/Dhaka/Consular-Services/Overview-visa-information/visa-information",
  },
} as const;

// ============================================================================
// PDF Downloads
// ============================================================================
export const downloads = {
  applicationForm: {
    label: "Application Form 14A",
    path: "/Form 14A.pdf",
  },
  loiTemplate: {
    label: "Letter of Introduction Template",
    path: "/LOI template.pdf",
  },
} as const;

// ============================================================================
// FAQ Data
// ============================================================================
export const faqs = [
  {
    question: "What are the requirements for Bangladeshi to apply for Singapore Visa?",
    answer: "Documents required to apply for Singapore Visa can be found on the ICA official website. Bangladesh holding diplomatic, official and service passports do not require a visa for entry.",
    links: [
      {
        text: externalLinks.ica.label,
        url: externalLinks.ica.url,
      },
    ],
  },
  {
    question: "How can I apply for Singapore Visa in Bangladesh?",
    answer: "Applicants may submit the applications through Singapore Authorised Visa Agents located in Dhaka. The contacts can be found on the High Commission website.",
    links: [
      {
        text: externalLinks.authorizedAgents.label,
        url: externalLinks.authorizedAgents.url,
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
    question: "Can I apply for medical visa or business visa with tourism agency letter of introduction (LOI)?",
    answer: "No. Medical visa will require LOI from the medical industry and business visa will require LOI from Singapore business company.",
  },
] as const;

