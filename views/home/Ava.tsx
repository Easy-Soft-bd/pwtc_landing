import Link from "next/link";

const Ava = () => {
  return (
    <section className="relative w-full py-12 md:py-16 bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/3 via-transparent to-accent/3" />

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          {/* Decorative badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-linear-to-b from-primary to-accent rounded-full" />
            <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
              Authorised Visa Agent
            </span>
            <div className="w-1 h-6 bg-linear-to-b from-primary to-accent rounded-full" />
          </div>

          {/* Premium Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Singapore{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">AVA</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 z-0" />
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary font-semibold mb-4">
            Authorised Visa Agent by High Commission of Singapore in Dhaka
          </p>

          {/* Description */}
          <p className="text-sm md:text-base text-secondary/80 max-w-3xl mx-auto leading-relaxed">
            We are an authorised visa agent recognized by the High Commission of
            the Republic of Singapore in Dhaka. We facilitate Singapore visa
            applications for Bangladeshi nationals and other foreigners
            requiring social visas to enter Singapore.
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-primary/30" />
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="w-12 h-px bg-linear-to-l from-transparent to-primary/30" />
          </div>
        </div>

        {/* Key Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-surface border border-light/20 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-linear-to-br from-primary/15 to-accent/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                Processing Time
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-foreground">
              At least 5 working days
            </div>
            <p className="text-sm text-secondary/70 mt-2">
              Excluding the day of submission
            </p>
          </div>

          <div className="bg-surface border border-light/20 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-linear-to-br from-accent/15 to-tertiary/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-xs font-semibold text-accent uppercase tracking-wide">
                Application Fee
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-foreground">
              SGD$30 per applicant
            </div>
            <p className="text-sm text-secondary/70 mt-2">
              Excluding agent&apos;s fee
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10 md:mt-12">
          <Link
            href="/visa/singapore-visa-processing"
            className="group relative bg-primary text-white px-8 md:px-12 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <span>Learn More About Singapore AVA</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ava;
