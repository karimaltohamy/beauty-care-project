import React from "react";
import { t } from "i18next";
import "./review.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import salon from "../../assets/images/images.png";
import Popup from "../popup/Popup";

function Reviews({ popupComm, setPopComm, tab, activate = false }) {
  return (
    <div className="reviewDiv">
      <div
        className="container"
        style={{ display: tab !== "reviews" && activate ? "none" : "" }}
      >
        {!activate && (
          <h1
            style={{ fontSize: "30px", fontWeight: 700, marginBottom: "10px" }}
          >
            {t("Reviews")}
          </h1>
        )}
        <div className="heading">
          <div className="box">
            <div className="rate">
              <h1>
                <span className="size">4.7</span> /5
              </h1>
              <h1>{t("Excellent")}</h1>
              <h1>
                {t("Based_On")} <span>3 {t("Reviews")}</span>
              </h1>
            </div>
            <div className="calc">
              <div className="ex">
                <h1>{t("Excellent")} </h1>
                <span></span>
                <span>2</span>
              </div>
              <div className="ex ">
                <h1>{t("Very_Good")} </h1>
                <span></span>
                <span>1</span>
              </div>
              <div className="ex ">
                <h1>{t("Average")} </h1>
                <span></span>
                <span>0</span>
              </div>
              <div className="ex ">
                <h1>{t("Poor")} </h1>
                <span></span>
                <span>0</span>
              </div>
              <div className="ex ">
                <h1>{t("Terrible")} </h1>
                <span></span>
                <span>0</span>
              </div>
            </div>
          </div>
          <form className="not">
            <div className={`details`}>
              <div className="fields">
                <div className="input-field">
                  <div className="flex">
                    <label>{t("Write A Comment")}</label>
                    <i className="fa-solid fa-comments"></i>
                  </div>
                  <textarea className="feed" name="" id=""></textarea>
                </div>
                <div className="book">
                  <button>{t("Submit")}</button>
                </div>
              </div>
            </div>
          </form>
          <Popup
            openPopup={popupComm}
            setOpenPopup={setPopComm}
            needFrom={false}
            title={t("Write A Comment")}
          >
            <form>
              <div className={`details`}>
                <div className="fields">
                  <div className="input-field">
                    <div className="flex">
                      <label>{t("Your Comment")}</label>
                      <i className="fa-solid fa-comments"></i>
                    </div>
                    <textarea className="feed" name="" id=""></textarea>
                  </div>
                  <div className="book">
                    <button>{t("Submit")}</button>
                  </div>
                </div>
              </div>
            </form>
          </Popup>
        </div>
      </div>
      <div
        className="comments"
        style={{ display: tab !== "comments" && activate ? "none" : "" }}
      >
        <div className="container">
          {!activate && (
            <h1
              style={{
                fontSize: "30px",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              {t("Comments")}
            </h1>
          )}
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            grabCursor={true}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              140: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1030: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            loop={true}
            spaceBetween={40}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {[...Array(6)].map(() => {
              return (
                <SwiperSlide>
                  <i className="fa-solid fa-comments"></i>
                  <div className="img">
                    <img src={salon} alt="" />
                  </div>
                  <div className="con">
                    <i class="fa-solid fa-quote-left"></i>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati dicta unde cum, eaque voluptatum porro sit
                      laboriosam voluptates atque alias. Soluta corporis aperiam
                      libero quasi. Dolorem amet placeat aspernatur debitis!
                    </p>
                    <i class="fa-solid fa-quote-right"></i>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
