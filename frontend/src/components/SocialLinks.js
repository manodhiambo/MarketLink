import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
	  return (
		      <div className="social-links">
		        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
		        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
		        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
		      </div>
		    );
};

export default SocialLinks;
