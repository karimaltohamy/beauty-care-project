import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tilt } from 'react-tilt'
import { t } from "i18next";
import "./ourWork.scss";

import salon from "../../assets/images/woman-3288365_1920.jpg";

function OurWork() {
  const options = {
    scale : 1
  }
  return (
    <div className="work">

      <div className="all">
      <h1 style={{ fontWeight: "700", fontSize: "30px", marginBottom: "20px" }}>
        {t("Our Work")}
      </h1>
      <div className="grid">
      {[...Array(6)].map(() => {
          return (
            <Tilt className="box" options={options} >
              <img src={salon} alt="" srcset="" />
            </Tilt>
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default OurWork;
