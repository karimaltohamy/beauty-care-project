import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { t } from "i18next";
import logo from "../../assets/images/bird-2374419_1920.jpg";
import "./signAs.scss";

const SignUpAsHostinger = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="signAs">
        <div className="line">
          <div className="logo">
            <img src={logo} alt="" loading="lazy" />
          </div>
          <form>
            <div className="text">
              <h3>{t("Start_With_Us")}</h3>
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
              <label htmlFor=""> {t("Email")} </label>
              <input
                type="email"
                placeholder={t("Enter your Email")}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input_item">
              <label htmlFor=""> {t("Password")} </label>
              <input
                type="password"
                placeholder={t("Enter your Password")}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input_item">
              <label htmlFor=""> {t("phone")} </label>
              <input
                type="number"
                placeholder={t("Enter your Email")}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input_item flex">
              <div className="bik">
                <label htmlFor=""> {t("Age")} </label>
                <input type="number" placeholder={t("Enter your Age")} />
              </div>
              <div className="bik">
                <label htmlFor=""> {t("PLace")} </label>
                <input type="email" placeholder={t("Enter your Host Place")} />
              </div>
            </div>
            <div className="input_item flex">
              <div className="upload">
                <label htmlFor=""> {t("Place_Photos")} </label>
                <input
                  type="file"
                  multiple
                  name="files"
                  onChange={(e) => console.log(e.target.files)}
                />
              </div>
              <div className="place">
                <label htmlFor=""> {t("Natioanl_Card_Photo")} </label>
                <input type="file" />
              </div>
            </div>
            <button className="btn_login" type="submit">
              {t("Enroll")}
            </button>
          </form>
        </div>
      </div>
      {loading && <Loader plainBackground />}
    </Fragment>
  );
};

export default SignUpAsHostinger;
