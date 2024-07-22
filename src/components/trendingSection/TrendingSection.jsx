import React from "react";
import boxImg from "../../assets/images/product-1.jpg";
import { LuBookUp } from "react-icons/lu";
import "./trendingSection.scss";
import { t } from "i18next";

const TrendingSection = () => {
  return (
    <div className="trending_section">
      <div className="container">
        <h3 className="title_section">{t("trending_now")}</h3>
        <div className="boxs">
          <div className="box">
            <div className="image">
              <img src={boxImg} alt="box_img" loading="lazy" />
            </div>
            <h4 className="title">Deep Cleansing Oil</h4>
            <p className="desc">
              Lorem ipsum dolor sit, amet adipite magni consequuntur eaque
              impedit facilis, atque maiores placeat!
            </p>
            <div className="flex items-center justify-between">
              <h5 className="price">$10.00</h5>
              <button className="btn_booking">
                <LuBookUp size={25} />
              </button>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={boxImg} alt="box_img" loading="lazy" />
            </div>
            <h4 className="title">Deep Cleansing Oil</h4>
            <p className="desc">
              Lorem ipsum dolor sit, amet adipite magni consequuntur eaque
              impedit facilis, atque maiores placeat!
            </p>
            <div className="flex items-center justify-between">
              <h5 className="price">$10.00</h5>
              <button className="btn_booking">
                <LuBookUp size={25} />
              </button>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src={boxImg} alt="box_img" loading="lazy" />
            </div>
            <h4 className="title">Deep Cleansing Oil</h4>
            <p className="desc">
              Lorem ipsum dolor sit, amet adipite magni consequuntur eaque
              impedit facilis, atque maiores placeat!
            </p>
            <div className="flex items-center justify-between">
              <h5 className="price">$10.00</h5>
              <button className="btn_booking">
                <LuBookUp size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
