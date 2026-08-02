import Link from "next/link";
import { MessageCircle, Phone, User } from "lucide-react";
import { partnerContact } from "../data/cantonFairData";
import { contact } from "@/lib/config";

const PartnerContact = () => (
  <section className="mb-12 sm:mb-16">
    <div className="rounded-3xl border border-primary/15 bg-linear-to-br from-primary/5 to-accent/10 p-6 sm:p-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Partner Contact
        </h2>
        <p className="text-sm sm:text-base text-foreground/80 mb-8">
          Reach out to confirm rates, availability and written booking
          confirmation for your Canton Fair group.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-surface border border-primary/15 text-left">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground/60 uppercase tracking-wide mb-0.5">
                Partner
              </p>
              <p className="font-bold text-foreground">{partnerContact.name}</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${partnerContact.wechat.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-surface border border-primary/15 hover:border-primary/30 transition-colors text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-success/10 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground/60 uppercase tracking-wide mb-0.5">
                WeChat / WhatsApp
              </p>
              <p className="font-bold text-foreground">{partnerContact.wechat}</p>
            </div>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`tel:${contact.phone.raw}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-secondary transition-all"
          >
            <Phone className="w-5 h-5" />
            {contact.phone.display}
          </a>
          <Link
            href="/visa/china-visa-processing"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition-all"
          >
            China Visa Processing
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default PartnerContact;
