import React, { useState } from 'react';

const AddToCartButton = ({ productId, onAddToCart }) => {
	  const [isAdded, setIsAdded] = useState(false);

	  const handleClick = () => {
		      onAddToCart(productId);
		      setIsAdded(true);
		    };

	  return (
		      <button onClick={handleClick} className="add-to-cart-btn">
		        {isAdded ? 'Added to Cart' : 'Add to Cart'}
		      </button>
		    );
};

export default AddToCartButton;
