import React, { useState } from "react";
import Banner from "../../components/banner/Banner.component";
import { t } from "i18next";
import imgai from "../../assets/images/ai-generated-8556454_1920.jpg";
import { FaCartPlus } from "react-icons/fa";
import "./shein.scss";

const Shein = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="Shein">
      <Banner title={t("Shein")} />
      <div className="py-12">
        <div className="container">
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="filter w-full">
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.length > 0 &&
                  data.map((item) => {
                    return (
                      <div className="box">
                        <div className="img">
                          <img src={imgai} alt="" />
                          <div className="price">
                            <p>$300</p>
                            <h2>$150</h2>
                          </div>
                          <div className="dis">
                            <span>50%</span>
                          </div>
                        </div>
                        <div className="con">
                          <h1>Deep Cleansing Oil</h1>
                          <div className="inside">
                            <div className="rate">
                              <span>4.6/5 {t("Excellent")}</span>
                              <span>*</span>
                              <span>2 {t("Reviews")}</span>
                            </div>
                            <div className="add">
                              <button>
                                <FaCartPlus size={20} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shein;
