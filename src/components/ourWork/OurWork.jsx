import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tilt } from "react-tilt";
import { t } from "i18next";
import "./ourWork.scss";

import salon from "../../assets/images/woman-3288365_1920.jpg";
import img1 from "../../assets/images/ai-generated-8357440_1920.jpg";
import img2 from "../../assets/images/ai-generated-8556454_1920.jpg";
import img3 from "../../assets/images/salon-2561845_1280.jpg";
import img4 from "../../assets/images/beautyImg.jpg";
import img5 from "../../assets/images/bouquet-4736413_1920.jpg";
import img6 from "../../assets/images/bird-2374419_1920.jpg";

import { Autoplay } from "swiper/modules";

function OurWork({
  arr = [...Array(6)],
  tab,
  activate = false,
  setGlobalSrc,
  setPopUpImg,
  mobile,
}) {
  const options = {
    scale: 1,
  };
  const imgs = [img1, img2, img3, img4, img5, img6];
  return (
    <div
      className="work"
      style={{ display: tab !== "work" && activate ? "none" : "" }}
    >
      <div className="container">
        {!activate && (
          <h1
            style={{ fontSize: "30px", fontWeight: 700, marginBottom: "10px" }}
          >
            {t("Our Work")}
          </h1>
        )}
        <div className="responsive">
          {!mobile ? (
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
                  slidesPerView: 4,
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
                    <SwiperSlide
                      onClick={() => {
                        setGlobalSrc(salon);
                        setPopUpImg(true);
                      }}
                    >
                      <Tilt className="box" options={options}>
                        <div className="img">
                          <img src={salon} alt="" />
                        </div>
                      </Tilt>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          ) : (
            <div className="gallary">
              {imgs.map((src , i) => {
                return (
                  <img
                    src={src}
                    className={`img-${i+1}`}
                    alt=""
                    onClick={() => {
                      setGlobalSrc(src);
                      setPopUpImg(true);
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OurWork;
