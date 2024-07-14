import { t } from "i18next";
import React from "react";
import "./banner.scss";

const Banner = ({ title }) => {
  return (
    <div className="banner_page h-[250px] bg-cover bg-no-repeat bg-center">
      <div className="container">
        <h1>{t(title)}</h1>
      </div>
    </div>
  );
};

export default Banner;
