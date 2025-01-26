import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
	  const [query, setQuery] = useState('');

	  const handleSearchChange = (e) => {
		      setQuery(e.target.value);
		    };

	  const handleSubmit = (e) => {
		      e.preventDefault();
		      onSearch(query);
		    };

	  return (
		      <form onSubmit={handleSubmit}>
		        <input
		          type="text"
		          value={query}
		          onChange={handleSearchChange}
		          placeholder="Search for products..."
		        />
		        <button type="submit">Search</button>
		      </form>
		    );
};

export default SearchBar;
