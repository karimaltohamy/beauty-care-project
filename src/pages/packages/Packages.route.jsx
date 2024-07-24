import React, { Fragment, useState } from "react";
import Banner from "../../components/banner/Banner.component";
import { t } from "i18next";
import PackageItem from "../../components/PackageItem/PackageItem";

const Packages = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <Fragment>
      <Banner title={t("packages")} />
      <div className="py-12">
        <div className="container">
          <div className="w-full">
            <div className="flex items-center justify-center md:justify-between flex-col md:flex-row mb-7 p-2 bg-gray-100 border border-gray-200 rounded-lg">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {data.length > 0 &&
                data.map((item) => {
                  return <PackageItem />;
                })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Packages;
