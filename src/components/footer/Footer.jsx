import React from "react";
import "./Footer.css";
import { quickLinks } from "../../mock/quickLinks";
import { socialLinks } from "../../mock/socialLinks";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3 className="footer-title">مخيم رواد</h3>
          <p className="footer-text">
            نسعى لتوفير بيئة آمنة وداعمة للنازحين مع
            <br />
            خدمات إنسانية وصحية وتعليمية متكاملة.
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">روابط سريعة</h3>
          <ul className="footer-links">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">تواصل معنا</h3>
          <ul className="footer-contact">
            <li>
              <i className="fas fa-phone-alt"></i>
              <span>059-819-2488</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>info@rowadcamp.org</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>قطاع غزة – خان يونس - مواصي خان يونس</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">تابعنا</h3>
          <div className="footer-social">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer">
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} مخيم رواد – جميع الحقوق محفوظة | تم التطوير
        بواسطة المهندس علاء الفقعاوي 💻
      </div>
    </footer>
  );
};

export default Footer;
