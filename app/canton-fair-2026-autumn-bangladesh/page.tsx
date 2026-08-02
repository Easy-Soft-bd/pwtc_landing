import { Metadata } from "next";
import CantonFair2026Page from "@/views/canton-fair-2026-autumn-bangladesh/CantonFair2026Page";
import { cantonFairMetadata } from "@/views/canton-fair-2026-autumn-bangladesh/data/cantonFairSeo";

export const metadata: Metadata = cantonFairMetadata;

const CantonFair2026AutumnBangladesh = () => {
  return <CantonFair2026Page />;
};

export default CantonFair2026AutumnBangladesh;
