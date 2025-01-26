import React from 'react';

const OrderItem = ({ item }) => {
	  return (
		      <div className="order-item">
		        <img src={item.image} alt={item.name} />
		        <div className="order-item-details">
		          <h4>{item.name}</h4>
		          <p>Quantity: {item.quantity}</p>
		          <p>Price: {item.price}</p>
		        </div>
		      </div>
		    );
};

export default OrderItem;
