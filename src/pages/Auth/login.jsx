import React, { useState } from "react";
import logoPhone from "../../assets/images/ai-generated-8357440_1920.jpg";
import wave from "../../assets/images/phoneWave2.png";
import imgWeb from "../../assets/images/beautyImg.jpg";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebbok.jpg";
import { t } from "i18next";
import { Link, useNavigate } from "react-router-dom";

import "./Auth.scss";
import Banner from "../../components/banner/Banner.component";

function Auth() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <div className="all">
      <Banner title={t("Welcome Back")} />
      <div className="auth login">
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
            <h1>
              {t("Welcome")} <span>{t("Back")}</span> !
            </h1>
            <div className="inputs">
              <div className="input-group">
                <div className="inside">
                  <i className="fa-regular fa-user"></i>
                  <input type="text" placeholder={t("username")} />
                </div>
              </div>
              <div className="input-group">
                <div className="inside">
                  <i
                    class={`fa-regular ${show ? "fa-eye-slash" : "fa-eye"}`}
                    onClick={() => setShow(!show)}
                  ></i>
                  <input
                    type={`${show ? "text" : "password"}`}
                    placeholder={t("Password")}
                  />
                </div>
              </div>
            </div>
            <div className="actions">
              <div className="flex">
                <div className="small-flex">
                  <input type="checkbox" />
                  <span>{t("Remember Me")}</span>
                </div>
                <p>{t("Forgrt Password ?")}</p>
              </div>
              <button>{t("Login")}</button>
              <p className="newUser">
                <span>{t("New User ?")}</span>
                <Link to={"/signUpUser"}>{t("Sign up")}</Link>
              </p>
            </div>
            <div className="another">
              <p>
                <span></span>
                {t("Login With Others")}
                <span></span>
              </p>
              <div className="flexgo">
                <button className="go">
                  <img src={google} alt="" />
                  <i className="fa-brands fa-google"></i>
                  <p>{t("Google")}</p>
                </button>
                <button className="go">
                  <img src={facebook} alt="" />
                  <i className="fa-brands fa-facebook"></i>
                  <p>{t("Facebook")}</p>
                </button>
              </div>
              <h5>sign in with another account</h5>
            </div>
          </div>
          <div className="ball one"></div>
          <div className="ball two"></div>
        </div>
      </div>
      <h1></h1>
    </div>
  );
}

export default Auth;
