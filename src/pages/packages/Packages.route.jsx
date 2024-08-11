import React, { Fragment, useState } from "react";
import Banner from "../../components/banner/Banner.component";
import { t } from "i18next";
import PackageItem from "../../components/PackageItem/PackageItem";
import MainSection from "../../components/mainSection/MainSection";
import { SwiperSlide } from "swiper/react";
import "./packages.scss";

const Packages = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <Fragment>
      <Banner title={t("packages")} />
      <div className="py-12 packages">
        <div className="container">
          <div className="w-full filter">
            <div className="flex items-center justify-center md:justify-between  md:flex-row mb-7 p-2 bg-[#FFF5EE] border border-gray-200 rounded-lg">
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
            <div className="package_standard">
              <MainSection
                title={"package_standard"}
                breakpoints={{
                  250: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                  return (
                    <SwiperSlide>
                      <PackageItem />
                    </SwiperSlide>
                  );
                })}
              </MainSection>
            </div>
            <div className="package_premuim">
              <MainSection
                title={"package_premuim"}
                breakpoints={{
                  250: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                  return (
                    <SwiperSlide>
                      <PackageItem />
                    </SwiperSlide>
                  );
                })}
              </MainSection>
            </div>
            <div className="package_gold">
              <MainSection
                title={"package_gold"}
                breakpoints={{
                  250: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                  return (
                    <SwiperSlide>
                      <PackageItem />
                    </SwiperSlide>
                  );
                })}
              </MainSection>
            </div>
            <div className="package_vip">
              <MainSection
                title={"package_vip"}
                breakpoints={{
                  250: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                  return (
                    <SwiperSlide>
                      <PackageItem />
                    </SwiperSlide>
                  );
                })}
              </MainSection>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Packages;
