import React, { useState, useEffect } from 'react';
import ListingCard from '../components/ListingCard';
import fetchListings from '../services/api';

function Home() {
	  const [listings, setListings] = useState([]);

	  useEffect(() => {
		  fetch('/api/listings')
		        .then((res) => res.json())
		        .then((data) => setListings(data));
		    }, []);

	  return (
		      <div className="home">
		        <h2>Items for Sale</h2>
		        <div className="listings-grid">
		          {listings.map((listing) => (
				            <ListingCard key={listing.id} listing={listing} />
				          ))}
		        </div>
		      </div>
		    );
}

export default Home;
