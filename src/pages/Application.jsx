import React, { Fragment, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const Application = () => {
  const location = useLocation();
  const { pathname } = location;
  const { id } = useParams();
  const { theme } = localStorage;

  const paddingWhenNeed = () => {
    if (pathname == `/beauty/${id}` || pathname == `/shein/${id}`) {
      document.body.style.padding = "0px";
    }
  };

  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    document.body.classList.add(theme);
    paddingWhenNeed();
  }, []);
  return (
    <Fragment>
      {((pathname !== `/beauty/${id}` && pathname !== `/shein/${id}`) ||
        window.innerWidth >= 768) && <Header />}
      <Outlet />
      {window.innerWidth <= 768 &&
        pathname !== `/beauty/${id}` &&
        pathname !== `/shein/${id}` && <Navbar />}
      <Footer />
    </Fragment>
  );
};

export default Application;
