import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RevenueChart = ({ data = [] }) => {
  // labels (months) and total (profit + loss) values
  const labels = data.map((d) => d.month);
  const totals = data.map((d) => (d.profit || 0) + (d.loss || 0));

  const chartData = {
    labels,
    datasets: [
      {
        label: "Total Revenue",
        data: totals,
        backgroundColor: "rgba(61, 208, 194, 0.9)",
        borderRadius: 6,
        maxBarThickness: 48,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `$${ctx.parsed.y}`,
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(255,255,255,0.04)" },
        ticks: { callback: (v) => `$${v}` },
      },
    },
  };

  return (
    <div className="revenue-chart card">
      <h3>Total Revenue</h3>
      <div className="chart-canvas" style={{ height: 240 }}>
        <Bar options={options} data={chartData} />
      </div>
    </div>
  );
};

export default RevenueChart;
