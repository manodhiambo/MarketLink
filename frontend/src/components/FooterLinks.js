import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = () => {
	  return (
		      <div className="footer-links">
		        <Link to="/terms">Terms and Conditions</Link>
		        <Link to="/privacy">Privacy Policy</Link>
		        <Link to="/contact">Contact Us</Link>
		      </div>
		    );
};

export default FooterLinks;
