import { t } from "i18next";
import React from "react";
import "./orders.scss";

const fakeOrdersData = [
  {
    id: 1,
    invoice_number: "Jemy",
    created_at: "Jemy",
    amount: 100,
    username: "Jemy",
    payment_method: "visa",
    paid: "1",
  },
  {
    id: 2,
    invoice_number: "Jemy",
    created_at: "Jemy",
    amount: 100,
    username: "Jemy",
    payment_method: "visa",
    paid: "1",
  },
  {
    id: 3,
    invoice_number: "Jemy",
    created_at: "Jemy",
    amount: 100,
    username: "Jemy",
    payment_method: "visa",
    paid: "1",
  },
  {
    id: 4,
    invoice_number: "Jemy",
    created_at: "Jemy",
    amount: 100,
    username: "Jemy",
    payment_method: "visa",
    paid: "1",
  },
  {
    id: 5,
    invoice_number: "Jemy",
    created_at: "Jemy",
    amount: 100,
    username: "Jemy",
    payment_method: "visa",
    paid: "1",
  },
  {
    id: 6,
    invoice_number: "Jemy",
    created_at: "Jemy",
    amount: 100,
    username: "Jemy",
    payment_method: "visa",
    paid: "1",
  },
];

const fakeOrdersColums = [
  {
    field: "invoice_number",
    headerName: t("user_invoice_table_number"),
    cellClassName: "name-column-cell",
    minWidth: 160,
    flex: 1,
  },
  {
    field: "created_at",
    headerName: t("user_invoice_table_date"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "amount",
    headerName: t("user_invoice_table_amount"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "username",
    headerName: t("manager_invoice_table_created_by"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "payment_method",
    headerName: t("manager_invoice_table_method"),
    minWidth: 160,
    flex: 1,
  },
  {
    field: "paid",
    headerName: t("manager_invoice_table_paid"),
    minWidth: 160,
    flex: 1,
  },
];

import cat from "../../../assets/images/ai-generated-8556454_1920.jpg";
import serach from "../../../assets/images/search.png";

function Orders() {
  const searchTable = (e) => {
    const table_rows = document.querySelectorAll(".profile tbody tr");
    const search_data = e.target.value.toLowerCase();
    console.log(search_data);
    table_rows.forEach((row, i) => {
      const table_data = row.textContent.toLowerCase();      
      row.classList.toggle("hide", table_data.indexOf(search_data) < 0);      
      row.style.setProperty("--delay", i / 25 + "s");
    });
  };

  return (
    <main class="table" id="customers_table">
      <section class="table__header">
        <h1>{t("orders")}</h1>
        <div class="input-group">
          <input
            type="search"
            onChange={(e) => searchTable(e)}
            placeholder="Search Data..."
          />
          <img src={serach} alt="" />
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
                <p>Zinzu Chan Lee</p>
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
                <img src={cat} alt="" /> <p>Jeet Saru</p>{" "}
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
                <img src={cat} alt="" /> <p>Sonal Gharti</p>{" "}
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
                <img src={cat} alt="" /> <p>Alson GC</p>{" "}
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
                <img src={cat} alt="" /> <p>Sarita Limbu</p>{" "}
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
                <img src={cat} alt="" /> <p>Alex Gonley</p>{" "}
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
                <img src={cat} alt="" /> <p>Jeet Saru</p>{" "}
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
                <img src={cat} alt="" /> <p>Aayat Ali Khan</p>{" "}
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
                <img src={cat} alt="" /> <p>Alson GC</p>{" "}
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

export default Orders;
