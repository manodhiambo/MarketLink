import React from 'react';

const CartSummary = ({ cartItems, totalPrice }) => {
	  return (
		      <div className="cart-summary">
		        <h3>Cart Summary</h3>
		        <p>Total: {totalPrice}</p>
		        <button>Proceed to Checkout</button>
		      </div>
		    );
};

export default CartSummary;
