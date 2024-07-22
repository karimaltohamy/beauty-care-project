import React from "react";
import "./accountData.scss";
import { t } from "i18next";

function AccountData() {
  return (
    <div className="account">
      <form data-aos-easing="ease-out-cubic" data-aos="flip-down" data-aos-duration="1000">
        <div className="form">
          <div className={`details`}>
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
                <label>{t("address")}</label>
                <div className="flex">
                  <input type="text" placeholder="Enter Adress" />
                  <i className="fa-regular fa-address-card"></i>
                </div>
              </div>
              <div className="input-field">
                <label>{t("State")}</label>
                <div className="flex">
                  <input type="text" placeholder="Enter State" />
                  <i className="fa-regular fa-address-card"></i>
                </div>
              </div>
              <div className="input-field">
                <label>{t("City")}</label>
                <div className="flex">
                  <input type="text" placeholder="Enter City" />
                  <i className="fa-regular fa-address-card"></i>
                </div>
              </div>
              <div className="input-field">
                <label>{t("Zip")}</label>
                <div className="flex">
                  <input type="number" placeholder="Enter Zip" />
                  <i className="fa-regular fa-address-card"></i>
                </div>
              </div>
              <div className="input-field">
                <label>{t("Country")}</label>
                <div className="flex">
                  <input type="number" placeholder="Enter Country" />
                  <i className="fa-regular fa-address-card"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="btns">
            <button>
              <span className="btnText">{t("Update")}</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AccountData;
