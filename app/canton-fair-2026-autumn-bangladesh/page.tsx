import { Metadata } from "next";
import CantonFair2026Page from "@/views/canton-fair-2026-autumn-bangladesh/CantonFair2026Page";
import { company } from "@/lib/config";

export const metadata: Metadata = {
  title: `2026 Autumn Canton Fair China Registration Fee for Bangladeshi | ${company.name}`,
  description:
    "2026 Autumn Canton Fair Bangladesh private-group B2B business packages. Hotel with breakfast, Baiyun airport transfers, private fair-day vehicle and local English/Chinese support. Starting rates in BDT.",
  alternates: {
    canonical:
      "https://www.privilegedworld.com/canton-fair-2026-autumn-bangladesh",
  },
  openGraph: {
    title: "2026 Autumn Canton Fair China Registration for Bangladeshi",
    description:
      "B2B Canton Fair packages for Bangladeshi buyers — hotel, transfers, private vehicle and coordination support in Guangzhou.",
    url: "https://www.privilegedworld.com/canton-fair-2026-autumn-bangladesh",
    type: "article",
  },
  keywords: [
    "Canton Fair 2026",
    "Canton Fair Bangladesh",
    "China fair registration",
    "Guangzhou business trip",
    "Canton Fair package BDT",
    company.name,
  ],
};

const CantonFair2026AutumnBangladesh = () => {
  return <CantonFair2026Page />;
};

export default CantonFair2026AutumnBangladesh;
