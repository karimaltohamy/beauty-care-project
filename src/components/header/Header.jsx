import React, { Fragment, useEffect, useState } from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import { GiAnimalSkull } from "react-icons/gi";
import profileImg from "../../assets/images/images.png";
import arImg from "../../assets/images/ar.png";
import enImg from "../../assets/images/Flag-United-States-of-America.webp";
import { useTranslation } from "react-i18next";
import { PiPhoneCall } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLocationSharp, IoLogoInstagram } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Menu from "../menu/Menu";

const Header = () => {
  const { i18n, t } = useTranslation();
  const lang = localStorage.getItem("lang");
  const [trigger, setTrigger] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { theme } = localStorage;

  const changeMode = () => {
    if (theme !== "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.theme = theme !== "dark" ? "dark" : "t";
    setTrigger(!trigger);
  };

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
            <div className="paths">
              <Link to={"/"}>
                <GiAnimalSkull size={45} />
              </Link>
            </div>
            <div className="links">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                {t("home")}
              </NavLink>
              <NavLink
                to={"/beauty"}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                {t("beauty")}
              </NavLink>
              <NavLink
                to={"/packages"}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                {t("packages")}
              </NavLink>
              <NavLink
                to={"/atelier"}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                {t("atelier")}
              </NavLink>
              <NavLink
                to={"/shein"}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                {t("shein")}
              </NavLink>
              <NavLink
                to={"/clinics"}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                {t("clinics")}
              </NavLink>
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
              <Link to={"/profile/accounts"}>
                <img
                  src={profileImg}
                  alt="profileImg"
                  className="w-[30px] h-[30px] object-cover rounded-full"
                />
              </Link>
              <div
                className="icon"
                onClick={changeMode}
                style={{ cursor: "pointer" }}
              >
                <i
                  class={`fa-regular fa-${theme == "dark" ? "sun" : "moon"}`}
                ></i>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between md:hidden">
            <button className="rounded-full" onClick={() => setOpenMenu(true)}>
              <HiOutlineMenuAlt2 size={30} />
            </button>
            <div className="flex items-center gap-1 location">
              <IoLocationSharp size={22} />
              <span>100ft Road, Kanner</span>
            </div>
            <div className="flex items-center gap-3">
              <Link to={"/profile/accounts"}>
                <img
                  src={profileImg}
                  alt="profileImg"
                  className="w-[45px] h-[45px] object-cover rounded-full"
                />
              </Link>
              <div
                className="icon"
                onClick={changeMode}
                style={{ cursor: "pointer" }}
              >
                <i
                  class={`fa-regular fa-${theme == "dark" ? "sun" : "moon"}`}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Menu open={openMenu} setOpen={setOpenMenu} />
    </Fragment>
  );
};

export default Header;
