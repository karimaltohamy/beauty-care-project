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
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Fragment>
      {(window.innerWidth >= 768 || pathname === "/" ) && <Header />}
      <Outlet />
      {window.innerWidth >= 768 && <Navbar />}
      <Footer />
    </Fragment>
  );
};

export default Application;
