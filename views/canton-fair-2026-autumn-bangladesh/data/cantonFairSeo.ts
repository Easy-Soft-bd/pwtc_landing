import type { Metadata } from "next";
import { company } from "@/lib/config";

export const CANTON_FAIR_ROUTE = "/canton-fair-2026-autumn-bangladesh";
export const CANTON_FAIR_CANONICAL =
  "https://www.privilegedworld.com/canton-fair-2026-autumn-bangladesh";

export const cantonFairSeo = {
  title:
    "2026 Autumn Canton Fair China Registration Fee for Bangladeshi | B2B Packages",
  shortTitle: "2026 Autumn Canton Fair — Bangladesh B2B Packages",
  description:
    "2026 Autumn Canton Fair registration and B2B packages for Bangladeshi buyers. Private-group hotel, Baiyun airport transfers, fair-day vehicle and English/Chinese support in Guangzhou. Starting rates from BDT 41,000/person.",
  keywords: [
    "2026 Autumn Canton Fair",
    "Canton Fair 2026 Bangladesh",
    "Canton Fair China registration Bangladeshi",
    "Canton Fair B2B package BDT",
    "Guangzhou Canton Fair trip Bangladesh",
    "China Import Export Fair 2026",
    "Canton Fair hotel transfer package",
    "Bangladesh buyer Canton Fair",
    "Canton Fair registration fee Bangladesh",
    company.name,
    company.shortName,
  ],
  ogImage: {
    url: "/web-meta.jpg",
    width: 1200,
    height: 630,
    alt: "2026 Autumn Canton Fair China Registration for Bangladeshi — Privileged World Travel Club",
  },
} as const;

export const cantonFairMetadata: Metadata = {
  title: `${cantonFairSeo.title} | ${company.name}`,
  description: cantonFairSeo.description,
  keywords: [...cantonFairSeo.keywords],
  authors: [{ name: company.name, url: "https://www.privilegedworld.com" }],
  creator: company.name,
  publisher: company.name,
  category: "Travel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: CANTON_FAIR_CANONICAL,
  },
  openGraph: {
    title: cantonFairSeo.shortTitle,
    description: cantonFairSeo.description,
    url: CANTON_FAIR_CANONICAL,
    siteName: company.name,
    locale: "en_BD",
    type: "website",
    images: [cantonFairSeo.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: cantonFairSeo.shortTitle,
    description: cantonFairSeo.description,
    images: [cantonFairSeo.ogImage.url],
  },
};

export const cantonFairJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: cantonFairSeo.title,
    description: cantonFairSeo.description,
    url: CANTON_FAIR_CANONICAL,
    inLanguage: "en-BD",
    isPartOf: {
      "@type": "WebSite",
      name: company.name,
      url: "https://www.privilegedworld.com",
    },
    about: {
      "@type": "Event",
      name: "2026 Autumn Canton Fair",
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      url: "https://www.privilegedworld.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.privilegedworld.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "2026 Autumn Canton Fair Bangladesh",
        item: CANTON_FAIR_CANONICAL,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "2026 Autumn Canton Fair",
    startDate: "2026-10-15",
    endDate: "2026-11-04",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "China Import and Export Fair Complex, Pazhou, Guangzhou",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Guangzhou",
        addressRegion: "Guangdong",
        addressCountry: "CN",
      },
    },
    description:
      "Bangladesh private-group B2B business packages for the 2026 Autumn Canton Fair including hotel, airport transfers, and fair-day vehicle service.",
    organizer: {
      "@type": "Organization",
      name: company.name,
      url: "https://www.privilegedworld.com",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BDT",
      lowPrice: "41000",
      offerCount: "18",
      availability: "https://schema.org/InStock",
      url: CANTON_FAIR_CANONICAL,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: company.name,
    url: "https://www.privilegedworld.com",
    description: cantonFairSeo.description,
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    makesOffer: {
      "@type": "Offer",
      name: "2026 Autumn Canton Fair B2B Package",
      url: CANTON_FAIR_CANONICAL,
      priceCurrency: "BDT",
      availability: "https://schema.org/InStock",
    },
  },
];
