import { t } from "i18next";
import React, { useState } from "react";
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

function Orders() {
  const [perPage, setPerPage] = useState(
    localStorage.getItem("perPageCount") || 10
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastePage] = useState(0);
  const [selectedRowData, setSelectedRowData] = useState([]);

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
  return (
    <div className="orders">
      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder={t("Search")} />
      </div>
      <table>
        <thead>
          <tr>
            {fakeOrdersColums.map((colum) => {
              return <th key={colum.field}>{colum.field}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {fakeOrdersData.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.amount}</td>
                <td>{row.created_at}</td>
                <td>{row.invoice_number}</td>
                <td>{row.payment_method}</td>
                <td>{row.username}</td>
                <td>{row.paid}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="footerTable">
        
      </div>
    </div>
  );
}

export default Orders;
