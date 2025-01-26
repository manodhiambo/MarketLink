import React from 'react';
import RatingStars from './RatingStars';

const ProductDetail = ({ product }) => {
	  return (
		      <div className="product-detail">
		        <img src={product.image} alt={product.name} />
		        <div className="product-detail-info">
		          <h2>{product.name}</h2>
		          <p>{product.description}</p>
		          <p>{product.price}</p>
		          <RatingStars rating={product.rating} />
		          <button>Add to Cart</button>
		        </div>
		      </div>
		    );
};

export default ProductDetail;
