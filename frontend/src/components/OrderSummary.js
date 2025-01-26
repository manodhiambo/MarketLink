import React from 'react';
import CartItem from './CartItem';

const OrderSummary = ({ cartItems, total }) => {
	  return (
		      <div className="order-summary">
		        <h3>Order Summary</h3>
		        {cartItems.map((item) => (
				        <CartItem key={item.id} item={item} />
				      ))}
		        <p>Total: {total}</p>
		      </div>
		    );
};

export default OrderSummary;
