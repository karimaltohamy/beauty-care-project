import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./menu.scss";
import { Link } from "react-router-dom";

const Menu = ({ open, setOpen }) => {
  return (
    <div className={`menu ${open ? "open" : ""}`}>
      <div className="head flex items-center justify-between mb-[100px]">
        <h3 className="text-[26px] font-bold">Menu</h3>
        <button onClick={() => setOpen(false)}>
          <IoClose size={24} />
        </button>
      </div>
      <div className="links">
        <Link to={"/"} className="link">
          Home
        </Link>
        <Link to={"/"} className="link">
          Hotel
        </Link>
        <Link to={"/"} className="link">
          Persons
        </Link>
        <Link to={"/"} className="link">
          Exercises
        </Link>
        <Link to={"/"} className="link">
          Treatment
        </Link>
      </div>
    </div>
  );
};

export default Menu;
