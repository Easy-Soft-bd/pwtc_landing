"use client";

import { useMobileMenu } from "./MobileMenuProvider";

const MobileMenuContent = () => {
  const { isOpen, close } = useMobileMenu();

  if (!isOpen) return null;

  return (
    <div className="lg:hidden border-t border-light/20 bg-surface">
      <div className="px-6 py-4 space-y-4">
        <a
          href="#blog"
          className="block text-foreground hover:text-secondary transition-colors font-medium"
          onClick={close}
        >
          Blog
        </a>
        <a
          href="#pricing"
          className="block text-foreground hover:text-secondary transition-colors font-medium"
          onClick={close}
        >
          Pricing
        </a>
        <a
          href="#faq"
          className="block text-foreground hover:text-secondary transition-colors font-medium"
          onClick={close}
        >
          FAQ
        </a>
        <a
          href="#how-it-works"
          className="block text-foreground hover:text-secondary transition-colors font-medium"
          onClick={close}
        >
          How It Works
        </a>
        <a
          href="#sign-in"
          className="block text-foreground hover:text-secondary transition-colors font-medium pt-4 border-t border-light/20"
          onClick={close}
        >
          Sign In
        </a>
      </div>
    </div>
  );
};

export default MobileMenuContent;

