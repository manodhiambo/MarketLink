import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/api';


function Login() {
	  const [email, setEmail] = useState('');
	  const [password, setPassword] = useState('');
	  const [error, setError] = useState('');

	  const navigate = useNavigate();
	// Handle form submission
	const handleSubmit = (e) => {
		    e.preventDefault();

		// Simple validation check
		if (!email || !password) {
			      setError('Please enter both email and password');
			      return;
			    }

		 if (email === 'user@example.com' && password === 'password') {
			  navigate('/');

		 } else {
			       setError('Invalid email or password');
			     }
		  };

	  return (
		      <div className="login-container">
		        <h2>Login</h2>

		        {/* Display error message if any */}
		        {error && <div className="error-message">{error}</div>}

		        <form onSubmit={handleSubmit}>
		          <div className="form-group">
		            <label htmlFor="email">Email</label>
		            <input
		              type="email"
		              id="email"
		              value={email}
		              onChange={(e) => setEmail(e.target.value)}
		              placeholder="Enter your email"
		              required
		            />
		          </div>

		          <div className="form-group">
		            <label htmlFor="password">Password</label>
		            <input
		              type="password"
		              id="password"
		              value={password}
		              onChange={(e) => setPassword(e.target.value)}
		              placeholder="Enter your password"
		              required
		            />
		          </div>

		          <button type="submit" className="submit-btn">Login</button>
		        </form>

		        <div className="register-link">
		          <p>Don't have an account? <a href="/register">Register</a></p>
		        </div>
		      </div>
		    );
}
export default Login;
