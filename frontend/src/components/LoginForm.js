import React, { useState } from 'react';
import { loginUser } from '../services/api';

const Login = () => {
	  const [credentials, setCredentials] = useState({
		      email: '',
		      password: '',
		    });

	  const [message, setMessage] = useState('');

	  const handleChange = (e) => {
		      setCredentials({ ...credentials, [e.target.name]: e.target.value });
		    };

	  const handleSubmit = async (e) => {
		      e.preventDefault();
		      try {
			            const result = await loginUser(credentials);
			            setMessage('Login successful!');
			            console.log('Backend response:', result);
			          } catch (error) {
					        setMessage(error.msg || 'Error during login.');
					      }
		    };

	  return (
		      <div>
		        <h1>Login</h1>
		        <form onSubmit={handleSubmit}>
		          <input
		            type="email"
		            name="email"
		            placeholder="Email"
		            value={credentials.email}
		            onChange={handleChange}
		            required
		          />
		          <input
		            type="password"
		            name="password"
		            placeholder="Password"
		            value={credentials.password}
		            onChange={handleChange}
		            required
		          />
		          <button type="submit">Login</button>
		        </form>
		        <p>{message}</p>
		      </div>
		    );
};

export default Login;
