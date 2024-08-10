import React, { useState } from "react";
import "./accountData.scss";
import { t } from "i18next";
import SelectSectionForm from "../../../components/sectionform/SelectSectionForm";
import { useTranslation } from "react-i18next";

function AccountData() {
  const { i18n } = useTranslation();
  const {theme} = localStorage 
  const [changeMode, setChangeMode] = useState(theme == "dark" ? true : false);
  const [lang, setLang] = useState(localStorage.lang || "en");
  // const onChange = (e) => {
  //   const { checked } = e.target;
  //   if(checked){
  //     document.body.classList.add("dark")
  //   }else{
  //     document.body.classList.remove("dark")
  //   }
  //   localStorage.theme = checked ? "dark" : "t"
  //   setChangeMode(!changeMode);
  // };

  const chageLang = (e) => {
    const { value } = e.target;
    setLang(value);
    i18n.changeLanguage(value);
    localStorage.setItem("lang", value);
    if (value == "ar") {
      document.body.classList.add("ar");
      document.body.classList.remove("en");
    } else if (value == "en") {
      document.body.classList.add("en");
      document.body.classList.remove("ar");
    }
  };

  return (
    <div className="account center">
      <form>
        <div className="form">
          <div className={`details`}>
            <span className="title">{t("NewTicket")}</span>
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
                  <input type="text" placeholder="Enter Country" />
                  <i className="fa-regular fa-address-card"></i>
                </div>
              </div>
            </div>
            <div className="settings">
              {/* <div className={`input_switch`}>
                <h2>{t("Theme")}</h2>
                <div className="inside">
                  <i
                    className={`fa-regular fa-${changeMode ? "moon" : "sun"}`}
                  ></i>
                  <div className="flex">
                    <input
                      type={"checkbox"}
                      checked={changeMode}
                      onChange={(e) => onChange(e)}
                      id={"mode"}
                    />
                    <label htmlFor={"mode"}>Toggle</label>
                  </div>
                </div>
              </div> */}
              <div className="lang">
                <label htmlFor="">{t("Languages")}</label>
                <div className="inside">
                  <i className="fa-solid fa-earth-africa"></i>
                  <SelectSectionForm
                    value={lang}
                    needLabelOption={false}
                    options={[
                      { name: "Arabic", id: "ar" },
                      { name: "Engilsh", id: "en" },
                    ]}
                    onChange={chageLang}
                  />
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
