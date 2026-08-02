import { groupPackages } from "../data/cantonFairData";
import SectionHeading from "./SectionHeading";

const GroupPackagesTable = () => (
  <section className="mb-12 sm:mb-16">
    <SectionHeading
      title="Bangladesh Private-Group B2B Business Packages"
      subtitle="Hotel with breakfast + Baiyun airport transfers + private fair-day vehicle + local English/Chinese support. Arrival day is pick-up only and departure day is drop-off only; full fair vehicles cover the middle 2, 3 or 4 days. All rates are starting B2B promotion rates and subject to written confirmation."
    />
    <div className="rounded-2xl border border-primary/15 bg-surface overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="bg-primary/8 border-b border-primary/15">
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Guests
              </th>
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Private Vehicle
              </th>
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Twin Rooms
              </th>
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Breakfast
              </th>
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Best For
              </th>
            </tr>
          </thead>
          <tbody>
            {groupPackages.map((row) => (
              <tr
                key={row.guests}
                className="border-b border-primary/10 last:border-0 even:bg-background/50 hover:bg-primary/5 transition-colors"
              >
                <td className="px-4 py-3.5 font-bold text-primary text-center">
                  {row.guests}
                </td>
                <td className="px-4 py-3.5 text-foreground/90">{row.vehicle}</td>
                <td className="px-4 py-3.5 text-foreground/90">{row.rooms}</td>
                <td className="px-4 py-3.5 text-foreground/90">{row.breakfast}</td>
                <td className="px-4 py-3.5 text-foreground/90">{row.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default GroupPackagesTable;
