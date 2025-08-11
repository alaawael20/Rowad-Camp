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
          <p>1,650</p>
        </div>
        <div className="stat-card">
          <h4>عدد الذكور</h4>
          <p>718</p>
        </div>
        <div className="stat-card">
          <h4>عدد الإناث</h4>
          <p>932</p>
        </div>
        <div className="stat-card">
          <h4>الأطفال (أقل من 18)</h4>
          <p>500 طفل</p>
        </div>
        <div className="stat-card">
          <h4>كبار السن فوق 60 سنة</h4>
          <p>50</p>
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
            <div className="node">لجنة التواصل الخارجي</div>
            <div className="node">لجنة الإرشاد والتوعية</div>
            <div className="node">لجنة الإصلاح</div>
            <div className="node">لجنة التطوع والاسناد</div>
            <div className="node">لجنة الطوارئ</div>
          </div>
        </div>
      </section>

      {/* جدول فريق الإدارة */}
      <section className="management-table">
        <Title title="فريق إدارة المخيم" />
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>الاسم</th>
                <th>المنصب</th>
                <th>المهام</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>م. علاء الفقعاوي</td>
                <td>مدير المخيم</td>
                <td>
                  الإشراف العام على أنشطة المخيم وتنظيم عمل اللجان المختلفة.
                </td>
              </tr>
              <tr>
                <td>أ. علاء الدين المدهون</td>
                <td>منسق لجنة التواصل الخارجي (عضو مجلش إدارة)</td>
                <td>
                  التواصل مع المؤسسات الشريكة وتنظيم زيارات الجهات الداعمة.
                </td>
              </tr>
              <tr>
                <td>د. أحمد كوارع</td>
                <td>مسؤول لجنة الطوارئ (عضو مجلش إدارة)</td>
                <td>
                  متابعة حالات الطوارئ واتخاذ الإجراءات السريعة عند الحاجة.
                </td>
              </tr>
              <tr>
                <td>أ. رغدة النجيلي</td>
                <td>المختصة بشؤون المرأة (عضو مجلش إدارة)</td>
                <td>
                  متابعة قضايا النساء داخل المخيم، وتقديم الدعم والتوعية حول
                  الحقوق والصحة النفسية والاجتماعية.
                </td>
              </tr>
              <tr>
                <td>أ. عبد الرحمن النجيلي</td>
                <td>مسؤول الدعم اللوجيستي (عضو مجلش إدارة)</td>
                <td>
                  تنظيم مواعيد توفير المياه الصالحة للشرب والإشراف على توزيعها
                  بالتنسيق مع الجهات المعنية.
                </td>
              </tr>
              <tr>
                <td>أ. محمد النجيلي</td>
                <td>مسؤول الإعلام</td>
                <td>
                  توثيق أنشطة المخيم، إعداد التقارير المصورة، ونشر الأخبار
                  والتحديثات على المنصات الإعلامية.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* الخدمات المتوفرة */}
      <section className="services-section">
        <h3>الخدمات داخل المخيم</h3>
        <div className="services-grid">
          <div className="service-box">مركز اجتماعي</div>
          <div className="service-box">حلقات تحفيظ القرآن </div>
          <div className="service-box">نقطة توزيع</div>
          <div className="service-box">مركز نفسي</div>
          <div className="service-box">مياه صالحة للشرب</div>
        </div>
      </section>
    </div>
  );
};

export default CampStructure;
