import React, { useState } from "react";
import "./searchSection.scss";
import { IoLocationOutline } from "react-icons/io5";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { MdOutlineHotel } from "react-icons/md";
import { FaPerson, FaStar } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { RiPsychotherapyLine } from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";
import { t } from "i18next";

const SearchSection = () => {
  return (
    <div className="container">
      <div className="mt-4  rounded-lg search_section bg-white">
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
        <div className="flex items-center gap-4 flex-col md:flex-row">
          <div className="input_item">
            <WiDaySunnyOvercast size={30} />
            <input type="number" placeholder={t("write_name_the_place")} />
          </div>
          <div className="input_item">
            <IoLocationOutline size={30} />
            <input type="text" placeholder={t("write_the_location")} />
          </div>

          <div className="input_item">
            <FaStar size={27} />
            <select name="" id="" className="w-full outline-none">
              <option value="">rate 1</option>
              <option value="">rate 2</option>
              <option value="">rate 3</option>
              <option value="">rate 4</option>
              <option value="">rate 5</option>
            </select>
          </div>
          <button className="btn_submit">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
