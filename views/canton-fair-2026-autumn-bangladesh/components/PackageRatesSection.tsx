import type { HotelRateCategory } from "../data/cantonFairData";
import SectionHeading from "./SectionHeading";

interface PackageRatesSectionProps {
  title: string;
  subtitle?: string;
  note?: string;
  categories: HotelRateCategory[];
}

const formatRate = (amount: string) => `From ৳${amount}/per`;

const PackageRatesSection = ({
  title,
  subtitle,
  note,
  categories,
}: PackageRatesSectionProps) => (
  <section className="mb-12 sm:mb-16">
    <SectionHeading title={title} subtitle={subtitle} />
    {note && (
      <div className="mb-6 ml-5 rounded-xl border border-warning/30 bg-warning/10 px-4 py-3 text-sm text-foreground/90 leading-relaxed">
        {note}
      </div>
    )}
    <div className="space-y-6">
      {categories.map((cat) => (
        <div
          key={cat.category}
          className="rounded-2xl border border-primary/15 bg-surface overflow-hidden shadow-sm"
        >
          <div className="px-4 sm:px-6 py-4 border-b border-primary/15 bg-primary/8">
            <h3 className="text-base sm:text-lg font-bold text-foreground">
              {cat.category}
            </h3>
            <p className="text-xs sm:text-sm text-foreground/75 mt-1">
              Starting Hotel: {cat.hotel}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-background border-b border-primary/15">
                  <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                    Package
                  </th>
                  <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                    Fair Vehicle
                  </th>
                  <th className="px-4 py-3 text-center font-bold text-foreground text-xs uppercase tracking-wide">
                    2 Guests
                  </th>
                  <th className="px-4 py-3 text-center font-bold text-foreground text-xs uppercase tracking-wide">
                    4 Guests
                  </th>
                  <th className="px-4 py-3 text-center font-bold text-foreground text-xs uppercase tracking-wide">
                    6 Guests
                  </th>
                  <th className="px-4 py-3 text-center font-bold text-foreground text-xs uppercase tracking-wide">
                    10 Guests
                  </th>
                </tr>
              </thead>
              <tbody>
                {cat.rates.map((row) => (
                  <tr
                    key={`${cat.category}-${row.package}`}
                    className="border-b border-primary/10 last:border-0 even:bg-background/50 hover:bg-primary/5 transition-colors"
                  >
                    <td className="px-4 py-3.5 font-bold text-primary whitespace-nowrap">
                      {row.package}
                    </td>
                    <td className="px-4 py-3.5 text-foreground/90 whitespace-nowrap">
                      {row.vehicleDays}
                    </td>
                    <td className="px-4 py-3.5 text-center font-semibold text-foreground whitespace-nowrap">
                      {formatRate(row.guests2)}
                    </td>
                    <td className="px-4 py-3.5 text-center font-semibold text-foreground whitespace-nowrap">
                      {formatRate(row.guests4)}
                    </td>
                    <td className="px-4 py-3.5 text-center font-semibold text-foreground whitespace-nowrap">
                      {formatRate(row.guests6)}
                    </td>
                    <td className="px-4 py-3.5 text-center font-semibold text-primary whitespace-nowrap">
                      {formatRate(row.guests10)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PackageRatesSection;
