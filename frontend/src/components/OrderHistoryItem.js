import React from 'react';

const OrderHistoryItem = ({ order }) => {
	  return (
		      <div className="order-history-item">
		        <h3>Order #{order.id}</h3>
		        <p>Status: {order.status}</p>
		        <p>Total: {order.total}</p>
		      </div>
		    );
};

export default OrderHistoryItem;
