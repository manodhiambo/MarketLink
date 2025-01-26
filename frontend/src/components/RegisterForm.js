import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RegisterForm = ({ onRegister }) => {
	  const [formData, setFormData] = useState({
		      name: '',
		      email: '',
		      phone: '',
		      password: ''
		    });

	  const [error, setError] = useState('');

	const handleInputChange = (e) => {
		    setFormData({
			          ...formData,
			          [e.target.name]: e.target.value
			        });
		  };

	const validateForm = () => {
		    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
			          setError('All fields are required');
			          return false;
			        }
		    if (!/\S+@\S+\.\S+/.test(formData.email)) {
			          setError('Please enter a valid email');
			          return false;
			        }
		    setError('');
		    return true;
		  };

	const handleSubmit = (e) => {
		    e.preventDefault();
		    if (validateForm()) {
			    onRegister(formData);
			        }
		  };

	  return (
		      <div className="register-form">
		        <form onSubmit={handleSubmit}>
		          <label>Name</label>
		          <input
		            type="text"
		            name="name"
		            value={formData.name}
		            onChange={handleInputChange}
		          />
		          <label>Email</label>
		          <input
		            type="email"
		            name="email"
		            value={formData.email}
		            onChange={handleInputChange}
		          />
		          <label>Phone</label>
		          <input
		            type="text"
		            name="phone"
		            value={formData.phone}
		            onChange={handleInputChange}
		          />
		          <label>Password</label>
		          <input
		            type="password"
		            name="password"
		            value={formData.password}
		            onChange={handleInputChange}
		          />
		          {error && <p className="error">{error}</p>}
		          <button type="submit">Register</button>
		        </form>
		      </div>
		    );
};

RegisterForm.propTypes = {
	  onRegister: PropTypes.func.isRequired
};

export default RegisterForm;
