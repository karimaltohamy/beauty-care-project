import React, { Fragment, useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { TbPackages } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import { PiOfficeChair } from "react-icons/pi";
import { GiLargeDress } from "react-icons/gi";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <nav className="">
        <div className="flex items-center justify-between">
          <NavLink
            className={({ isActive }) => (isActive ? "link active" : "link")}
            to="/"
          >
            <AiOutlineHome size={25} />
            <span>{t("home")}</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link active" : "link")}
            to="/beauty"
          >
            <PiOfficeChair size={25} />
            <span>{t("beauty")}</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link active" : "link")}
            to="/packages"
          >
            <TbPackages size={25} />
            <span>{t("packages")}</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link active" : "link")}
            to="/atelier"
          >
            <GiLargeDress size={25} />
            <span>{t("atelier")}</span>
          </NavLink>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
