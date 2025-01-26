import React, { useState } from 'react';

const BillingAddressForm = () => {
	  const [address, setAddress] = useState("");

	  const handleChange = (e) => {
		      setAddress(e.target.value);
		    };

	  const handleSubmit = (e) => {
		      e.preventDefault();
	  };
};

  return (
	      <form onSubmit={handleSubmit}>
	        <label>Billing Address</label>
	        <textarea
	          value={address}
	          onChange={handleChange}
	          placeholder="Enter your billing address"
	        />
	        <button type="submit">Save Address</button>
	      </form>
	    );
};

export default BillingAddressForm;
