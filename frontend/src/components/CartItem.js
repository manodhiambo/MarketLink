import React from 'react';

const CartItem = ({ item, onRemove }) => {
	  return (
		      <div className="cart-item">
		        <img src={item.image} alt={item.name} />
		        <div className="cart-item-info">
		          <h3>{item.name}</h3>
		          <p>{item.price}</p>
		          <button onClick={() => onRemove(item.id)}>Remove</button>
		        </div>
		      </div>
		    );
};

export default CartItem;
