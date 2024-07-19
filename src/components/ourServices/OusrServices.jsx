import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ourServices.scss";
import { t } from "i18next";

import salon from "../../assets/images/salon-2561845_1280.jpg";
import { Autoplay } from "swiper/modules";

function OusrServices({ arr }) {
  const { lang } = localStorage;
  return (
    <div className="services">
      <h1 style={{ fontWeight: "700", fontSize: "30px" }}>
        {t("Our Services")}
      </h1>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        grabCursor={true}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          140: {
            slidesPerView: 1,
          },
          640 :{
            slidesPerView : 2 ,
            spaceBetween : 15
          },
          900:{
            slidesPerView : 3 ,
            spaceBetween : 20
          },
        }}
        loop={true}
        spaceBetween={20}
        modules={[Autoplay]}
      >
        {arr && arr.map((ele, i) => {
          return (
            <SwiperSlide>
              <div className="img">
                <img src={salon} alt="" />
              </div>
              <h1>{ele.service}</h1>
              <p>{ele.desc}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default OusrServices;
