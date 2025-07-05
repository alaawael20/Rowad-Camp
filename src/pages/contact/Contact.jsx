import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactPage = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    console.log("SERVICE ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC KEY:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          formRef.current.reset();
        },
        (err) => {
          console.error(err);
          setError("حدث خطأ أثناء الإرسال، جرّب مرة أخرى.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">تواصل معنا</h2>
      <p className="contact-subtitle">
        نرحّب باستفساراتكم واقتراحاتكم بكل محبة 💛
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>معلومات التواصل</h3>
          <ul>
            <li>
              <i className="fas fa-phone-alt"></i>
              <span>059-819-2488</span>
            </li>
            {/* <li>
              <i className="fas fa-envelope"></i>
              <span>info@rowadcamp.org</span>
            </li> */}
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>
                قطاع غزة – خان يونس - مواصي خان يونس - وسط شارع روني صالح بجوار
                مصلى الصابرين
              </span>
            </li>
          </ul>
          {/* <div className="social-links">
            <a href="https://facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/970598194288">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div> */}
        </div>

        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="from_name">الاسم الكامل *</label>
            <input id="from_name" name="from_name" type="text" required />
          </div>

          <div className="form-group">
            <label htmlFor="reply_to">البريد الإلكتروني *</label>
            <input id="reply_to" name="reply_to" type="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">الموضوع *</label>
            <input id="subject" name="subject" type="text" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">الرسالة *</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "يتم الإرسال..." : "إرسال"}
          </button>

          {sent && <p className="sent-msg">✅ تم إرسال رسالتك بنجاح!</p>}
          {error && <p className="error-msg">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
