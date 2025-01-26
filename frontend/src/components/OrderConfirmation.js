import React from 'react';

const OrderConfirmation = ({ orderId, total }) => {
	  return (
		      <div className="order-confirmation">
		        <h2>Order Confirmation</h2>
		        <p>Your order #{orderId} has been placed successfully.</p>
		        <p>Total: {total}</p>
		        <p>Thank you for shopping with MarketLink!</p>
		      </div>
		    );
};

export default OrderConfirmation;
