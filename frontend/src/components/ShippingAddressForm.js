import React, { useState } from 'react';

const ShippingAddressForm = ({ onSave }) => {
	  const [address, setAddress] = useState('');
	  const [city, setCity] = useState('');
	  const [postalCode, setPostalCode] = useState('');
	  const [country, setCountry] = useState('');

	  const handleChange = (e) => {
		      const { name, value } = e.target;
		      if (name === 'address') setAddress(value);
		      if (name === 'city') setCity(value);
		      if (name === 'postalCode') setPostalCode(value);
		      if (name === 'country') setCountry(value);
		    };

	  const handleSubmit = (e) => {
		      e.preventDefault();
		      onSave({ address, city, postalCode, country });
		    };

	  return (
		      <form onSubmit={handleSubmit}>
		        <label>Address</label>
		        <input
		          type="text"
		          name="address"
		          value={address}
		          onChange={handleChange}
		          placeholder="Enter your address"
		        />
		        <label>City</label>
		        <input
		          type="text"
		          name="city"
		          value={city}
		          onChange={handleChange}
		          placeholder="Enter your city"
		        />
		        <label>Postal Code</label>
		        <input
		          type="text"
		          name="postalCode"
		          value={postalCode}
		          onChange={handleChange}
		          placeholder="Enter postal code"
		        />
		        <label>Country</label>
		        <input
		          type="text"
		          name="country"
		          value={country}
		          onChange={handleChange}
		          placeholder="Enter your country"
		        />
		        <button type="submit">Save Address</button>
		      </form>
		    );
};

export default ShippingAddressForm;
