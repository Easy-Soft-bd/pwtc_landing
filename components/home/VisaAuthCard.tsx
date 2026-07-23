import Link from "next/link";
import { ArrowRight, Clock, DollarSign } from "lucide-react";
import RandomUnsplashCover from "@/components/home/RandomUnsplashCover";
import type { UnsplashImage } from "@/lib/config/images";

interface VisaStat {
  label: string;
  value: string;
  note: string;
}

interface VisaAuthCardProps {
  flagCode: string;
  country: string;
  title: string;
  subtitle: string;
  description: string;
  coverImages: readonly UnsplashImage[];
  stats: [VisaStat, VisaStat];
  href: string;
  ctaLabel: string;
}

const VisaAuthCard = ({
  flagCode,
  country,
  title,
  subtitle,
  description,
  coverImages,
  stats,
  href,
  ctaLabel,
}: VisaAuthCardProps) => {
  return (
    <article className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-surface border border-primary/8 transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/8 hover:-translate-y-1">
      <RandomUnsplashCover
        images={coverImages}
        country={country}
        title={title}
        flagCode={flagCode}
      />

      <div className="relative flex flex-col flex-1 p-5 sm:p-6 md:p-7">
        <p className="text-sm font-medium text-secondary leading-snug mb-2">
          {subtitle}
        </p>
        <p className="text-sm text-secondary/65 leading-relaxed mb-6 flex-1">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-px rounded-2xl overflow-hidden bg-primary/10 mb-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 bg-background/90 backdrop-blur-sm p-4 sm:p-5 ${
                i === 0 ? "sm:rounded-l-2xl" : "sm:rounded-r-2xl"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {i === 0 ? (
                  <Clock className="w-3.5 h-3.5 text-primary" />
                ) : (
                  <DollarSign className="w-3.5 h-3.5 text-primary" />
                )}
                <span className="text-[10px] sm:text-xs font-semibold text-secondary/55 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                {stat.value}
              </p>
              <p className="text-[11px] sm:text-xs text-secondary/55 mt-1 leading-snug">
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        <Link
          href={href}
          className="group/btn mt-auto inline-flex items-center justify-center gap-2.5 w-full py-3.5 sm:py-4 rounded-2xl bg-primary text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-secondary hover:gap-3.5"
        >
          <span>{ctaLabel}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
};

export default VisaAuthCard;
