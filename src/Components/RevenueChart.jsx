import React from "react";

const RevenueChart = ({ data = [] }) => {
  const max = Math.max(
    1,
    ...data.map((d) => Math.max(d.profit || 0, d.loss || 0))
  );

  return (
    <div className="revenue-chart">
      <h3>Total Revenue</h3>
      <div className="bars">
        {data.map((d, i) => (
          <div key={i} className="bar-item">
            <div
              className="bar profit"
              style={{ height: `${((d.profit || 0) / max) * 100}%` }}
              title={`Profit ${d.profit}`}
            />
            <div
              className="bar loss"
              style={{ height: `${((d.loss || 0) / max) * 100}%` }}
              title={`Loss ${d.loss}`}
            />
            <small>{d.month}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueChart;
