import React from "react";
import "./PartnersPage.css";
import { partners } from "../../mock/partners";
import Title from "../../components/title/Title";

const PartnersPage = () => {
  return (
    <section className="partners-section">
      <Title title="الشركاء والداعمون" />

      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img
              src={partner.logo}
              alt={partner.name}
              className="partner-logo"
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
