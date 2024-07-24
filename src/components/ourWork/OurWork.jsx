import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tilt } from "react-tilt";
import { t } from "i18next";
import "./ourWork.scss";

import salon from "../../assets/images/woman-3288365_1920.jpg";
import { Autoplay } from "swiper/modules";

function OurWork({arr = [...Array(6)]}) {
  const options = {
    scale: 1,
  };
  return (
    <div className="work">
      <div className="all">
        <h1
          style={{ fontWeight: "700", fontSize: "30px", marginBottom: "20px" }}
        >
          {t("Our Work")}
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
                  <Tilt className="box" options={options}>
                    <div className="img">
                      <img src={salon} alt="" />
                    </div>
                  </Tilt>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}

export default OurWork;
