import React from 'react';

const WishlistItem = ({ item, onRemove }) => {
	  return (
		      <div className="wishlist-item">
		        <img src={item.image} alt={item.name} />
		        <div className="wishlist-item-details">
		          <h4>{item.name}</h4>
		          <p>{item.price}</p>
		          <button onClick={() => onRemove(item.id)}>Remove from Wishlist</button>
		        </div>
		      </div>
		    );
};

export default WishlistItem;
