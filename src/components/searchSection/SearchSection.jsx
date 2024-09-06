import React, { useEffect, useRef, useState } from "react";
import "./searchSection.scss";
import { IoLocationOutline } from "react-icons/io5";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { MdOutlineHotel } from "react-icons/md";
import { FaPerson, FaStar } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { RiPsychotherapyLine } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { CiMoneyBill } from "react-icons/ci";
import { t } from "i18next";

const SearchSection = ({
  needCategories = true,
  fullWidth = false,
  needContainer = true,
  changeLocation = false,
}) => {
  const [starNum, setStarNum] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);       
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={` ${needContainer && "container"}`}>
      <div
        className={`mt-4 rounded-lg search_section ${
          fullWidth && "fullWidth"
        } bg-white`}
      >
        {needCategories && (
          <div className="categories flex items-center justify-center flex-wrap gap-1">
            <div className="item active">
              <MdOutlineHotel size={18} />
              <span>{t("beauty")}</span>
            </div>
            <div className="item">
              <FaPerson size={18} />
              <span>{t("packages")}</span>
            </div>
            <div className="item">
              <CgGym size={18} />
              <span>{t("atelier")}</span>
            </div>
            <div className="item">
              <RiPsychotherapyLine size={18} />
              <span>{t("shein")}</span>
            </div>
          </div>
        )}
        <div className="flex items-center gap-3 flex-col md:flex-row">
          <div className="input_item">
            <WiDaySunnyOvercast size={30} />
            <input type="number" placeholder={t("write_name_the_place")} />
          </div>

          {changeLocation ? (
            <div className="input_item">
              <CiMoneyBill />
              <select name="" id="" className="w-full">
                <option value="">{t("price")}</option>
                <option value="">{t("from 500 to 1000")}</option>
                <option value="">{t("from 1000 to 5000")}</option>
                <option value="">{t("from 5000 to 10000")}</option>
              </select>
            </div>
          ) : (
            <div className="input_item">
              <IoLocationOutline size={30} />
              <select name="" id="" className="w-full">
                <option value="">{t("write_the_location")}</option>
                <option value="">{t("Cairo")}</option>
                <option value="">{t("Giza")}</option>
              </select>
            </div>
          )}
          {/* 
          <div className="input_item">
            <FaStar size={27} />
            <select name="" id="" className="w-full outline-none">
              <option value="">rate 1</option>
              <option value="">rate 2</option>
              <option value="">rate 3</option>
              <option value="">rate 4</option>
              <option value="">rate 5</option>
            </select>
          </div> */}
          <div
            class="custom-select"
            ref={dropdownRef}
            onClick={(e) => {
              toggleDropdown();
              e.stopPropagation();
            }}
          >
            <div class="select-box">
              <span>
                {starNum ? (
                  <div className="stars">
                    {[...Array(starNum)].map((ele) => {
                      return <i className="fa-solid fa-star"></i>;
                    })}
                  </div>
                ) : (
                  <p>
                    <i className="fa-solid fa-star"></i>
                    {t("Rate")}
                  </p>
                )}
                <i className="fa-solid fa-chevron-down"></i>
              </span>
              {isOpen && (
                <ul>
                  <li onClick={(e) => setStarNum(1)}>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li onClick={(e) => setStarNum(2)}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li onClick={(e) => setStarNum(3)}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li onClick={(e) => setStarNum(4)}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </li>
                  <li onClick={(e) => setStarNum(5)}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <button className="btn_submit">Search</button>
        </div>
      </div>

      <div className="search_mobile">
        <RiSearch2Line size={25} />
        <input type="text" placeholder="Search for places, shops" />
      </div>
    </div>
  );
};

export default SearchSection;
