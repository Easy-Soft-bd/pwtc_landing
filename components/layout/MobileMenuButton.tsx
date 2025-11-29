"use client";

import { useMobileMenu } from "./MobileMenuProvider";

const MobileMenuButton = () => {
  const { isOpen, toggle } = useMobileMenu();

  return (
    <button
      onClick={toggle}
      className="lg:hidden p-2 text-foreground hover:text-primary transition-all duration-300 relative z-50"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <div className="relative w-6 h-6">
        {/* Hamburger Icon */}
        <span
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
          }`}
        />
        <span
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
          }`}
        />
      </div>
    </button>
  );
};

export default MobileMenuButton;
