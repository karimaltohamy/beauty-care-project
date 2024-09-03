import React from "react";
import imgBox from "../../assets/images/bouquet-4736413_1920.jpg";
import { t } from "i18next";
import "./packageItem.scss";
import { FaRegCheckSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const PackageItem = () => {
  return (
    <div to={"/packages"} className="package_item">
      <div className="head">
        <div className="image">
          <img src={imgBox} alt="img_box" />
        </div>
        <div className="flex-1">
          <h3 className="title">Deep Cleansing Oil</h3>
          <div class="service_review flex items-center justify-between w-full text-[14px]">
            <span class="rate !text-yellow-500">
              4.5/5{" "}
              <span class="rate-text !text-yellow-500">{t("excellent")}</span>
            </span>
            <span class="review text-gray-500 font-medium">
              2 {t("reviews")}
            </span>
          </div>
        </div>
      </div>
      <div className="content">
        <h4>Free plan for all users</h4>
        <ul>
          <li>
            <FaRegCheckSquare size={20} />
            <span> Starter features</span>
          </li>
          <li>
            <FaRegCheckSquare size={20} />
            <span> Advanced reporting</span>
          </li>
          <li>
            <FaRegCheckSquare size={20} />
            <span>Marketing tools</span>
          </li>
          <li>
            <FaRegCheckSquare size={20} />
            <span>Free trading</span>
          </li>
          <li>
            <FaRegCheckSquare size={20} />
            <span>Price alerts</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <button className="btn_booking">{t("booking_now")}</button>
        <span className="font-bold text-gray-400">11 booking</span>
      </div>
    </div>
  );
};

export default PackageItem;
