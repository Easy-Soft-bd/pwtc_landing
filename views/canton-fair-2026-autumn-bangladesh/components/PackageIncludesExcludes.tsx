import { CheckCircle, XCircle } from "lucide-react";
import { packageExcludes, packageIncludes } from "../data/cantonFairData";
import SectionHeading from "./SectionHeading";

const PackageIncludesExcludes = () => (
  <section className="mb-12 sm:mb-16">
    <SectionHeading title="Package Includes & Excludes" />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="rounded-2xl border border-success/30 bg-success/5 p-6 sm:p-8">
        <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-success shrink-0" />
          Package Includes
        </h3>
        <ul className="space-y-3">
          {packageIncludes.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-sm text-foreground/90 leading-relaxed"
            >
              <span className="text-success shrink-0 mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-error/30 bg-error/5 p-6 sm:p-8">
        <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
          <XCircle className="w-5 h-5 text-error shrink-0" />
          Package Excludes
        </h3>
        <ul className="space-y-3">
          {packageExcludes.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-sm text-foreground/90 leading-relaxed"
            >
              <span className="text-error shrink-0 mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default PackageIncludesExcludes;
