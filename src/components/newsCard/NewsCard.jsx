import React, { useState } from "react";
import "./NewsCard.css";

const NewsCard = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="news-card">
      <div className="news-header" onClick={() => setOpen(!open)}>
        <div className="news-icon">📢</div>
        <div className="news-info">
          <h3 className="news-title">{item.title}</h3>
          <span className="news-date">{item.date}</span>
        </div>
        <button className="toggle-btn">{open ? "إخفاء" : "اقرأ المزيد"}</button>
      </div>

      {open && <p className="news-details">{item.details}</p>}
      {!open && <p className="news-excerpt">{item.excerpt}</p>}
    </div>
  );
};

export default NewsCard;
