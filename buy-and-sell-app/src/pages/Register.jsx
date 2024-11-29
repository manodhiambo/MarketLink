import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
	  const [name, setName] = useState('');
	  const [email, setEmail] = useState('');
	  const [password, setPassword] = useState('');
	  const [confirmPassword, setConfirmPassword] = useState('');
	  const [error, setError] = useState('');
	  const [successMessage, setSuccessMessage] = useState('');
	  
	  const navigate = useNavigate();

	const handleSubmit = async (e) => {
		    e.preventDefault();

		if (!name || !email || !password || !confirmPassword) {
			      setError('Please fill in all fields');
			      return;
			    }

		    if (password !== confirmPassword) {
			          setError('Passwords do not match');
			          return;
			        }

		try {
			const response = await fetch('/api/register', {
				        method: 'POST',
				        headers: { 'Content-Type': 'application/json' },
				        body: JSON.stringify({ name, email, password }),
				      });

			      if (!response.ok) {
				              throw new Error('Registration failed. Please try again.');
				            }

			      const data = await response.json();
			      setSuccessMessage('Registration successful! Please login.');
			      setError('');
			      setTimeout(() => {
				              navigate('/login');
			      }, 2000);
			    } catch (err) {
				          setError(err.message);
				        }
		  };

	  return (
		      <div className="register-container">
		        <h2>Register</h2>

		        {/* Display success or error message */}
		        {error && <div className="error-message">{error}</div>}
		        {successMessage && <div className="success-message">{successMessage}</div>}

		        <form onSubmit={handleSubmit}>
		          <div className="form-group">
		            <label htmlFor="name">Full Name</label>
		            <input
		              type="text"
		              id="name"
		              value={name}
		              onChange={(e) => setName(e.target.value)}
		              placeholder="Enter your full name"
		              required
		            />
		          </div>

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

		          <div className="form-group">
		            <label htmlFor="confirmPassword">Confirm Password</label>
		            <input
		              type="password"
		              id="confirmPassword"
		              value={confirmPassword}
		              onChange={(e) => setConfirmPassword(e.target.value)}
		              placeholder="Confirm your password"
		              required
		            />
		          </div>

		          <button type="submit" className="submit-btn">Register</button>
		        </form>

		        <div className="login-link">
		          <p>Already have an account? <a href="/login">Login</a></p>
		        </div>
		      </div>
		    );
}

export default Register;
