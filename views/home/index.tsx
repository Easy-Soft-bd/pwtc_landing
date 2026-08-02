import Authorizations from "./Authorizations";
import Hero from "./Hero";
import VisaAuthorizations from "./VisaAuthorizations";
import Statistics from "./Statistics";
import Services from "./Services";
import Cta from "./Cta";
import ImgSlider from "@/components/imgSlider";
import CantonFairHomeCta from "@/views/canton-fair-2026-autumn-bangladesh/components/CantonFairHomeCta";

const Home = () => {
  return (
    <>
      <Hero />
      <CantonFairHomeCta />
      <Authorizations />
      <VisaAuthorizations />
      <Statistics />
      <Services />
      <ImgSlider />
      <Cta />
    </>
  );
};

export default Home;
