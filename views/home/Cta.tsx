import Link from "next/link";

const Cta = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-background overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary via-secondary to-tertiary opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border border-accent/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-tertiary/20 rounded-full"></div>
      </div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-accent/5"></div>

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-linear-to-b from-primary to-accent rounded-full" />
            <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
              Get Started Today
            </span>
            <div className="w-1 h-6 bg-linear-to-b from-primary to-accent rounded-full" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ready to Embark on Your
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Dream Journey?</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 z-0" />
            </span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-secondary/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let us handle every detail of your travel experience. From visa
            processing to luxury accommodations, we make your travel dreams come
            true.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Primary CTA */}
            <Link
              href="#get-started"
              className="group relative bg-primary text-white px-8 md:px-12 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/40 transform hover:scale-105 inline-flex items-center gap-2 min-w-[200px] justify-center"
            >
              <span>Get Started</span>
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

            {/* Secondary CTA */}
            <Link
              href="#contact"
              className="group relative bg-surface border-2 border-primary text-primary px-8 md:px-12 py-4 md:py-5 rounded-xl font-semibold text-base md:text-lg hover:bg-primary/5 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 inline-flex items-center gap-2 min-w-[200px] justify-center"
            >
              <span>Contact Us</span>
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-secondary/60">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>100K+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>98% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>16+ Years Experience</span>
            </div>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-primary/30" />
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="w-12 h-px bg-linear-to-l from-transparent to-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
