import React, { useRef } from "react";

import img from "../../assets/images/ai-generated-8556454_1920.jpg";
import { NavLink } from "react-router-dom";
import "./side.scss";

import { useTranslation } from "react-i18next";

function SideBar() {
  const { t } = useTranslation();
  const sideRef = useRef();
  const { lang } = localStorage;
  return (
    <div className="side"  ref={sideRef}>
      <div className="img">
        <img src={img} alt="" />
        <h1 style={{fontSize : "25px" , fontFamily : "cursive"}}>Mohamed Gamal</h1>
      </div>
      <div className="data">
        <NavLink className="inside shdaow" to={"/profile/accounts"}>
          <i className="fa-solid fa-sitemap"></i>
          <p className={"nor"}>{t("Informations")}</p>
        </NavLink>
        <div className="orders shdaow">
          <div className="topic">
            <i className="fa-solid fa-cart-plus"></i>
            <h3>{t("orders")}</h3>
            <i
              class={`fa-solid fa-arrow-${lang == "ar" ? "left" : "right"}`}
            ></i>
          </div>
          <div className="small">
            <NavLink className="inside" to={"/profile/ordersFull"}>
              <i className="fa-solid fa-check-to-slot"></i>
              <p>{t("all")}</p>
            </NavLink>
            <NavLink className="inside" to={"/profile/ordersCompleted"}>
              <i className="fa-solid fa-check-double"></i>
              <p>{t("completed")}</p>
            </NavLink>
            <NavLink className="inside" to={"/profile/ordersPending"}>
              <i className="fa-regular fa-clock"></i>
              <p>{t("pending")}</p>
            </NavLink>
            <NavLink className="inside" to={"/profile/ordersCanceld"}>
              <i className="fa-solid fa-ban"></i>
              <p>{t("canceled")}</p>
            </NavLink>
          </div>
        </div>
        <NavLink className="inside shdaow" to={"/profile/support"}>
          <i className="fa-solid fa-headset"></i>
          <p className={"nor"}>{t("support")}</p>
        </NavLink>
        <NavLink className="inside shdaow" to={"/profile/favorites"}>
          <i className="fa-solid fa-heart"></i>
          <p className={"nor"}>{t("favorites")}</p>
        </NavLink>
        <NavLink className="inside shdaow" to={"/profile/my_Branding"}>
          <i className="fa-solid fa-crown"></i>
          <p className={"nor"}>{t("my_Branding")}</p>
        </NavLink>
        <NavLink className="inside shdaow" to={"/profile/settings"}>
          <i className="fa-solid fa-gear"></i>
          <p className={"nor"}>{t("settings")}</p>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
