import React from "react";
import "./InitiativesPage.css";
import { initiatives } from "../../mock/initiatives";
import InitiativeCard from "../../components/initiativeCard/InitiativeCard";
import Title from "../../components/title/Title";

const InitiativesPage = () => {
  return (
    <div className="initiatives-page">
      <Title title="المبادرات داخل المخيم" />
      <p className="page-desc">
        نعرض هنا أبرز المبادرات التي أُقيمت في مخيم رواد، بدعم من منظمات
        ومجتمعنا المحلي.
      </p>

      <div className="initiatives-grid">
        {initiatives.map((init, index) => (
          <InitiativeCard key={index} initiative={init} />
        ))}
      </div>
    </div>
  );
};

export default InitiativesPage;
