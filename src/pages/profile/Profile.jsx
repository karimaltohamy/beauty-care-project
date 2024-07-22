import React from "react";

import "./profile.scss";

import SideBar from "../../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";

const Profile = () => {

  return (
    <div className="profile" >
      {/* <SideBar /> */}
      <div className="view">
        <Outlet/>
      </div>
    </div>
  );
};

export default Profile;
