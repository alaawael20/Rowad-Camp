import React from "react";
import "./CampStructure.css";
import Title from "./../../components/title/Title";

const CampStructure = () => {
  return (
    <div className="camp-structure">
      <header className="structure-header">
        <Title title="هيكلية المخيم" />
        <p>
          يتكوّن مخيم رواد من بنية إدارية وتنظيمية متكاملة تشمل الأقسام
          الإدارية، التوزيع السكاني، الخدمات الأساسية، والمرافق الحيوية.
        </p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <h4>عدد الأسر</h4>
          <p>350</p>
        </div>
        <div className="stat-card">
          <h4>عدد الأفراد</h4>
          <p>2,000</p>
        </div>
        <div className="stat-card">
          <h4>عدد الذكور</h4>
          <p>1,000</p>
        </div>
        <div className="stat-card">
          <h4>عدد الإناث</h4>
          <p>1,000</p>
        </div>
        <div className="stat-card">
          <h4>الأطفال (أقل من 18)</h4>
          <p>300 طفل</p>
        </div>
        <div className="stat-card">
          <h4>كبار السن</h4>
          <p>30</p>
        </div>
        <div className="stat-card">
          <h4>ذوي الإعاقة</h4>
          <p>15</p>
        </div>
        <div className="stat-card">
          <h4>عدد الأرامل والمطلقات</h4>
          <p>10</p>
        </div>
      </div>

      <section className="hierarchy">
        <h3>الهيكل الإداري</h3>
        <div className="hierarchy-tree">
          <div className="node root">إدارة المخيم</div>
          <div className="node-group">
            <div className="node">لجنة الخدمات</div>
            <div className="node">الشؤون الاجتماعية</div>
            <div className="node">المنظمات الداعمة</div>
            <div className="node">لجنة الطوارئ</div>
          </div>
        </div>
      </section>

      {/* الخدمات المتوفرة */}
      <section className="services-section">
        <h3>الخدمات داخل المخيم</h3>
        <div className="services-grid">
          <div className="service-box">مركز صحي</div>
          <div className="service-box">مدرسة مجتمعية</div>
          <div className="service-box">نقاط توزيع</div>
          <div className="service-box">مركز نفسي</div>
          <div className="service-box">شبكة مياه</div>
          <div className="service-box">صرف صحي</div>
        </div>
      </section>

      {/* المرافق */}
      <section className="facilities-section">
        <h3>المرافق الرئيسية</h3>
        <ul className="facility-list">
          <li>📍 المدخل الرئيسي - الشمال</li>
          <li>📍 المنطقة الإدارية - قرب المدخل</li>
          <li>📍 ساحة الأنشطة - الجنوب</li>
          <li>📍 المنطقة التعليمية - الغرب</li>
          <li>📍 خيام العائلات - الوسط</li>
        </ul>
      </section>
    </div>
  );
};

export default CampStructure;
