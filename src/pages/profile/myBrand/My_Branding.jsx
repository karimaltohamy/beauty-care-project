import React from "react";
import { t } from "i18next";
import "./myBrand.scss";

function My_Branding() {
  return (
    <div className="mybrand center">
      <form>
        <div className="form">
          <div className={`details prand`}>
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
                <span className="btnText">{t("Update")}</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default My_Branding;
