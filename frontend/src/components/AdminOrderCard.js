import React from 'react';

const AdminOrderCard = ({ order }) => {
	  return (
		      <div className="admin-order-card">
		        <h3>Order #{order.id}</h3>
		        <p>Total: {order.total}</p>
		        <p>Status: {order.status}</p>
		        <button>View Order</button>
		      </div>
		    );
};

export default AdminOrderCard;
