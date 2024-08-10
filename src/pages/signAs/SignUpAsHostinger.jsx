import React, { Fragment, useEffect, useRef, useState } from "react";
import { t } from "i18next";
import imgEn from "../../assets/images/1..png";
import imgAr from "../../assets/images/2..png";
import "./signAs.scss";
import Banner from "../../components/banner/Banner.component";
import SmallHeader from "../../components/smallHeader/SmallHeader";

const SignUpAsHostinger = () => {
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(false);
  const { lang } = localStorage;
  const boxRef = useRef();
  useEffect(() => {
    boxRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Fragment>
      <Banner title={t("Start_With_Us")}  />
      <div
        className="sign"
        data-aos="flip-up"
        data-aos-delay="400"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
      >
        <div className="all">
          <div className="img">
            <img src={lang == "ar" ? imgAr : imgEn} alt="" />
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
              <div className={`details prand `}>
                <span className="title">{t("Prand_Details")}</span>
                <div className="fields">
                  <div className="input-field">
                    <label>{t("Prand_Name")}</label>
                    <div className="flex">
                      <input type="text" placeholder="Enter prand name" />
                      <i className="fa-solid fa-code-branch"></i>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>{t("Service Type")}</label>
                    <div className="flex">
                      <select>
                        <option disabled selected>
                          {t("Service Type")}
                        </option>
                        <option>{t("Go to customers")}</option>
                        <option>{t("Recive customers")}</option>
                      </select>
                      <i class="fa-solid fa-hurricane"></i>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>{t("Location")}</label>
                    <div className="flex">
                      <input type="text" placeholder="Enter locaton" />
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>{t("Place_Photos")}</label>
                    <div className="flex">
                      <input type="file" />
                      <i class="fa-solid fa-photo-film"></i>
                    </div>
                  </div>
                  <div className="work">
                    <label htmlFor="">{t("Working Days")}</label>
                    <div className="inputs">
                      <div className="flex">
                        <input type="number" placeholder={t("From")} />
                        <i className="fa-regular fa-clock"></i>
                      </div>
                      <div className="flex">
                        <input type="number" placeholder={t("To")} />
                        <i className="fa-regular fa-clock"></i>
                      </div>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>{t("address")}</label>
                    <div className="flex">
                      <input type="text" placeholder="Enter Adress" />
                      <i className="fa-regular fa-address-card"></i>
                    </div>
                  </div>

                  <div className="holi">
                    <label htmlFor="">{t("Holidays")}</label>
                    <div className="days">
                      <span>
                        <input type="checkbox" /> {t("Saturday")}
                      </span>
                      <span>
                        <input type="checkbox" /> {t("Sunday")}
                      </span>
                      <span>
                        <input type="checkbox" /> {t("Monday")}
                      </span>
                      <span>
                        <input type="checkbox" /> {t("Tuesday")}
                      </span>
                      <span>
                        <input type="checkbox" /> {t("Wednesday")}
                      </span>
                      <span>
                        <input type="checkbox" /> {t("Thursday")}
                      </span>
                      <span>
                        <input type="checkbox" /> {t("Friday")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="btns">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setNext(true);
                    }}
                  >
                    <span className="btnText">{t("Enroll")}</span>
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
