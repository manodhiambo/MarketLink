import React, { useState } from 'react';

const WishlistButton = ({ productId }) => {
	  const [isInWishlist, setIsInWishlist] = useState(false);

	  const handleWishlistToggle = () => {
		      setIsInWishlist(!isInWishlist);
	  };
	return (
		    <button onClick={handleWishlistToggle}>
		      {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
		    </button>
		  );
};

export default WishlistButton;
