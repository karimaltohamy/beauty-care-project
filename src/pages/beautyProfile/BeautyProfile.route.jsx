import React from "react";
import "./beatyProfile.scss";
import { t } from "i18next";
import { CiBookmarkCheck } from "react-icons/ci";
import { PiHairDryer } from "react-icons/pi";
import { IoCut, IoLocationOutline } from "react-icons/io5";
import SwiperSliderImages from "../../components/swiperSliderImages/SwiperSliderImages.component";
import Reviews from "../../components/Reviews/Reviews.component";
import Banner from "../../components/banner/Banner.component";
import { FiClock } from "react-icons/fi";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { LiaPlaceOfWorshipSolid } from "react-icons/lia";

const BeautyProfile = () => {
  return (
    <div className="py-5 beauty_profile">
      <Banner title={"Pouch Pocket Hoodie Orange"} />
      <div className="container">
        <div className="max-w-[850px] mx-auto">
          <div className="w-full text flex items-center justify-between">
            <div>
              <h1>Pouch Pocket Hoodie Orange</h1>
              <a href="" className="location">
                <IoLocationOutline size={24} />
                <span>Cairo</span>
              </a>
            </div>
            <div>
              <div className="rate">
                <div className="inside">
                  <h1>{t("Excellent")}</h1>
                  <p>
                    {t("From")} 4 {t("Reviews")}
                  </p>
                </div>
                <div className="outOfFive">
                  <h1>4.5/5</h1>
                </div>
              </div>
              <h5 className="font-semibold">100% {t("of_guets_recommend")}</h5>
            </div>
          </div>
          <div className="services">
            <div className="items">
              <div className="item">
                <FiClock size={35} />
                <div>
                  <h4>Saturday - Thursday</h4>
                  <span>9:00 AM - 5:00 PM</span>
                </div>
              </div>
              <div className="item">
                <GiFullMotorcycleHelmet size={35} />
                <div>
                  <h4>{t("service_type")}</h4>
                  <span>delivery</span>
                </div>
              </div>
              <div className="item">
                <LiaPlaceOfWorshipSolid size={35} />
                <div>
                  <h4>{t("service_type")}</h4>
                  <span>From the store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <SwiperSliderImages />
          </div>

          <div className="overview">
            <h3>Overview</h3>
            <div class="description">
              <p>
                Start and end in San Francisco! With the in-depth cultural tour
                Northern California Summer 2019, you have a 8 day tour package
                taking you through San Francisco, USA and 9 other destinations
                in USA. Northern California Summer 2019 includes accommodation
                as well as an expert guide, meals, transport and more.
              </p>
              <h4>HIGHLIGHTS</h4>
              <ul>
                <li>Visit the Museum of Modern Art in Manhattan</li>
                <li>
                  See amazing works of contemporary art, including Vincent van
                  Gogh's The Starry Night
                </li>
                <li>
                  Check out Campbell's Soup Cans by Warhol and The Dance (I) by
                  Matisse
                </li>
                <li>
                  Behold masterpieces by Gauguin, Dali, Picasso, and Pollock
                </li>
                <li>
                  Enjoy free audio guides available in English, French, German,
                  Italian, Spanish, Portuguese
                </li>
              </ul>
            </div>
          </div>

          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default BeautyProfile;
