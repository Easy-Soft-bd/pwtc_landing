import { Calendar, MapPin, Users } from "lucide-react";

const CantonFairHero = () => {
  return (
    <section className="relative bg-linear-to-br from-primary via-primary/95 to-primary/90 pt-16 pb-28 md:pt-24 md:pb-40 text-white px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 border-4 border-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest mb-6">
          <Calendar className="w-4 h-4" />
          Autumn 2026 · B2B Packages
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          2026 Autumn Canton Fair
          <br className="hidden sm:block" />
          <span className="text-light"> China Registration for Bangladeshi</span>
        </h1>

        <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
          Bangladesh Private-Group B2B Business Packages
        </p>
        <p className="text-sm md:text-base text-white/75 max-w-2xl mx-auto">
          Prepared for B2B Partners — Hotel with breakfast, Baiyun airport
          transfers, private fair-day vehicle and local English/Chinese support.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {[
            { icon: MapPin, label: "Guangzhou, China" },
            { icon: Calendar, label: "Oct – Nov 2026" },
            { icon: Users, label: "Private Group Packages" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-xl text-sm font-medium"
            >
              <Icon className="w-4 h-4 text-accent" />
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-background to-transparent" />
    </section>
  );
};

export default CantonFairHero;
