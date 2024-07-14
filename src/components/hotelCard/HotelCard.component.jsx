import React from "react";
import hotelImg from "../../assets/images/Hotels/architecture-1837118_1920.jpg";
import { MdFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const HotelCard = () => {
  return (
    <div className="hotel_card border border-gray-300 rounded-lg overflow-hidden">
      <div className="image relative">
        <img
          src={hotelImg}
          alt="hotel_img"
          loading="lazy"
          className="h-[180px] w-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <MdFavoriteBorder size={25} className="text-white" />
        </div>
        <span className="bg-red-500 text-white rounded-md py-[2px] px-3 absolute top-3 left-3">
          hotel
        </span>
        <div className="stars absolute bottom-3 left-3 flex items-center gap-1">
          <FaStar size={20} className="text-[#FA5636]" />
          <FaStar size={20} className="text-[#FA5636]" />
          <FaStar size={20} className="text-[#FA5636]" />
          <FaStar size={20} className="text-[#FA5636]" />
        </div>
      </div>
      <div className="text p-2">
        <h4 className="text-[21px] font-semibold text-black">
          Parian Holiday Villas
        </h4>
        <div class="service-review flex items-center justify-between gap-2">
          <span class="rate text-[#5191FA] text-[17px] font-semibold">
            4.0/5 <span class="rate-text">Very Good</span>
          </span>
          <span class="review">2 Reviews</span>
        </div>
        <div class="flex items-center gap-1 mt-2">
          <div class="prefix">
            <span class="fr_text">from</span>
          </div>
          <div class="flex items-center gap-1">
            <span class="text-[22px] font-semibold text-black">$550</span>
            <span class="unit">/night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
