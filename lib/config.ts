/**
 * Global Site Configuration - Single Source of Truth
 *
 * This file contains all company-wide configuration data including:
 * - Company information
 * - Contact details
 * - Navigation links
 * - Services
 * - Authorizations
 * - Statistics
 *
 * Note: Page-specific configurations (e.g., Singapore visa) are stored in
 * modular folders under lib/config/ for better organization.
 */

// ============================================================================
// Company Information
// ============================================================================
export const company = {
  name: "Privileged World Travel Club",
  shortName: "PWTC",
  tagline:
    "Your trusted partner for premium travel experiences and expert visa processing services in Bangladesh",
  description:
    "Privileged World Travel Club is a leading travel and visa services company based in Dhaka, Bangladesh. With over 16 years of experience in the travel industry, we have established ourselves as a trusted partner for thousands of travelers seeking premium travel experiences and reliable visa processing services in Bangladesh.",
  founded: "2008", // Approximate founding year (16+ years from 2024)
  yearsOfExperience: "16+",
} as const;

// ============================================================================
// Contact Information
// ============================================================================
export const contact = {
  address: {
    full: "Room 33-34, (5th floor), Mukto Bangla Shopping Complex, Mirpur-1, Dhaka 1216",
    room: "Room 33-34",
    floor: "5th floor",
    building: "Mukto Bangla Shopping Complex",
    area: "Mirpur-1",
    city: "Dhaka",
    postalCode: "1216",
    country: "Bangladesh",
  },
  phone: {
    display: "+880 1819 591 111",
    raw: "+8801819591111", // For tel: links
    formatted: "+880 1819 591 111",
  },
  email: {
    display: "privilegedworldbd@gmail.com",
    raw: "privilegedworldbd@gmail.com", // For mailto: links
  },
} as const;

// ============================================================================
// Routes & Navigation
// ============================================================================
export const routes = {
  home: "/",
  visa: "/visa",
  aboutUs: "/about-us",
  singaporeVisa: "/visa/singapore-visa-processing",
  singaporeAva: "/singapore-ava",
  services: "#services",
  contact: "#contact",
  teams: "/teams",
  authorizations: "/authorizations",
} as const;

export const navigation = {
  main: [
    { href: routes.home, label: "Home" },
    { href: routes.visa, label: "Visa" },
    { href: routes.aboutUs, label: "About Us" },
  ],
  footer: {
    quickLinks: [
      { href: routes.home, label: "Home" },
      { href: routes.visa, label: "Visa" },
      { href: routes.aboutUs, label: "About Us" },
      { href: routes.services, label: "Services" },
      { href: routes.teams, label: "Our Team" },
      { href: routes.authorizations, label: "Authorizations" },
    ],
    services: [
      { href: "#air-tickets", label: "Air Tickets" },
      { href: "#hotel-reservation", label: "Hotel Reservation" },
      { href: "#tour-packages", label: "Tour Packages" },
      { href: "#visa-processing", label: "Visa Processing" },
    ],
  },
} as const;

// ============================================================================
// Social Media Links
// ============================================================================
export const socialMedia = {
  facebook: {
    name: "Facebook",
    href: "#",
    icon: "Facebook",
  },
  instagram: {
    name: "Instagram",
    href: "#",
    icon: "Instagram",
  },
  linkedin: {
    name: "LinkedIn",
    href: "#",
    icon: "Linkedin",
  },
  twitter: {
    name: "Twitter",
    href: "#",
    icon: "Twitter",
  },
} as const;

// ============================================================================
// Services
// ============================================================================
export const services = [
  {
    id: 1,
    title: "International & Domestic Air Tickets",
    description: "Best deals on flights worldwide with competitive pricing",
    icon: "Plane",
  },
  {
    id: 2,
    title: "International & Domestic Hotel Reservation",
    description: "Luxury accommodations worldwide tailored to your preferences",
    icon: "Hotel",
  },
  {
    id: 3,
    title: "International & Domestic Tour Packages",
    description:
      "Curated travel experiences designed for unforgettable memories",
    icon: "Map",
  },
  {
    id: 4,
    title: "Expert Visa Processing",
    description: "Fast and reliable visa services with high success rate",
    icon: "FileCheck",
  },
  {
    id: 5,
    title: "Travel Insurance",
    description: "Comprehensive coverage protection for peace of mind",
    icon: "ShieldCheck",
  },
  {
    id: 6,
    title: "Transportation Arrangement",
    description: "Seamless ground transportation solutions",
    icon: "Building2",
  },
] as const;

// ============================================================================
// Authorizations & Certifications
// ============================================================================
export const authorizations = [
  {
    id: 1,
    title: "Ministry of Tourism",
    logo: "/bd.png",
    badge: "Registered",
  },
  {
    id: 2,
    title: "IATA Certified",
    logo: "/iata.png",
    badge: "Certified",
  },
  {
    id: 3,
    title: "ATAB",
    logo: "/atab.png",
    badge: "Approved",
  },
  {
    id: 4,
    title: "TOAB",
    logo: "/TOAB.png",
    badge: "Certified",
  },
] as const;

// ============================================================================
// Statistics
// ============================================================================
export const statistics = [
  {
    id: 1,
    value: "100K+",
    label: "Happy Clients",
    icon: "Users",
    color: "primary",
  },
  {
    id: 2,
    value: "80K+",
    label: "Visa Applications",
    icon: "FileCheck",
    color: "accent",
  },
  {
    id: 3,
    value: "98%",
    label: "Success Rate",
    icon: "CheckCircle",
    color: "success",
  },
  {
    id: 4,
    value: "16+",
    label: "Years Experience",
    icon: "Clock",
    color: "tertiary",
  },
] as const;

// ============================================================================
// Why Choose Us
// ============================================================================
export const whyChooseUs = [
  {
    icon: "Award",
    title: "Authorized & Certified",
    description:
      "Singapore Authorized Visa Agent (AVA) recognized by the High Commission of Singapore in Dhaka",
  },
  {
    icon: "Shield",
    title: "Trusted & Reliable",
    description:
      "Official recognition from Ministry of Tourism, IATA, ATAB, and TOAB",
  },
  {
    icon: "Users",
    title: "Expert Team",
    description:
      "Experienced professionals dedicated to providing exceptional service",
  },
  {
    icon: "Clock",
    title: "Fast Processing",
    description:
      "Efficient visa processing with high success rates and quick turnaround times",
  },
  {
    icon: "Globe",
    title: "Global Reach",
    description:
      "Comprehensive travel services covering destinations worldwide",
  },
  {
    icon: "Heart",
    title: "Customer Focused",
    description:
      "Personalized service tailored to meet your unique travel needs",
  },
] as const;

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get phone number formatted for tel: links
 */
export const getPhoneLink = (): string => {
  return `tel:${contact.phone.raw}`;
};

/**
 * Get email formatted for mailto: links
 */
export const getEmailLink = (): string => {
  return `mailto:${contact.email.raw}`;
};

/**
 * Get full address as a single string
 */
export const getFullAddress = (): string => {
  return contact.address.full;
};
