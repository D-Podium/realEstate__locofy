import Header from "./header";
import Hero from "./hero";
import AreaContainer from "./area-container";
import FeatureContainer from "./feature-container";
import RentPropertiesContainer from "./rent-properties-container";
import RentPropertiesForm from "./rent-properties-form";
import Contact from "./contact";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <main className="relative bg-gray-white w-[1920px] flex flex-col items-center justify-start">
      <Header hamburger topContainerAlignSelf="unset" />
      <Hero />
      <AreaContainer />
      <FeatureContainer />
      <RentPropertiesContainer />
      <RentPropertiesForm />
      <Contact />
      <Footer
        imageIds="/houseline2.svg"
        smallImageIds="/social-media-logo5.svg"
        mediumImageIds="/social-media-logo6.svg"
        smallImageIds2="/social-media-logo7.svg"
        smallImageIds3="/social-media-logo8.svg"
        largeImageIds="/social-media-logo9.svg"
        propAlignSelf="unset"
        propOverflow="unset"
        propWidth="1920px"
        propBoxSizing="border-box"
      />
    </main>
  );
};

export default LandingPage;
