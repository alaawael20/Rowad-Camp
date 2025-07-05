import React, { useState } from "react";
import "./InitiativeCard.css";

const InitiativeCard = ({ initiative }) => {
  const [activeImage, setActiveImage] = useState(null);
  return (
    <div className="initiative-card">
      <h3>{initiative.title}</h3>

      <div className="initiative-meta">
        <p>
          <strong>المنفذ:</strong> {initiative.executor}
        </p>
        <p>
          <strong>الداعم:</strong> {initiative.supporter}
        </p>
        <p>
          <strong>التاريخ:</strong> {initiative.date}
        </p>
        <p>
          <strong>الموقع:</strong> {initiative.location}
        </p>
      </div>

      <div className="initiative-section">
        <h4>🎯 الأهداف:</h4>
        <ul>
          {initiative.goals.map((goal, i) => (
            <li key={i}>{goal}</li>
          ))}
        </ul>
      </div>

      <div className="initiative-section">
        <h4>📝 الأنشطة:</h4>
        <ul>
          {initiative.activities.map((act, i) => (
            <li key={i}>{act}</li>
          ))}
        </ul>
      </div>

      {initiative.images?.length > 0 && (
        <div className="initiative-gallery">
          <h4>📷 معرض الصور:</h4>
          <div className="gallery-grid">
            {initiative.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`صورة ${i + 1}`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>
      )}

      {/* نافذة تكبير الصورة */}
      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="صورة مكبرة" />
        </div>
      )}
    </div>
  );
};

export default InitiativeCard;
