import React from "react";
import Banner from "../components/Layout/home/Banner";
import Services from "../components/Layout/Services";
import AboutUs from "../components/Layout/home/AboutUs";
import WhyChooseUs from "../components/Layout/home/WhyChooseUs";
import VisionMission from "../components/Layout/home/VissionMission";
import WhatWeBuild from "../components/Layout/home/WhatWeBuild";
import TechnologyStack from "../components/Layout/home/TechnologyStack ";

const Home = () => {
  // const [auth] = useAuth();
  return (
    <>
      <div className="align-center">
        <div>
          <Banner />
          <Services />
          <AboutUs />
          <WhyChooseUs />
          <VisionMission />
          <WhatWeBuild />
          <TechnologyStack />
        </div>
      </div>
    </>
  );
};

export default Home;
