import Image from "next/image";
import logo from "./pwtc-logo.png";
import logo_with_text from "./pwtc-logo-text.png";

const Logo = ({ withText = false }: { withText?: boolean }) => {
  return (
    <>
      <Image
        src={withText ? logo_with_text : logo}
        alt="Logo"
        width={withText ? 3000 : 833}
        height={500}
      />
    </>
  );
};

export default Logo;
