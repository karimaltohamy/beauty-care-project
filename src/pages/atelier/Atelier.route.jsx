import React, { Fragment, useState } from "react";
import Banner from "../../components/banner/Banner.component";
import { t } from "i18next";
import AtelierCard from "../../components/atelierCard/AtelierCard.component";
import { FaStar } from "react-icons/fa6";

const Atelier = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <Fragment>
      <Banner title={t("products")} />
      <div className="py-12">
        <div className="container">
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="filter w-full md:w-[20%] rounded-md bg-[#fff5ee]">
              <div className="py-4 border-b border-gray-300">
                <h4
                  className={`border-l-2 border-primary text-[22px] font-semibold uppercase px-4`}
                >
                  {t("filter_by")}
                </h4>
              </div>
              <div className="p-4 border-b border-gray-300">
                <h4 className="text-[18px] font-semibold mb-3">
                  {t("hotel_star")}
                </h4>
                <div className="items">
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <div className="stars flex items-center gap-1">
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                    </div>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <div className="stars flex items-center gap-1">
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                    </div>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <div className="stars flex items-center gap-1">
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                    </div>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <div className="stars flex items-center gap-1">
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                    </div>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <div className="stars flex items-center gap-1">
                      <FaStar size={20} className="text-[#FA5636]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-b border-gray-300">
                <h4 className="text-[18px] font-semibold mb-3">
                  {t("review_score")}
                </h4>
                <div className="items">
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <div className="stars flex items-center gap-1">
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                    </div>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <div className="stars flex items-center gap-1">
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                    </div>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <div className="stars flex items-center gap-1">
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                    </div>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <div className="stars flex items-center gap-1">
                      <FaStar size={20} className="text-[#FA5636]" />
                      <FaStar size={20} className="text-[#FA5636]" />
                    </div>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <div className="stars flex items-center gap-1">
                      <FaStar size={20} className="text-[#FA5636]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-b border-gray-300">
                <h4 className="text-[18px] font-semibold mb-3">
                  {t("property_type")}
                </h4>
                <div className="items">
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <span className="text-gray-500 font-semibold">
                      Apartments
                    </span>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <span className="text-gray-500 font-semibold">Hotels</span>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <span className="text-gray-500 font-semibold">
                      Homestays
                    </span>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <span className="text-gray-500 font-semibold">Villas</span>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <span className="text-gray-500 font-semibold">Boats</span>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <span className="text-gray-500 font-semibold">Motels</span>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <span className="text-gray-500 font-semibold">Resorts</span>
                  </div>
                </div>
              </div>
              <div className="p-4 ">
                <h4 className="text-[18px] font-semibold mb-3">
                  {t("facilities")}
                </h4>
                <div className="items">
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <span className="text-gray-500 font-semibold">
                      Wake-up call
                    </span>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <span className="text-gray-500 font-semibold">
                      Car hire
                    </span>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <span className="text-gray-500 font-semibold">
                      Bicycle hire
                    </span>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <span className="text-gray-500 font-semibold">Flat Tv</span>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <span className="text-gray-500 font-semibold">
                      Laundry and dry cleaning
                    </span>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <span className="text-gray-500 font-semibold">
                      Internet – Wifi
                    </span>
                  </div>
                  <div className="item mb-2 flex items-center gap-2">
                    <input type="checkbox" className="w-[18px] h-[18px]" />
                    <span className="text-gray-500 font-semibold">
                      Coffee and tea
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[80%]">
              <div className="flex items-center justify-center md:justify-between flex-col md:flex-row mb-7 p-2 bg-[#FFF5EE] rounded-lg">
                <h3 className="text-[19px] text-gray-500 font-semibold">
                  11 {t("results")}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="font-bold">{t("sort_by")}: </span>
                  <select className="border border-gray-300 p-1 rounded-md outline-none focus:border-primary">
                    <option value="">Recommended</option>
                    <option value="">Price (Low to high)</option>
                    <option value="">Price (High to low)</option>
                    <option value="">Rating (High to low)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {data.length > 0 &&
                  data.map((item) => {
                    return <AtelierCard />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Atelier;
