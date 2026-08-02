import Link from "next/link";
import { ArrowRight, FileCheck } from "lucide-react";
import { routes } from "@/lib/config";
import SectionHeading from "./SectionHeading";

const ChinaVisaServiceLink = () => (
  <section className="mb-12 sm:mb-16">
    <SectionHeading
      title="China Visa"
      subtitle="Canton Fair packages do not include China visa processing. Apply through our authorized China visa service for fees, requirements and application support."
    />
    <Link
      href={routes.chinaVisa}
      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl border border-primary/15 bg-surface hover:border-primary/30 hover:bg-primary/5 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
          <FileCheck className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-foreground text-lg mb-1">
            China Visa Processing
          </h3>
          <p className="text-sm text-foreground/80 leading-relaxed">
            View visa fees, document checklist and apply with{" "}
            <strong className="text-foreground">Privileged World Travel Club</strong>{" "}
            — authorized China visa travel agency in Bangladesh.
          </p>
        </div>
      </div>
      <span className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm group-hover:bg-secondary transition-colors shrink-0">
        View Visa Service
        <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  </section>
);

export default ChinaVisaServiceLink;
