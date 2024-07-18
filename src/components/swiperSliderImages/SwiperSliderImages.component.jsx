import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiperSliderImages.scss";

// import required modules
import { Keyboard, Pagination, Navigation  ,Autoplay} from "swiper/modules";
import productImg from "../../assets/images/product-1.jpg";

const SwiperSliderImages = () => {
  return (
    <div className="slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Keyboard, Pagination, Navigation  , Autoplay]}
      >
        <SwiperSlide>
          <img src={productImg} alt="product_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={productImg} alt="product_img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={productImg} alt="product_img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSliderImages;
