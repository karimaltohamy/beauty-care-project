import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ourServices.scss";
import { t } from "i18next";

import salon from "../../assets/images/salon-2561845_1280.jpg";
import { Autoplay } from "swiper/modules";

function OusrServices({ arr, tab, activate = false }) {
  return (
    <div
      className="services container"
      style={{ display: tab !== "service" && activate ? "none" : "" }}
    >
      {!activate && (
        <h1 style={{ fontSize: "30px", fontWeight: 700, marginBottom: "10px" }}>
          {t("Services")}
        </h1>
      )}

      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        grabCursor={true}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          140: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        loop={true}
        spaceBetween={20}
        modules={[Autoplay]}
      >
        {arr &&
          arr.map((ele, i) => {
            return (
              <SwiperSlide>
                <div className="img">
                  <img src={salon} alt="" />
                </div>
                <div className="con">
                <h1>{ele.service}</h1>
                <p>{ele.desc}</p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default OusrServices;
