import React from "react";
import "./NewsSection.css";
import { newsData } from "../../../../mock/newsData";
import Title from "../../../../components/title/Title";
import NewsCard from "../../../../components/newsCard/NewsCard";

const NewsSection = () => (
  <section className="news-section" id="news">
    <Title title="آخر الأخبار والإعلانات" />

    <div className="news-list">
      {newsData.map((n) => (
        <NewsCard key={n.id} item={n} />
      ))}
    </div>
  </section>
);

export default NewsSection;
