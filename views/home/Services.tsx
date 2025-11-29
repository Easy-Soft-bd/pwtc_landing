const Services = () => {
  const services = [
    {
      id: 1,
      title: "International & Domestic Air Tickets",
      description: "Best deals on flights worldwide",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "International & Domestic Hotel Reservation",
      description: "Luxury accommodations worldwide",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "International & Domestic Tour Packages",
      description: "Curated travel experiences",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Transportation Arrangement",
      description: "Seamless ground transportation",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Travel Insurance",
      description: "Comprehensive coverage protection",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Expert Visa Processing",
      description: "Fast and reliable visa services",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-background overflow-hidden">
      {/* Travel-themed background elements */}
      <div className="absolute inset-0 opacity-5">
        {/* Airplane paths */}
        <svg
          className="absolute top-20 left-10 w-32 h-32"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.5}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
        <svg
          className="absolute top-40 right-20 w-24 h-24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.5}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
        <svg
          className="absolute bottom-32 left-1/4 w-28 h-28"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.5}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>

        {/* Route lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/10 to-transparent"></div>
        <div className="absolute top-2/3 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/10 to-transparent"></div>

        {/* World map circles */}
        <div className="absolute top-1/3 right-10 w-40 h-40 border border-primary/5 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-accent/5 rounded-full"></div>
      </div>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12">
        {/* Premium Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Decorative badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-linear-to-b from-primary to-accent rounded-full" />
            <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
              Our Services
            </span>
            <div className="w-1 h-6 bg-linear-to-b from-primary to-accent rounded-full" />
          </div>

          {/* Premium Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Premium Travel{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Services</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 z-0" />
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-secondary/80 max-w-3xl mx-auto leading-relaxed">
            Experience world-class travel services tailored to your needs. From
            flights to accommodations, tours to visas, we handle every detail
            with precision and care.
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-primary/30" />
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="w-12 h-px bg-linear-to-l from-transparent to-primary/30" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-surface border border-light/20 rounded-2xl p-6 md:p-8 shadow-md hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 w-16 h-16 bg-linear-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300 shadow-lg group-hover:shadow-primary/20">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-secondary/70 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
