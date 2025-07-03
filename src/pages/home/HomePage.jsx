import React from "react";
import NavBar from "../../components/navBar/navBar";
import Slider from "../../components/slider/Slider";
import Overview from "./sections/overview/Overview";
import StatisticsSection from "./sections/statistics/StatisticsSection";
import GallerySection from "./sections/Gallery/GallerySection";
import NewsSection from "./sections/News/NewsSection";
import MapSection from "./sections/mapSection/MapSection";
import SupportSection from "./sections/supportSection/SupportSection";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <Overview />
      <StatisticsSection />
      <GallerySection />
      <NewsSection />
      <MapSection />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default HomePage;
