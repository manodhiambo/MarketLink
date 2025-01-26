import React from 'react';

const AdminProductCard = ({ product }) => {
	  return (
		      <div className="admin-product-card">
		        <img src={product.image} alt={product.name} />
		        <h3>{product.name}</h3>
		        <p>{product.price}</p>
		        <button>Edit</button>
		        <button>Delete</button>
		      </div>
		    );
};

export default AdminProductCard;
