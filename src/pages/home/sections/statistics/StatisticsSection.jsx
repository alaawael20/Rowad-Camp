import React, { useEffect, useState } from "react";
import "./StatisticsSection.css";
import Title from "../../../../components/title/Title";

const stats = [
  { label: "عدد العائلات", value: 350 },
  { label: "عدد الأفراد", value: 1650 },
  { label: "عدد الذكور", value: 718 },
  { label: "عدد الإناث", value: 932 },
  { label: "عدد الخيام", value: 120 },
];

const StatisticCard = ({ label, value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 30);
    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        clearInterval(counter);
        setCount(value);
      } else {
        setCount(Math.ceil(start));
      }
    }, 30);
    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="stat-card">
      <div className="stat-value">{count.toLocaleString()}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const StatisticsSection = () => {
  return (
    <section className="stats-section">
      <Title title="إحصائيات عن المخيم" />
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatisticCard key={index} label={stat.label} value={stat.value} />
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
