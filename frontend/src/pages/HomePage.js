import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';

const HomePage = ({ products }) => {
	  return (
		      <div className="home-page">
		        <h1>Welcome to MarketLink</h1>
		        <FeaturedProducts products={products} />
		      </div>
		    );
};

export default HomePage;
