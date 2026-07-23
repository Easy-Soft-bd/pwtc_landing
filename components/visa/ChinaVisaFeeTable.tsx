import type { ChinaVisaFeeRow } from "@/lib/config/visa/china";
import { formatBdt } from "@/lib/config/visa/china";

interface ChinaVisaFeeTableProps {
  title: string;
  rows: ChinaVisaFeeRow[];
}

const ChinaVisaFeeTable = ({ title, rows }: ChinaVisaFeeTableProps) => {
  return (
    <div className="rounded-2xl border border-primary/15 bg-surface overflow-hidden shadow-sm">
      <div className="px-4 sm:px-6 py-4 border-b border-primary/15 bg-primary/8">
        <h3 className="text-base sm:text-lg font-bold text-foreground">{title}</h3>
        <p className="text-xs sm:text-sm text-foreground/80 mt-1 font-medium">
          All amounts in Bangladeshi Taka (BDT)
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="bg-background text-left">
              <th className="px-4 py-3 font-bold text-foreground text-xs uppercase tracking-wide">
                Visa Type
              </th>
              <th
                colSpan={3}
                className="px-4 py-3 font-bold text-primary text-xs uppercase tracking-wide text-center border-l border-primary/15"
              >
                Regular (4th working day)
              </th>
              <th
                colSpan={3}
                className="px-4 py-3 font-bold text-foreground text-xs uppercase tracking-wide text-center border-l border-primary/15"
              >
                Express (3rd working day)
              </th>
            </tr>
            <tr className="bg-primary/5 text-xs text-foreground/80 border-b border-primary/15 font-semibold">
              <th className="px-4 py-2" />
              <th className="px-3 py-2 text-center border-l border-primary/15">
                Visa
              </th>
              <th className="px-3 py-2 text-center">Service</th>
              <th className="px-3 py-2 text-center text-foreground">Total</th>
              <th className="px-3 py-2 text-center border-l border-primary/15">
                Visa
              </th>
              <th className="px-3 py-2 text-center">Service</th>
              <th className="px-3 py-2 text-center text-foreground">Total</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={`${row.visaType}-${i}`}
                className="border-b border-primary/10 last:border-0 even:bg-background/50 hover:bg-primary/5 transition-colors"
              >
                <td className="px-4 py-3.5 font-semibold text-foreground whitespace-nowrap">
                  {row.visaType}
                </td>
                <td className="px-3 py-3.5 text-center text-foreground/90 border-l border-primary/10">
                  {formatBdt(row.regular.visaFee)}
                </td>
                <td className="px-3 py-3.5 text-center text-foreground/90">
                  {formatBdt(row.regular.serviceFee)}
                </td>
                <td className="px-3 py-3.5 text-center font-bold text-primary">
                  {formatBdt(row.regular.total)}
                </td>
                <td className="px-3 py-3.5 text-center text-foreground/90 border-l border-primary/10">
                  {formatBdt(row.express.visaFee)}
                </td>
                <td className="px-3 py-3.5 text-center text-foreground/90">
                  {formatBdt(row.express.serviceFee)}
                </td>
                <td className="px-3 py-3.5 text-center font-bold text-foreground">
                  {formatBdt(row.express.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChinaVisaFeeTable;
