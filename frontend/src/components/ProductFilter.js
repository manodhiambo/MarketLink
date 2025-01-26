import React, { useState } from 'react';

const ProductFilter = ({ onFilterChange }) => {
	  const [category, setCategory] = useState('');
	  const [priceRange, setPriceRange] = useState('');

	  const handleFilterChange = () => {
		      onFilterChange({ category, priceRange });
		    };

	  return (
		      <div className="product-filter">
		        <select onChange={(e) => setCategory(e.target.value)} value={category}>
		          <option value="">Select Category</option>
		          <option value="electronics">Electronics</option>
		          <option value="clothes">Clothes</option>
		          <option value="services">Services</option>
		          <option value="livestock">Livestock</option>
		          <option value="farm-produce">Farm Produce</option>
		          <option value="house">House</option>
		        </select>
		        <input
		          type="range"
		          min="0"
		          max="10000"
		          value={priceRange}
		          onChange={(e) => setPriceRange(e.target.value)}
		          placeholder="Select Price Range"
		        />
		        <button onClick={handleFilterChange}>Apply Filters</button>
		      </div>
		    );
};

export default ProductFilter;
