import React, { useState } from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import Popup from "../../../components/popup/Popup";
import cat from "../../../assets/images/ai-generated-8556454_1920.jpg";
import "./brand_settings.scss";

function Business_gallery() {
  const [popUp, setOpenPopUp] = useState(false);
  const [type, setType] = useState("");
  return (
    <main class="table servicesTable" id="customers_table">
      <section class="table__header">
        <h1>{t("Business Gallery")}</h1>
        <div class="btn">
          <Link className="new" onClick={() => setOpenPopUp(true)}>
            {t("New Work")}
            <i className="fa-solid fa-plus"></i>
          </Link>
        </div>
      </section>
      <section class="table__body">
        <table>
          <thead>
            <tr>
              <th> Id</th>
              <th>{t("work name")}</th>
              <th> {t("Add Date")}</th>
              <th> {t("images")}</th>
              <th> {t("operations")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td> Zinzu Chan Lee</td>
              <td> 17 Dec, 2022 </td>
              <td style={{ display: "flex", justifyContent: "center" }}>
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
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

              <td> 27 Aug, 2023 </td>
              <td style={{ display: "flex", justifyContent: "center" }}>
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
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

              <td> 14 Mar, 2023 </td>

              <td style={{ display: "flex", justifyContent: "center" }}>
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
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

              <td> 25 May, 2023 </td>
              <td style={{ display: "flex", justifyContent: "center" }}>
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
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
              <td> 23 Apr, 2023 </td>
              <td style={{ display: "flex", justifyContent: "center" }}>
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
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
              <td> 23 Apr, 2023 </td>
              <td style={{ display: "flex", justifyContent: "center" }}>
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
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
              <td> 20 May, 2023 </td>
              <td style={{ display: "flex", justifyContent: "center" }}>
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
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
              <td> 30 Feb, 2023 </td>
              <td style={{ display: "flex", justifyContent: "center" }}>
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
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
              <td> 22 Dec, 2023 </td>
              <td style={{ display: "flex", justifyContent: "center" }}>
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
                <img src={cat} alt="" srcset="" />
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
        title={t("New Work")}
        titleBtn={t("Submit")}
      >
        <div className="mega">
          <div className="input-field">
            <label>{t("work name")}</label>
            <div className="flex">
              <input type="text" placeholder={t("work name")} />
              <i class="fa-solid fa-hurricane"></i>
            </div>
          </div>
          <div className="input-field">
            <label>{t("work name")}</label>
            <div className="flex">
              <input type="file"/>
              <i class="fa-solid fa-hurricane"></i>
            </div>
          </div>
        </div>
      </Popup>
    </main>
  );
}

export default Business_gallery;
