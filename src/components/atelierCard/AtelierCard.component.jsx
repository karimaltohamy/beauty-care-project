import React from "react";
import imgProduct from "../../assets/images/product-1.jpg";
import { IoStar } from "react-icons/io5";
import { TbShoppingCartHeart } from "react-icons/tb";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

import { t } from "i18next";

import "./atelierCard.scss";
import { Link } from "react-router-dom";

const AtelierCard = ({ content, price, starsCount, normalContent = true }) => {
  const { lang } = localStorage;
  return (
    <Link to={"/atelier"} className="atelierCard">
      <div className="image relative overflow-hidden">
        <img src={imgProduct} alt="img_product" className="" />
        <span className="bg-green-500 text-white rounded-md py-[2px] px-2 absolute top-2 right-4 text-[12px]">
          {t("Sale")}
        </span>
        {normalContent && (
          <span className="absolute top-2 -left-8 w-[120px] text-center h-[30px] bg-red-500 rotate-[320deg] text-white text-[13px] leading-[30px]">
            {t("used")}
          </span>
        )}

        <div className="flex items-center justify-center gap-1 text-yellow-400 absolute bottom-5 right-5">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
      </div>
      <div className={`text bg-white p-3 ${lang == "ar" ? "ar" : "en"} `}>
        <h3 className="font-bold text-[22px]">
          {content || "Deep Cleansing Oil"}
        </h3>
        <div class="service_review">
          <span class="rate !text-yellow-500">
            4.5/5{" "}
            <span class="rate-text !text-yellow-500">{t("excellent")}</span>
          </span>
          <span class="review">2 {t("reviews")}</span>
        </div>

        <div className="sm:flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <CiBookmarkCheck size={22} />
              <h4 className="font-semibold text-[18px]">
                {t("reservations")}:{" "}
              </h4>
            </div>
            <span>100</span>
          </div>
          <div className="flex items-center gap-1">
            <IoLocationOutline size={20} />
            <span className="text-[17px] font-semibold">cairo</span>
          </div>
        </div>
        <span className="font-medium flex gap-10 m-1 text-[20px]">
          {!normalContent && (
            <span className="add">
              <TbShoppingCartHeart size={20} cursor={"pointer"} />
            </span>
          )}
        </span>
        <button className="btn_book_now">{t("book_now")}</button>
      </div>
    </Link>
  );
};

export default AtelierCard;
