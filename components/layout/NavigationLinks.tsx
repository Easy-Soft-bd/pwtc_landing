"use client";

const NavigationLinks: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center gap-10 h-full">
      <a
        href="#home"
        className="relative text-foreground hover:text-primary transition-all duration-300 font-semibold text-[15px] tracking-wide py-2 group"
      >
        <span className="relative z-10">Home</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a
        href="#visa"
        className="relative text-foreground hover:text-primary transition-all duration-300 font-semibold text-[15px] tracking-wide py-2 group"
      >
        <span className="relative z-10">Visa</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a
        href="#about-us"
        className="relative text-foreground hover:text-primary transition-all duration-300 font-semibold text-[15px] tracking-wide py-2 group"
      >
        <span className="relative z-10">About Us</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </a>
    </nav>
  );
};

export default NavigationLinks;
