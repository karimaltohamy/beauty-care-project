import React, { useEffect, useState } from "react";
import { t } from "i18next";
import "./myBrand.scss";
import LocationPicker from "../../../components/LocationPicker/LocationPicker";
import Popup from "../../../components/popup/Popup";

function My_Branding() {
  // const [location, setLocation] = useState(null);

  // // Default location set to Egypt
  // const defaultLocation = { lat: 29.9792, lng: 31.1342 };

  // const handleLocationSelect = (location) => {
  //   setLocation(location);
  // };

  const [location, setLocation] = useState({ lat: "00.0000", lng: "00.0000" });
  const [error, setError] = useState(null);
  const [popUp, setPopUp] = useState(false);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
    setPopUp(false)
  };

  useEffect(() => {
    handleGetLocation();
  }, []);

  const [payment, setPayment] = useState();

  return (
    <div className="mybrand center">
      <form>
        <div className="form">
          <div className={`details prand`}>
            <span className="title">{t("Prand_Details")}</span>
            <div className="fields">
              <div className="input-field">
                <label>{t("Prand_Name")}</label>
                <div className="flex">
                  <input type="text" placeholder="Enter prand name" />
                  <i className="fa-solid fa-code-branch"></i>
                </div>
              </div>
              <div className="input-field">
                <label>{t("address")}</label>
                <div className="flex">
                  <input type="text" placeholder="Enter Adress" />
                  <i className="fa-regular fa-address-card"></i>
                </div>
              </div>
              <div className="input-field">
                <label>{t("Work Type")}</label>
                <div className="flex">
                  <select>
                    <option disabled selected>
                      {t("Work Type")}
                    </option>
                    <option>{t("Beauty Center")}</option>
                    <option>{t("Atelie")}</option>
                    <option>{t("Clinics")}</option>
                  </select>
                  <i class="fa-solid fa-hurricane"></i>
                </div>
              </div>
              <div className="input-field">
                <label>{t("Service Type")}</label>
                <div className="flex">
                  <select>
                    <option disabled selected>
                      {t("Service Type")}
                    </option>
                    <option>{t("In Headquarters")}</option>
                    <option>{t("Out Headquarters")}</option>
                    <option>{t("In / Out Headquarters")}</option>
                  </select>
                  <i class="fa-solid fa-hurricane"></i>
                </div>
              </div>
              <div className="input-field">
                <label>{t("Place_Photos")}</label>
                <div className="flex">
                  <input type="file" />
                  <i class="fa-solid fa-photo-film"></i>
                </div>
              </div>
              <div className="input-field">
                <label>{t("Commercial register photo")}</label>
                <div className="flex">
                  <input type="file" />
                  <i class="fa-solid fa-photo-film"></i>
                </div>
              </div>
              <div className="input-field">
                <label>{t("Tax card image")}</label>
                <div className="flex">
                  <input type="file" />
                  <i class="fa-solid fa-photo-film"></i>
                </div>
              </div>
              <div className="workk">
                <label htmlFor="">{t("Working Days")}</label>
                <div className="inputs">
                  <div className="flex">
                    <input type="number" placeholder={t("From")} />
                    <i className="fa-regular fa-clock"></i>
                  </div>
                  <div className="flex">
                    <input type="number" placeholder={t("To")} />
                    <i className="fa-regular fa-clock"></i>
                  </div>
                </div>
              </div>
              <div className="input-field">
                <label>{t("Phone number")}</label>
                <div className="flex">
                  <input type="text" placeholder="Phone" />
                  <i class="fa-solid fa-photo-film"></i>
                </div>
              </div>
              <div className="input-field">
                <label>{t("Another number")}</label>
                <div className="flex">
                  <input type="text" placeholder="Another" />
                  <i class="fa-solid fa-photo-film"></i>
                </div>
              </div>
              <div className="workk">
                <label htmlFor="">{t("Current Location")}</label>
                <div className="inputs">
                  <div className="flex">
                    <input
                      type="text"
                      value={`${location.lat}N-${location.lng}W`}
                    />
                    <i class="fa-solid fa-arrows-up-down"></i>
                  </div>
                  <div className="flex">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setPopUp(true);
                      }}
                    >
                      {t("Update")}
                    </button>
                  </div>
                </div>
              </div>

              {/* <div className="input-field fill">
                <label>{t("Location")}</label>
                <div className="flex">
                  <LocationPicker
                    onLocationSelect={handleLocationSelect}
                    defaultLocation={defaultLocation}
                  />
                </div>
              </div> */}
            </div>
            <div className="holi">
              <label htmlFor="">{t("Work Days")}</label>
              <div className="days">
                <span>
                  <input type="checkbox" /> {t("Saturday")}
                </span>
                <span>
                  <input type="checkbox" /> {t("Sunday")}
                </span>
                <span>
                  <input type="checkbox" /> {t("Monday")}
                </span>
                <span>
                  <input type="checkbox" /> {t("Tuesday")}
                </span>
                <span>
                  <input type="checkbox" /> {t("Wednesday")}
                </span>
                <span>
                  <input type="checkbox" /> {t("Thursday")}
                </span>
                <span>
                  <input type="checkbox" /> {t("Friday")}
                </span>
              </div>
            </div>
            <div className="payment">
              <label>{t("Did You Want To Activate Online Payment ?")}</label>
              <div className="mega">
                <div className="flex">
                  <p>{t("Yes")}</p>{" "}
                  <input
                    type="radio"
                    onChange={(e) => {
                      e.stopPropagation();
                      setPayment(e.target.value);
                    }}
                    name="option"
                    value={true}
                  />
                </div>
                <div className="flex">
                  <p>{t("No")}</p>{" "}
                  <input
                    type="radio"
                    name="option"
                    value={undefined}
                    onChange={(e) => {
                      e.stopPropagation();
                      setPayment(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            {payment && (
              <div className="crazy">
                <span>{t("Payment Details")}</span>
                <div className="fields">
                  <div className="input-field">
                    <label>{t("Bank name")}</label>
                    <div className="flex">
                      <input type="text" placeholder="Phone" />
                      <i class="fa-solid fa-photo-film"></i>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>{t("Bank account number")}</label>
                    <div className="flex">
                      <input type="text" placeholder="Phone" />
                      <i class="fa-solid fa-photo-film"></i>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>{t("PIN")}</label>
                    <div className="flex">
                      <input type="text" placeholder="Phone" />
                      <i class="fa-solid fa-photo-film"></i>
                    </div>
                  </div>
                  <div className="input-field">
                    <label>{t("Phone number registered with the bank")}</label>
                    <div className="flex">
                      <input type="text" placeholder="Phone" />
                      <i class="fa-solid fa-photo-film"></i>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="btns">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setNext(true);
                }}
              >
                <span className="btnText">{t("Update")}</span>
              </button>
            </div>
          </div>
        </div>
      </form>
      <Popup
        openPopup={popUp}
        setOpenPopup={setPopUp}
        needFrom={false}
        title={t("Update Location")}
      >
        <h1>{t("you must be in your company location")}</h1>
        <div className="btns">
          <button onClick={()=> handleGetLocation()}>{t("Confirm")}</button>
          <button onClick={()=> setPopUp(false)}>{t("Not Now")}</button>
        </div>
      </Popup>
    </div>
  );
}

export default My_Branding;
