interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <div className="mb-6 sm:mb-8">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
      <span className="w-1.5 h-8 bg-accent rounded-full shrink-0" />
      {title}
    </h2>
    {subtitle && (
      <p className="text-sm sm:text-base text-foreground/80 mt-3 ml-5 leading-relaxed max-w-4xl">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
