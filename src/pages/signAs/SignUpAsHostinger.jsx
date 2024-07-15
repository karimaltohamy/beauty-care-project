import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { t } from "i18next";
import img from "../../assets/images/bouquet-4736413_1920.jpg";
import "./signAs.scss";
import Banner from "../../components/banner/Banner.component";

const SignUpAsHostinger = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const boxRef = useRef();
  useEffect(() => {
    boxRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Fragment>
      <Banner title={t("Start_With_Us")} />
      <div className="sign" data-aos="zoom-in" data-aos-delay="200">
        <div className="all">
          <div
            className="img"
            data-aos="flip-up"
            data-aos-delay="600"
            data-aos-easing="ease-out-cubic"
          >
            <img src={img} alt="" />
          </div>
          <form action="#">
            <div className="form" data-aos="fade-left" data-aos-delay="700">
              <div className="details personal">
                <span className="title">{t("Personal_Details")}</span>
                <div className="fields">
                  <div className="input-field">
                    <label>{t("full Name")}</label>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="input-field">
                    <label>{t("address")}</label>
                    <input type="text" placeholder="Enter Adress" required />
                  </div>

                  <div className="input-field">
                    <label>{t("email")}</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>{t("Password")}</label>
                    <input
                      type="text"
                      placeholder="Enter your paassword"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>{t("phone")}</label>
                    <input
                      type="number"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>{t("gender")}</label>
                    <select required>
                      <option disabled selected>
                        Select gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label>{t("Age")}</label>
                    <input
                      type="number"
                      placeholder="Enter your age"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="details prand">
                <span className="title">{t("Prand_Details")}</span>
                <div className="fields">
                  <div className="input-field">
                    <label>{t("Prand_Name")}</label>
                    <input
                      type="text"
                      placeholder="Enter prand name"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label>{t("address")}</label>
                    <input type="text" placeholder="Enter adress" required />
                  </div>
                  <div className="input-field">
                    <label>{t("Location")}</label>
                    <input type="text" placeholder="Enter locaton" required />
                  </div>
                  <div className="input-field">
                    <label>{t("Place_Photos")}</label>
                    <input type="file" required />
                  </div>

                  <div className="input-field">
                    <label>{t("Service Type")}</label>
                    <select required>
                      <option disabled selected>
                        {t("Service Type")}
                      </option>
                      <option>{t("Go to customers")}</option>
                      <option>{t("Recive customers")}</option>
                    </select>
                  </div>
                  <div className="input-field mega">
                    <div className="con">
                      <div className="inMega">
                        <label htmlFor=""> {t("Working From (hours)")}</label>
                        <input type="number" placeholder="hours" />
                      </div>
                      <div className="inMega">
                        <label htmlFor=""> {t("Working to (hours)")}</label>
                        <input type="number" placeholder="hours" />
                      </div>
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
              </div>

              <button type="submit">
                <span className="btnText">{t("Enroll")}</span>
              </button>
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
