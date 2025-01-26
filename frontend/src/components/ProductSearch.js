import React, { useState } from 'react';

const ProductSearch = ({ onSearch }) => {
	  const [query, setQuery] = useState('');

	  const handleSearch = () => {
		      onSearch(query);
		    };

	  return (
		      <div className="product-search">
		        <input 
		          type="text" 
		          value={query} 
		          onChange={(e) => setQuery(e.target.value)} 
		          placeholder="Search products..." 
		        />
		        <button onClick={handleSearch}>Search</button>
		      </div>
		    );
};

export default ProductSearch;
