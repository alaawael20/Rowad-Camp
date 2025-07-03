import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">عذرًا! الصفحة غير موجودة</h2>

        <Link to="/" className="notfound-button">
          العودة إلى الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
