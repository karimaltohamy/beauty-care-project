import React, { Fragment, useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { GiAnimalSkull } from "react-icons/gi";
import profileImg from "../../assets/images/images.png";
import arImg from "../../assets/images/ar.png";
import enImg from "../../assets/images/Flag-United-States-of-America.webp";
import { useTranslation } from "react-i18next";
import { PiPhoneCall } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";

const Header = () => {
  const { i18n, t } = useTranslation();
  const lang = localStorage.getItem("lang");
  const [mobile, setMobile] = useState(false);

  const changeLanguage = async (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);

    if (lang == "ar") {
      document.body.classList.add("ar");
      document.body.classList.remove("en");
    } else if (lang == "en") {
      document.body.classList.add("en");
      document.body.classList.remove("ar");
    }
    window.location.reload();
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <Fragment>
      <div className="mini_header">
        <div className="container">
          <div className="flex items-center justify-between gap-1 text-center">
            <div className="flex items-center gap-2">
              <PiPhoneCall />
              <span>0108745875</span>
            </div>
            <p className="hidden md:block">{t("mini_header_desc")}</p>
            <ul className="flex items-center gap-2">
              <li>
                <a href="">
                  <FaXTwitter size={22} />
                </a>
              </li>
              <li>
                <a href="">
                  <SlSocialFacebook size={22} />
                </a>
              </li>
              <li>
                <a href="">
                  <IoLogoInstagram size={22} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="">
        <div className="container">
          <div className="md:flex items-center justify-between hidden">
            <Link to={"/"}>
              <GiAnimalSkull size={45} />
            </Link>

            <div className="links">
              <Link to={"/"} className="link">
                {t("home")}
              </Link>
              <Link to={"/beauty"} className="link">
                {t("beauty")}
              </Link>
              <Link to={"/packages"} className="link">
                {t("packages")}
              </Link>
              <Link to={"/atelier"} className="link">
                {t("atelier")}
              </Link>
              <Link to={"/shein"} className="link">
                {t("shein")}
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="rounded-full"
                onClick={() =>
                  changeLanguage(i18n.language == "ar" ? "en" : "ar")
                }
              >
                <img
                  src={i18n.language == "ar" ? enImg : arImg}
                  alt="profileImg"
                  className="w-[30px] h-[30px] object-cover rounded-full"
                />
              </div>
              <Link to={"/profile"}>
                <img
                  src={profileImg}
                  alt="profileImg"
                  className="w-[30px] h-[30px] object-cover rounded-full"
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between md:hidden">
            <div
              className="rounded-full"
              onClick={() =>
                changeLanguage(i18n.language == "ar" ? "en" : "ar")
              }
            >
              <img
                src={i18n.language == "ar" ? enImg : arImg}
                alt="profileImg"
                className="w-[35px] h-[35px] object-cover rounded-full"
              />
            </div>
            <Link to={"/"}>
              <GiAnimalSkull size={55} />
            </Link>
            <button>
              <img
                src={profileImg}
                alt="profileImg"
                className="w-[30px] h-[30px] object-cover rounded-full"
              />
            </button>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
