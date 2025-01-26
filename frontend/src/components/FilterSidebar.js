import React, { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
	  const [selectedCategory, setSelectedCategory] = useState('');
	  const [minPrice, setMinPrice] = useState(0);
	  const [maxPrice, setMaxPrice] = useState(1000);

	  const handleCategoryChange = (event) => {
		      setSelectedCategory(event.target.value);
		      onFilterChange({ category: event.target.value, minPrice, maxPrice });
		    };

	  const handlePriceChange = () => {
		      onFilterChange({ category: selectedCategory, minPrice, maxPrice });
		    };

	  return (
		      <div className="filter-sidebar">
		        <h3>Filters</h3>
		        <label>
		          Category:
		          <select value={selectedCategory} onChange={handleCategoryChange}>
		            <option value="">All</option>
		            <option value="electronics">Electronics</option>
		            <option value="clothes">Clothes</option>
		            <option value="services">Services</option>
		            <option value="livestock">Livestock</option>
		            <option value="farm-produce">Farm Produce</option>
		            <option value="houses">Houses</option>
		          </select>
		        </label>
		        <label>
		          Price Range:
		          <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
		          - 
		          <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
		        </label>
		        <button onClick={handlePriceChange}>Apply Filters</button>
		      </div>
		    );
};

export default FilterSidebar;
