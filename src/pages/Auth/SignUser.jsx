import React, { Fragment, useEffect, useRef, useState } from "react";
import { t } from "i18next";
import imgWeb from "../../assets/images/beautyImg.jpg";
import logoPhone from "../../assets/images/ai-generated-8357440_1920.jpg";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebbok.jpg";
import Banner from "../../components/banner/Banner.component";
import { useNavigate } from "react-router-dom";


const SignUpAsHostinger = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const boxRef = useRef();
  useEffect(() => {
    boxRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Fragment>
      <Banner title={t("Start_With_Us")} />
      <div
        className="sign"
        data-aos="flip-up"
        data-aos-delay="400"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        <div className="all">
          <div className="img">
            <img src={imgWeb} alt="" />
          </div>
          <div className="header">
            <div className="logo">
              <img src={logoPhone} alt="" />
            </div>
          </div>
          <form>
            <div className="form">
              <div className={`details personal`}>
                <span className="title">{t("Personal_Details")}</span>
                <div className="fields">
                  <div className="input-field">
                    <label>{t("full Name")}</label>
                    <div className="flex">
                      <input type="text" placeholder="Enter your name" />
                      <i className="fa-solid fa-user-plus"></i>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>{t("Age")}</label>
                    <div className="flex">
                      <input type="number" placeholder="Enter your age" />
                      <i className="fa-solid fa-heart-pulse"></i>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>{t("email")}</label>
                    <div className="flex">
                      <input type="text" placeholder="Enter your email" />
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>{t("Password")}</label>
                    <div className="flex">
                      <input type="text" placeholder="Enter your paassword" />
                      <i className="fa-solid fa-lock"></i>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>{t("phone")}</label>
                    <div className="flex">
                      <input type="number" placeholder="Enter mobile number" />
                      <i className="fa-solid fa-phone"></i>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>{t("gender")}</label>
                    <div className="flex">
                      <select>
                        <option disabled selected>
                          Select gender
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                      <i className="fa-solid fa-venus-mars"></i>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>{t("address")}</label>
                    <div className="flex">
                      <input type="text" placeholder="Enter Adress" />
                      <i className="fa-regular fa-address-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btns">
              <button>
                <span className="btnText">{t("Submit")}</span>
              </button>
              <p>{t("have account")} ? <span onClick={()=> navigate("/login")} >{t("Login")}</span></p>
            </div>
            <div className="another">
              <p>
                <span></span>
                {t("Sign With Others")}
                <span></span>
              </p>
              <div className="flexgo">
              <button className="go">
                <img src={google} alt="" />
                {t("Google")}
              </button>
              <button className="go">
                <img src={facebook} alt="" />
              {t("Facebook")}
              </button>
              </div>
            </div>
            </div>
          </form>
        </div>
        <h1 ref={boxRef}></h1>
      </div>
      {loading && <Loader plainBackground />}
    </Fragment>
  );
};

export default SignUpAsHostinger;
