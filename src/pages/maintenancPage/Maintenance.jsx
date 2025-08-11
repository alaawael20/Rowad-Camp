import React from "react";
import "./Maintenance.css";

const Maintenance = () => {
  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        <h1 className="maintenance-title">🚧</h1>
        <h2 className="maintenance-heading">الموقع تحت الصيانة</h2>
        <p className="maintenance-message">
          نحن نعمل حاليًا على تحسين وتطوير الموقع. الرجاء العودة لاحقًا.
        </p>
        <p className="maintenance-message">
          الموقع متوقف من <b>الساعة 10 مساءاً</b> حتى <b>الساعة 6 صباحاً</b>،
          شكراً على تفهمكم، الدعم الفني مخيم رواد.
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
