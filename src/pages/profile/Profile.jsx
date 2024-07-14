import React from "react";

import { useTranslation } from "react-i18next";
import "./profile.scss";

import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <div className="profile mb-5">
      <div className="container">
        <div className="links mb-5">
          <NavLink
            className={({ isActive }) => (isActive ? "link active" : "link")}
            to={"/profile/general"}
          >
            {t("general")}
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link active" : "link")}
            to={"/profile/accounts"}
          >
            {t("accounts")}
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link active" : "link")}
            to={"/profile/request-data"}
          >
            {t("request_data")}
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
