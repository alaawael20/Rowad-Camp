import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Slider from "./Sections/Slider/Slider";
import Overview from "./Sections/Overview/Overview";
import AvailableServices from "./Sections/AvailableServices/AvailableServices";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <Overview />
      <AvailableServices />
    </div>
  );
};

export default HomePage;
