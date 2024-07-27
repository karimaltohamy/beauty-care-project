import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./menu.scss";
import { Link, NavLink } from "react-router-dom";
import { t } from "i18next";

const Menu = ({ open, setOpen }) => {
  return (
    <div className={`menu ${open ? "open" : ""}`}>
      <div className="head flex items-center justify-between mb-[100px]">
        <h3 className="text-[26px] font-bold">Menu</h3>
        <button onClick={() => setOpen(false)}>
          <IoClose size={24} />
        </button>
      </div>
      <div className="links">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          {t("home")}
        </NavLink>
        <NavLink
          to={"/beauty"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          {t("beauty")}
        </NavLink>
        <NavLink
          to={"/packages"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          {t("packages")}
        </NavLink>
        <NavLink
          to={"/atelier"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          {t("atelier")}
        </NavLink>
        <NavLink
          to={"/shein"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          {t("shein")}
        </NavLink>
        <NavLink
          to={"/clinics"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          {t("clinics")}
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
