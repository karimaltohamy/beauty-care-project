import React from "react";
import { TbShoppingCartHeart } from "react-icons/tb";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import imgProduct from "../../assets/images/salon-img.avif";
import { IoStar } from "react-icons/io5";
import { t } from "i18next";
import "./beautyCard.scss";
import { Link } from "react-router-dom";

const BeautyCard = () => {
  const { lang } = localStorage;

  return (
    <Link
      to={"/beauty/1"}
      className="beautyCard flex items-center flex-col-reverse"
    >
      <div
        className={`text bg-white p-3 w-full ${lang == "ar" ? "ar" : "en"} `}
      >
        <h3 className="font-bold text-[22px]">{"Deep Cleansing Oil"}</h3>
        <div class="service_review">
          <span class="rate !text-yellow-500">
            4.5/5{" "}
            <span class="rate-text !text-yellow-500">{t("excellent")}</span>
          </span>
          <span class="review">2 {t("reviews")}</span>
        </div>

        <div className="flex items-center justify-between gap-2 ">
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
        <span className="font-medium flex gap-10 m-1 text-[20px]"></span>
        <button className="btn_book_now">{t("book_now")}</button>
      </div>
      <div className="image relative w-full overflow-hidden">
        <img src={imgProduct} alt="img_product" className="" />
        <span className="bg-green-500 text-white rounded-md py-[2px] px-2 absolute top-2 left-4 text-[15px]">
          {t("Salon")}
        </span>

        <div className="flex items-center justify-center gap-1 text-yellow-400 absolute bottom-5 right-5">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
      </div>
    </Link>
  );
};

export default BeautyCard;
