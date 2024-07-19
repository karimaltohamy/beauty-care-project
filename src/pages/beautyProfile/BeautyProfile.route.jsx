import React, { useEffect, useState } from "react";
import "./beatyProfile.scss";
import { t } from "i18next";
import { IoLocationOutline } from "react-icons/io5";
import SwiperSliderImages from "../../components/swiperSliderImages/SwiperSliderImages.component";
import Banner from "../../components/banner/Banner.component";
import { FiClock } from "react-icons/fi";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { LiaPlaceOfWorshipSolid } from "react-icons/lia";
import OusrServices from "../../components/ourServices/OusrServices";
import OurWork from "../../components/ourWork/OurWork";
import Reviews from "../../components/reviews/Reviews";
import Popup from "../../components/popup/Popup";

const BeautyProfile = () => {
  const [choosenSer, setChoosenSer] = useState([]);
  const [total, setTotal] = useState(0);
  const [popupSer, setPopSer] = useState(false);
  const [popupComm, setPopComm] = useState(false);
  const [popupRepo, setpopRepo] = useState(false);

  // const
  const arrServices = [
    {
      service: t("Hair dressing"),
      price: "$40",
      desc: t("Hair cutting, hair dyeing, different hairstyles."),
    },
    {
      service: t("skin care"),
      price: "$40",
      desc: t("Skin cleansing, exfoliation, facial masks, acne treatments."),
    },
    {
      service: t("Nails care"),
      price: "$40",
      desc: t("Manicure, pedicure, artificial nail installation."),
    },
    {
      service: t("body care"),
      price: "$40",
      desc: t("Waxing, body cleaning"),
    },
    {
      service: t("makeup"),
      price: "$40",
      desc: t("Applying makeup for different occasions, teaching makeup."),
    },
    {
      service: t("Eyebrow and eyelash treatments"),
      price: "$40",
      desc: t("Coloring and shaping eyebrows, installing false eyelashes."),
    },
    {
      service: t("Foot care"),
      price: "$40",
      desc: t("Foot care sessions, foot peeling, treatment of cracked feet."),
    },
    {
      service: t("Advanced skin treatments"),
      price: "$40",
      desc: t("Laser sessions, microdermabrasion, chemical facial."),
    },
    {
      service: t("Advanced hair care"),
      price: "$40",
      desc: t(
        "Keratin and protein sessions, treatment of damaged hair, hair lengthening."
      ),
    },
    {
      service: t("Tanning treatments"),
      price: "$40",
      desc: t("Self tanning sessions, spray tanning."),
    },
    {
      service: t("Cosmetic consultations"),
      price: "$40",
      desc: t(
        "Tips and advice on skin and hair care and choosing the right products."
      ),
    },
    {
      service: t("Advanced body care"),
      price: "$40",
      desc: t("Slimming wrap sessions, cellulite reduction techniques."),
    },
    {
      service: t("Hair removal services"),
      price: "$40",
      desc: t("Laser hair removal, thread hair removal."),
    },
    {
      service: t("Advanced skin care"),
      price: "$40",
      desc: t("Mesotherapy sessions, filler and Botox treatments"),
    },
    {
      service: t("Temporary beauty sessions"),
      price: "$40",
      desc: t("Temporary henna installation, temporary tattoo drawing."),
    },
    {
      service: t("Scalp treatments"),
      price: "$40",
      desc: t("Treating dandruff, improving hair growth."),
    },
  ];

  const customSelect = (obj) => {
    const { service } = obj;
    const isExist = choosenSer.find((choose) => choose.service == service);
    if (!isExist) {
      setChoosenSer([...choosenSer, obj]);
      setTotal(total + parseInt(obj.price.split("$")[1]));
    }
  };
  const deleteChoose = (obj) => {
    const { service } = obj;
    const newArr = choosenSer.filter((choose) => choose.service !== service);
    setTotal(total - parseInt(obj.price.split("$")[1]));
    setChoosenSer(newArr);
  };

  return (
    <div className="beauty_profile">
      <Banner title={"Pouch Pocket Hoodie Orange"} classHidden={true} />
      <div className="container">
        <div className="mega">
          <div className="con">
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
                <h5 className="font-semibold">
                  100% {t("of_guets_recommend")}
                </h5>
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
              <div className="report" onClick={() => setpopRepo(true)}>
                <div className="item">
                  <button>{t("Report a Problem")}</button>
                </div>
              </div>
            </div>
            <div className="w-full boxSlider">
              <SwiperSliderImages />
            </div>
            <div className="overview">
              <h3>{t("description")}</h3>
              <div class="description">
                <p>
                  Start and end in San Francisco! With the in-depth cultural
                  tour Northern California Summer 2019, you have a 8 day tour
                  package taking you through San Francisco, USA and 9 other
                  destinations in USA. Northern California Summer 2019 includes
                  accommodation as well as an expert guide, meals, transport and
                  more.
                </p>
              </div>
            </div>
          </div>
          <form>
            <div className={`details`}>
              <div className="fields">
                <div className="input-field">
                  <label>{t("Book Time")}</label>
                  <div className="flex">
                    <input type="datetime-local" />
                    <i className="fa-solid fa-clock"></i>
                  </div>
                </div>
                <div className="input-field">
                  <label>{t("Service")}</label>
                  <div className="flex">
                    <select
                      onChange={(e) => customSelect(JSON.parse(e.target.value))}
                    >
                      <option disabled selected>
                        Select Service
                      </option>
                      {arrServices.map((ser, i) => {
                        return (
                          <option key={i} value={JSON.stringify(ser)}>
                            {ser.service} ({ser.price})
                          </option>
                        );
                      })}
                    </select>
                    <i className="fa-brands fa-servicestack"></i>
                  </div>
                </div>
                {choosenSer.length > 0 && (
                  <div className="select">
                    {choosenSer.map((ele, i) => {
                      return (
                        <div className="row" key={i}>
                          <p>{`${ele.service} ${ele.price}`}</p>
                          <i
                            className="fa-solid fa-trash"
                            onClick={() => deleteChoose(ele)}
                          ></i>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="input-field">
                  <label>{t("Book Type")}</label>
                  <div className="flex">
                    <select
                      onChange={(e) => customSelect(JSON.parse(e.target.value))}
                    >
                      <option disabled selected>
                        Select Book Type
                      </option>
                      <option>{t("Go to the place")}</option>
                      <option>{t("In home")}</option>
                    </select>
                    <i className="fa-solid fa-venus-mars"></i>
                  </div>
                </div>
                <div className="taxes">
                  <label htmlFor="">{t("Taxes")}</label>
                  <div className="flex">
                    <p>10%</p>
                    <p>
                      <i class="fa-regular fa-calendar-plus"></i>
                    </p>
                  </div>
                </div>
                <div className="taxes">
                  <label htmlFor="">{t("Total")}</label>
                  <div className="flex">
                    <p>{total}</p>
                    <p>
                      <i className="fa-solid fa-money-bill"></i>
                    </p>
                  </div>
                </div>
                <div className="book">
                  <button>{t("book_now")}</button>
                </div>
              </div>
            </div>
          </form>
          <Popup
            title={t("book_now")}
            needFrom={false}
            openPopup={popupSer}
            setOpenPopup={setPopSer}
          >
            <form>
              <div className={`details`}>
                <div className="fields">
                  <div className="input-field">
                    <label>{t("Book Time")}</label>
                    <div className="flex">
                      <input type="datetime-local" />
                      <i className="fa-solid fa-clock"></i>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>{t("Service")}</label>
                    <div className="flex">
                      <select
                        onChange={(e) =>
                          customSelect(JSON.parse(e.target.value))
                        }
                      >
                        <option disabled selected>
                          Select Service
                        </option>
                        {arrServices.map((ser, i) => {
                          return (
                            <option key={i} value={JSON.stringify(ser)}>
                              {ser.service} ({ser.price})
                            </option>
                          );
                        })}
                      </select>
                      <i className="fa-brands fa-servicestack"></i>
                    </div>
                  </div>
                  {choosenSer.length > 0 && (
                    <div className="select">
                      {choosenSer.map((ele, i) => {
                        return (
                          <div className="row" key={i}>
                            <p>{`${ele.service} ${ele.price}`}</p>
                            <i
                              className="fa-solid fa-trash"
                              onClick={() => deleteChoose(ele)}
                            ></i>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <div className="input-field">
                    <label>{t("Book Type")}</label>
                    <div className="flex">
                      <select
                        onChange={(e) =>
                          customSelect(JSON.parse(e.target.value))
                        }
                      >
                        <option disabled selected>
                          Select Book Type
                        </option>
                        <option>{t("Go to the place")}</option>
                        <option>{t("In home")}</option>
                      </select>
                      <i className="fa-solid fa-venus-mars"></i>
                    </div>
                  </div>
                  <div className="taxes">
                    <label htmlFor="">{t("Taxes")}</label>
                    <div className="flex">
                      <p>10%</p>
                      <p>
                        <i class="fa-regular fa-calendar-plus"></i>
                      </p>
                    </div>
                  </div>
                  <div className="taxes">
                    <label htmlFor="">{t("Total")}</label>
                    <div className="flex">
                      <p>{total}</p>
                      <p>
                        <i className="fa-solid fa-money-bill"></i>
                      </p>
                    </div>
                  </div>
                  <div className="book">
                    <button>{t("book_now")}</button>
                  </div>
                </div>
              </div>
            </form>
          </Popup>
        </div>
        <OusrServices arr={arrServices} />
      </div>
      <OurWork />
      <Reviews setPopComm={setPopComm} popupComm={popupComm} />
      <div className="btns">
        <button onClick={() => setPopSer(true)}>{t("book_now")}</button>
        <button onClick={() => setPopComm(true)}>{t("Write A Comment")}</button>
      </div>
      <Popup
        title={t("Report a Problem")}
        titleBtn={t("Submit")}
        openPopup={popupRepo}
        setOpenPopup={setpopRepo}
      >
        <div className="flex">
          <label>{t("Your Comment")}</label>
          <i color="red" className="fa-solid fa-comments"></i>
        </div>
        <textarea
          name=""
          id=""
          style={{
            border: "1px solid #ddd",
            width: "100%",
            minHeight: "200px",
            borderRadius: "10px",
          }}
        ></textarea>
      </Popup>
    </div>
  );
};

export default BeautyProfile;
