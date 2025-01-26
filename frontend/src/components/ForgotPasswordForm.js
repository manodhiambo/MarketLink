import React, { useState } from 'react';

const ForgotPasswordForm = () => {
	  const [email, setEmail] = useState("");

	  const handleSubmit = (e) => {
		      e.preventDefault();
	  };
	return (
		    <form onSubmit={handleSubmit}>
		      <label>Email</label>
		      <input
		        type="email"
		        value={email}
		        onChange={(e) => setEmail(e.target.value)}
		        placeholder="Enter your email"
		      />
		      <button type="submit">Reset Password</button>
		    </form>
		  );
};

export default ForgotPasswordForm;
