import { useEffect, useState } from "react";
import StatCard from "../Components/StatCard";
import RevenueChart from "../Components/RevenueChart";
import OrdersTable from "../Components/OrdersTable";
import Header from "../Components/Header";
import { mockStats, mockRevenue, mockOrders } from "../data/mockData";

export default function Dashboard() {
  const [stats, setStats] = useState({ sales: 0, revenue: 0, escrow: 0 });
  const [revenue, setRevenue] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const [sRes, rRes, oRes] = await Promise.allSettled([
          fetch("/api/dashboard/stats").then((r) => (r.ok ? r.json() : null)),
          fetch("/api/dashboard/revenue").then((r) => (r.ok ? r.json() : null)),
          fetch("/api/dashboard/orders").then((r) => (r.ok ? r.json() : null)),
        ]);

        if (sRes.status === "fulfilled" && sRes.value) setStats(sRes.value);
        if (rRes.status === "fulfilled" && rRes.value) setRevenue(rRes.value);
        if (oRes.status === "fulfilled" && oRes.value) setOrders(oRes.value);
      } catch (e) {
        // ignore and fall back to mock data below
      }

      // sensible mock fallbacks so UI still renders without backend
      setRevenue((prev) => (prev.length ? prev : mockRevenue));

      setOrders((prev) => (prev.length ? prev : mockOrders));

      // sensible stats fallback
      setStats((prev) =>
        prev && (prev.sales || prev.revenue || prev.escrow) ? prev : mockStats
      );
    })();
  }, []);

  return (
    <main className="dashboard">
      <Header title="Dashboard" />

      <section className="stats-grid">
        <StatCard
          title="Today's Sales"
          value={`$${stats.sales}`}
          accent="var(--accent-2)"
        />
        <StatCard
          title="Revenue"
          value={`$${stats.revenue}`}
          accent="var(--accent)"
        />
        <StatCard
          title="In Escrow"
          value={`$${stats.escrow}`}
          accent="linear-gradient(90deg,var(--accent),var(--accent-2))"
        />
      </section>

      <section className="main-grid">
        <div className="chart card">
          <RevenueChart data={revenue} />
        </div>
        <div className="table card">
          <OrdersTable orders={orders} />
        </div>
      </section>
    </main>
  );
}
