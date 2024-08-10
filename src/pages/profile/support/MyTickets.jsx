import React from "react";
import "./support.scss";
import cat from "../../../assets/images/ai-generated-8556454_1920.jpg";
import serach from "../../../assets/images/search.png";
import { t } from "i18next";
import { Link } from "react-router-dom";

function MyTickets() {
  return (
    <main class="table" id="customers_table">
      <section class="table__header">
        <h1>{t("MyTickets")}</h1>
        <div class="btn">
          <Link to={"/profile/newTicket"} className="new"  >
            {t("NewTicket")}
            <i className="fa-solid fa-plus"></i>
          </Link>
        </div>
      </section>
      <section class="table__body">
        <table>
          <thead>
            <tr>
              <th> Id</th>
              <th> Product</th>
              <th> Location</th>
              <th> Order Date</th>
              <th> Status</th>
              <th> Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                {" "}
                <img src={cat} alt="" />
                Zinzu Chan Lee
              </td>
              <td> Seoul </td>
              <td> 17 Dec, 2022 </td>
              <td>
                <p class="status delivered">Delivered</p>
              </td>
              <td>
                {" "}
                <strong> $128.90 </strong>
              </td>
            </tr>
            <tr>
              <td> 2 </td>
              <td>
                <img src={cat} alt="" /> Jeet Saru{" "}
              </td>
              <td> Kathmandu </td>
              <td> 27 Aug, 2023 </td>
              <td>
                <p class="status cancelled">Cancelled</p>
              </td>
              <td>
                {" "}
                <strong>$5350.50</strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 3</td>
              <td>
                <img src={cat} alt="" /> Sonal Gharti{" "}
              </td>
              <td> Tokyo </td>
              <td> 14 Mar, 2023 </td>
              <td>
                <p class="status shipped">Shipped</p>
              </td>
              <td>
                {" "}
                <strong>$210.40</strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 4</td>
              <td>
                <img src={cat} alt="" /> Alson GC{" "}
              </td>
              <td> New Delhi </td>
              <td> 25 May, 2023 </td>
              <td>
                <p class="status delivered">Delivered</p>
              </td>
              <td>
                {" "}
                <strong>$149.70</strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 5</td>
              <td>
                <img src={cat} alt="" /> Sarita Limbu{" "}
              </td>
              <td> Paris </td>
              <td> 23 Apr, 2023 </td>
              <td>
                <p class="status pending">Pending</p>
              </td>
              <td>
                {" "}
                <strong>$399.99</strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 6</td>
              <td>
                <img src={cat} alt="" /> Alex Gonley{" "}
              </td>
              <td> London </td>
              <td> 23 Apr, 2023 </td>
              <td>
                <p class="status cancelled">Cancelled</p>
              </td>
              <td>
                {" "}
                <strong>$399.99</strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 7</td>
              <td>
                <img src={cat} alt="" /> Jeet Saru{" "}
              </td>
              <td> New York </td>
              <td> 20 May, 2023 </td>
              <td>
                <p class="status delivered">Delivered</p>
              </td>
              <td>
                {" "}
                <strong>$399.99</strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 8</td>
              <td>
                <img src={cat} alt="" /> Aayat Ali Khan{" "}
              </td>
              <td> Islamabad </td>
              <td> 30 Feb, 2023 </td>
              <td>
                <p class="status pending">Pending</p>
              </td>
              <td>
                {" "}
                <strong>$149.70</strong>{" "}
              </td>
            </tr>
            <tr>
              <td> 9</td>
              <td>
                <img src={cat} alt="" /> Alson GC{" "}
              </td>
              <td> Dhaka </td>
              <td> 22 Dec, 2023 </td>
              <td>
                <p class="status cancelled">Cancelled</p>
              </td>
              <td>
                {" "}
                <strong>$249.99</strong>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default MyTickets;
