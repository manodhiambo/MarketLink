import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/api';

function Login() {
	  const [email, setEmail] = useState('');
	  const [password, setPassword] = useState('');
	  const [error, setError] = useState('');

	  const navigate = useNavigate();

	// Handle form submission
	const handleSubmit = async (e) => {
		    e.preventDefault();
		
		// Simple validation check
		if (!email || !password) {
			      setError('Please enter both email and password');
			      return;
		}

		// Check for hardcoded credentials
		if (email === 'user@example.com' && password === 'password') {
			      navigate('/');
			      return;
		}

		// Proceed with login request if no early returns
		try {
			      const response = await axios.post('/api/login', { email, password });
			      localStorage.setItem('token', response.data.token);
			      alert(response.data.message);
			      navigate('/home');
			    } catch (err) {
				          setError(err.response?.data?.error || 'An error occurred. Please try again.');
				        }
		  };

	  return (
		      <div className="login-container">
		        <h2>Login</h2> {/* Display error message if any */}
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
