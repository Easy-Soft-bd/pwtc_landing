import Image from "next/image";

const Authorizations = () => {
  const authorizations = [
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
  ];

  return (
    <section className="relative w-full py-12 md:py-16 bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/3 via-transparent to-accent/3" />

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12">
        {/* Premium Header */}
        <div className="text-center mb-10 md:mb-12">
          {/* Decorative badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-linear-to-b from-primary to-accent rounded-full" />
            <span className="text-primary font-semibold text-xs md:text-sm tracking-widest uppercase">
              Trust & Credibility
            </span>
            <div className="w-1 h-6 bg-linear-to-b from-primary to-accent rounded-full" />
          </div>

          {/* Premium Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Official Authorizations &{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Recognition</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 z-0" />
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-secondary/80 max-w-2xl mx-auto leading-relaxed">
            We are officially recognized and authorized by leading international
            organizations and government bodies, ensuring trusted and reliable
            services for all your travel and visa needs.
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-12 h-px bg-linear-to-r from-transparent to-primary/30" />
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="w-12 h-px bg-linear-to-l from-transparent to-primary/30" />
          </div>
        </div>

        {/* Premium Interactive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {authorizations.map((auth) => (
            <div
              key={auth.id}
              className="group relative bg-surface border border-light/20 rounded-2xl p-6 md:p-8 shadow-md hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              {/* Blurred logo background */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500">
                <div className="relative w-full h-full">
                  <Image
                    src={auth.logo}
                    alt={`${auth.title} background`}
                    fill
                    className="object-cover blur-xl scale-90"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Ripple animation background */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="ripple-1 absolute top-0 right-0 w-0 h-0 rounded-full bg-primary/50 blur-xl"></div>
                <div className="ripple-2 absolute top-0 right-0 w-0 h-0 rounded-full bg-accent/40 blur-xl"></div>
                <div className="ripple-3 absolute top-0 right-0 w-0 h-0 rounded-full bg-tertiary/35 blur-xl"></div>
              </div>

              {/* Animated background gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-accent/5 to-tertiary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 -z-10" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Logo */}
                <div className="relative w-full h-20 md:h-24 mb-4">
                  <Image
                    src={auth.logo}
                    alt={auth.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Badge with animation */}
                <span className="inline-flex items-center gap-1.5 bg-linear-to-r from-primary/15 to-accent/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold mb-3 group-hover:bg-primary/25 group-hover:scale-105 transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  {auth.badge}
                </span>

                {/* Title with underline effect */}
                <h3 className="text-sm md:text-base font-bold text-foreground leading-tight group-hover:text-primary transition-all duration-300 relative">
                  {auth.title}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
                </h3>
              </div>

              {/* Shine sweep effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

              {/* Ripple effect on click */}
              <div className="absolute inset-0 rounded-2xl bg-primary/10 scale-0 group-active:scale-100 opacity-0 group-active:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authorizations;
