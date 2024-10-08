import React, { Fragment } from "react";
import "./popup.scss";
import { t } from "i18next";


const Popup = ({
  title,
  children,
  setOpenPopup,
  openPopup,
  onSubmit,
  titleBtn,
  onClick,
  maxHight = false,
  maxWidth = false,
  needSubmit = true,
  needFrom = true,
}) => {
  return (
    <Fragment>
      <div className={`overflow ${openPopup ? "active" : ""}`}></div>
      <div className={`model_poup ${openPopup ? "active" : ""}`}>
        <div
          className={`content ${maxHight && "max_height"} ${
            maxWidth && "max_width"
          }`}
        >
          <div className="head">
            <h5 className="title_model">{title}</h5>
            <div className="close_model" onClick={() => setOpenPopup(false)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          {needFrom && (
            <form action="" onSubmit={onSubmit}>
              {children}
              {needSubmit && (
                <button className="btn_submit" onClick={onClick}>
                  {t(titleBtn ? titleBtn : "global_button_submit")}
                </button>
              )}
            </form>
          )}
          {!needFrom && children}
        </div>
      </div>
    </Fragment>
  );
};

export default Popup;
