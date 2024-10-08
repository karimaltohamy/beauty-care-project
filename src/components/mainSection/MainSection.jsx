import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";
import "./mainSection.scss";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

const MainSection = ({ children, title, link, breakpoints }) => {
  return (
    <div className="main_section">
      <div className="container">
        <div className="head flex items-center justify-between">
          <h3 className="title_section">{t(title)}</h3>
          {link && (
            <Link className="btn_link" to={link}>
              See All
            </Link>
          )}
        </div>
        <Swiper
          spaceBetween={25}
          breakpoints={breakpoints}
          modules={[Autoplay]}
          grabCursor={true}
        >
          {children}
        </Swiper>
      </div>
    </div>
  );
};

export default MainSection;
