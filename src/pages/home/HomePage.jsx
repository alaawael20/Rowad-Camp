import React from "react";
import Slider from "../../components/slider/Slider";
import Overview from "./sections/overview/Overview";
import StatisticsSection from "./sections/statistics/StatisticsSection";
import GallerySection from "./sections/Gallery/GallerySection";
import NewsSection from "./sections/News/NewsSection";
import MapSection from "./sections/mapSection/MapSection";
import SupportSection from "./sections/supportSection/SupportSection";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <Overview />
      <StatisticsSection />
      <GallerySection />
      <NewsSection />
      <MapSection />
      <SupportSection />
    </div>
  );
};

export default HomePage;
