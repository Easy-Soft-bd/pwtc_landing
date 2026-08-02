import CantonFairHero from "./components/CantonFairHero";
import FairPhasesTable from "./components/FairPhasesTable";
import GroupPackagesTable from "./components/GroupPackagesTable";
import ItineraryTable from "./components/ItineraryTable";
import StartingHotelsTable from "./components/StartingHotelsTable";
import PackageRatesSection from "./components/PackageRatesSection";
import PackageIncludesExcludes from "./components/PackageIncludesExcludes";
import VehicleStandards from "./components/VehicleStandards";
import TermsConditions from "./components/TermsConditions";
import ChinaVisaServiceLink from "./components/ChinaVisaServiceLink";
import PartnerContact from "./components/PartnerContact";
import {
  basicPackageRates,
  hostedPackageRates,
} from "./data/cantonFairData";
import { cantonFairJsonLd } from "./data/cantonFairSeo";

const CantonFair2026Page = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cantonFairJsonLd),
        }}
      />

      <CantonFairHero />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 max-w-6xl">
        <FairPhasesTable />
        <GroupPackagesTable />
        <ItineraryTable />
        <StartingHotelsTable />

        <PackageRatesSection
          title="Basic Package Rates (BDT per person)"
          subtitle="The Basic Package includes English/Chinese coordination support but no full-time guide. Select the Hosted Package below when daily guide service is required."
          categories={basicPackageRates}
        />

        <PackageRatesSection
          title="Hosted Package Rates (BDT per person)"
          note="Guide Basis: One English-speaking host guide per group for the listed 2, 3 or 4 full fair days at 8-hour/day; overtime beyond 8 hours is RMB 100 per hour. Professional product interpretation, technical/contract interpreting and the official accompanying-person badge are not included."
          categories={hostedPackageRates}
        />

        <PackageIncludesExcludes />
        <VehicleStandards />
        <TermsConditions />
        <ChinaVisaServiceLink />
        <PartnerContact />
      </div>
    </main>
  );
};

export default CantonFair2026Page;
