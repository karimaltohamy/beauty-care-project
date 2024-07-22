import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import heroImg from "../../assets/images/hero-img.jpg";
import heroImg2 from "../../assets/images/hero-img2.jpg";
import "./heroSection.scss";
import SearchSection from "../searchSection/SearchSection";

const HeroSection = () => {
  return (
    <div className="hero_section">
      <div className="container">
        <Swiper>
          <SwiperSlide>
            <img src={heroImg2} alt="hero_img" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg} alt="hero_img" loading="lazy" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={heroImg} alt="hero_img" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg2} alt="hero_img" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
