import React from 'react';

const SocialLoginButton = ({ provider }) => {
	  const handleLogin = () => {
	  };
	return (
		    <button onClick={handleLogin} className="social-login-btn">
		      Login with {provider}
		    </button>
		  );
};

export default SocialLoginButton;
