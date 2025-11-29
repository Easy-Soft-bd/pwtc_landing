import Logo from "../assets/logo/Logo";
import NavigationLinks from "./NavigationLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenuContent from "./MobileMenuContent";
import { MobileMenuProvider } from "./MobileMenuProvider";

const Header = () => {
  return (
    <MobileMenuProvider>
      <header className="header-mesh-gradient relative w-full border-b border-light/20 h-[80px] md:h-[60px] px-4 z-50">
        <nav className="relative flex items-center justify-between max-w-7xl mx-auto h-full z-10">
          {/* Logo */}
          <div className="flex items-center">
            {/* Logo with text - visible on tablet and desktop */}
            <div className="hidden md:block relative w-auto max-w-[300px] h-full">
              <Logo withText={true} />
            </div>
            {/* Logo only - visible on mobile */}
            <div className="md:hidden relative w-auto max-w-[110px] h-full">
              <Logo withText={false} />
            </div>
          </div>

          {/* Navigation Links */}
          <NavigationLinks />

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="#sign-in"
              className="hidden sm:block text-foreground hover:text-primary transition-all duration-300 font-semibold text-[15px] tracking-wide"
            >
              Sign In
            </a>
            <a
              href="#get-started"
              className="bg-primary text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-medium hover:bg-secondary transition-colors text-sm md:text-base"
            >
              Get Started
            </a>

            {/* Mobile Menu Button */}
            <MobileMenuButton />
          </div>
        </nav>

        {/* Mobile Menu Content */}
        <MobileMenuContent />
      </header>
    </MobileMenuProvider>
  );
};

export default Header;
