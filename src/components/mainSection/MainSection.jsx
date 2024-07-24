import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";
import "./mainSection.scss";
import { Swiper, SwiperSlide } from "swiper/react";

const MainSection = ({ children, title, link, breakpoints }) => {
  return (
    <div className="main_section">
      <div className="container">
        <div className="head flex items-center justify-between">
          <h3 className="title_section">{t(title)}</h3>
          <Link className="btn_link" to={link}>
            See All
          </Link>
        </div>
        <Swiper spaceBetween={25} breakpoints={breakpoints}>
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default MainSection;
