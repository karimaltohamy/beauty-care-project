import React, { useState } from "react";
import SwiperSliderImages from "../../components/swiperSliderImages/SwiperSliderImages.component";
import "./sheinItemProfile.scss";
import { t } from "i18next";
import { FaHeart, FaStar } from "react-icons/fa6";
import iconDelivary1 from "../../assets/images/delivery_by_noon.png";
import iconDelivary2 from "../../assets/images/cash_on_delivery.png";
import iconDelivary3 from "../../assets/images/high_rated_seller.png";
import iconDelivary4 from "../../assets/images/low_return_product.png";
import bannerImg from "../../assets/images/img-banner.png";
import { GoDotFill } from "react-icons/go";
import Reviews from "../../components/reviews/Reviews";

const SheinItemProfile = () => {
  const [popupComm, setPopComm] = useState(false);
  return (
    <div className="shein_item_profile">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2   gap-7">
          <div className="images_product">
            <SwiperSliderImages />
            <div className="flex items-center gap-3 mt-5">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <button className="btn_order">{t("add_order")}</button>
              <div className="favorite">
                <FaHeart size={22} />
              </div>
            </div>
          </div>
          <div className="info_product">
            <h3 className="title">Fit Me Concealer Light 10</h3>
            <div className="rate flex items-center gap-3 mb-3">
              <span className="text-gray-500">Model Number : 30096585</span>
              <div className="outOfFive flex items-center gap-1">
                <h5 className="font-semibold">4.5/5</h5>
                <FaStar className="text-yellow-500" />
              </div>
            </div>
            <div className="price text-gray-500">
              Now: <h1>EGP 329.00</h1> Inclusive of VAT
            </div>
            <div className="discount_payment text-gray-500">
              Pay 6 monthly payments of EGP 70.00.
            </div>
            <div className="banner mt-5 overflow-hidden rounded-md">
              <img src={bannerImg} alt="bannerImg" loading="lazy" />
            </div>
            <div className="items">
              <div className="item">
                <div className="icon">
                  <img src={iconDelivary1} alt="iconDelivary" loading="lazy" />
                </div>
                <span>Delivery by noon</span>
              </div>
              <div className="item">
                <div className="icon">
                  <img src={iconDelivary2} alt="iconDelivary" loading="lazy" />
                </div>
                <span>Cash on Delivery</span>
              </div>
              <div className="item">
                <div className="icon">
                  <img src={iconDelivary3} alt="iconDelivary" loading="lazy" />
                </div>
                <span>High Rated Seller</span>
              </div>
              <div className="item">
                <div className="icon">
                  <img src={iconDelivary4} alt="iconDelivary" loading="lazy" />
                </div>
                <span>Low Returns</span>
              </div>
            </div>
          </div>
          <div className="delivery_product ">delivery_product</div>
        </div>
        <div className="overview">
          <h1 className="title">{t("overview")}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4>{t("highlights")}</h4>
              <ul>
                <li>
                  <GoDotFill size={15} />
                  <span>flawless, natural coverage.</span>
                </li>
                <li>
                  <GoDotFill size={15} />
                  <span>oil-free</span>
                </li>
                <li>
                  <GoDotFill size={15} />
                  <span>Dermatologist tested. Ophthalmologist tested</span>
                </li>
                <li>
                  <GoDotFill size={15} />
                  <span>Fragrance-free</span>
                </li>
                <li>
                  <GoDotFill size={15} />
                  <span>7 Shades Available</span>
                </li>
              </ul>
              <h4>{t("overview")}</h4>
              <p className="desc">
                Maybelline Fit Me Concealer makeup for flawless, natural
                coverage. These oil-free concealers match skin tones to deliver
                a more even complexion. Skin looks perfected with this natural
                coverage liquid concealer. These oil-free concealers conceal
                redness, flaws, and blemishes. Shades of concealers for various
                skin tones. Dermatologist tested. Ophthalmologist tested.
                Non-comedogenic concealer. Fragrance-free. Packaging may vary,
                what you receive may not be what is reflected on site. How to
                use: Step 1. Dot concealer onto imperfections or under the eyes.
                Step 2. Pat with a finger to blend.
              </p>
            </div>
            <div>
              <h4>{t("specifications")}</h4>
              <table>
                <tbody>
                  <tr>
                    <td>Colour Name</td>
                    <td>Light 10</td>
                  </tr>
                  <tr>
                    <td>Department</td>
                    <td>Women</td>
                  </tr>
                  <tr>
                    <td>What's In The Box</td>
                    <td>Fit Me Concealer 10 Light</td>
                  </tr>
                  <tr>
                    <td>Finish</td>
                    <td>Natural</td>
                  </tr>
                  <tr>
                    <td>Target Skin Type</td>
                    <td>All Skin Types</td>
                  </tr>
                  <tr>
                    <td>Formation</td>
                    <td>Liquid</td>
                  </tr>
                  <tr>
                    <td>Skin Tone</td>
                    <td>Fair</td>
                  </tr>
                  <tr>
                    <td>Skin Coverage</td>
                    <td>Heavy</td>
                  </tr>
                  <tr>
                    <td>Model Number</td>
                    <td>30096585</td>
                  </tr>
                  <tr>
                    <td>Model Name</td>
                    <td>30096585</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Reviews setPopComm={setPopComm} popupComm={popupComm} />
      </div>
    </div>
  );
};

export default SheinItemProfile;
