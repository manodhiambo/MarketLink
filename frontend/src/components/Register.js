import React, { useState } from 'react';
import { registerUser } from '../services/api';

const Register = () => {
	  const [formData, setFormData] = useState({
		      name: '',
		      email: '',
		      password: '',
		    });

	  const [message, setMessage] = useState('');

	  const handleChange = (e) => {
		      setFormData({ ...formData, [e.target.name]: e.target.value });
		    };

	  const handleSubmit = async (e) => {
		      e.preventDefault();
		      try {
			            const result = await registerUser(formData);
			            setMessage('User registered successfully!');
			            console.log('Backend response:', result);
			          } catch (error) {
					        setMessage(error.msg || 'Error during registration.');
					      }
		    };

	  return (
		      <div>
		        <h1>Register</h1>
		        <form onSubmit={handleSubmit}>
		          <input
		            type="text"
		            name="name"
		            placeholder="Name"
		            value={formData.name}
		            onChange={handleChange}
		            required
		          />
		          <input
		            type="email"
		            name="email"
		            placeholder="Email"
		            value={formData.email}
		            onChange={handleChange}
		            required
		          />
		          <input
		            type="password"
		            name="password"
		            placeholder="Password"
		            value={formData.password}
		            onChange={handleChange}
		            required
		          />
		          <button type="submit">Register</button>
		        </form>
		        <p>{message}</p>
		      </div>
		    );
};

export default Register;
