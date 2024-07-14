import React, { Fragment, useEffect, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import logo from "../../assets/images/bird-2374419_1920.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [languages, setLanguages] = useState([]);
  const [lang, setLang] = useState("en");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  return (
    <Fragment>
      <div className="login">
        <div className="line">
          <div className="logo">
            <img src={logo} alt="" loading="lazy" />
          </div>
          <div className="box_form">
            <form>
              <div className="text">
                <h3>{t("welcome Back")}</h3>
              </div>
              <div className="input_item">
                <label htmlFor=""> {t("username")} </label>
                <input
                  type="text"
                  placeholder={t("Enter your username")}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input_item">
                <label htmlFor=""> {t("Password")} </label>
                <input
                  type="password"
                  placeholder={t("Enter your password")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn_login" type="submit">
                {t("Login")}
              </button>
              <div className="btns">
                <button className="face">
                  {t("continue_with_facebook")}{" "}
                  <span>
                    <i class="fa-brands fa-facebook"></i>
                  </span>
                </button>
                <button className="face">
                  {t("continue_with_gmail")}{" "}
                  <span>
                    {" "}
                    <i className="fa-brands fa-google"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {loading && <Loader plainBackground />}
    </Fragment>
  );
};

export default Login;
