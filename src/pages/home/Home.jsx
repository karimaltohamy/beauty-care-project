import React, { Fragment } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import SearchSection from "../../components/searchSection/SearchSection";
import TrendingSection from "../../components/trendingSection/TrendingSection";
import MainSection from "../../components/mainSection/MainSection";
import { SwiperSlide } from "swiper/react";
import boxImg from "../../assets/images/ai-generated-8556454_1920.jpg";
import { LuBookUp } from "react-icons/lu";
import "./home.scss";
import AtelierCard from "../../components/atelierCard/AtelierCard.component";
import imgai from "../../assets/images/ai-generated-8556454_1920.jpg";
import { t } from "i18next";
import { FaCartPlus } from "react-icons/fa6";
import CliniceCard from "../../components/cliniceCard/CliniceCard.component";
import PackageItem from "../../components/PackageItem/PackageItem";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <SearchSection />
      <TrendingSection />
      <div className="beauty_section">
        <MainSection
          title={"beauty_section"}
          link={"/beauty"}
          breakpoints={{
            250: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return (
              <SwiperSlide>
                <div className="box">
                  <div className="image">
                    <img src={boxImg} alt="box_img" loading="lazy" />
                  </div>
                  <div className="text">
                    <h4 className="title">Deep Cleansing Oil</h4>
                    <p className="desc">
                      Lorem ipsum dolor sit, amet adipite magni consequuntur
                      eaque impedit facilis, atque maiores placeat!
                    </p>
                    <div className="flex items-center justify-between">
                      <h5 className="price">$10.00</h5>
                      <button className="btn_booking">
                        <LuBookUp size={25} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </MainSection>
      </div>
      <div className="atelier_section">
        <MainSection
          title={"atelier_section"}
          link={"/atelier"}
          breakpoints={{
            250: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return (
              <SwiperSlide>
                <AtelierCard />
              </SwiperSlide>
            );
          })}
        </MainSection>
      </div>
      <div className="shein_section">
        <MainSection
          title={"shein_section"}
          link={"/shein"}
          breakpoints={{
            250: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return (
              <SwiperSlide>
                <div className="box flex md:block">
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
                    <p class="desc md:hidden">
                      Lorem ipsum dolor sit, amet adipite magni consequuntur
                      eaque impedit facilis, atque maiores placeat!
                    </p>
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
              </SwiperSlide>
            );
          })}
        </MainSection>
      </div>

      <div className="clinics_section">
        <MainSection
          title={"shein_section"}
          link={"/clinics"}
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
                <CliniceCard />
              </SwiperSlide>
            );
          })}
        </MainSection>
      </div>
      <div className="packages_section">
        <MainSection
          title={"packages_section"}
          link={"/packages"}
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
  );
};

export default Home;
