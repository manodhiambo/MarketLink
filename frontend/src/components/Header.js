import React from 'react';
import Navbar from './Navbar';

const Header = () => {
	  return (
		      <header className="header">
		        <div className="logo">
		          <img src="/images/logoh.webp" alt="MarketLink Logo" />
		        </div>
		        <Navbar />
		      </header>
		    );
};

export default Header;
