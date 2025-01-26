import React from 'react';
import CartSummary from '../components/CartSummary';

const CartPage = () => {
	  return (
		      <div className="cart-page">
		        <h1>Your Cart</h1>
		        <CartSummary />
		      </div>
		    );
};

export default CartPage;
