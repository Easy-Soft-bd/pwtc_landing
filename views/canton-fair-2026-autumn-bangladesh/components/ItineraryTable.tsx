import { standardItinerary } from "../data/cantonFairData";
import SectionHeading from "./SectionHeading";

const ItineraryTable = () => (
  <section className="mb-12 sm:mb-16">
    <SectionHeading title="Standard Itinerary and Full-Day Vehicle Count" />
    <div className="rounded-2xl border border-primary/15 bg-surface overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="bg-primary/8 border-b border-primary/15">
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Package
              </th>
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Arrival Day
              </th>
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Full Middle Days
              </th>
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Departure Day
              </th>
            </tr>
          </thead>
          <tbody>
            {standardItinerary.map((row) => (
              <tr
                key={row.package}
                className="border-b border-primary/10 last:border-0 even:bg-background/50 hover:bg-primary/5 transition-colors"
              >
                <td className="px-4 py-3.5 font-bold text-primary whitespace-nowrap">
                  {row.package}
                </td>
                <td className="px-4 py-3.5 text-foreground/90">{row.arrival}</td>
                <td className="px-4 py-3.5 text-foreground/90">{row.middleDays}</td>
                <td className="px-4 py-3.5 text-foreground/90">{row.departure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ItineraryTable;
