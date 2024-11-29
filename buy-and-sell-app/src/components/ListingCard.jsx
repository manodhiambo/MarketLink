import React from 'react';
import { Link } from 'react-router-dom';

function ListingCard({ listing }) {
	  return (
		      <div className="listing-card">
		        <img src={listing.image} alt={listing.title} />
		        <h3>{listing.title}</h3>
		        <p>{listing.price} USD</p>
		        <Link to={`/product/${listing.id}`}>View Details</Link>
		      </div>
		    );
}

export default ListingCard;
