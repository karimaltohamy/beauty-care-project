import React from "react";
import "./small.scss";
import { useNavigate } from "react-router-dom";

function SmallHeader({ title, padding }) {
  const { lang } = localStorage;
  const navigate = useNavigate();
  return (
    <div className="smallHeader" style={{ padding }}>
      <p className="title">{title}</p>
      <div className="back" onClick={() => navigate(-1)}>
        <i className={`fa-solid ${lang == "ar" ? "fa-backward" : "fa-forward"}`}></i>
      </div>
    </div>
  );
}

export default SmallHeader;
