import { Car } from "lucide-react";
import { vehicleStandards } from "../data/cantonFairData";
import SectionHeading from "./SectionHeading";

const VehicleStandards = () => (
  <section className="mb-12 sm:mb-16">
    <SectionHeading title="Vehicle and Transfer Standards" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {vehicleStandards.map((item) => (
        <div
          key={item.title}
          className="flex gap-4 p-5 rounded-2xl border border-primary/15 bg-surface hover:border-primary/25 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <Car className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default VehicleStandards;
