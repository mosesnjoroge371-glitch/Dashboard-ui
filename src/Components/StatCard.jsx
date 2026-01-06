import React from "react";

const StatCard = ({ title, value, change, accent }) => {
  return (
    <div className="stat-card card">
      <div className="stat-top">
        <p className="muted">{title}</p>
        <div
          className="stat-badge"
          style={{ background: accent || "var(--accent)" }}
        />
      </div>
      <h2>{value}</h2>
      {change && <small className="muted">{change}</small>}
    </div>
  );
};

export default StatCard;
