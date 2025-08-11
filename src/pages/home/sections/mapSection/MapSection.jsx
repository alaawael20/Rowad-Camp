import React from "react";
import "./MapSection.css";
import Title from "../../../../components/title/Title";

const MapSection = () => {
  return (
    <section className="map-section" id="location">
      <Title title="أين يقع مخيم رواد ؟" />

      <div className="map-container">
        <iframe
          title="موقع مخيم رواد"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d770.8033461978258!2d34.264699610010375!3d31.35727663302562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1751472665789!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
