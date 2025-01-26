import React from 'react';
import AdminProductCard from './AdminProductCard';

const AdminProductList = ({ products }) => {
	  return (
		      <div className="admin-product-list">
		        <h2>Product List</h2>
		        <div className="product-list">
		          {products.map((product) => (
				            <AdminProductCard key={product.id} product={product} />
				          ))}
		        </div>
		      </div>
		    );
};

export default AdminProductList;
