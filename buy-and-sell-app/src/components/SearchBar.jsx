import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
	  const [query, setQuery] = useState('');

	  const handleInputChange = (e) => {
		      setQuery(e.target.value);

		   };

	  const handleSearch = (e) => {
		      e.preventDefault();
		      onSearch(query);
	  };

	  return (
		      <div className="search-bar">
		        <form onSubmit={handleSearch}>
		          <input
		            type="text"
		            placeholder="Search for items..."
		            value={query}
		            onChange={handleInputChange}
		            className="search-input"
		          />
		          <button type="submit" className="search-button">Search</button>
		        </form>
		      </div>
		    );
};

export default SearchBar;
