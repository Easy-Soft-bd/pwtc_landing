const Statistics = () => {
  const statistics = [
    {
      id: 1,
      value: "100K+",
      label: "Happy Clients",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: "primary",
    },
    {
      id: 2,
      value: "80K+",
      label: "Visa Applications",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      color: "accent",
    },
    {
      id: 3,
      value: "98%",
      label: "Success Rate",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      color: "success",
    },
    {
      id: 4,
      value: "16+",
      label: "Years Experience",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      color: "tertiary",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          icon: "text-primary",
          border: "border-primary/20",
          hover: "hover:border-primary/40 hover:bg-primary/15",
          corner: "from-primary/10",
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          icon: "text-accent",
          border: "border-accent/20",
          hover: "hover:border-accent/40 hover:bg-accent/15",
          corner: "from-accent/10",
        };
      case "success":
        return {
          bg: "bg-success/10",
          icon: "text-success",
          border: "border-success/20",
          hover: "hover:border-success/40 hover:bg-success/15",
          corner: "from-success/10",
        };
      case "tertiary":
        return {
          bg: "bg-tertiary/10",
          icon: "text-tertiary",
          border: "border-tertiary/20",
          hover: "hover:border-tertiary/40 hover:bg-tertiary/15",
          corner: "from-tertiary/10",
        };
      default:
        return {
          bg: "bg-primary/10",
          icon: "text-primary",
          border: "border-primary/20",
          hover: "hover:border-primary/40 hover:bg-primary/15",
          corner: "from-primary/10",
        };
    }
  };

  return (
    <section className="relative w-full py-12 md:py-16 bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/3 via-transparent to-accent/3" />

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12">
        {/* Premium Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {statistics.map((stat) => {
            const colors = getColorClasses(stat.color);
            return (
              <div
                key={stat.id}
                className={`group relative bg-surface border ${colors.border} ${colors.bg} rounded-2xl p-6 md:p-8 shadow-md ${colors.hover} transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden`}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon */}
                  <div
                    className={`mb-4 ${colors.icon} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-xs md:text-sm font-semibold text-secondary/80 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-linear-to-bl ${colors.corner} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
