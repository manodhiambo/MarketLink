import React from 'react';
import ProductCard from './ProductCard';

const RecentlyViewed = ({ products }) => {
	  return (
		      <div className="recently-viewed">
		        <h3>Recently Viewed</h3>
		        <div className="product-list">
		          {products.map((product) => (
				            <ProductCard key={product.id} product={product} />
				          ))}
		        </div>
		      </div>
		    );
};

export default RecentlyViewed;
