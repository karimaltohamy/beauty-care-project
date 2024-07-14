import React from "react";
import { useTranslation } from "react-i18next";

const Accounts = () => {
  const { t } = useTranslation();

  return (
    <div className="accounts">
      <div className="container">
        <h1 className="text-[24px] font-bold mb-5">{t("accounts")}:</h1>

        <div className="overflow-x-auto">
          {" "}
          <table>
            <thead>
              <tr className="border-collapse">
                {" "}
                <th className="border-collapse border-2">
                  {t("transaction_number")}
                </th>
                <th className="border-collapse border-2">{t("applicant")}</th>
                <th className="border-collapse border-2">{t("order_cost")}</th>
                <th className="border-collapse border-2">
                  {t("date_of_application")}
                </th>
                <th className="border-collapse border-2">{t("status")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr className="border-collapse">
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
              </tr>
              <tr className="border-collapse">
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
              </tr>
              <tr className="border-collapse">
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
              </tr>
              <tr className="border-collapse">
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
              </tr>
              <tr className="border-collapse">
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
              </tr>
              <tr className="border-collapse">
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
              </tr>
              <tr className="border-collapse">
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
                <td className="border-collapse border-2">test</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
