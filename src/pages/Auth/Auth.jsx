import React from "react";
import logoPhone from "../../assets/images/ai-generated-8357440_1920.jpg";
import imgWeb from "../../assets/images/beautyImg.jpg";
import wave from "../../assets/images/phoneWave2.png";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebbok.jpg";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";

import "./Auth.scss";
import Banner from "../../components/banner/Banner.component";

function Auth() {
  const navigate = useNavigate();
  return (
    <div className="all">
      <Banner title={t("Start_With_Us")} />
      <div className="auth">
        <div className="box">
          <div className="header">
            <div className="logo">
              <img src={logoPhone} alt="" />
            </div>
            <div className="img">
              <img src={imgWeb} alt="" />
            </div>
          </div>
          <div className="content">
            <h1>{t("Welcome")} !</h1>
            <button className="signUp" onClick={() => navigate("/signUpUser")}>
              {t("Sign up")}
            </button>
            <button className="login" onClick={() => navigate("/login")}>
              {t("Login")}
            </button>
            <div className="another">
              <p>
                <span></span>
                {t("Login With Others")}
                <span></span>
              </p>
              <div className="flexgo">
                <button className="go">
                  <img src={google} alt="" />
                  <p> {t("Google")}</p>
                </button>
                <button className="go">
                  <img src={facebook} alt="" />
                  <p>{t("Facebook")}</p>
                </button>
              </div>
            </div>
          </div>
          <div className="ball one"></div>
          <div className="ball two"></div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
