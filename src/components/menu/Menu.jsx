import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./menu.scss";
import img from "../../assets/images/ai-generated-8556454_1920.jpg";
import { NavLink } from "react-router-dom";
import { t } from "i18next";


const Menu = ({ open, setOpen }) => {

  const {lang} = localStorage
  return (
    <div className={`menu ${open ? "open" : ""}`}>
      <div className="head flex items-center justify-between mb-[20px]">
        <h3 className="text-[26px] font-bold">{t("Menu")}</h3>
        <button onClick={() => setOpen(false)}>
          <IoClose size={24} />
        </button>
      </div>
      <div className="img">
        <img src={img} alt="" />
        <i class="fa-regular fa-pen-to-square icon"></i>
      </div>
        <h1 style={{textAlign : "center", marginTop : "10px"  ,fontSize: "20px" }}>Mohamed Gamal</h1>
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

      <div className="logOut">
        <h1> {t("LogOut")}</h1>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </div>
    </div>
  );
};

export default Menu;
