import React, { Fragment, useState } from "react";
import Banner from "../../components/banner/Banner.component";
import { t } from "i18next";
import BeautyCard from "../../components/beautyCard/BeautyCard.component";
import "./beauty.scss"

const Beauty = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <Fragment>
      <Banner title={t("beauty")} />
      <div className="py-12 beauty">
        <div className="container">
          <div className="w-full filter">
            <div className="flex items-center justify-center md:justify-between  md:flex-row mb-7 p-2 bg-gray-100 rounded-lg">
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
                  return <BeautyCard />;
                })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Beauty;
