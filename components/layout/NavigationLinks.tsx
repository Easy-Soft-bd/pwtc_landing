"use client";

import DropdownMenu from "./DropdownMenu";

const NavigationLinks: React.FC = () => {
  return (
    <div className="hidden lg:flex items-center gap-8 h-full">
      <a
        href="#blog"
        className="text-foreground hover:text-secondary transition-colors font-medium"
      >
        Blog
      </a>
      <a
        href="#pricing"
        className="text-foreground hover:text-secondary transition-colors font-medium"
      >
        Pricing
      </a>
      <a
        href="#faq"
        className="text-foreground hover:text-secondary transition-colors font-medium"
      >
        FAQ
      </a>
      <DropdownMenu />
    </div>
  );
};

export default NavigationLinks;
