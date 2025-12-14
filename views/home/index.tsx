import Authorizations from "./Authorizations";
import Hero from "./Hero";
import Ava from "./Ava";
import Statistics from "./Statistics";
import Services from "./Services";
import Cta from "./Cta";
import ImgSlider from "@/components/imgSlider";

const Home = () => {
  return (
    <>
      <Hero />
      <Authorizations />
      <Ava />
      <Statistics />
      <Services />
      <ImgSlider />
      <Cta />
    </>
  );
};

export default Home;
