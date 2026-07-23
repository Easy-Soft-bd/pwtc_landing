import VisaAuthCard from "@/components/home/VisaAuthCard";
import VisaSectionCta from "@/components/home/VisaSectionCta";
import { routes } from "@/lib/config";
import { unsplashImages } from "@/lib/config/images";
import { chinaVisa } from "@/lib/config/visa/china";

const VisaAuthorizations = () => {
  return (
    <section className="relative w-full py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/3 to-background" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/15 bg-surface/80 text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest mb-5">
            Official Visa Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Authorized Visa Processing for{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-tertiary">
              Singapore & China
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-secondary/75 leading-relaxed px-2">
            Trusted, embassy-recognized visa assistance with transparent fees and
            expert guidance for Bangladeshi travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          <VisaAuthCard
            flagCode="sg"
            country="Singapore"
            title="Singapore AVA"
            coverImages={unsplashImages.singapore}
            subtitle="Authorised Visa Agent by High Commission of Singapore in Dhaka"
            description="We facilitate Singapore visa applications for Bangladeshi nationals and other foreigners requiring social visas to enter Singapore."
            stats={[
              {
                label: "Processing",
                value: "5+ working days",
                note: "Excluding day of submission",
              },
              {
                label: "Visa Fee",
                value: "SGD $30",
                note: "Per applicant, excl. agent fee",
              },
            ]}
            href={routes.singaporeVisa}
            ctaLabel="Singapore Visa Details"
          />

          <VisaAuthCard
            flagCode="cn"
            country="China"
            title="China Visa"
            coverImages={unsplashImages.china}
            subtitle={chinaVisa.agency.description}
            description={chinaVisa.agency.fullDescription}
            stats={[
              {
                label: "Processing",
                value: chinaVisa.processingTime.regular,
                note: "After CVASC passport submission",
              },
              {
                label: "Visa Fee",
                value: "BDT 6,920",
                note: "Single entry regular total (incl. service fee)",
              },
            ]}
            href={routes.chinaVisa}
            ctaLabel="China Visa Details"
          />
        </div>

        <VisaSectionCta />
      </div>
    </section>
  );
};

export default VisaAuthorizations;
