import React from "react";
import "./PartnersPage.css";
import { partners } from "../../mock/partners";
import Title from "../../components/title/Title";

const PartnersPage = () => {
  const defaultLogo = "/assets/partners/avatar.png";
  return (
    <section className="partners-section">
      <Title title="الشركاء والداعمون" />

      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img
              src={partner.logo || defaultLogo}
              alt={partner.name}
              className="partner-logo"
              onError={(e) => {
                e.target.onerror = null; // لتجنب الحلقة اللا نهائية
                e.target.src = defaultLogo;
              }}
            />
            <h3 className="partner-name">{partner.name}</h3>
            <p className="partner-description">{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersPage;
