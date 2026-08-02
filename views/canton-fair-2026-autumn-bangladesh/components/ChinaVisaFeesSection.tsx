import { chinaVisaFees } from "../data/cantonFairData";
import SectionHeading from "./SectionHeading";

const ChinaVisaFeesSection = () => (
  <section className="mb-12 sm:mb-16">
    <SectionHeading
      title="China Visa Fee"
      subtitle="Visa processing fees for Bangladeshi passport holders applying through our authorized channels."
    />
    <div className="rounded-2xl border border-primary/15 bg-surface overflow-hidden shadow-sm max-w-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-primary/8 border-b border-primary/15">
              <th className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wide">
                Visa Entry Type
              </th>
              <th className="px-4 py-3 text-right font-bold text-foreground text-xs uppercase tracking-wide">
                Fee (BDT)
              </th>
            </tr>
          </thead>
          <tbody>
            {chinaVisaFees.map((row) => (
              <tr
                key={row.type}
                className="border-b border-primary/10 last:border-0 even:bg-background/50 hover:bg-primary/5 transition-colors"
              >
                <td className="px-4 py-3.5 text-foreground/90">{row.type}</td>
                <td className="px-4 py-3.5 text-right font-bold text-primary">
                  {row.fee}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ChinaVisaFeesSection;
