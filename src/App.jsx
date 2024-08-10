import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (localStorage.getItem("lang") == "ar") {
      i18n.changeLanguage("ar");
      document.body.classList.add("ar");
      document.body.classList.remove("en");
    } else if (localStorage.getItem("lang") == "en") {
      i18n.changeLanguage("en");
      document.body.classList.add("en");
      document.body.classList.remove("ar");
    } else {
      i18n.changeLanguage("ar");
      document.body.classList.add("ar");
      document.body.classList.remove("en");
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
