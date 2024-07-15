import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { t } from "i18next";
import logo from "../../assets/images/bird-2374419_1920.jpg";
import "./signAs.scss";
import Banner from "../../components/banner/Banner.component";

const SignUpAsHostinger = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <Fragment>
      <Banner title={t("Start_With_Us")}/>
      <div class="sign">
        <div className="all">
          <form action="#">
            <div class="form">
              <div class="details personal">
                <span class="title">{t("Personal_Details")}</span>
                <div class="fields">
                  <div class="input-field">
                    <label>{t("full Name")}</label>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div class="input-field">
                    <label>{t("address")}</label>
                    <input type="text" placeholder="Enter Adress" required />
                  </div>

                  <div class="input-field">
                    <label>{t("email")}</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div class="input-field">
                    <label>{t("Password")}</label>
                    <input
                      type="text"
                      placeholder="Enter your paassword"
                      required
                    />
                  </div>

                  <div class="input-field">
                    <label>{t("phone")}</label>
                    <input
                      type="number"
                      placeholder="Enter mobile number"
                      required
                    />
                  </div>

                  <div class="input-field">
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
                  <div class="input-field">
                    <label>{t("Age")}</label>
                    <input
                      type="number"
                      placeholder="Enter your age"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="details prand">
                <span class="title">{t("Prand_Details")}</span>
                <div class="fields">
                  <div class="input-field">
                    <label>{t("Prand_Name")}</label>
                    <input
                      type="text"
                      placeholder="Enter prand name"
                      required
                    />
                  </div>
                  <div class="input-field">
                    <label>{t("address")}</label>
                    <input type="text" placeholder="Enter adress" required />
                  </div>
                  <div class="input-field">
                    <label>{t("Location")}</label>
                    <input type="text" placeholder="Enter locaton" required />
                  </div>
                  <div class="input-field">
                    <label>{t("Place_Photos")}</label>
                    <input type="file"  required />
                  </div>
                  <div class="input-field">
                    <label>{t("Service Type")}</label>
                    <select required>
                      <option disabled selected>
                        {t("Service Type")}
                      </option>
                      <option>{t("Go to customers")}</option>
                      <option>{t("Recive customers")}</option>
                    </select>
                  </div>
                  <div class="input-field mega">
                    <label>{t("Working Dates")}</label>
                    <div className="con">
                      <div className="inMega">
                        <label htmlFor=""> {t("from (hours)")}</label>
                        <input type="number" placeholder="hours" />
                      </div>
                      <div className="inMega">
                        <label htmlFor=""> {t("to (hours)")}</label>
                        <input type="number" placeholder="hours" />
                      </div>
                      <div className="inMega holi">
                        <label htmlFor="">{t("Holidays")}</label>
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
              </div>
              <button type="submit">
                <span class="btnText">{t("Enroll")}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {loading && <Loader plainBackground />}
    </Fragment>
  );
};

export default SignUpAsHostinger;
