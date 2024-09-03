import React, { useState } from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import Popup from "../../../components/popup/Popup";

import "./brand_settings.scss";

function AllServices() {
  const [popUp, setOpenPopUp] = useState(false);
  const [type, setType] = useState("");
  return (
    <main class="table servicesTable" id="customers_table">
      <section class="table__header">
        <h1>{t("Services")}</h1>
        <div class="btn">
          <Link className="new" onClick={() => setOpenPopUp(true)}>
            {t("New Service")}
            <i className="fa-solid fa-plus"></i>
          </Link>
        </div>
      </section>
      <section class="table__body">
        <table>
          <thead>
            <tr>
              <th> Id</th>
              <th>{t("service name")}</th>
              <th> {t("price In")}</th>
              <th> {t("price Out")}</th>
              <th> {t("Add Date")}</th>
              <th> {t("operations")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td> Zinzu Chan Lee</td>
              <td> Seoul </td>
              <td> 17 Dec, 2022 </td>
              <td>
                <p class="status delivered">Delivered</p>
              </td>
              <td>
                {" "}
                <strong
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                  }}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash-can"></i>
                </strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 2 </td>
              <td>Jeet Saru </td>
              <td> Kathmandu </td>
              <td> 27 Aug, 2023 </td>
              <td>
                <p class="status cancelled">Cancelled</p>
              </td>
              <td>
                {" "}
                <strong
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                  }}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash-can"></i>
                </strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 3</td>
              <td>Sonal Gharti </td>
              <td> Tokyo </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <p class="status shipped">Shipped</p>
              </td>
              <td>
                {" "}
                <strong
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                  }}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash-can"></i>
                </strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 4</td>
              <td>Alson GC </td>
              <td> New Delhi </td>
              <td> 25 May, 2023 </td>
              <td>
                <p class="status delivered">Delivered</p>
              </td>
              <td>
                {" "}
                <strong
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                  }}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash-can"></i>
                </strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 5</td>
              <td>Sarita Limbu </td>
              <td> Paris </td>
              <td> 23 Apr, 2023 </td>
              <td>
                <p class="status pending">Pending</p>
              </td>
              <td>
                {" "}
                <strong
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                  }}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash-can"></i>
                </strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 6</td>
              <td>Alex Gonley </td>
              <td> London </td>
              <td> 23 Apr, 2023 </td>
              <td>
                <p class="status cancelled">Cancelled</p>
              </td>
              <td>
                {" "}
                <strong
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                  }}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash-can"></i>
                </strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 7</td>
              <td>Jeet Saru </td>
              <td> New York </td>
              <td> 20 May, 2023 </td>
              <td>
                <p class="status delivered">Delivered</p>
              </td>
              <td>
                {" "}
                <strong
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                  }}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash-can"></i>
                </strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 8</td>
              <td>Aayat Ali Khan </td>
              <td> Islamabad </td>
              <td> 30 Feb, 2023 </td>
              <td>
                <p class="status pending">Pending</p>
              </td>
              <td>
                {" "}
                <strong
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                  }}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash-can"></i>
                </strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 9</td>
              <td>Alson GC </td>
              <td> Dhaka </td>
              <td> 22 Dec, 2023 </td>
              <td>
                <p class="status cancelled">Cancelled</p>
              </td>
              <td>
                {" "}
                <strong
                  style={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                  }}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash-can"></i>
                </strong>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <Popup
        openPopup={popUp}
        setOpenPopup={setOpenPopUp}
        title={t("New Service")}
        titleBtn={t("Submit")}
      >
        <div className="mega">
          <div className="input-field">
            <label>{t("Service Type")}</label>
            <div className="flex">
              <select onChange={(e) => setType(e.target.value)}>
                <option value={undefined} >
                  {t("Service Type")}
                </option>
                <option value={"0"}>{t("In Headquarters")}</option>
                <option value={"1"}>{t("Out Headquarters")}</option>
                <option value={"2"}>{t("In / Out Headquarters")}</option>
              </select>
              <i class="fa-solid fa-hurricane"></i>
            </div>
          </div>
          {(type == "0" || type == "1") && (
            <div className="input-field">
              <label>{t("service name")}</label>
              <div className="flex">
                <input type="text" placeholder={t("service name")} />
                <i class="fa-solid fa-hurricane"></i>
              </div>
            </div>
          )}
          {(type == "0" || type == "1") && (
            <div className="input-field">
              <label>{t("service price")}</label>
              <div className="flex">
                <input type="text" placeholder={t("service price")} />
                <i class="fa-solid fa-hurricane"></i>
              </div>
            </div>
          )}
          {type == "2" && (
            <div className="input-field">
              <label>{t("service name")}</label>
              <div className="flex">
                <input type="text" placeholder={t("service name")} />
                <i class="fa-solid fa-hurricane"></i>
              </div>
            </div>
          )}
          {type == "2" && (
            <div className="input-field">
              <label>{t("price In")}</label>
              <div className="flex">
                <input type="text" placeholder={t("price In")} />
                <i class="fa-solid fa-hurricane"></i>
              </div>
            </div>
          )}
          {type == "2" && (
            <div className="input-field">
              <label>{t("price Out")}</label>
              <div className="flex">
                <input type="text" placeholder={t("price Out")} />
                <i class="fa-solid fa-hurricane"></i>
              </div>
            </div>
          )}

        </div>
      </Popup>
    </main>
  );
}

export default AllServices;
