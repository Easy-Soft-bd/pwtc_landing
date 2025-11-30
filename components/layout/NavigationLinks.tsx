"use client";

import Link from "next/link";
import { navigation } from "@/lib/config";

const NavigationLinks: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center gap-10 h-full">
      {navigation.main.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="relative text-foreground hover:text-primary transition-all duration-300 font-semibold text-[15px] tracking-wide py-2 group"
        >
          <span className="relative z-10">{link.label}</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
};

export default NavigationLinks;
