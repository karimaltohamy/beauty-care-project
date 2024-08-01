import React from "react";

import "./profile.scss";

import SideBar from "../../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import Banner from "../../components/banner/Banner.component";
import { t } from "i18next";
import SmallHeader from "../../components/smallHeader/SmallHeader";

const Profile = () => {
  return (
    <div className="profile">
      <Banner title={t("Profile")}/>
      {window.innerWidth <= 768 && <SmallHeader title={t("Profile")} padding={"20px"} />}
      <div className="grid">
        <SideBar />
        <div className="view">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
