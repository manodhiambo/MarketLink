import React from 'react';

const ProductSort = ({ onSortChange }) => {
	  const handleSortChange = (event) => {
		      onSortChange(event.target.value);
		    };

	  return (
		      <div className="product-sort">
		        <label>
		          Sort By:
		          <select onChange={handleSortChange}>
		            <option value="price-asc">Price (Low to High)</option>
		            <option value="price-desc">Price (High to Low)</option>
		            <option value="name">Name</option>
		          </select>
		        </label>
		      </div>
		    );
};

export default ProductSort;
