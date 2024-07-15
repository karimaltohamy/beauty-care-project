import React from "react";
import imgProduct from "../../assets/images/product-1.jpg";
import { IoStar } from "react-icons/io5";
import { TbShoppingCartHeart } from "react-icons/tb";

import { t } from "i18next";

import "./atelierCard.scss" 

const AtelierCard = ({ content, price, starsCount, normalContent = true }) => {
  return (
    <div className="atelierCard text-center">
      <div className="image relative overflow-hidden">
        <img
          src={imgProduct}
          alt="img_product"
          className="rounded-md w-full h-[270px]"
        />
        <span className="bg-green-500 text-white rounded-md py-[2px] px-3 absolute top-2 right-2">
          {t("Sale")}
        </span>
        {normalContent && (
          <span className="absolute top-2 -left-6 w-[120px] h-[30px] bg-red-500 rotate-[320deg] text-white text-[13px] leading-[30px]">
            {t("used")}
          </span>
        )}
      </div>
      <div className="text">
        <h3 className="font-semibold text-[22px]">
          {content || "Deep Cleansing Oil"}
        </h3>
        <span className="text-gray-500 font-medium flex justify-center gap-10 m-1">
          <span className="price">
            {t("price")} : {price || "450.00"}
          </span>
          {!normalContent && (
            <span className="add">
              <TbShoppingCartHeart size={20} cursor={"pointer"} />
            </span>
          )}
        </span>
        <div className="flex items-center justify-center gap-1 text-yellow-400">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
      </div>
    </div>
  );
};

export default AtelierCard;
