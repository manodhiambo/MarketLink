import React, { useState } from 'react';

const PasswordResetForm = ({ onReset }) => {
	  const [email, setEmail] = useState('');

	  const handleEmailChange = (e) => setEmail(e.target.value);

	  const handleSubmit = (e) => {
		      e.preventDefault();
		      onReset(email);
		    };

	  return (
		      <form onSubmit={handleSubmit}>
		        <label>Email</label>
		        <input
		          type="email"
		          value={email}
		          onChange={handleEmailChange}
		          placeholder="Enter your email"
		        />
		        <button type="submit">Send Reset Link</button>
		      </form>
		    );
};

export default PasswordResetForm;
