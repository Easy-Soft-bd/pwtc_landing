/**
 * China Visa Configuration
 *
 * Official sources:
 * - Embassy of China in Bangladesh: https://bd.china-embassy.gov.cn/
 * - Chinese Visa Application Service Center (CVASC) Dhaka: https://www.visaforchina.cn/
 */

export const chinaVisa = {
  agency: {
    title: "Authorized Travel Agency for China Visa",
    description:
      "IATA-Certified Authorized Agency for China Visa Applications in Bangladesh",
    fullDescription:
      "Privileged World Travel Club is an authorized travel agency for China visa applications in Bangladesh. We assist clients with COVA online applications, document preparation, CVASC submission, and visa collection — serving banks, diplomats, NGOs, corporate offices, and travel partners with expert visa support.",
    about:
      "Privileged World Travel Club is an authorized agent for China visa processing in Dhaka. As one of Bangladesh's trusted visa support agencies, our skilled team handles China visa formalities with accuracy and care — from document review to final passport delivery.",
  },
  serviceFees: {
    regular: 4520,
    express: 6780,
    label: "Application Service Fee (tax inclusive)",
  },
  processingTime: {
    preliminaryReview: "1 working day",
    regular: "4 working days",
    express: "3 working days",
    note: "After passport submission to CVASC. Excludes preliminary online review.",
  },
  cvasc: {
    address:
      "3rd Floor, Praasad Trade Center, 6 Kemal Ataturk Avenue, Banani, Dhaka",
    applicationHours: "Sunday – Thursday, 9:00 AM – 3:00 PM",
    pickupHours: "Sunday – Thursday, 9:00 AM – 4:00 PM",
  },
  consulateInstructions: [
    "The total amount payable = Visa fee + Application Service fee (tax inclusive). Visa fees are tax exempted and collected on behalf of the Chinese Embassy. Application Service fees are charged by the Visa Center.",
    "Fees for other countries may differ from the listed amounts. Final payment requested by the Visa Center shall prevail.",
    "The service fee is subject to change due to exchange rate fluctuations. Please follow the payment instructions when collecting your passport.",
  ],
} as const;

export type ChinaVisaFeeRow = {
  passportType: string;
  visaType: string;
  regular: { visaFee: number; serviceFee: number; total: number };
  express: { visaFee: number; serviceFee: number; total: number };
};

const sf = chinaVisa.serviceFees;

export const bangladeshPassportFees: ChinaVisaFeeRow[] = [
  {
    passportType: "Bangladesh Passport",
    visaType: "Single Entry",
    regular: { visaFee: 2400, serviceFee: sf.regular, total: 6920 },
    express: { visaFee: 5100, serviceFee: sf.express, total: 11880 },
  },
  {
    passportType: "Bangladesh Passport",
    visaType: "Double Entry",
    regular: { visaFee: 3600, serviceFee: sf.regular, total: 8120 },
    express: { visaFee: 6300, serviceFee: sf.express, total: 13080 },
  },
  {
    passportType: "Bangladesh Passport",
    visaType: "6 Months Multiple",
    regular: { visaFee: 4800, serviceFee: sf.regular, total: 9320 },
    express: { visaFee: 7500, serviceFee: sf.express, total: 14280 },
  },
  {
    passportType: "Bangladesh Passport",
    visaType: "12/24 Months Multiple",
    regular: { visaFee: 7200, serviceFee: sf.regular, total: 11720 },
    express: { visaFee: 9900, serviceFee: sf.express, total: 16680 },
  },
];

export const hongKongMacaoFees: ChinaVisaFeeRow[] = [
  {
    passportType: "Hong Kong / Macao",
    visaType: "Visa Fee",
    regular: { visaFee: 3300, serviceFee: sf.regular, total: 7820 },
    express: { visaFee: 6000, serviceFee: sf.express, total: 12780 },
  },
  {
    passportType: "Hong Kong / Macao",
    visaType: "Contact Fee",
    regular: { visaFee: 2200, serviceFee: sf.regular, total: 6720 },
    express: { visaFee: 2200, serviceFee: sf.express, total: 8980 },
  },
];

export const otherPassportFees: ChinaVisaFeeRow[] = [
  {
    passportType: "U.S. Passport",
    visaType: "Standard",
    regular: { visaFee: 15900, serviceFee: sf.regular, total: 20420 },
    express: { visaFee: 18600, serviceFee: sf.express, total: 25380 },
  },
  {
    passportType: "U.S. Passport (Journalist)",
    visaType: "Journalist",
    regular: { visaFee: 19500, serviceFee: sf.regular, total: 24020 },
    express: { visaFee: 22200, serviceFee: sf.express, total: 28980 },
  },
  {
    passportType: "Canadian Passport",
    visaType: "Standard",
    regular: { visaFee: 6300, serviceFee: sf.regular, total: 10820 },
    express: { visaFee: 9000, serviceFee: sf.express, total: 15780 },
  },
  {
    passportType: "Russian Passport",
    visaType: "Standard",
    regular: { visaFee: 4300, serviceFee: sf.regular, total: 8820 },
    express: { visaFee: 7600, serviceFee: sf.express, total: 14380 },
  },
  {
    passportType: "Third Country Passport",
    visaType: "Single Entry",
    regular: { visaFee: 3000, serviceFee: sf.regular, total: 7520 },
    express: { visaFee: 5700, serviceFee: sf.express, total: 12480 },
  },
  {
    passportType: "Third Country Passport",
    visaType: "Double Entry",
    regular: { visaFee: 4500, serviceFee: sf.regular, total: 9020 },
    express: { visaFee: 7200, serviceFee: sf.express, total: 13980 },
  },
  {
    passportType: "Third Country Passport",
    visaType: "6 Months Multiple",
    regular: { visaFee: 6000, serviceFee: sf.regular, total: 10520 },
    express: { visaFee: 8700, serviceFee: sf.express, total: 15480 },
  },
  {
    passportType: "Third Country Passport",
    visaType: "12/24 Months Multiple",
    regular: { visaFee: 9000, serviceFee: sf.regular, total: 13520 },
    express: { visaFee: 11700, serviceFee: sf.express, total: 18480 },
  },
];

export const visaRequirements = [
  {
    title: "Valid Passport",
    description:
      "Passport valid for at least 6 months after intended departure date, with at least two unused/blank visa pages.",
  },
  {
    title: "Passport Photographs",
    description:
      "Recent photos as per China visa specifications (48mm × 33mm, white background, matte finish — confirm current size with CVASC).",
  },
  {
    title: "Visa Request Letter",
    description: "Cover letter stating purpose of visit, travel dates, and itinerary.",
  },
  {
    title: "For Job Holders",
    description:
      "Original NOC (No Objection Certificate), office ID card copy, and visiting card.",
  },
  {
    title: "For Business Persons",
    description: "Renewed trade license and visiting card.",
  },
  {
    title: "Bank Documents",
    description:
      "Original bank statement and solvency certificate with 6 months of transaction history.",
  },
  {
    title: "For Students",
    description: "Student ID card and relevant enrollment documents.",
  },
  {
    title: "For Children",
    description: "Birth certificate (where applicable).",
  },
  {
    title: "Invitation Letter",
    description:
      "Invitation letter from a registered travel service provider or host in China (as required for your visa category).",
  },
  {
    title: "Supporting Documents",
    description:
      "Round-trip air tickets, hotel reservations, day-by-day itinerary, and undertaking letter as applicable.",
  },
] as const;

export const applicationSteps = [
  {
    title: "Online Application (COVA)",
    description:
      "Complete the China Online Visa Application at visaforchina.cn and upload supporting documents.",
  },
  {
    title: "Preliminary Review",
    description:
      "Await online review (typically within 1 working day). Supplement or modify documents if requested.",
  },
  {
    title: "Passport Submission at CVASC",
    description:
      "Submit passport and documents at CVASC Dhaka. Biometric fingerprints required for most applicants aged 14–70.",
  },
  {
    title: "Visa Collection",
    description:
      "Collect your visa on the expected date. Regular: 4 working days; Express: 3 working days after passport submission.",
  },
] as const;

export const externalLinks = {
  embassy: {
    label: "Embassy of China in Bangladesh",
    url: "https://bd.china-embassy.gov.cn/eng/",
  },
  visaNotices: {
    label: "Important Notices for Chinese Visa Application",
    url: "https://bd.china-embassy.gov.cn/eng/sghd/202509/t20250912_11707745.htm",
  },
  cvasc: {
    label: "Chinese Visa Application Service Center (CVASC) Dhaka",
    url: "https://www.visaforchina.cn/DAC3_EN/",
  },
  cova: {
    label: "China Online Visa Application (COVA)",
    url: "https://www.visaforchina.cn/",
  },
  feeNotice: {
    label: "Visa Fee Reduction Notice (until Dec 31, 2026)",
    url: "https://bd.china-embassy.gov.cn/eng/lsyw/Chinese_Visa/202601/t20260107_11807957.htm",
  },
} as const;

export const faqs = [
  {
    question: "How do I apply for a China visa from Bangladesh?",
    answer:
      "Complete the online COVA application, await preliminary review, then submit your passport at CVASC Banani, Dhaka. Privileged World Travel Club can manage the full process on your behalf.",
    links: [{ text: externalLinks.cova.label, url: externalLinks.cova.url }],
  },
  {
    question: "What is the total fee for a Bangladesh passport single-entry visa?",
    answer:
      "For regular processing: BDT 2,400 visa fee + BDT 4,520 service fee = BDT 6,920 total. Express processing total is BDT 11,880. Fees are subject to change — verify with CVASC before submission.",
    links: [{ text: externalLinks.feeNotice.label, url: externalLinks.feeNotice.url }],
  },
  {
    question: "Can I apply through Privileged World Travel Club?",
    answer:
      "Yes. We are an IATA-certified authorized travel agency for China visa applications in Bangladesh, providing document preparation, COVA assistance, and CVASC submission support.",
    links: [{ text: externalLinks.embassy.label, url: externalLinks.embassy.url }],
  },
  {
    question: "Where is the CVASC office in Dhaka?",
    answer:
      "Chinese Visa Application Service Center: 3rd Floor, Praasad Trade Center, 6 Kemal Ataturk Avenue, Banani, Dhaka. Submission: Sun–Thu 9:00 AM–3:00 PM.",
    links: [{ text: externalLinks.cvasc.label, url: externalLinks.cvasc.url }],
  },
] as const;

export const formatBdt = (amount: number) =>
  `BDT ${amount.toLocaleString("en-BD")}`;
