import React from "react";
import "./SupportSection.css";
import { supportData } from "../../../../mock/supportData";

const SupportSection = () => {
  return (
    <section className="support-section" id="support">
      <h2 className="support-title">طرق الدعم والتبرع</h2>
      <p className="support-subtitle">
        ساهم معنا في تحسين حياة العائلات داخل مخيم رواد، فكل دعم يُحدث فرقًا 💛
      </p>

      <div className="support-options">
        {supportData.map((item, index) => (
          <div className="support-card" key={index}>
            <i className={`icon ${item.icon}`}></i>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <a href="/contact" className="support-button">
        أريد أن أساهم
      </a>
    </section>
  );
};

export default SupportSection;
