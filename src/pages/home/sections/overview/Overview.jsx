import React from "react";
import "./Overview.css";
import Title from "../../../../components/title/Title";

const Overview = () => {
  return (
    <div className="overview-container" id="about">
      <Title title="نظرة عامة عن المخيم" />
      <section className="overview-content">
        <div className="overview-image">
          <img src="/assets/camping.png" alt="Overview" />
        </div>
        <div className="overview-text">
          <h3 className="overview-title">
            مخيم "رواد" للنازحين في مواصي خانيونس: معاناة مستمرة وجهود لتحسين
            الأوضاع.
          </h3>
          <p className="overview-description">
            يقع مخيم "رواد" في منطقة معينة من شارع روني صالح منطقة اللحام
            الجنوبي. يتكون المخيم من حوالي 350 أسرة، ويعيش فيه ما يقارب 1650
            فرد، معظمهم من الأطفال والنساء والشيوخ. لقد اضطر هؤلاء النازحون إلى
            مغادرة منازلهم بسبب الحرب القائمة في مناطقهم الأصلية.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Overview;
