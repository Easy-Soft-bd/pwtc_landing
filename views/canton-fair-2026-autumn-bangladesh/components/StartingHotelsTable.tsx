import { startingHotels } from "../data/cantonFairData";
import SectionHeading from "./SectionHeading";

const StartingHotelsTable = () => (
  <section className="mb-12 sm:mb-16">
    <SectionHeading title='Starting Hotels Used for the "From" Rates' />
    <div className="rounded-2xl border border-primary/15 bg-surface overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm">
          <thead>
            <tr className="bg-primary/8 border-b border-primary/15">
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Category
              </th>
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Starting Hotel
              </th>
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Rate Basis
              </th>
            </tr>
          </thead>
          <tbody>
            {startingHotels.map((row) => (
              <tr
                key={row.category}
                className="border-b border-primary/10 last:border-0 even:bg-background/50 hover:bg-primary/5 transition-colors"
              >
                <td className="px-4 py-3.5 font-semibold text-primary whitespace-nowrap">
                  {row.category}
                </td>
                <td className="px-4 py-3.5 text-foreground/90">{row.hotel}</td>
                <td className="px-4 py-3.5 text-foreground/90">{row.basis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default StartingHotelsTable;
