import { fairPhases } from "../data/cantonFairData";
import SectionHeading from "./SectionHeading";

const FairPhasesTable = () => (
  <section className="mb-12 sm:mb-16">
    <SectionHeading
      title="2026 Autumn Canton Fair — Official Dates"
      subtitle="Three phases at the China Import and Export Fair Complex, Pazhou, Guangzhou."
    />
    <div className="rounded-2xl border border-primary/15 bg-surface overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm">
          <thead>
            <tr className="bg-primary/8 border-b border-primary/15">
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Fair Phase
              </th>
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Official Dates
              </th>
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Venue
              </th>
            </tr>
          </thead>
          <tbody>
            {fairPhases.map((row) => (
              <tr
                key={row.phase}
                className="border-b border-primary/10 last:border-0 even:bg-background/50 hover:bg-primary/5 transition-colors"
              >
                <td className="px-4 py-3.5 font-semibold text-primary whitespace-nowrap">
                  {row.phase}
                </td>
                <td className="px-4 py-3.5 text-foreground/90 whitespace-nowrap">
                  {row.dates}
                </td>
                <td className="px-4 py-3.5 text-foreground/90">{row.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default FairPhasesTable;
