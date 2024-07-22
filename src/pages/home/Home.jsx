import React, { Fragment } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import SearchSection from "../../components/searchSection/SearchSection";
import TrendingSection from "../../components/trendingSection/TrendingSection";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <SearchSection />
      <TrendingSection />
      <div className="container"></div>
    </div>
  );
};

export default Home;
