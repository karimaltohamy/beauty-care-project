import React from "react";
import "./beatyProfile.scss";
import SwiperSliderImages from "../../components/swiperSliderImages/SwiperSliderImages.component";
import { t } from "i18next";
import { CiBookmarkCheck } from "react-icons/ci";
import { PiHairDryer } from "react-icons/pi";
import { IoCut } from "react-icons/io5";

const BeautyProfile = () => {
  return (
    <div className="py-5 beauty_profile">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="w-full md:w-[50%]">{/* <SwiperSliderImages />*/}</div>
          <div className="w-full md:w-[50%] text">
            <h1>Pouch Pocket Hoodie Orange</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="flex items-center justify-between">
              <span class="rate !text-yellow-500">
                4.5/5{" "}
                <span class="rate-text !text-yellow-500">{t("excellent")}</span>
              </span>
              <span class="review">2 {t("reviews")}</span>
            </div>

            <div className="flex items-center gap-2 my-2">
              <div className="flex items-center">
                <CiBookmarkCheck size={22} />
                <h4 className="font-semibold text-[18px]">
                  {t("reservations")}:{" "}
                </h4>
              </div>
              <span>100</span>
            </div>

            <span className="price">$ 19.35</span>

            <div className="mt-3">
              <h4 className="font-semibold text-[24px] mb-2">
                {t("our_services")}:
              </h4>
              <ul className="flex items-center gap-3 flex-wrap">
                <li className="flex items-center text-gray-600 gap-1">
                  <IoCut size={22} />

                  <span className="text-[18px]">{t("hair")}</span>
                </li>
                <li className="flex items-center text-gray-600 gap-1">
                  <PiHairDryer size={22} />
                  <span className="text-[18px]">{t("make up")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="description p-3 border border-gray-300 rounded-lg mt-10">
          <h4 className="font-semibold text-[27px] mb-5">
            {t("description")}:
          </h4>
          <p className="mb-2 text-gray-500">
            Everyone should have something like this in their closet. Wearing
            these clothes will make you appreciate everyone who looks at you.
            Many people like its modern and clean style. It's a one-of-a-kind
            piece created in our newly remodeled facility. It is great for
            anyone who is fashion-obsessed. Always handle it with care for a
            longer life span and greater quality. It is intended to last longer
            while providing optimal comfort.
          </p>
          <h4 className="font-semibold text-[27px] mb-5">
            Why the Lacozt brand?
          </h4>
          <p className="mb-2 text-gray-500">
            Lacozt sells T-shirts, Vests/Sleeveless, Polos, Shrugs, Jackets,
            Shorts, Sweatshirts, Hoodies, and a range of other things. Lacozt is
            a well-known American online clothing retailer that offers an
            exclusive selection of current and popular men's clothes. Lacozt
            offers the most current and fashionable designs, all expertly
            crafted from 100% cotton fabric. Lacozt uses high-quality cotton and
            bio-washed fabric for vibrant color and additional softness,
            providing our clients with the utmost comfort and style. Our goal is
            to create trendy and appealing items using the highest quality
            materials available on the market. Ideal casual wear for every
            single occasion like outings, daily wear, office wear, casual wear,
            picnic, birthday parties, hang out, etc. It can be an ideal gift for
            your friends and family people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeautyProfile;
