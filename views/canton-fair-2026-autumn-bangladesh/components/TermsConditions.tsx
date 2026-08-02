import { termsConditions } from "../data/cantonFairData";
import SectionHeading from "./SectionHeading";

const TermsConditions = () => (
  <section className="mb-12 sm:mb-16">
    <SectionHeading title="Terms & Conditions" />
    <div className="space-y-4">
      {termsConditions.map((term, index) => (
        <div
          key={term.title}
          className="flex gap-4 p-5 rounded-2xl border border-primary/15 bg-surface"
        >
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-sm font-bold text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">{term.title}</h3>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {term.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TermsConditions;
