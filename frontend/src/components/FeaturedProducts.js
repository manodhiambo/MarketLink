import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = ({ products }) => {
	if (!Array.isArray(products) || products.length === 0) {
		    return (
			          <div className="featured-products">
			            <h3>Featured Products</h3>
			            <p>No featured products available at the moment.</p>
			          </div>
			        );
		  }

	  return (
		      <div className="featured-products">
		        <h3>Featured Products</h3>
		        <div className="product-list">
		          {products.map((product) => (
				            <ProductCard key={product.id} product={product} />
				          ))}
		        </div>
		      </div>
		    );
};

export default FeaturedProducts;
