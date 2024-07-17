import { t } from "i18next";
import React from "react";
import "./banner.scss";
import { useNavigate } from "react-router-dom";

const Banner = ({ title , needBack= false }) => {
  const navigate = useNavigate()
  return (
    <div className="banner_page h-[250px] bg-cover bg-no-repeat bg-center">
      <div className="container">
        <h1>{t(title)}</h1>
        {needBack && <button onClick={()=> navigate(-1)}> <p>{t("Back")}</p> <i className="fa-solid fa-backward"></i></button>}
      </div>
    </div>
  );
};

export default Banner;
