import React from "react";

const Sidebar = () => {
  return (
    <aside className="card sidebar">
      <div className="brand">Marketplace</div>
      <nav className="nav">
        <p>Dashboard</p>
        <p>Statistics</p>
        <p>Payments</p>
        <p>Transactions</p>
        <p>Products</p>
        <p>Customers</p>
        <p>Messages</p>
      </nav>

      <div style={{ marginTop: "auto" }} className="muted">
        Settings · Logout
      </div>
    </aside>
  );
};

export default Sidebar;
