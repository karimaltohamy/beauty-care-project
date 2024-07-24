import React from "react";
import boxImg from "../../assets/images/product-1.jpg";
import { LuBookUp } from "react-icons/lu";
import "./trendingSection.scss";
import { t } from "i18next";
import { Swiper, SwiperSlide } from "swiper/react";

const TrendingSection = () => {
  return (
    <div className="trending_section">
      <div className="container">
        <h3 className="title_section">{t("trending_now")}</h3>
        <div className="boxs">
          <Swiper
            spaceBetween={25}
            breakpoints={{
              450: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
              return (
                <SwiperSlide>
                  <div className="box">
                    <div className="image">
                      <img src={boxImg} alt="box_img" loading="lazy" />
                    </div>
                    <h4 className="title">Deep Cleansing Oil</h4>
                    <p className="desc">
                      Lorem ipsum dolor sit, amet adipite magni consequuntur
                      eaque impedit facilis, atque maiores placeat!
                    </p>
                    <div className="flex items-center justify-between">
                      <h5 className="price">$10.00</h5>
                      <button className="btn_booking">
                        <LuBookUp size={25} />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
