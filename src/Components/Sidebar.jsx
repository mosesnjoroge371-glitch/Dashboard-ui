import React from "react";

const Sidebar = () => {
  return (
    <aside className="card sidebar">
      <div className="brand">Marketplace</div>
      <nav className="nav">
        <button type="button" className="nav-item active">Dashboard</button>
        <button type="button" className="nav-item">Statistics</button>
        <button type="button" className="nav-item">Payments</button>
        <button type="button" className="nav-item">Transactions</button>
        <button type="button" className="nav-item">Products</button>
        <button type="button" className="nav-item">Customers</button>
        <button type="button" className="nav-item">Messages</button>
      </nav>

      <div style={{ marginTop: "auto" }} className="muted">
        Settings · Logout
      </div>
    </aside>
  );
};

export default Sidebar;
