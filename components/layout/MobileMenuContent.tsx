"use client";

import { useMobileMenu } from "./MobileMenuProvider";
import { useEffect } from "react";
import Logo from "../assets/logo/Logo";

const MobileMenuContent = () => {
  const { isOpen, close } = useMobileMenu();

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#visa", label: "Visa" },
    { href: "#about-us", label: "About Us" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-surface z-50 transform transition-all duration-500 ease-out shadow-2xl flex flex-col ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Logo Header */}
        <div
          className={`px-6 py-6 border-b border-light/20 flex items-center justify-center ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          } transition-all duration-500`}
          style={{
            transitionDelay: isOpen ? "100ms" : "0ms",
          }}
        >
          <div className="relative w-auto max-w-[400px] h-12">
            <Logo withText={true} />
          </div>
        </div>

        <nav className="px-6 py-8 space-y-2 flex-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`block text-foreground hover:text-primary transition-all duration-500 font-semibold text-[18px] tracking-wide py-5 px-5 rounded-xl hover:bg-light/10 hover:translate-x-3 hover:shadow-md border-l-4 border-transparent hover:border-primary ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{
                transitionDelay: isOpen
                  ? `${index * 100 + 150}ms`
                  : `${index * 50}ms`,
              }}
              onClick={close}
            >
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Close Button */}
        <div className="px-6 py-6 border-t border-light/20">
          <button
            onClick={close}
            className={`w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold text-[16px] tracking-wide hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: isOpen
                ? `${menuItems.length * 100 + 250}ms`
                : "0ms",
            }}
          >
            Close Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenuContent;
