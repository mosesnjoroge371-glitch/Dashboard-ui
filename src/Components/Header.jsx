import React from "react";

const Header = ({ title = "Dashboard" }) => {
  return (
    <header className="header card">
      <div className="header-left">
        <h2>{title}</h2>
        <p className="muted">Overview of your store</p>
      </div>
      <div className="header-right">
        <input className="search" placeholder="Search orders, customers..." />
        <div className="avatar">A</div>
      </div>
    </header>
  );
};

export default Header;
