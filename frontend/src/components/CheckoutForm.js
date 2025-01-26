import React, { useState } from 'react';

const CheckoutForm = ({ onSubmit }) => {
	  const [shippingAddress, setShippingAddress] = useState('');

	  const handleInputChange = (e) => {
		      setShippingAddress(e.target.value);
		    };

	  const handleSubmit = (e) => {
		      e.preventDefault();
		      onSubmit(shippingAddress);
		    };

	  return (
		      <form onSubmit={handleSubmit}>
		        <label>Shipping Address</label>
		        <textarea
		          value={shippingAddress}
		          onChange={handleInputChange}
		          placeholder="Enter your shipping address"
		        />
		        <button type="submit">Proceed to Payment</button>
		      </form>
		    );
};

export default CheckoutForm;
