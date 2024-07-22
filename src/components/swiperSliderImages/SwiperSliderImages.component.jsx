import React, { Fragment, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiperSliderImages.scss";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import productImg from "../../assets/images/product-1.jpg";

const SwiperSliderImages = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
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
