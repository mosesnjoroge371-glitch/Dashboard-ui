import React from "react";

const OrdersTable = ({ orders = [] }) => {
  const statusClass = (s = "") =>
    s.toLowerCase() === "delivered"
      ? "delivered"
      : s.toLowerCase() === "pending"
      ? "pending"
      : "canceled";

  return (
    <div className="orders-table">
      <h3>Latest Orders</h3>
      <table className="table" width="100%">
        <thead>
          <tr>
            <th>Product</th>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, i) => (
            <tr key={i}>
              <td>{o.product}</td>
              <td>#{o.id || 11232}</td>
              <td>{o.date || "Jun 29, 2022"}</td>
              <td>{o.customer || "Afaq Karim"}</td>
              <td>
                <span className={`status ${statusClass(o.status)}`}>
                  {o.status}
                </span>
              </td>
              <td>${o.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
