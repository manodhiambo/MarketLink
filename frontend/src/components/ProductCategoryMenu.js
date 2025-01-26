import React from 'react';

const ProductCategoryMenu = ({ categories, onCategorySelect }) => {
	  return (
		      <div className="product-category-menu">
		        <select onChange={(e) => onCategorySelect(e.target.value)}>
		          {categories.map((category) => (
				            <option key={category} value={category}>
				              {category}
				            </option>
				          ))}
		        </select>
		      </div>
		    );
};

export default ProductCategoryMenu;
