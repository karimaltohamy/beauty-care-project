import React from "react";
import profileImg from "../../assets/images/images.png";
import { MdOutlineLocalPhone, MdAccountBalance } from "react-icons/md";
import { GiModernCity } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { FaRegAddressCard } from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";
import { BsBank } from "react-icons/bs";

const General = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="bg-gray-100 p-4 rounded-lg mb-5">
        <div>
          <img
            src={profileImg}
            alt="profileImg"
            className="w-[100px] h-[100px] md:w-[170px] md:h-[170px] border-2 border-primary rounded-full mx-auto"
          />
        </div>
        <h3 className="font-bold text-[24px] md:text-[27px] text-center">
          Karim Altohamy
        </h3>
        <span className="text-center text-[17px] md:text-[20px] text-gray-500 block font-semibold">
          New York, United States
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        <div className="change_password bg-gray-100 rounded-lg p-5 h-fit">
          <h3 className="text-[22px] font-bold mb-3">{t("change_password")}</h3>

          <form action="">
            <div className="input_item">
              <label htmlFor="">{t("current_password")}</label>
              <input type="text" placeholder="current password" />
            </div>
            <div className="input_item">
              <label htmlFor="">{t("new_password")}</label>
              <input type="text" placeholder="new password" />
            </div>
            <div className="input_item">
              <label htmlFor="">{t("confirm_new_password")}</label>
              <input type="text" placeholder="confirm new password" />
            </div>
            <button className="btn_submit">{t("Submit")}</button>
          </form>
        </div>
        <div className="items  bg-gray-100 rounded-lg p-5 h-fit">
          <div className="item flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MdOutlineEmail size={22} />
              {t("email")}
            </div>
            <span>karim@eample.com</span>
          </div>
          <div className="item flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MdOutlineLocalPhone size={22} />
              {t("phone")}
            </div>
            <span>0100746948</span>
          </div>
          <div className="item flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MdAccountBalance size={22} />
              {t("Country")}
            </div>
            <span>Egypt</span>
          </div>
          <div className="item flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GiModernCity size={22} />
              {t("City")}
            </div>
            <span>Cairo</span>
          </div>
          <div className="item flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaRegAddressCard size={22} />
              {t("address")}
            </div>
            <span>New York, United States</span>
          </div>
          <div className="item flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BsGenderAmbiguous size={22} />
              {t("gender")}
            </div>
            <span>Male</span>
          </div>
          <div className="item flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BsBank size={22} />
              {t("the_bank")}
            </div>
            <span>Alex</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
